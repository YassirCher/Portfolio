# Portfolio Knowledge Base

## Profile Overview
**Name:** Yassir Chergui
**Title:** Data Science & AI Engineer
**Focus:** LLMs, multimodal LightRAG, multi-agent systems, Data Science, MLOps, and Computer Vision
**Status:** Graduated in 2026 with a Master of Excellence in Data Science and Artificial Intelligence from Université Moulay Ismail, Faculty of Science Meknès. Degree awarded with mention Très Bien.
**Availability:** Available immediately for AI/ML engineering or Data Science roles, or a pre-employment internship.
**Location:** Meknès, Morocco
**Contact:** Use the portfolio's Contact section.
**CV:** French CV available from the portfolio's Download CV (FR) button.

## Professional Summary
Yassir is an AI engineer and 2026 Master's graduate who builds end-to-end AI systems. His work spans LLM fine-tuning, multimodal LightRAG, LangGraph agent orchestration, hybrid graph and vector search, real-time computer vision, and production MLOps. His end-of-studies project, ThinkGraph AI, is a scientific research platform.

---

## Technical Skills

### Languages
- Python, Java, JavaScript, C++, SQL, Dart

### Frameworks & Libraries
- **AI/ML:** PyTorch, TensorFlow, Transformers, LangChain
- **Web:** Spring Boot, Angular, React, Tailwind CSS, FastAPI, Flask

### Tools & Platforms
- Docker, Azure, AWS, Git, Linux, Jupyter, Postman

### Key Concepts
- RAG (Retrieval Augmented Generation)
- MLOps (CI/CD for ML)
- Computer Vision (Object Detection, Segmentation)
- LLM Fine-tuning (PEFT/LoRA)
- Agentic AI systems

### Soft Skills
- Autonomous ownership: Yassir independently drives work from problem definition through delivery.
- Results driven and optimization focused: he aims for the best practical result, evaluates outcomes, and improves quality and efficiency.
- Critical thinking, team collaboration, and technical communication.

---

## Featured Projects

### ThinkGraph AI — 2026 End-of-Studies Project
**Source:** Private repository; code access is available on request through the portfolio's ThinkGraph section.
**Period:** 1 April to 8 September 2026. Completed PFE project.
**Overview:** Multimodal, multi-agent scientific research platform. It parses PDF text, figures, tables, formulas, and references into searchable evidence.
**Multimodal LightRAG:** Vision analysis converts figure knowledge into structured text before LightRAG extracts concepts and relationships. Neo4j stores graph knowledge, Qdrant stores vector evidence, and BGE-M3 generates embeddings. Hybrid retrieval combines semantic, graph, and keyword search.
**12 specialized agents and subagents:** Orchestrator routes work. Knowledge extraction, multimodal vision, table understanding, and formula understanding turn papers into structured evidence. Prompt refinement, graph memory, retrieval, and validation help answer research questions against sources. Report synthesis, presentation, and quiz generation create grounded outputs. The quiz agent is a separate page-grounded workflow; the table and formula understanding subagents are part of knowledge extraction.
**Stack:** Python, PyTorch, Hugging Face, LangGraph, LightRAG, FastAPI, Next.js, Neo4j, Qdrant, PostgreSQL, Redis, Docker, Azure.
**Media:** The portfolio includes a 12-second ThinkGraph AI introduction plus screenshots of multimodal paper extraction, an evidence-backed quiz, and the presentation studio.

### EcoForecaster — Energy Forecasting and MLOps
**Source:** https://github.com/YassirCher/Energy-Consumption-AI-Forecaster
**Overview:** Energy forecasting platform with 1-minute, 1-hour, and 24-hour predictions, SHAP explainability, drift detection, and specialist MLOps agents. Graph RAG helps ground AI-generated operational insights. Built with FastAPI, React, Docker, and Azure Container Apps.
**Gallery:** Real-time prediction chart, specialist-agent observability, drift intelligence, and SHAP feature explanations.

