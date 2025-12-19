import './Learning.css'

const Learning = () => {
    return (
        <section className="section learning" id="learning">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Growth</span>
                    <h2 className="section-title">What I'm Learning</h2>
                    <p className="section-description">Constantly expanding my knowledge in cutting-edge AI technologies</p>
                </div>
                <div className="learning-grid">
                    <div className="learning-card reveal">
                        <div className="learning-icon">
                            <i className="fas fa-brain"></i>
                        </div>
                        <div className="learning-content">
                            <h3>Retrieval Augmented Generation (RAG)</h3>
                            <p>Mastering advanced RAG techniques for building context-aware LLM applications. Exploring vector databases, semantic search, and prompt engineering strategies.</p>
                            <span className="learning-badge">Current Focus</span>
                        </div>
                    </div>
                    <div className="learning-card reveal">
                        <div className="learning-icon">
                            <i className="fas fa-graduation-cap"></i>
                        </div>
                        <div className="learning-content">
                            <h3>DeepLearning.AI</h3>
                            <p>Completing specialized courses on Generative AI, LLMOps, and Agentic Workflows to deepen theoretical understanding and practical skills.</p>
                            <span className="learning-badge">In Progress</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Learning
