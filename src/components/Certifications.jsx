import './Certifications.css'

const Certifications = () => {
    const certifications = [
        {
            title: 'AWS Generative AI Applications',
            issuer: 'Coursera & AWS',
            icon: 'fab fa-aws',
            link: 'https://www.coursera.org/account/accomplishments/professional-cert/I1VH7C83GKB6'
        },
        {
            title: 'IBM Machine Learning Professional Certificate',
            issuer: 'IBM & Coursera',
            icon: 'fas fa-certificate',
            link: 'https://www.coursera.org/account/accomplishments/professional-cert/BBA8HEIKGKYL'
        },
        {
            title: 'OCI AI Foundations Associate',
            issuer: 'Oracle University',
            icon: 'fas fa-cloud',
            link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=7C04BE6C04D7D7D63217A5D0D9B9D159313248BA204AAC8B937FE438916E2E97'
        },
        {
            title: 'Intermediate Machine Learning',
            issuer: 'Kaggle',
            icon: 'fab fa-kaggle',
            link: 'https://www.kaggle.com/learn/certification/yassirchergui/intermediate-machine-learning'
        }
    ]

    return (
        <section className="section certifications" id="certifications">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Credentials</span>
                    <h2 className="section-title">Certifications</h2>
                </div>
                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-card animate-fade-in-up"
                            key={index}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="cert-icon">
                                <i className={cert.icon}></i>
                            </div>
                            <div className="cert-content">
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-issuer">{cert.issuer}</p>
                            </div>
                            <div className="cert-badge">
                                <i className="fas fa-check-circle"></i>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications
