import { useEffect, useRef } from 'react'
import './Background.css'

const Background = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationFrameId

        // Set canvas size
        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        handleResize()
        window.addEventListener('resize', handleResize)

        // Particles
        // Particles
        const particles = []
        const particleCount = 100 // Increased density
        const connectionDistance = 150
        const mouseDistance = 250 // Increased interaction range

        const mouse = {
            x: null,
            y: null
        }

        const handleMouseMove = (e) => {
            mouse.x = e.x
            mouse.y = e.y
        }

        const handleMouseOut = () => {
            mouse.x = null
            mouse.y = null
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseout', handleMouseOut)

        const createParticle = () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            color: 'rgba(99, 102, 241, 0.5)',
            update() {
                this.x += this.vx
                this.y += this.vy

                this.vx *= 0.98
                this.vy *= 0.98

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1

                if (mouse.x != null) {
                    const dx = mouse.x - this.x
                    const dy = mouse.y - this.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance > 0 && distance < mouseDistance) {
                        const forceDirectionX = dx / distance
                        const forceDirectionY = dy / distance
                        const force = (mouseDistance - distance) / mouseDistance
                        this.vx += forceDirectionX * force * 0.2
                        this.vy += forceDirectionY * force * 0.2
                    }
                }
            },
            draw() {
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fillStyle = this.color
                ctx.fill()
            }
        })

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(createParticle())
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update and draw particles
            for (let i = 0; i < particles.length; i++) {
                particles[i].update()
                particles[i].draw()

                // Draw connections
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < connectionDistance) {
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(139, 92, 246, ${1 - distance / connectionDistance})` // Fade out
                        ctx.lineWidth = 1
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                    }
                }

                // Draw connection to mouse
                if (mouse.x != null) {
                    const dx = particles[i].x - mouse.x
                    const dy = particles[i].y - mouse.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < connectionDistance) {
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(6, 182, 212, ${1 - distance / connectionDistance})`
                        ctx.lineWidth = 1
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(mouse.x, mouse.y)
                        ctx.stroke()
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseout', handleMouseOut)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return <canvas ref={canvasRef} className="background-canvas"></canvas>
}

export default Background
