import { useEffect, useRef, useState } from 'react'
import './ThinkGraph.css'

const agentGroups = [
    {
        title: 'Ingest and understand',
        label: 'Ingestion',
        description: 'Turn scientific PDFs into connected, multimodal evidence.',
        agents: [
            { icon: 'microscope', title: 'Knowledge extraction', description: 'Parses papers and prepares evidence for the knowledge graph.' },
            { icon: 'image', title: 'Multimodal vision', description: 'Interprets figures and charts as searchable scientific findings.' },
            { icon: 'table-2', title: 'Table understanding', description: 'Extracts grounded facts and values from research tables.' },
            { icon: 'sigma', title: 'Formula understanding', description: 'Normalizes formulas and links them to their source context.' }
        ]
    },
    {
        title: 'Research and verify',
        label: 'Research',
        description: 'Coordinate searches, memory, and source-grounded answers.',
        agents: [
            { icon: 'brain-circuit', title: 'Orchestrator', description: 'Routes each research request through the right agent workflow.' },
            { icon: 'wand-sparkles', title: 'Prompt refinement', description: 'Turns short questions into precise research requests.' },
            { icon: 'database', title: 'Graph memory', description: 'Brings forward relevant context from earlier research.' },
            { icon: 'search', title: 'Retrieval', description: 'Finds evidence across graph, vector, and keyword search.' },
            { icon: 'shield-check', title: 'Validation', description: 'Checks answers and citations against retrieved sources.' }
        ]
    },
    {
        title: 'Create research outputs',
        label: 'Output',
        description: 'Turn verified knowledge into useful deliverables.',
        agents: [
            { icon: 'file-text', title: 'Report synthesis', description: 'Builds structured reports from cited findings.' },
            { icon: 'presentation', title: 'Presentation', description: 'Creates editable, evidence-backed slide decks.' },
            { icon: 'circle-help', title: 'Quiz generation', description: 'Produces page-grounded questions with verified answers.' }
        ]
    }
]

const agents = agentGroups.flatMap((group) => group.agents.map((agent) => ({ ...agent, group: group.label })))

const AgentCard = ({ agent }) => (
    <article className="thinkgraph-agent">
        <div className="thinkgraph-agent-topline">
            <span className="thinkgraph-agent-icon" aria-hidden="true">
                <img src={`/thinkgraph/agents/${agent.icon}.svg`} alt="" loading="lazy" />
            </span>
            <span className="thinkgraph-agent-group-label">{agent.group}</span>
        </div>
        <h4>{agent.title}</h4>
        <p>{agent.description}</p>
    </article>
)

const galleryImages = [
    {
        src: '/thinkgraph/gallery/knowledge-extraction.png',
        title: 'Multimodal knowledge extraction',
        description: 'A paper is parsed into text, figures, tables, and linked graph evidence.'
    },
    {
        src: '/thinkgraph/gallery/evidence-quiz.png',
        title: 'Evidence-backed quiz',
        description: 'Questions point back to the source page and supporting excerpt.'
    },
    {
        src: '/thinkgraph/gallery/presentation-studio.png',
        title: 'Research presentation studio',
        description: 'Generated slides bring source figures and speaker notes into an editable deck.'
    }
]

