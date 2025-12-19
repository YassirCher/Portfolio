import './Projects.css'

const Projects = () => {
    const projects = [
        {
            title: 'AI E-commerce Agent (In Progress)',
            description: 'Finalizing an AI-powered e-commerce platform featuring a fine-tuned Mistral 7B Agentic AI and recommendation system. Uses HateBERT for hate speech detection. Developed with Spring Boot, Angular, and Tailwind CSS.',
            tags: ['Spring Boot', 'Angular', 'Tailwind', 'Mistral 7B', 'HateBERT'],
            metrics: ['Agentic AI', 'Microservices'],
            icon: 'fa-robot',
            github: 'https://github.com/YassirCher',
            featured: true
        },
        {
            title: 'Urban Security – Weapon Detection',
            description: 'Real-time weapon detection pipeline achieving >30 FPS with F1-Score: 0.9960 and mAP: 0.9612. Full stack from data annotation to REST API deployment.',
            tags: ['YOLOv8', 'Django', 'PyTorch'],
            metrics: ['F1: 99.60%', '30+ FPS'],
            icon: 'fa-shield-alt',
            github: 'https://github.com/YassirCher/Weapon_Detection_app',
            featured: true
        },
        {
            title: 'Fine-Tuning Mistral 7B',
            description: 'E-commerce intelligent assistant using Parameter-Efficient Fine-Tuning achieving 80.36% Mean Token Accuracy. Complete pipeline with vectorization and multi-label classification.',
            tags: ['LLM', 'PEFT/LoRA', 'RAG'],
            metrics: ['80.36% Accuracy'],
            icon: 'fa-robot',
            github: 'https://github.com/YassirCher/mistral-ecommerce-finetuning'
        },
        {
            title: 'AG News MLOps Pipeline',
            description: 'Production-ready NLP pipeline with 91.34% accuracy using Linear SVM and TF-IDF. Automated CI/CD via GitHub Actions for Azure Container deployment.',
            tags: ['Azure', 'Docker', 'FastAPI', 'CI/CD'],
            metrics: ['91.34% Accuracy'],
            icon: 'fa-cloud',
            github: 'https://github.com/YassirCher/ag-news-mlops-azure'
        },
        {
            title: 'Image Captioning Fine-tuning',
            description: 'Fine-tuned Salesforce BLIP on 31k+ Flickr30k images achieving 0.4320 ROUGE score. Optimized training on dual T4 GPUs with automated ROUGE/BLEU evaluation.',
            tags: ['BLIP', 'PyTorch', 'Transformers'],
            metrics: ['ROUGE: 0.4320'],
            icon: 'fa-image',
            github: 'https://github.com/YassirCher/blip-image-captioning-finetune'
        },
        {
            title: 'Alzheimer MRI Classification',
            description: 'Custom CNN architecture that broke official benchmarks with 99% classification accuracy. Integrated Grad-CAM for explainability and RAG for medical context retrieval.',
            tags: ['TensorFlow', 'XAI', 'RAG'],
            metrics: ['99% Accuracy', 'Benchmark Record'],
            icon: 'fa-brain',
            github: 'https://github.com/YassirCher/alzheimer-mri-classification-xai-rag',
            featured: true
        },
        {
            title: 'Hate Speech Detection',
            description: 'Multi-class fine-tuning for toxic content detection with F1-Weighted: 0.9357. Robust evaluation using ROC curves and F1 Score metrics.',
            tags: ['HateBERT', 'NLP'],
            metrics: ['F1: 93.57%'],
            icon: 'fa-comment-slash',
            github: 'https://github.com/YassirCher/hate-speech-detection-comparison'
        },
        {
            title: 'NeuroDerm AI',
            description: 'Advanced AI system for dermatological and neurological diagnosis using deep learning. Focuses on medical imaging analysis for healthcare applications.',
            tags: ['Medical AI', 'Deep Learning', 'Healthcare'],
            metrics: ['Medical AI'],
            icon: 'fa-user-md',
            github: 'https://github.com/YassirCher/NeuroDerm-AI',
            featured: true
        },
        {
            title: 'Realistic Text-to-Image',
            description: 'Text-to-image generation system using state-of-the-art diffusion models. Generates high-quality realistic images from text prompts.',
            tags: ['Generative AI', 'Diffusion', 'PyTorch'],
            metrics: ['Generative'],
            icon: 'fa-magic',
            github: 'https://github.com/YassirCher/Realistic-Text-to-Image-Generation'
        },
        {
            title: 'Text Clustering 20Newsgroups',
            description: 'Unsupervised text clustering on the 20 Newsgroups dataset using TF-IDF and clustering algorithms. Topic modeling and document similarity analysis.',
            tags: ['NLP', 'Clustering', 'Unsupervised'],
            metrics: ['Clustering'],
            icon: 'fa-project-diagram',
            github: 'https://github.com/YassirCher/text-clustering-20newsgroups'
        },
        {
            title: 'PathMNIST XAI Classification',
            description: 'Pathology image classification on PathMNIST dataset with explainable AI techniques. Kaggle competition entry for medical imaging challenges.',
            tags: ['Medical Imaging', 'XAI', 'Classification'],
            metrics: ['Kaggle'],
            icon: 'fa-microscope',
            github: 'https://github.com/YassirCher/pathmnist-xai-classification'
        },
        {
            title: 'SDMW-MCP',
            description: 'Model Context Protocol (MCP) implementation for distributed AI systems. Modern approach to AI model integration and context management.',
            tags: ['MCP', 'AI Systems', 'Integration'],
            metrics: ['MCP Protocol'],
            icon: 'fa-cogs',
            github: 'https://github.com/YassirCher/SDMW-MCP'
        }
    ]

    return (
        <section className="section projects" id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Portfolio</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-description">A showcase of my AI/ML projects spanning computer vision, NLP, and production systems</p>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <article className={`project-card ${project.featured ? 'featured' : ''}`} key={index}>
                            <div className="project-image">
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="project-icon">
                                    <i className={`fas ${project.icon}`}></i>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span className="tag" key={i}>{tag}</span>
                                    ))}
                                </div>
                                <h3 className="project-title">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">{project.title}</a>
                                </h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-metrics">
                                    {project.metrics.map((metric, i) => (
                                        <span className="metric" key={i}>
                                            <i className="fas fa-chart-line"></i> {metric}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="projects-cta">
                    <a href="https://github.com/YassirCher" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        <i className="fab fa-github"></i>
                        View All Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
