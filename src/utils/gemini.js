import knowledgeBaseEmbeddings from '../data/knowledge_base_embeddings.json';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const EMBEDDING_MODEL = 'gemini-embedding-001';
const GEMINI_CHAT_MODELS = ['gemini-2.5-flash', 'gemini-2.0-flash'];
const GROQ_CHAT_MODELS = ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant'];
const GROQ_MAX_TOKENS = 800;
const GROQ_CONTEXT_CHAR_LIMIT = 12000;

// --- Helper Functions ---

const cosineSimilarity = (vecA, vecB) => {
    const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
    const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
    return dotProduct / (magnitudeA * magnitudeB);
};

const fetchWithRetry = async (
    url,
    options,
    {
        retries = 2,
        baseBackoff = 1500,
        failFastStatuses = [],
        timeoutMs = 20000
    } = {}
) => {
    for (let i = 0; i < retries; i++) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
            const response = await fetch(url, { ...options, signal: controller.signal });
            clearTimeout(timeoutId);

            if (failFastStatuses.includes(response.status)) {
                throw new Error(`Fail-fast status ${response.status}`);
            }

            if (response.status === 429 || response.status === 503 || response.status >= 500) {
                // Retry on rate limits and temporary server-side overload/errors
                let data = null;
                try {
                    data = await response.clone().json();
                } catch {
                    data = null;
                }
                let waitTime = baseBackoff * Math.pow(2, i); // Default exponential backoff

                // Try to parse the retry delay from the API response
                if (data?.error?.details) {
                    const retryInfo = data.error.details.find(d => d['@type']?.includes('RetryInfo'));
                    if (retryInfo?.retryDelay) {
                        // Parse "45s" or "45.5s" format
                        const seconds = parseFloat(retryInfo.retryDelay.replace('s', ''));
                        if (!isNaN(seconds)) {
                            waitTime = Math.ceil(seconds * 1000) + 1000; // Add 1s buffer
                        }
                    }
                }

                console.warn(`Transient API status (${response.status}). Waiting ${Math.round(waitTime / 1000)}s before retry ${i + 1}/${retries}...`);
                await new Promise(resolve => setTimeout(resolve, waitTime));
                continue;
            }

            return response;
        } catch (error) {
            console.error(`Attempt ${i + 1} failed:`, error);
            if (i === retries - 1) throw error;
            // Wait before retrying on network errors too
            await new Promise(resolve => setTimeout(resolve, baseBackoff));
        }
    }
    throw new Error('Max retries exceeded');
};


const getEmbedding = async (text) => {
    if (!GEMINI_API_KEY) {
        throw new Error('Missing VITE_GEMINI_API_KEY for embedding retrieval');
    }

    // API endpoint for embedding
    const response = await fetchWithRetry(
        `https://generativelanguage.googleapis.com/v1beta/models/${EMBEDDING_MODEL}:embedContent?key=${GEMINI_API_KEY}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: `models/${EMBEDDING_MODEL}`,
                content: { parts: [{ text }] }
            })
        },
        {
            retries: 2,
            baseBackoff: 1000,
            timeoutMs: 15000
        }
    );

    const data = await response.json();
    if (data.error) throw new Error(data.error.message);
    return data.embedding.values;
};

const retrieveContext = async (query) => {
    try {
        const queryEmbedding = await getEmbedding(query);

        // Calculate similarity for all chunks
        const scoredChunks = knowledgeBaseEmbeddings.map(chunk => ({
            text: chunk.text,
            score: cosineSimilarity(queryEmbedding, chunk.embedding)
        }));

        // Sort by score descending and take top 10 for broad CV/project questions
        scoredChunks.sort((a, b) => b.score - a.score);
        return scoredChunks.slice(0, 10).map(c => c.text).join('\n\n');
    } catch (error) {
        console.error("Error retrieving context:", error);
        return ""; // Fallback to no context if embedding fails
    }
};

const generateWithGemini = async (contents) => {
    if (!GEMINI_API_KEY) {
        throw new Error('Missing VITE_GEMINI_API_KEY for Gemini chat');
    }

    for (const model of GEMINI_CHAT_MODELS) {
        try {
            const response = await fetchWithRetry(
                `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ contents })
                },
                {
                    retries: 1,
                    baseBackoff: 500,
                    timeoutMs: 12000,
                    failFastStatuses: [429]
                }
            );

            const data = await response.json();
            if (data.error) {
                throw new Error(data.error.message || JSON.stringify(data.error));
            }

            const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text) {
                return {
                    text,
                    responder: `Gemini (${model})`
                };
            }
        } catch (error) {
            console.warn(`Gemini model ${model} failed:`, error);
        }
    }

    throw new Error('All Gemini chat models failed');
};

