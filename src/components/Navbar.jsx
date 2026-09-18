import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = ({ scrolled }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#thinkgraph', label: 'ThinkGraph AI' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#certifications', label: 'Certifications' },
        { href: '#education', label: 'Education' },
    ]

    const [activeSection, setActiveSection] = useState('hero')

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]')
            const scrollPosition = window.scrollY + 150

            sections.forEach(section => {
                const sectionTop = section.offsetTop
                const sectionHeight = section.offsetHeight
                const sectionId = section.getAttribute('id')

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId)
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLinkClick = () => setMenuOpen(false)

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#hero" className="nav-logo">
                    <span className="logo-text">YC</span>
                </a>
                <button
                    className={`nav-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                    aria-controls="primary-navigation"
                >
                    <span className="hamburger"></span>
                </button>
                <ul id="primary-navigation" className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                                onClick={handleLinkClick}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" className="nav-link nav-cta" onClick={handleLinkClick}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
