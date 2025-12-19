import { useState, useRef, useEffect } from 'react'
import { sendToGemini } from '../utils/gemini'
import './ChatWidget.css'

// Predefined quick questions
const QUICK_QUESTIONS = [
    { icon: '👋', text: 'Who is Yassir?' },
    { icon: '🎯', text: 'What are his main skills?' },
    { icon: '💼', text: 'Tell me about his projects' },
    { icon: '🎓', text: 'What is his education?' },
]

// Simple markdown-like text formatting
const formatMessage = (text) => {
    if (!text) return null;

    // Split into lines and process
    return text.split('\n').map((line, i) => {
        // Bold text: **text**
        let formatted = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        // Bullet points
        if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
            formatted = line.replace(/^[\s]*[\*\-]\s/, '• ');
        }
        return (
            <span key={i}>
                <span dangerouslySetInnerHTML={{ __html: formatted }} />
                {i < text.split('\n').length - 1 && <br />}
            </span>
        );
    });
};

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi there! 👋 I'm Yassir's AI Assistant.\n\nAsk me anything about his **projects**, **skills**, or **experience**!",
            sender: 'bot'
        }
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [showQuickQuestions, setShowQuickQuestions] = useState(true)
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSend = async (messageText) => {
        const text = typeof messageText === 'string' ? messageText : input;
        if (!text.trim()) return;

        // Hide quick questions after first message
        setShowQuickQuestions(false);

        const userMsg = { id: Date.now(), text: text, sender: 'user' }
        setMessages(prev => [...prev, userMsg])
        setInput('')
        setIsLoading(true)

        const historyForApi = messages.filter(m => m.sender !== 'system')
        const botResponseText = await sendToGemini(historyForApi, text)

        const botMsg = { id: Date.now() + 1, text: botResponseText, sender: 'bot' }
        setMessages(prev => [...prev, botMsg])
        setIsLoading(false)
    }

    const handleQuickQuestion = (question) => {
        handleSend(question);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSend(input);
    }

    return (
        <div className="chat-widget">
            {/* Toggle Button */}
            <button
                className={`chat-toggle ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Chat"
            >
                {isOpen ? (
                    <i className="fas fa-times"></i>
                ) : (
                    <>
                        <i className="fas fa-comment-dots"></i>
                        <span className="chat-toggle-pulse"></span>
                    </>
                )}
            </button>

            {/* Chat Window */}
            <div className={`chat-window ${isOpen ? 'open' : ''}`}>
                <div className="chat-header">
                    <div className="chat-header-left">
                        <div className="chat-avatar">
                            <i className="fas fa-robot"></i>
                            <span className="avatar-status"></span>
                        </div>
                        <div className="chat-header-info">
                            <h3>Portfolio AI</h3>
                            <span className="status-indicator">
                                <span className="status-dot"></span>
                                Online • Powered by Gemini
                            </span>
                        </div>
                    </div>
                    <button className="chat-close" onClick={() => setIsOpen(false)}>
                        <i className="fas fa-chevron-down"></i>
                    </button>
                </div>

                <div className="chat-messages">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`message ${msg.sender}`}>
                            {msg.sender === 'bot' && (
                                <div className="message-avatar">
                                    <i className="fas fa-robot"></i>
                                </div>
                            )}
                            <div className="message-content">
                                <div className="message-bubble">
                                    {formatMessage(msg.text)}
                                </div>
                                <span className="message-time">
                                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="message bot">
                            <div className="message-avatar">
                                <i className="fas fa-robot"></i>
                            </div>
                            <div className="message-content">
                                <div className="message-bubble typing">
                                    <div className="typing-indicator">
                                        <span></span><span></span><span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Quick Questions */}
                {showQuickQuestions && !isLoading && (
                    <div className="quick-questions">
                        <span className="quick-questions-label">Quick questions:</span>
                        <div className="quick-questions-grid">
                            {QUICK_QUESTIONS.map((q, i) => (
                                <button
                                    key={i}
                                    className="quick-question-btn"
                                    onClick={() => handleQuickQuestion(q.text)}
                                >
                                    <span className="quick-question-icon">{q.icon}</span>
                                    <span className="quick-question-text">{q.text}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <form className="chat-input-area" onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        placeholder="Ask about Yassir's projects, skills..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        disabled={isLoading}
                    />
                    <button type="submit" disabled={isLoading || !input.trim()}>
                        <i className="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ChatWidget

