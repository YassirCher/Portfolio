# Portfolio Knowledge Base

## Profile Overview
**Name:** Yassir Chergui
**Title:** Data Science & AI Engineer
**Focus:** Computer Vision, Generative AI, MLOps
**Status:** Master's student in Data Science & AI at Université Moulay Ismail, Meknès. Available for 4-6 month PFE Internship.
**Location:** Meknès, Morocco
**Contact:** cherguiyassir1@gmail.com | +212 693 534 651

## Professional Summary
Passionate AI Engineer specializing in designing and deploying end-to-end AI systems. Expertise spans from fine-tuning large language models (Mistral 7B) to building real-time computer vision pipelines (YOLOv8) and production-ready MLOps workflows. Dedicated to creating AI solutions for real-world problems in security, e-commerce, and healthcare.

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

---

## Featured Projects

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
Currently in S3. S1 & S2 Grade: Good.

**Bachelor (Licence) in SMI (Science Math Info)**
*Université Moulay Ismail, Meknès (2024)*
Honors: Assez Bien (S6: Très Bien).

## Certifications
- AWS Generative AI Applications
- IBM Machine Learning Professional Certificate
- OCI AI Foundations Associate
- Intermediate Machine Learning
