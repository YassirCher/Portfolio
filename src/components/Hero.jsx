import { useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
    useEffect(() => {
        // Typing Effect
        const titles = [
            'Data Science & AI Engineer',
            'Computer Vision Specialist',
            'LLM Fine-tuning Expert',
            'MLOps Engineer'
        ]

        let titleIndex = 0
        let charIndex = 0
        let isDeleting = false
        let typingDelay = 100
        let timeoutId

        const type = () => {
            const currentTitle = titles[titleIndex]
            if (!titleElement.current) return

            if (isDeleting) {
                titleElement.current.textContent = currentTitle.substring(0, charIndex - 1)
                charIndex--
                typingDelay = 50
            } else {
                titleElement.current.textContent = currentTitle.substring(0, charIndex + 1)
                charIndex++
                typingDelay = 100
            }

            if (!isDeleting && charIndex === currentTitle.length) {
                isDeleting = true
                typingDelay = 2000
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false
                titleIndex = (titleIndex + 1) % titles.length
                typingDelay = 500
            }

            timeoutId = setTimeout(type, typingDelay)
        }

        // Parallax Effect
        const handleScroll = () => {
            const scrolled = window.scrollY
            if (scrolled < window.innerHeight) {
                const orbs = document.querySelectorAll('.gradient-orb')
                orbs.forEach((orb, index) => {
                    const speed = 0.3 + (index * 0.1)
                    orb.style.transform = `translateY(${scrolled * speed}px)`
                })
            }
        }

        // Start typing after initial delay
        const typeTimeout = setTimeout(type, 3000)
        window.addEventListener('scroll', handleScroll)

        return () => {
            clearTimeout(timeoutId)
            clearTimeout(typeTimeout)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const titleElement = useRef(null)

    return (
        <section className="hero" id="hero">
            <div className="hero-bg">
                <div className="gradient-orb gradient-orb-1"></div>
                <div className="gradient-orb gradient-orb-2"></div>
                <div className="gradient-orb gradient-orb-3"></div>
            </div>
            <div className="hero-content">
                <div className="hero-profile reveal">
                    <img src="/image.jpg" alt="Yassir Chergui" className="profile-image" />
                </div>
                <div className="hero-badge reveal">
                    <span className="badge-dot"></span>
                    <span>Available for 4-6 month PFE Internship</span>
                </div>
                <div className="hero-title reveal">
                    <span className="greeting">Hello, I'm</span>
                    <h1 className="name">Yassir Chergui</h1>
                    <span className="title-gradient" ref={titleElement}>Data Science & AI Engineer</span>
                </div>
                <p className="hero-description animate-fade-in-up">
                    Master's student specializing in <strong>Computer Vision</strong>, <strong>Generative AI</strong>, and <strong>MLOps</strong>.
                    Designing and deploying end-to-end AI systems including real-time object detection, LLM fine-tuning, and production-ready ML pipelines.
                </p>
                <div className="hero-cta animate-fade-in-up">
                    <a href="#contact" className="btn btn-primary">
                        <i className="fas fa-paper-plane"></i>
                        Get in Touch
                    </a>
                    <a href="/CV_Yassir_Chergui.pdf" download className="btn btn-secondary">
                        <i className="fas fa-download"></i>
                        Download CV
                    </a>
                    <a href="#projects" className="btn btn-secondary">
                        <i className="fas fa-briefcase"></i>
                        View Projects
                    </a>
                </div>
                <div className="hero-socials animate-fade-in-up">
                    <a href="https://github.com/YassirCher" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/yassir-chergui-051331369" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:cherguiyassir1@gmail.com" className="social-link" aria-label="Email">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="mouse"></div>
                <span>Scroll to explore</span>
            </div>
        </section>
    )
}

export default Hero
