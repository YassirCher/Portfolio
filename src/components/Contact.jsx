import './Contact.css'

const Contact = () => {
    const contactInfo = [
        { icon: 'fa-envelope', label: 'Email', value: 'cherguiyassir1@gmail.com', href: 'mailto:cherguiyassir1@gmail.com' },
        { icon: 'fa-phone', label: 'Phone', value: '+212 693 534 651', href: 'tel:+212693534651' },
        { icon: 'fa-map-marker-alt', label: 'Location', value: 'Meknès, Morocco', href: '#' },
    ]

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Get in Touch</span>
                    <h2 className="section-title">Contact Me</h2>
                    <p className="section-description">
                        Looking forward to discussing AI/ML opportunities and collaborations
                    </p>
                </div>
                <div className="contact-content">
                    <div className="contact-info">
                        {contactInfo.map((item, index) => (
                            <a href={item.href} className="contact-item" key={index}>
                                <div className="contact-icon">
                                    <i className={`fas ${item.icon}`}></i>
                                </div>
                                <div className="contact-details">
                                    <span className="contact-label">{item.label}</span>
                                    <span className="contact-value">{item.value}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="contact-social">
                        <h3>Connect with me</h3>
                        <div className="social-links">
                            <a href="https://github.com/YassirCher" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/yassir-chergui-051331369" target="_blank" rel="noopener noreferrer" className="social-link">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="mailto:cherguiyassir1@gmail.com" className="social-link">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
