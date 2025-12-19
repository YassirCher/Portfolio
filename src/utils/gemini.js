import knowledgeBaseEmbeddings from '../data/knowledge_base_embeddings.json';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const EMBEDDING_MODEL = 'text-embedding-004';
const CHAT_MODEL = 'gemini-2.5-flash'; // Changed from 2.0 to 2.5 to match rag_agent.py

// --- Helper Functions ---

const cosineSimilarity = (vecA, vecB) => {
    const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
    const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
    return dotProduct / (magnitudeA * magnitudeB);
};

// Improved retry logic with longer waits and parsing API retry suggestions
const fetchWithRetry = async (url, options, retries = 5, baseBackoff = 5000) => {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, options);

            if (response.status === 429) {
                // Too Many Requests - Check for API-suggested retry delay
                const data = await response.clone().json();
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

                console.warn(`Rate limited (429). Waiting ${Math.round(waitTime / 1000)}s before retry ${i + 1}/${retries}...`);
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
    // API endpoint for embedding
    const response = await fetchWithRetry(
        `https://generativelanguage.googleapis.com/v1beta/models/${EMBEDDING_MODEL}:embedContent?key=${API_KEY}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: `models/${EMBEDDING_MODEL}`,
                content: { parts: [{ text }] }
            })
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

        // Sort by score descending and take top 3
        scoredChunks.sort((a, b) => b.score - a.score);
        return scoredChunks.slice(0, 3).map(c => c.text).join('\n\n');
    } catch (error) {
        console.error("Error retrieving context:", error);
        return ""; // Fallback to no context if embedding fails
    }
};

// --- Main Function ---

export const sendToGemini = async (history, userMessage) => {
    try {
        // 1. Retrieve relevant context based on user query
        const context = await retrieveContext(userMessage);

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

        // 3. Send to Chat Model with Retry
        const response = await fetchWithRetry(
            `https://generativelanguage.googleapis.com/v1beta/models/${CHAT_MODEL}:generateContent?key=${API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents })
            }
        );

        const data = await response.json();

        if (data.error) {
            console.error("Gemini API Error:", data.error);
            return "I'm having trouble connecting to my brain right now. Please try again later.";
        }

        return data.candidates[0].content.parts[0].text;

    } catch (error) {
        console.error("Chat Error:", error);
        return "Something went wrong. Please check your internet connection.";
    }
};
