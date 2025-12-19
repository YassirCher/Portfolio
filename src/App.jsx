import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Quote from './components/Quote'
import About from './components/About'
import ChatWidget from './components/ChatWidget'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Footer from './components/Footer'
import Background from './components/Background'
import Loading from './components/Loading'
import Learning from './components/Learning'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Console Easter Egg
    console.log('%c👋 Hello, curious developer!', 'font-size: 20px; font-weight: bold; color: #6366f1;')
    console.log('%cInterested in working together? Reach out at cherguiyassir1@gmail.com', 'font-size: 14px; color: #94a3b8;')
    console.log('%c🚀 Built with passion by Yassir Chergui', 'font-size: 12px; color: #06b6d4;')

    // Navbar Scroll Effect
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Scroll Reveal Animation matching script.js
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    // Select elements to reveal
    const selector = '.section-header, .about-text, .about-image, .highlight-card, .skill-category, .project-card, .cert-card, .timeline-item, .contact-card, .soft-skill, .reveal, .learning-card'

    // Only observe after loading is done and DOM is ready
    if (!loading) {
      const elements = document.querySelectorAll(selector)
      elements.forEach(el => {
        // Don't overwrite if it already has 'active' (e.g. from previous renders)
        // But ensure it has 'reveal' class if needed
        el.classList.add('reveal')
        revealObserver.observe(el)
      })

      return () => {
        elements.forEach(el => revealObserver.unobserve(el))
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [loading]) // Re-run effect when loading changes

  return (
    <div className="app">
      {loading && <Loading onLoadingComplete={() => setLoading(false)} />}

      {!loading && (
        <>
          <Background />
          <Navbar scrolled={scrolled} />
          <Hero />
          <Quote />
          <About />
          <Skills />
          <Learning />
          <Projects />
          <Certifications />
          <Education />
          <Footer />
          <ChatWidget />
        </>
      )}
    </div>
  )
}

export default App