const ThinkGraph = () => {
    const videoRef = useRef(null)
    const agentScrollerRef = useRef(null)
    const galleryDialogRef = useRef(null)
    const galleryTriggerRef = useRef(null)
    const [galleryIndex, setGalleryIndex] = useState(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    useEffect(() => {
        const video = videoRef.current
        if (!video || !('IntersectionObserver' in window)) return undefined

        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) video.pause()
        }, { threshold: 0.15 })

        observer.observe(video)

        return () => {
            observer.disconnect()
            video.pause()
        }
    }, [])

    useEffect(() => {
        const scroller = agentScrollerRef.current
        if (!scroller) return undefined

        const updateControls = () => {
            setCanScrollLeft(scroller.scrollLeft > 2)
            setCanScrollRight(scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 2)
        }

        const resizeObserver = 'ResizeObserver' in window ? new ResizeObserver(updateControls) : null
        resizeObserver?.observe(scroller)
        updateControls()
        window.addEventListener('resize', updateControls)

        return () => {
            resizeObserver?.disconnect()
            window.removeEventListener('resize', updateControls)
        }
    }, [])

    const scrollAgents = (direction) => {
        const scroller = agentScrollerRef.current
        if (!scroller) return
        scroller.scrollBy({ left: direction * 286, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
    }

    const handleAgentKeys = (event) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault()
            scrollAgents(event.key === 'ArrowRight' ? 1 : -1)
        }
    }

    const openGallery = (index, trigger) => {
        galleryTriggerRef.current = trigger
        setGalleryIndex(index)
        galleryDialogRef.current?.showModal()
    }

    const closeGallery = () => galleryDialogRef.current?.close()

    const handleGalleryClose = () => {
        setGalleryIndex(null)
        galleryTriggerRef.current?.focus()
    }

    const handleGalleryKeyDown = (event) => {
        if (galleryIndex === null) return
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault()
            const direction = event.key === 'ArrowRight' ? 1 : -1
            setGalleryIndex((index) => (index + direction + galleryImages.length) % galleryImages.length)
        }
    }

    return (
        <section className="section thinkgraph" id="thinkgraph">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">2026 End-of-Studies Project</span>
                    <h2 className="section-title">ThinkGraph AI</h2>
                    <p className="section-description">
                        A multimodal, multi-agent research platform that turns scientific papers into traceable answers and research outputs.
                    </p>
                </div>

                <div className="thinkgraph-showcase">
                    <figure className="thinkgraph-media">
                        <video
                            ref={videoRef}
                            className="thinkgraph-video"
                            controls
                            muted
                            playsInline
                            preload="none"
                            poster="/thinkgraph/hero-poster.jpg"
                            aria-describedby="thinkgraph-video-caption"
                        >
                            <source src="/thinkgraph/hero.mp4" type="video/mp4" />
                            Your browser does not support this video.
                        </video>
                        <figcaption id="thinkgraph-video-caption">
                            A 12-second introduction to the ThinkGraph AI experience. The video has no narration.
                        </figcaption>
                    </figure>

                    <div className="thinkgraph-story">
                        <span className="thinkgraph-eyebrow">From papers to grounded knowledge</span>
                        <h3>Research that connects the evidence</h3>
                        <p>
                            I built ThinkGraph AI to ingest scientific PDFs and make their text, figures, tables, formulas, and references searchable together. A vision analysis step turns visual findings into structured descriptions before LightRAG builds linked concepts and relationships.
                        </p>
                        <div className="thinkgraph-pipeline" aria-label="ThinkGraph AI knowledge pipeline">
                            <span>Scientific PDFs</span>
                            <i className="fas fa-arrow-right" aria-hidden="true"></i>
                            <span>Multimodal LightRAG</span>
                            <i className="fas fa-arrow-right" aria-hidden="true"></i>
                            <span>Grounded answers</span>
                        </div>
                        <p>
                            Neo4j holds the knowledge graph while Qdrant indexes semantic evidence. LangGraph agents coordinate retrieval, response checks, citations, and the creation of research reports and presentations.
                        </p>
                        <div className="thinkgraph-stack" aria-label="Key technologies">
                            {['LangGraph', 'LightRAG', 'Neo4j', 'Qdrant', 'FastAPI', 'Next.js'].map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>
                        <a
                            href="mailto:cherguiyassir1@gmail.com?subject=ThinkGraph%20AI%20source%20access"
                            className="thinkgraph-access"
                        >
                            <i className="fas fa-lock" aria-hidden="true"></i>
                            Private source · Request access
                            <i className="fas fa-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                <div className="thinkgraph-gallery">
                    <div className="thinkgraph-gallery-heading">
                        <span className="thinkgraph-eyebrow">Inside the product</span>
                        <h3>From source material to research output</h3>
                    </div>
                    <div className="thinkgraph-gallery-grid">
                        {galleryImages.map((item, index) => (
                            <button
                                type="button"
                                className="thinkgraph-gallery-card"
                                key={item.src}
                                onClick={(event) => openGallery(index, event.currentTarget)}
                                aria-label={`View ${item.title} screenshot`}
                            >
                                <img src={item.src} alt="" loading="lazy" />
                                <span className="thinkgraph-gallery-caption">
                                    <strong>{item.title}</strong>
                                    <span>{item.description}</span>
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="thinkgraph-agents">
                    <div className="thinkgraph-agents-heading">
                        <span className="thinkgraph-eyebrow">Inside the workflow</span>
                        <h3>12 specialized agents, one research flow</h3>
                        <p>Scroll through all 12 agents, from PDF ingestion to verified research outputs.</p>
                    </div>
                    <div className="thinkgraph-agent-controls" aria-label="Agent band controls">
                        <button type="button" onClick={() => scrollAgents(-1)} disabled={!canScrollLeft} aria-label="Previous agents"><span aria-hidden="true">‹</span></button>
                        <span>Swipe, scroll, or use the arrows</span>
                        <button type="button" onClick={() => scrollAgents(1)} disabled={!canScrollRight} aria-label="Next agents"><span aria-hidden="true">›</span></button>
                    </div>
                    <div
                        className="thinkgraph-agent-scroller"
                        ref={agentScrollerRef}
                        role="region"
                        aria-label="ThinkGraph AI agents; scroll horizontally to view all 12"
                        tabIndex={0}
                        onKeyDown={handleAgentKeys}
                        onScroll={(event) => {
                            const scroller = event.currentTarget
                            setCanScrollLeft(scroller.scrollLeft > 2)
                            setCanScrollRight(scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 2)
                        }}
                    >
                        {agents.map((agent) => <AgentCard key={agent.title} agent={agent} />)}
                    </div>
                </div>
            </div>

            <dialog
                ref={galleryDialogRef}
                className="thinkgraph-gallery-dialog"
                aria-label="ThinkGraph AI screenshot gallery"
                onClose={handleGalleryClose}
                onKeyDown={handleGalleryKeyDown}
                onClick={(event) => { if (event.target === event.currentTarget) closeGallery() }}
            >
                {galleryIndex !== null && (
                    <div className="thinkgraph-gallery-dialog-content">
                        <button type="button" className="thinkgraph-dialog-close" onClick={closeGallery} aria-label="Close gallery">
                            <span aria-hidden="true">×</span>
                        </button>
                        <img src={galleryImages[galleryIndex].src} alt={galleryImages[galleryIndex].description} />
                        <div className="thinkgraph-dialog-footer">
                            <div>
                                <strong>{galleryImages[galleryIndex].title}</strong>
                                <p>{galleryImages[galleryIndex].description}</p>
                            </div>
                            <div className="thinkgraph-dialog-controls">
                                <button type="button" onClick={() => setGalleryIndex((index) => (index - 1 + galleryImages.length) % galleryImages.length)} aria-label="Previous screenshot"><span aria-hidden="true">‹</span></button>
                                <span>{galleryIndex + 1} / {galleryImages.length}</span>
                                <button type="button" onClick={() => setGalleryIndex((index) => (index + 1) % galleryImages.length)} aria-label="Next screenshot"><span aria-hidden="true">›</span></button>
                            </div>
                        </div>
                    </div>
                )}
            </dialog>
        </section>
    )
}

export default ThinkGraph
