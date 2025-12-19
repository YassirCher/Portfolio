import './Skills.css'

const Skills = () => {
    const skillCategories = [
        {
            icon: 'fa-code',
            title: 'Languages',
            skills: ['Python', 'Java', 'JavaScript', 'C', 'SQL', 'Dart']
        },
        {
            icon: 'fa-layer-group',
            title: 'Frameworks & Libraries',
            skills: ['PyTorch', 'TensorFlow', 'Spring Boot', 'Angular', 'React', 'Tailwind CSS', 'FastAPI', 'Flask', 'Hugging Face Transformers', 'Scikit-learn']
        },
        {
            icon: 'fa-tools',
            title: 'Tools & Platforms',
            skills: ['Docker', 'Azure', 'AWS', 'Git', 'Linux', 'Jupyter', 'Postman']
        },
        {
            icon: 'fa-lightbulb',
            title: 'Concepts',
            skills: ['RAG', 'MLOps', 'Computer Vision', 'LLM Fine-tuning', 'Agentic AI', 'Data Structures']
        }
    ]

    const softSkills = [
        { icon: 'fa-lightbulb', label: 'Problem Solving' },
        { icon: 'fa-rocket', label: 'Autonomous Work' },
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