### Scientific QA LLM Fine-Tuning
**Source:** https://github.com/YassirCher/scientific-qa-llm-finetuning
**Overview:** Fine-tuned and evaluated 13 open language models on the QASPER scientific question-answering dataset using consistent preparation and evaluation workflows with QLoRA or LoRA. Phi-4-mini achieved the best controlled BERTScore F1 of 79.86% on 256 examples, as reported in Yassir's CV.
**Gallery:** Evaluation chart comparing validation perplexity and test BERTScore F1, training-hours comparison, and model training configurations. The card cover features DeepSeek, Qwen, Mistral, Llama, and Microsoft Phi model families.

### ReviewLens AI — Currently under build
**Source:** https://github.com/YassirCher/reviewlens-ai
**Status:** Currently under build. The V2 research experience is still in development.
**Overview:** The project analyzes YouTube product reviews and transcripts to produce evidence-backed buying reports, with source-level findings and an interactive evidence map.

### Biomedical LLM Fine-Tuning Benchmarks
**Source:** https://github.com/YassirCher/biomedical-llm-optimization
**Overview:** Compared standard QLoRA with Unsloth QLoRA while fine-tuning Qwen 2.5-7B on PubMedQA. Unsloth achieved a 1.28× speedup and 21.66% shorter training time while maintaining comparable 79% accuracy and 0.57 Macro F1.

### 1. AI E-commerce Agent (In Progress)
**Description:** Finalizing an AI-powered e-commerce platform featuring a fine-tuned Mistral 7B Agentic AI and recommendation system.
**Key Tech:** Spring Boot, Angular, Tailwind, Mistral 7B, HateBERT.
**Highlights:**
- Fine-tuned Mistral 7B for personalized product recommendations.
- Integrated HateBERT for robust hate speech detection in user reviews/comments.
- Microservices architecture for scalability.

