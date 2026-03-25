import './Skills.css'

const Skills = () => {
    const skillCategories = [
        {
            icon: 'fa-code',
            title: 'Languages',
            skills: ['Python', 'Java', 'JavaScript', 'C', 'SQL', 'Dart', 'CypherQL', 'Cassandra QL']
        },
        {
            icon: 'fa-layer-group',
            title: 'Frameworks & Libraries',
            skills: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'Hugging Face', 'Transformers', 'Spring Boot', 'Angular', 'React', 'Tailwind CSS', 'FastAPI', 'Flask', 'LangChain', 'LangGraph']
        },
        {
            icon: 'fa-tools',
            title: 'Tools & Platforms',
            skills: ['Docker', 'Docker Compose', 'Azure', 'AWS', 'Git', 'Linux', 'Jupyter', 'Postman', 'Nginx', 'GitHub Actions']
        },
        {
            icon: 'fa-database',
            title: 'Databases & Data Systems',
            skills: ['Neo4j', 'Cassandra', 'SQL', 'ChromaDB', 'Vector Databases', 'Semantic Search', 'Hadoop', 'Pig', 'Hive']
        },
        {
            icon: 'fa-project-diagram',
            title: 'Deep Learning Architectures',
            skills: ['MLP', 'CNN', 'RNN', 'LSTM', 'GRU', 'GNN', 'Autoencoders', 'Transformers', 'Encoder-Decoder']
        },
        {
            icon: 'fa-sliders-h',
            title: 'Machine Learning Algos',
            skills: ['XGBoost', 'Linear Regression', 'Logistic Regression', 'KNN', 'Decision Tree', 'Random Forest', 'Naive Bayes', 'K-Means', 'PCA', 'DBSCAN', 'HDBSCAN']
        },
        {
            icon: 'fa-lightbulb',
            title: 'Concepts',
            skills: ['RAG', 'Agentic RAG', 'Embeddings', 'LoRA', 'LLM Fine-tuning', 'Prompt Engineering', 'Multi-Agent Systems', 'MCP', 'LLMOps', 'Computer Vision', 'Medical NLP', 'MLOps', 'Model Evaluation']
        },
        {
            icon: 'fa-chart-line',
            title: 'Data Science Stack',
            skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn']
        }
    ]

    const softSkills = [
        { icon: 'fa-lightbulb', label: 'Critical Thinking & Problem Solving' },
        { icon: 'fa-rocket', label: 'Results-Driven Execution' },
        { icon: 'fa-users', label: 'Team Collaboration' },
        { icon: 'fa-comments', label: 'Technical Communication' }
    ]

    return (
        <section className="section skills" id="skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Expertise</span>
                    <h2 className="section-title">Technical Skills</h2>
                </div>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div className="skill-category" key={index}>
                            <div className="category-header">
                                <i className={`fas ${category.icon}`}></i>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {category.skills.map((skill, i) => (
                                    <span className="skill-tag" key={i}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="soft-skills">
                    <h3>Soft Skills</h3>
                    <div className="soft-skills-grid">
                        {softSkills.map((skill, index) => (
                            <div className="soft-skill" key={index}>
                                <i className={`fas ${skill.icon}`}></i>
                                <span>{skill.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
