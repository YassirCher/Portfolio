import { useState, useEffect } from 'react'
import './Projects.css'

const Projects = () => {
    const [activeModal, setActiveModal] = useState(null)
    const [lightboxImage, setLightboxImage] = useState(null)
    const [activeThumb, setActiveThumb] = useState(0)

    const projects = [
        {
            title: 'AI E-commerce Agent',
            description: 'Finalizing an AI-powered e-commerce platform featuring a fine-tuned Mistral 7B Agentic AI and recommendation system. Uses HateBERT for hate speech detection. Developed with Spring Boot, Angular, and Tailwind CSS.',
            tags: ['Spring Boot', 'Angular', 'Tailwind', 'Mistral 7B', 'HateBERT', 'Agentic GraphRAG'],
            metrics: ['Agentic AI', 'Microservices', 'GraphRAG'],
            icon: 'fa-robot',
            github: 'https://github.com/YassirCher',
            isPrivate: true,
            featured: true
        },
        {
            title: 'Biomedical LLM Fine-Tuning Benchmarks',
            description: 'Benchmarked Unsloth QLoRA vs Standard Hugging Face QLoRA for fine-tuning Qwen 2.5-7B on PubMedQA biomedical classification. Unsloth achieved 1.28× speedup with 21.66% training time reduction while maintaining comparable 79% accuracy and 0.57 Macro F1.',
            tags: ['Unsloth', 'QLoRA', 'Qwen 2.5-7B', 'PubMedQA', 'PEFT/LoRA', 'TRL', 'BitsAndBytes'],
            metrics: ['1.28× Speedup', '79% Accuracy', '21.66% Faster'],
            icon: 'fa-flask',
            github: 'https://github.com/YassirCher/biomedical-llm-optimization',
            featured: true
        },
        {
            title: 'Urban Security – Weapon Detection',
            description: 'Real-time weapon detection pipeline achieving >30 FPS with F1-Score: 0.9960 and mAP: 0.9612. Full stack from data annotation to REST API deployment.',
            tags: ['YOLOv8', 'Django', 'PyTorch'],
            metrics: ['F1: 99.60%', '30+ FPS'],
            icon: 'fa-shield-alt',
            github: 'https://github.com/YassirCher/Weapon_Detection_app',
            featured: true,
            coverImage: '/projects/weapon-detection/main_dashboard_1.png',
            galleryImages: [
                {
                    src: '/projects/weapon-detection/main_dashboard_1.png',
                    caption: 'Main Dashboard — Statistics & Analytics'
                },
                {
                    src: '/projects/weapon-detection/image_detection.png',
                    caption: 'Image & Video Detection Interface'
                },
                {
                    src: '/projects/weapon-detection/video_processing.png',
                    caption: 'Detection Results & AI Assistant'
                }
            ],
            detailInfo: {
                highlights: [
                    'YOLOv8 real-time detection at 30+ FPS',
                    'Django REST API backend with full admin dashboard',
                    'Automated report generation (CSV & PDF)',
                    'AI Security Assistant powered by Gemini 2.0 Flash',
                    'Multi-media support: images, videos, batch processing'
                ],
                techStack: ['YOLOv8', 'Django', 'PyTorch', 'REST API', 'Gemini 2.0 Flash', 'Chart.js']
            }
        },
        {
            title: 'Fine-Tuning Mistral 7B',
            description: 'E-commerce intelligent assistant using Parameter-Efficient Fine-Tuning achieving 80.36% Mean Token Accuracy. Complete pipeline with vectorization and multi-label classification.',
            tags: ['LLM', 'PEFT/LoRA', 'RAG'],
            metrics: ['80.36% Accuracy'],
            icon: 'fa-robot',
            github: 'https://github.com/YassirCher/mistral-ecommerce-finetuning'
        },
        {
            title: 'AG News MLOps Pipeline',
            description: 'Production-ready NLP pipeline with 91.34% accuracy using Linear SVM and TF-IDF. Automated CI/CD via GitHub Actions for Azure Container deployment.',
            tags: ['Azure', 'Docker', 'FastAPI', 'CI/CD'],
            metrics: ['91.34% Accuracy'],
            icon: 'fa-cloud',
            github: 'https://github.com/YassirCher/ag-news-mlops-azure',
            coverImage: '/projects/ag-news-mlops/app.png',
            galleryImages: [
                {
                    src: '/projects/ag-news-mlops/app.png',
                    caption: 'AI News Classifier — Category Prediction with Confidence Scores'
                }
            ],
            detailInfo: {
                highlights: [
                    '91.34% accuracy with Linear SVM + TF-IDF',
                    'Automated CI/CD via GitHub Actions',
                    'Azure Container deployment ready',
                    'FastAPI REST endpoint for real-time classification',
                    '4-category news classification (World, Sports, Business, Sci/Tech)'
                ],
                techStack: ['Azure', 'Docker', 'FastAPI', 'CI/CD', 'Linear SVM', 'TF-IDF', 'GitHub Actions']
            }
        },
        {
            title: 'Image Captioning Fine-tuning',
            description: 'Fine-tuned Salesforce BLIP on 31k+ Flickr30k images achieving 0.4320 ROUGE score. Optimized training on dual T4 GPUs with automated ROUGE/BLEU evaluation.',
            tags: ['BLIP', 'PyTorch', 'Transformers'],
            metrics: ['ROUGE: 0.4320'],
            icon: 'fa-image',
            github: 'https://github.com/YassirCher/blip-image-captioning-finetune'
        },
        {
            title: 'Alzheimer MRI Classification',
            description: 'Custom CNN architecture that broke official benchmarks with 99% classification accuracy. Integrated Grad-CAM for explainability and RAG for medical context retrieval.',
            tags: ['TensorFlow', 'XAI', 'RAG'],
            metrics: ['99% Accuracy', 'Benchmark Record'],
            icon: 'fa-brain',
            github: 'https://github.com/YassirCher/alzheimer-mri-classification-xai-rag',
            featured: true,
            coverImage: '/projects/alzheimer-mri/dashboard_home.png',
            galleryImages: [
                {
                    src: '/projects/alzheimer-mri/dashboard_home.png',
                    caption: 'Dashboard — Model Performance & Per-Class Metrics'
                },
                {
                    src: '/projects/alzheimer-mri/prediction_interface.png',
                    caption: 'Prediction Interface — MRI Upload, Grad-CAM & Attention Heatmap'
                },
                {
                    src: '/projects/alzheimer-mri/chatbot_interface.png',
                    caption: 'AI Assistant — Brain Imaging Expert Chatbot'
                }
            ],
            detailInfo: {
                highlights: [
                    '99.98% accuracy — broke official benchmarks',
                    'Grad-CAM & Attention Heatmap for explainability',
                    'RAG-powered AI Assistant for medical context',
                    '4-class severity classification (44K MRI images)',
                    'EfficientNet-B0 custom architecture'
                ],
                techStack: ['TensorFlow', 'EfficientNet-B0', 'Grad-CAM', 'RAG', 'Streamlit', 'XAI']
            }
        },
        {
            title: 'Hate Speech Detection',
            description: 'Multi-class fine-tuning for toxic content detection with F1-Weighted: 0.9357. Robust evaluation using ROC curves and F1 Score metrics.',
            tags: ['HateBERT', 'NLP'],
            metrics: ['F1: 93.57%'],
            icon: 'fa-comment-slash',
            github: 'https://github.com/YassirCher/hate-speech-detection-comparison'
        },
        {
            title: 'NeuroDerm AI',
            description: 'Advanced AI system for dermatological and neurological diagnosis using deep learning. Focuses on medical imaging analysis for healthcare applications.',
            tags: ['Medical AI', 'Deep Learning', 'Healthcare'],
            metrics: ['Medical AI'],
            icon: 'fa-user-md',
            github: 'https://github.com/YassirCher/NeuroDerm-AI',
            featured: true,
            coverImage: '/projects/neuroderm-ai/home.png',
            galleryImages: [
                {
                    src: '/projects/neuroderm-ai/home.png',
                    caption: 'Home — Skin Lesion Classifier with Xception Model'
                },
                {
                    src: '/projects/neuroderm-ai/gradcam.png',
                    caption: 'Grad-CAM — Explainable AI Heatmap Visualization'
                },
                {
                    src: '/projects/neuroderm-ai/result.png',
                    caption: 'Prediction Result — Lesion Info, Risk Level & Confidence'
                }
            ],
            detailInfo: {
                highlights: [
                    '94.76% accuracy with Xception deep learning model',
                    'Grad-CAM explainability for transparent AI decisions',
                    'Real-time skin lesion classification',
                    'Detailed lesion info: risk level, description, visual characteristics',
                    'API-connected with session analytics'
                ],
                techStack: ['Xception', 'Grad-CAM', 'TensorFlow', 'Flask', 'Deep Learning', 'Medical AI']
            }
        },
        {
            title: 'Realistic Text-to-Image',
            description: 'Text-to-image generation system using state-of-the-art diffusion models. Generates high-quality realistic images from text prompts.',
            tags: ['Generative AI', 'Diffusion', 'PyTorch'],
            metrics: ['Generative'],
            icon: 'fa-magic',
            github: 'https://github.com/YassirCher/Realistic-Text-to-Image-Generation'
        },
        {
            title: 'Text Clustering 20Newsgroups',
            description: 'Unsupervised text clustering on the 20 Newsgroups dataset using TF-IDF and clustering algorithms. Topic modeling and document similarity analysis.',
            tags: ['NLP', 'Clustering', 'Unsupervised'],
            metrics: ['Clustering'],
            icon: 'fa-project-diagram',
            github: 'https://github.com/YassirCher/text-clustering-20newsgroups'
        },
        {
            title: 'PathMNIST XAI Classification',
            description: 'Pathology image classification on PathMNIST dataset with explainable AI techniques. Kaggle competition entry for medical imaging challenges.',
            tags: ['Medical Imaging', 'XAI', 'Classification'],
            metrics: ['Kaggle'],
            icon: 'fa-microscope',
            github: 'https://github.com/YassirCher/pathmnist-xai-classification',
            coverImage: '/projects/pathmnist-xai/main.png',
            galleryImages: [
                {
                    src: '/projects/pathmnist-xai/main.png',
                    caption: 'Main Dashboard — PathMNIST Pathology Image Classifier'
                },
                {
                    src: '/projects/pathmnist-xai/prediction.png',
                    caption: 'Prediction View — Input Image & Tissue Classification'
                },
                {
                    src: '/projects/pathmnist-xai/grad-cam.png',
                    caption: 'Grad-CAM View — Visual Explanation of Model Decisions'
                },
                {
                    src: '/projects/pathmnist-xai/model stats.png',
                    caption: 'Model Stats — Training Progress and Validation Performance'
                }
            ],
            detailInfo: {
                highlights: [
                    'Classifies pathology slides from MedMNIST (PathMNIST dataset)',
                    'Deep convolutional neural network trained on histological tissues',
                    'Integrated Grad-CAM visualization for diagnostic explainability (XAI)',
                    'Interactive dashboard displaying training analytics and model performance metrics',
                    'Kaggle medical imaging challenge integration'
                ],
                techStack: ['PyTorch', 'Grad-CAM', 'XAI', 'CNN', 'Streamlit', 'Medical Imaging']
            }
        },
        {
            title: 'SDMW-MCP',
            description: 'Model Context Protocol (MCP) implementation for distributed AI systems. Modern approach to AI model integration and context management.',
            tags: ['MCP', 'AI Systems', 'Integration'],
            metrics: ['MCP Protocol'],
            icon: 'fa-cogs',
            github: 'https://github.com/YassirCher/SDMW-MCP'
        },
        {
            title: 'Agentic AI Research Assistant (Azure)',
            description: 'Production-ready multi-agent RAG research assistant with session-isolated retrieval, async document ingestion, citation-aware responses, and full-stack cloud-ready deployment.',
            tags: ['LangGraph', 'LangChain', 'FastAPI', 'React', 'ChromaDB', 'Docker', 'Azure'],
            metrics: ['Multi-Agent RAG', 'Production Ready'],
            icon: 'fa-brain',
            github: 'https://github.com/YassirCher/agentic-ai-research-assistant-azure',
            featured: true,
            coverImage: '/projects/agentic-research-assistant/research_ai_main_page.png',
            galleryImages: [
                {
                    src: '/projects/agentic-research-assistant/research_ai_main_page.png',
                    caption: 'Main Dashboard — Agentic AI Research Assistant with Emerald Forest Theme'
                },
                {
                    src: '/projects/agentic-research-assistant/question_uploaded_doc.png',
                    caption: 'Q&A Chat — Asking Questions on Uploaded Documents and Resuming Sessions'
                },
                {
                    src: '/projects/agentic-research-assistant/thought_process.png',
                    caption: 'Agent Diagnostics — Thought Process and Agentic RAG Analysis'
                }
            ],
            detailInfo: {
                highlights: [
                    'Production-ready multi-agent RAG system built on LangGraph & LangChain',
                    'Session-isolated retrieval allowing secure multi-tenant usage',
                    'Asynchronous document ingestion pipeline with citation-aware responses',
                    'Interactive frontend in React highlighting the agent\'s diagnostic thought process',
                    'Full-stack cloud-ready deployment with Docker support'
                ],
                techStack: ['LangGraph', 'LangChain', 'FastAPI', 'React', 'ChromaDB', 'Docker', 'Azure', 'RAG']
            }
        },
        {
            title: 'Smart Job Matcher (Neo4j + AI)',
            description: 'Big data HR platform for semantic job-candidate matching using graph analytics and LLM support, with dynamic career path visualization.',
            tags: ['Spring Boot', 'Angular', 'Neo4j', 'Groq LLM', 'D3.js'],
            metrics: ['Graph AI', 'Semantic Matching'],
            icon: 'fa-sitemap',
            github: 'https://github.com/YassirCher/Smart-Job-Matcher-Neo4j-AI',
            coverImage: '/projects/smart-job-matcher/dashboard_main_page.png',
            galleryImages: [
                {
                    src: '/projects/smart-job-matcher/dashboard_main_page.png',
                    caption: 'Main Dashboard — Smart HR Platform Overview'
                },
                {
                    src: '/projects/smart-job-matcher/profile_resume_intelligence.png',
                    caption: 'Profile Analysis — Resume & Portfolio Intelligence Engine'
                },
                {
                    src: '/projects/smart-job-matcher/create_job_from_prompt.png',
                    caption: 'Job Creation — Generating Structured Jobs from Prompts'
                },
                {
                    src: '/projects/smart-job-matcher/career_path_predictor.png',
                    caption: 'Career Coaching — Graph-Based Career Path Predictor'
                }
            ],
            detailInfo: {
                highlights: [
                    'Semantic job-candidate matching using Neo4j graph databases',
                    'Resume parsing and portfolio intelligence extraction powered by Groq LLM',
                    'Interactive career path visualization utilizing D3.js dynamic graphs',
                    'Generative AI job description designer from text prompts',
                    'Scalable HR microservices built on Spring Boot & Angular'
                ],
                techStack: ['Spring Boot', 'Angular', 'Neo4j', 'Groq LLM', 'D3.js', 'Graph Databases', 'Semantic Search']
            }
        },
        {
            title: 'DDI Relation Extraction (Medical NLP)',
            description: 'Biomedical NLP research project for Drug-Drug Interaction extraction with 30+ trained models and Flask dashboard for real-time model comparison.',
            tags: ['BioBERT', 'BiLSTM', 'PyTorch', 'Flask', 'Medical NLP'],
            metrics: ['30+ Models', 'Research Project'],
            icon: 'fa-notes-medical',
            github: 'https://github.com/YassirCher/DDI-Relation-Extraction-NLP',
            coverImage: '/projects/ddi-relation-extraction/model_zoo_main_page.png',
            galleryImages: [
                {
                    src: '/projects/ddi-relation-extraction/model_zoo_main_page.png',
                    caption: 'Model Zoo — Dashboard of 30+ Trained Medical NLP Models'
                },
                {
                    src: '/projects/ddi-relation-extraction/inference_page.png',
                    caption: 'Inference Page — Drug-Drug Interaction Input Interface'
                },
                {
                    src: '/projects/ddi-relation-extraction/inference_result.png',
                    caption: 'Prediction Result — Identified Interactions & Confidence Metrics'
                },
                {
                    src: '/projects/ddi-relation-extraction/model_comparison_page.png',
                    caption: 'Model Comparison — Setup for Benchmarking Multiple Architectures'
                },
                {
                    src: '/projects/ddi-relation-extraction/model_comparison_results.png',
                    caption: 'Performance Results — Comparative Precision, Recall, & F1 Scores'
                }
            ],
            detailInfo: {
                highlights: [
                    'Evaluated 30+ biomedical NLP model combinations for Drug-Drug Interaction extraction',
                    'Leverages state-of-the-art BioBERT and deep BiLSTM neural network embeddings',
                    'Interactive Flask dashboard for real-time inference and prediction output',
                    'Robust comparison engine benchmarking precision, recall, and F1 metrics',
                    'Streamlines medical information extraction and automated literature analysis'
                ],
                techStack: ['BioBERT', 'BiLSTM', 'PyTorch', 'Flask', 'Transformers', 'Spacy', 'Medical NLP']
            }
        },
        {
            title: 'Video Violence Detection Web App',
            description: 'End-to-end violence detection system with FastAPI backend and React frontend, benchmarking CNN-LSTM, R(2+1)D, YOLO+LSTM, and VideoMAE models.',
            tags: ['FastAPI', 'React', 'VideoMAE', 'Computer Vision'],
            metrics: ['F1: 0.98', 'Video AI'],
            icon: 'fa-video',
            github: 'https://github.com/YassirCher/Video-Violence-Detection-Web-App',
            coverImage: '/projects/video-violence-detection/main_page.png',
            galleryImages: [
                {
                    src: '/projects/video-violence-detection/main_page.png',
                    caption: 'Main Dashboard — Video Upload and Detection Setup'
                },
                {
                    src: '/projects/video-violence-detection/result_page.png',
                    caption: 'Result Page — Violence Detected with Frame-by-Frame Confidence Scores'
                }
            ],
            detailInfo: {
                highlights: [
                    'End-to-end real-time violence detection web application',
                    'FastAPI backend for high-throughput video processing and inference APIs',
                    'Benchmarks state-of-the-art architectures including VideoMAE, CNN-LSTM, R(2+1)D, and YOLO+LSTM',
                    'Achieves a benchmark F1-score of 0.98 on violence classification',
                    'Interactive React frontend displays localized alerts and confidence charts'
                ],
                techStack: ['FastAPI', 'React', 'VideoMAE', 'CNN-LSTM', 'R(2+1)D', 'YOLO', 'PyTorch', 'Computer Vision']
            }
        },
        {
            title: 'DL Face Recognition App',
            description: 'Trained and benchmarked 90 face-recognition model combinations, with an inference app and interactive dashboard for metric-driven model analysis.',
            tags: ['Face Recognition', 'Deep Learning', 'Model Benchmarking'],
            metrics: ['90 Models', 'Interactive Dashboard'],
            icon: 'fa-user-check',
            github: 'https://github.com/YassirCher/dl-face-recognition-app'
        }
    ]

    // Lock body scroll when modal is open
    useEffect(() => {
        if (activeModal !== null) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [activeModal])

    // Close on Escape
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') {
                if (lightboxImage) setLightboxImage(null)
                else if (activeModal !== null) closeModal()
            }
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [lightboxImage, activeModal])

    const openModal = (project) => {
        setActiveModal(project)
        setActiveThumb(0)
    }

    const closeModal = () => {
        setActiveModal(null)
        setLightboxImage(null)
        setActiveThumb(0)
    }

    const handleCardClick = (e, project) => {
        if (!project.galleryImages) return
        e.preventDefault()
        openModal(project)
    }

    return (
        <section className="section projects" id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Portfolio</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-description">A showcase of my AI/ML projects spanning computer vision, NLP, and production systems</p>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <article
                            className={`project-card ${project.featured ? 'featured' : ''} ${project.galleryImages ? 'has-gallery' : ''}`}
                            key={index}
                            onClick={(e) => handleCardClick(e, project)}
                        >
                            <div className="project-image">
                                {project.isPrivate && (
                                    <div className="private-badge-top">
                                        <i className="fas fa-lock" style={{ marginRight: '4px' }}></i> Private
                                    </div>
                                )}
                                {project.coverImage ? (
                                    <img
                                        src={project.coverImage}
                                        alt={project.title}
                                        className="project-cover-img"
                                    />
                                ) : (
                                    <div className="project-icon">
                                        <i className={`fas ${project.icon}`}></i>
                                    </div>
                                )}
                                {project.galleryImages && (
                                    <div className="project-image-badge">
                                        <i className="fas fa-images"></i>
                                        <span>{project.galleryImages.length}</span>
                                    </div>
                                )}
                                <div className="project-overlay">
                                    <div className="project-links">
                                        {project.galleryImages ? (
                                            <span className="project-link view-project" title="View Project Details">
                                                <i className="fas fa-expand-alt"></i>
                                            </span>
                                        ) : project.github && !project.isPrivate ? (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                                title="View Code"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <i className="fab fa-github"></i>
                                            </a>
                                        ) : (
                                            <span className="project-link private" title="Private Repository">
                                                <i className="fas fa-lock"></i>
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span className="tag" key={i}>{tag}</span>
                                    ))}
                                </div>
                                <h3 className="project-title">
                                    {project.github && !project.isPrivate && !project.galleryImages ? (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>{project.title}</a>
                                    ) : (
                                        <span>{project.title}</span>
                                    )}
                                </h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-metrics">
                                    {project.metrics.map((metric, i) => (
                                        <span className="metric" key={i}>
                                            <i className="fas fa-chart-line"></i> {metric}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* ========== PROJECT MODAL WIDGET ========== */}
                {activeModal && activeModal.galleryImages && (
                    <div className="modal-backdrop" onClick={closeModal}>
                        <div className="modal-widget" onClick={(e) => e.stopPropagation()}>
                            {/* Close button */}
                            <button className="modal-close" onClick={closeModal} aria-label="Close">
                                <i className="fas fa-times"></i>
                            </button>

                            {/* Main image viewer */}
                            <div className="modal-viewer">
                                <img
                                    src={activeModal.galleryImages[activeThumb].src}
                                    alt={activeModal.galleryImages[activeThumb].caption}
                                    className="modal-main-image"
                                    onClick={() => setLightboxImage(activeModal.galleryImages[activeThumb])}
                                />
                                <div className="modal-image-caption">
                                    {activeModal.galleryImages[activeThumb].caption}
                                </div>
                                {/* Nav arrows */}
                                {activeModal.galleryImages.length > 1 && (
                                    <>
                                        <button
                                            className="modal-nav modal-nav-prev"
                                            onClick={() => setActiveThumb((activeThumb - 1 + activeModal.galleryImages.length) % activeModal.galleryImages.length)}
                                            aria-label="Previous"
                                        >
                                            <i className="fas fa-chevron-left"></i>
                                        </button>
                                        <button
                                            className="modal-nav modal-nav-next"
                                            onClick={() => setActiveThumb((activeThumb + 1) % activeModal.galleryImages.length)}
                                            aria-label="Next"
                                        >
                                            <i className="fas fa-chevron-right"></i>
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Thumbnail strip */}
                            <div className="modal-thumbnails">
                                {activeModal.galleryImages.map((img, i) => (
                                    <button
                                        key={i}
                                        className={`modal-thumb ${activeThumb === i ? 'active' : ''}`}
                                        onClick={() => setActiveThumb(i)}
                                    >
                                        <img src={img.src} alt={img.caption} />
                                    </button>
                                ))}
                            </div>

                            {/* Project info */}
                            <div className="modal-info">
                                <div className="modal-info-header">
                                    <div className="modal-info-icon">
                                        <i className={`fas ${activeModal.icon}`}></i>
                                    </div>
                                    <div>
                                        <h3 className="modal-info-title">{activeModal.title}</h3>
                                        <p className="modal-info-desc">{activeModal.description}</p>
                                    </div>
                                </div>

                                <div className="modal-info-body">
                                    {/* Highlights */}
                                    {activeModal.detailInfo?.highlights && (
                                        <div className="modal-highlights">
                                            {activeModal.detailInfo.highlights.map((h, i) => (
                                                <div className="modal-highlight-item" key={i}>
                                                    <i className="fas fa-check"></i>
                                                    <span>{h}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Tech + Metrics row */}
                                    <div className="modal-tags-row">
                                        {activeModal.detailInfo?.techStack?.map((tech, i) => (
                                            <span className="modal-tech-tag" key={i}>{tech}</span>
                                        ))}
                                        {activeModal.metrics.map((m, i) => (
                                            <span className="modal-metric-tag" key={`m-${i}`}>
                                                <i className="fas fa-chart-line"></i> {m}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* GitHub CTA */}
                                <a
                                    href={activeModal.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="modal-github-btn"
                                >
                                    <i className="fab fa-github"></i>
                                    For more details & project images, visit GitHub
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                )}

                {/* ========== FULLSCREEN LIGHTBOX ========== */}
                {lightboxImage && (
                    <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
                        <button className="lightbox-close" onClick={() => setLightboxImage(null)}>
                            <i className="fas fa-times"></i>
                        </button>
                        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                            <img src={lightboxImage.src} alt={lightboxImage.caption} />
                            <p className="lightbox-caption">{lightboxImage.caption}</p>
                        </div>
                    </div>
                )}

                <div className="projects-cta">
                    <a href="https://github.com/YassirCher" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        <i className="fab fa-github"></i>
                        View All Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
