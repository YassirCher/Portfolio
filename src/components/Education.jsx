import './Education.css'

const Education = () => {
    const education = [
        {
            degree: 'Master of Excellence in Data Science & AI',
            school: 'Université Moulay Ismail, Faculty of Science Meknes',
            period: '2024 – 2026',
            details: 'Currently in S3 • S1 & S2 Grade: Good (Bien)',
            icon: 'fa-graduation-cap'
        },
        {
            degree: 'Bachelor (Licence) in SMI',
            school: 'Université Moulay Ismail, Faculty of Science Meknes',
            period: '2024',
            details: 'Science Math Info • Honors: Assez Bien (S5: Bien, S6: Très Bien)',
            icon: 'fa-university'
        },
        {
            degree: 'Baccalaureate in Mathematical Sciences A',
            school: 'High School, Meknès',
            period: '2020',
            details: '',
            icon: 'fa-school'
        }
    ]

    return (
        <section className="section education" id="education">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Background</span>
                    <h2 className="section-title">Education</h2>
                </div>
                <div className="timeline">
                    {education.map((edu, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-marker">
                                <i className={`fas ${edu.icon}`}></i>
                            </div>
                            <div className="timeline-content">
                                <span className="timeline-date">{edu.period}</span>
                                <h3 className="timeline-title">{edu.degree}</h3>
                                <p className="timeline-school">{edu.school}</p>
                                {edu.details && <p className="timeline-details">{edu.details}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