### 2. Urban Security – Weapon Detection System
**Source:** [GitHub - Weapon_Detection_app](https://github.com/YassirCher/Weapon_Detection_app)
**Overview:** A Django-based real-time security surveillance system achieving 99.6% accuracy in detecting 9 weapon classes.
**Key Features:**
- **Real-Time Detection:** Instant analysis using YOLOv8.
- **Multi-Format Support:** Processes images, videos, and live streams.
- **Intelligent Classification:** Categorizes threats (Normal, Dangerous, Hyper-Dangerous).
- **AI Integration:** Google Gemini chatbot providing context-aware security recommendations.
**Tech Stack:**
- **Backend:** Django 5.2.7, Python 3.11.
- **AI/ML:** YOLOv8 (Ultralytics), OpenCV, PyTorch.
- **Frontend:** TailwindCSS, Alpine.js, Chart.js.

### 3. Mistral 7B Fine-tuning for E-commerce
**Source:** [GitHub - mistral-ecommerce-finetuning](https://github.com/YassirCher/mistral-ecommerce-finetuning)
**Overview:** Fine-tuning Mistral 7B Instruct v0.2 to create a specialized shopping assistant agent.
**Methodology:**
- **Technique:** QLoRA (Quantized Low-Rank Adaptation) for efficient training.
- **Hardware:** Trained on 2x Tesla T4 GPUs (~10 hours).
- **Performance:** Model converged successfully, capable of generating polite, context-aware customer support responses.

### 4. AG News Classification (MLOps on Azure)
**Source:** [GitHub - ag-news-mlops-azure](https://github.com/YassirCher/ag-news-mlops-azure)
**Overview:** End-to-end MLOps pipeline deploying a Linear SVM (91.34% accuracy) for news classification.
**Architecture:**
- **Pipeline:** GitHub Actions -> Docker Image -> Azure Container Registry (ACR) -> Azure Container Instance (ACI) -> FastAPI -> Streamlit UI.
**Key Features:**
- **MLOps:** Automated CI/CD pipeline.
- **Microservices:** Dockerized API and frontend.
- **Monitoring:** Integrated with Azure Application Insights.

### 5. Image Captioning (BLIP Fine-tuning)
**Source:** [GitHub - blip-image-captioning-finetune](https://github.com/YassirCher/blip-image-captioning-finetune)
**Overview:** Fine-tuning Salesforce BLIP on Flickr30k dataset for enhanced image description.
**Methodology:**
- **Model:** Salesforce/blip-image-captioning-base.
- **Dataset:** Flickr30k (31k+ images).
- **Training:** Dual T4 GPUs (~8 hours), reduced loss significantly.
- **Evaluation:** BLEU and ROUGE metrics used for quantitative assessment.

### 6. Hate Speech Detection (LSTM vs HateBERT)
**Source:** [GitHub - hate-speech-detection-comparison](https://github.com/YassirCher/hate-speech-detection-comparison)
**Overview:** Comparative analysis of LSTM and HateBERT for classifying "Hate Speech", "Offensive Language", and "Neither".
**Models:**
- **LSTM:** Word embeddings + 2 LSTM layers (100/50 units) + SMOTE for class balancing.
- **HateBERT:** BERT base uncased retrained on Reddit abusive communities, fine-tuned with weighted loss.
**Highlights:**
- Addressed severe class imbalance using SMOTE and weighted loss functions.

### 7. NeuroDerm AI (Skin Lesion Classifier)
**Source:** [GitHub - NeuroDerm-AI](https://github.com/YassirCher/NeuroDerm-AI)
**Overview:** End-to-end diagnostic system for skin lesions achieving 94.76% accuracy on HAM10000.
**Tech Stack:**
- **Frontend:** Flutter (Mobile App).
- **Backend:** Flask REST API.
- **AI:** Xception model fine-tuned on HAM10000.
**Explainability:** Generates Grad-CAM heatmaps to show users which skin regions triggered the diagnosis.

### 8. Realistic Text-to-Image Generation
**Source:** [GitHub - Realistic-Text-to-Image-Generation](https://github.com/YassirCher/Realistic-Text-to-Image-Generation)
**Overview:** Fine-tuning Realistic Vision V5.1 using LoRA for high-fidelity image generation.
**Key Features:**
- **LoRA:** Parameter-efficient fine-tuning on Flickr30k.
- **Evaluation:** Automated metrics including CLIP Score (Semantic Alignment) and VQA Accuracy.

### 9. Text Clustering (20 Newsgroups)
**Source:** [GitHub - text-clustering-20newsgroups](https://github.com/YassirCher/text-clustering-20newsgroups)
**Overview:** Advanced unsupervised clustering of text documents.
**Techniques:**
- **Embeddings:** TF-IDF vs Sentence-BERT (SBERT).
- **Dimensionality Reduction:** PCA vs UMAP.
- **Algorithms:** K-Means, DBSCAN, HDBSCAN, Agglomerative Clustering.
**Insight:** SBERT + UMAP + HDBSCAN yielded the best semantic separation of topics.

### 10. PathMNIST XAI Classification
**Source:** [GitHub - pathmnist-xai-classification](https://github.com/YassirCher/pathmnist-xai-classification)
**Overview:** Medical tissue classification achieving 93.13% accuracy (+2.4% over benchmark).
**Highlights:**
- **Model:** ResNet-18 trained on PathMNIST.
- **XAI:** Implemented Grad-CAM and Integrated Gradients (Captum) for clinical trust.
- **Interface:** Flask web app with risk assessment dashboard.

### 11. SDMW-MCP (Model Context Protocol)
**Source:** [GitHub - SDMW-MCP](https://github.com/YassirCher/SDMW-MCP)
**Overview:** Implementation of the Model Context Protocol integrating Spring Boot and Python.
**Features:**
- **Stack:** Spring Boot 3 (Java 21) + Spring AI + Python 3.12 (MCP SDK).
- **Capabilities:** Real-time stock info, file system operations, and memory-aware chat.
- **Architecture:** Tools provided via Python MCP server consumed by Spring Boot AI backend.

### 12. Alzheimer's Disease Classification (XAI + RAG)
**Source:** [GitHub - Alzheimer-MRI-Classification-XAI-RAG](https://github.com/YassirCher/Alzheimer-MRI-Classification-XAI-RAG) -> *Featured above*


---

## Education
**Master of Excellence in Data Science & AI**
*Université Moulay Ismail, Meknès (2024 – 2026)*
Degree awarded in 2026 with mention Très Bien.

**Bachelor (Licence) in SMI (Science Math Info)**
*Université Moulay Ismail, Meknès (2024)*
Mention Assez Bien.

## Certifications
- AWS Generative AI Applications
- IBM Machine Learning Professional Certificate
- OCI AI Foundations Associate
- Intermediate Machine Learning
