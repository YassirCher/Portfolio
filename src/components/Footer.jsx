import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const contactInfo = [
        { icon: 'fa-envelope', label: 'Email', value: 'cherguiyassir1@gmail.com', href: 'mailto:cherguiyassir1@gmail.com' },
        { icon: 'fa-phone', label: 'Phone', value: '+212 693 534 651', href: 'tel:+212693534651' },
        { icon: 'fa-map-marker-alt', label: 'Location', value: 'Meknès, Morocco', href: '#' },
    ]

    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="logo-text">Yassir Chergui</span>
                        <p>Data Science & AI Engineer</p>
                    </div>

                    <div className="footer-contact-info">
                        {contactInfo.map((item, index) => (
                            <a href={item.href} className="footer-contact-item" key={index}>
                                <i className={`fas ${item.icon}`}></i>
                                <span>{item.value}</span>
                            </a>
                        ))}
                    </div>

                    <div className="footer-social">
                        <a href="https://github.com/YassirCher" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/yassir-chergui-051331369" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="mailto:cherguiyassir1@gmail.com">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {currentYear} Yassir Chergui. Built with React & Vite. Made with ❤️</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
