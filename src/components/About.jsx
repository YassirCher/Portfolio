import './About.css'

const About = () => {
    const highlights = [
        { icon: 'fa-brain', title: 'AI & ML', desc: 'PyTorch, TensorFlow, Keras, Scikit-learn, Hugging Face' },
        { icon: 'fa-robot', title: 'Gen AI & NLP', desc: 'Mistral/Llama/Qwen, RAG, LoRA, LangChain, LangGraph' },
        { icon: 'fa-eye', title: 'Vision & Medical AI', desc: 'YOLOv8, OpenCV, MRI Analysis, Grad-CAM' },
        { icon: 'fa-database', title: 'Data & Systems', desc: 'Neo4j, ChromaDB, Vector Search, Agentic Pipelines' },
    ]

    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">About Me</span>
                    <h2 className="section-title">Passionate About AI Innovation</h2>
                </div>
                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">
                            I'm a <strong>Master's student in Data Science & AI</strong> at Université Moulay Ismail, Faculty of Science Meknes,
                            with hands-on experience building production-ready AI systems and research-driven deep learning models.
                        </p>
                        <p>
                            My expertise spans from fine-tuning large language models like <strong>Mistral 7B</strong> to developing
                            real-time computer vision systems with <strong>YOLOv8</strong> and advanced <strong>Medical NLP</strong> pipelines.
                            I'm passionate about bridging research and real-world deployment through scalable MLOps and agentic AI architectures.
                        </p>
                        <div className="about-highlights">
                            {highlights.map((item, index) => (
                                <div className="highlight-card" key={index}>
                                    <div className="highlight-icon">
                                        <i className={`fas ${item.icon}`}></i>
                                    </div>
                                    <div className="highlight-content">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="about-image">
                        <div className="image-frame">
                            <div className="code-window">
                                <div className="window-header">
                                    <span className="dot red"></span>
                                    <span className="dot yellow"></span>
                                    <span className="dot green"></span>
                                </div>
                                <pre className="code-content"><code>
                                    <span className="keyword">class</span> <span className="class-name">YassirChergui</span>:{'\n'}
                                    {'    '}<span className="keyword">def</span> <span className="function">__init__</span>(self):{'\n'}
                                    {'        '}self.role = <span className="string">"AI Engineer"</span>{'\n'}
                                    {'        '}self.location = <span className="string">"Meknès, Morocco"</span>{'\n'}
                                    {'        '}self.interests = [{'\n'}
                                    {'            '}<span className="string">"Computer Vision"</span>,{'\n'}
                                    {'            '}<span className="string">"Generative AI"</span>,{'\n'}
                                    {'            '}<span className="string">"MLOps"</span>,{'\n'}
                                    {'            '}<span className="string">"LLMOps"</span>{'\n'}
                                    {'        '}]{'\n'}
                                    {'\n'}
                                    {'    '}<span className="keyword">def</span> <span className="function">current_focus</span>(self):{'\n'}
                                    {'        '}<span className="keyword">return</span> <span className="string">"End-to-End AI Systems"</span>
                                </code></pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