const generateWithGroq = async (context, userMessage) => {
    if (!GROQ_API_KEY) {
        throw new Error('Missing VITE_GROQ_API_KEY for Groq fallback');
    }

    const safeContext = (context || '').slice(0, GROQ_CONTEXT_CHAR_LIMIT);
    const systemPrompt = [
        'You are an intelligent portfolio assistant for Yassir Chergui, a Data Science & AI Engineer.',
        'Answer questions using the provided context only.',
        'Be precise and concise. Keep answers under 4 short sentences unless the user asks for details.',
        'If information is not present in context, clearly say so.'
    ].join(' ');

    for (const model of GROQ_CHAT_MODELS) {
        try {
            const response = await fetchWithRetry(
                'https://api.groq.com/openai/v1/chat/completions',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${GROQ_API_KEY}`
                    },
                    body: JSON.stringify({
                        model,
                        max_tokens: GROQ_MAX_TOKENS,
                        temperature: 0.2,
                        messages: [
                            {
                                role: 'system',
                                content: systemPrompt
                            },
                            {
                                role: 'user',
                                content: `Context:\n${safeContext || 'No specific context found.'}\n\nQuestion: ${userMessage}`
                            }
                        ]
                    })
                },
                {
                    retries: 2,
                    baseBackoff: 800,
                    timeoutMs: 15000
                }
            );

            const data = await response.json();
            if (data.error) {
                throw new Error(data.error.message || JSON.stringify(data.error));
            }

            const text = data?.choices?.[0]?.message?.content?.trim();
            if (text) {
                return {
                    text,
                    responder: `Groq (${model})`
                };
            }
        } catch (error) {
            console.warn(`Groq model ${model} failed:`, error);
        }
    }

    throw new Error('All Groq fallback models failed');
};

// --- Main Function ---

export const sendToGemini = async (history, userMessage) => {
    let context = '';

    try {
        // 1. Retrieve relevant context based on user query
        context = await retrieveContext(userMessage);

        const SYSTEM_PROMPT = `
You are an intelligent portfolio assistant for Yassir Chergui, a Data Science & AI Engineer.
Your goal is to answer questions about Yassir's skills, projects, and experience based ONLY on the provided context.

CONTEXT:
${context || "No specific context found. Answer generally if possible, or state you don't know."}

INSTRUCTIONS:
- Be professional, enthusiastic, and concise.
- If the answer is in the context, provide it clearly.
- If the User asks about something NOT in the context, politely say you only know about Yassir's professional portfolio.
- Highlight key technologies (e.g., "Mistral 7B", "YOLOv8") when relevant.
- Keep responses short (under 3-4 sentences) unless asked for a detailed explanation.
- Act as if you are Yassir's personal AI agent.
`;

        // 2. Construct conversation history
        const contents = [
            {
                role: "user",
                parts: [{ text: SYSTEM_PROMPT }]
            },
            {
                role: "model",
                parts: [{ text: "Understood. I am ready to answer questions about Yassir's portfolio." }]
            }
        ];

        history.forEach(msg => {
            contents.push({
                role: msg.sender === 'user' ? 'user' : 'model',
                parts: [{ text: msg.text }]
            });
        });

        contents.push({
            role: "user",
            parts: [{ text: userMessage }]
        });

        // 3. Try Gemini first
        const geminiResult = await generateWithGemini(contents);
        return {
            text: geminiResult.text,
            responder: geminiResult.responder,
            isError: false
        };

    } catch (error) {
        console.error('Gemini Error, trying Groq fallback:', error);

        try {
            const groqResult = await generateWithGroq(context, userMessage);
            return {
                text: groqResult.text,
                responder: groqResult.responder,
                isError: false
            };
        } catch (fallbackError) {
            console.error('Groq Fallback Error:', fallbackError);
            return {
                text: "I couldn't generate a response right now. Please try again in a moment.",
                responder: 'Error',
                isError: true
            };
        }
    }
};
