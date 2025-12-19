import { useEffect, useRef, useState } from 'react'
import './Quote.css'

const Quote = () => {
    const quoteText = "The best way to predict the future is to invent it."
    const author = "Alan Kay"
    const [isVisible, setIsVisible] = useState(false)
    const quoteRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.5 }
        )

        if (quoteRef.current) {
            observer.observe(quoteRef.current)
        }

        return () => {
            if (quoteRef.current) observer.unobserve(quoteRef.current)
        }
    }, [])

    return (
        <div className="quote-container" ref={quoteRef}>
            <div className={`quote-content ${isVisible ? 'animate' : ''}`}>
                <div className="quote-line"></div>
                <blockquote className="quote-text">
                    {quoteText.split(" ").map((word, index) => (
                        <span key={index} style={{ animationDelay: `${index * 0.1}s` }} className="quote-word">
                            {word}&nbsp;
                        </span>
                    ))}
                </blockquote>
                <div className="quote-line"></div>
            </div>
        </div>
    )
}

export default Quote
