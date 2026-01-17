# GSoC 2026 Ideas for RUXAILAB

All the current ideas for GSoC2026 are listed bellow:

## Big size projects (~350h)

  ### AI Tool for Heuristic Evaluation (350h)  
  This project aims to **develop an AI-based heuristic evaluation tool** capable of **automatically assessing usability issues** in digital interfaces, mimicking the analysis of an **expert usability evaluator**. The system will apply **well-established usability heuristics**, such as **Nielsen’s Heuristics**, to evaluate web pages and **identify usability problems** based on structured guidelines. The tool will generate **detailed reports** with **quantitative scores** and **qualitative insights**, helping designers and developers improve their interfaces.  
  
  **Key Features:**  
  - **Automated Heuristic Evaluation:** Utilize AI to systematically **analyze web pages** based on usability heuristics.  
  - **Expert-Level Analysis:** Develop machine learning models trained on usability best practices to **identify common usability problems** such as **poor feedback, inconsistent navigation, and inefficient workflows**.  
  - **Multi-Dimensional Reporting:** Generate both **quantitative usability scores** and **qualitative insights** that explain detected usability issues similarly as RUXAILAB is doing right now.  
  - **Continuous Learning Mechanism:** Enhance evaluation accuracy by refining AI models based on **expert reviews and user feedback**.  
  - **Integration with RUXAILAB:** Seamlessly integrate with the existing usability evaluation tools within RUXAILAB.  
  
  **Keywords:** Artificial Intelligence (AI), Usability Testing, Heuristic Evaluation, Data Analysis, Machine Learning, UI/UX Optimization  
  **Expected Outcome:** A **fully automated heuristic evaluation tool** that functions as an **AI-based usability expert**, identifying and reporting usability issues based on standard heuristic guidelines.  
  **Skills Required:** Python, JavaScript, NLP for Report Generation  
  **Mentor:** Marc  
  **Difficulty:** Hard

### AI-Driven NLP Engine for Usability Test Results Analysis (350h)  

This project aims to **design and implement an NLP-based analysis engine** that automatically processes **qualitative usability test data**, including **open-ended answers, task observations, moderator notes, and transcripts**. The system will transform raw textual data into **structured insights**, supporting both **researchers and practitioners** in large-scale usability studies.

**Key Features:**  
- **Automatic Text Normalization & Cleaning**  
- **Semantic Analysis of User Feedback**  
- **Methodology-Aware Output (heuristics, SUS, NASA-TLX, user testing)**  
- **Explainable AI Outputs**  
- **Integration with RUXAILAB Reports**  

**Keywords:** NLP, Usability Testing, Qualitative Analysis, Explainable AI, UX Research  
**Expected Outcome:** An **NLP engine capable of transforming raw usability test text into structured, explainable insights**.  
**Skills Required:** Python, NLP (spaCy / transformers), Data Analysis  
**Mentor:** Marc  
**Difficulty:** Hard  


## Medium size projects (~175h)

### Unified Logging and Traceability System for Usability Studies (175h)  

This project aims to **implement a structured logging and traceability system** that records **all relevant events** during a usability study lifecycle.

**Key Features:**  
- **Study Lifecycle Logging**  
- **Multi-Layer Logs (technical, methodological, AI decisions)**  
- **Research Traceability**  
- **Export & Visualization Tools**  
- **Ethics & Anonymization Support**  

**Keywords:** Logging Systems, Research Traceability, UX Evaluation, Software Architecture  
**Expected Outcome:** A **comprehensive logging framework** for scientific-grade usability research.  
**Skills Required:** Python, Backend Development, Software Architecture  
**Mentor:** Marc  
**Difficulty:** Medium  

### Study-Aware Prompt Generation System for AI-Assisted Evaluations (175h)  

This project focuses on **designing a prompt-generation framework** that automatically creates **methodology-specific prompts** for AI-assisted usability and UX evaluations.

**Key Features:**  
- **Methodology Templates**  
- **Parameterizable Prompt Builder**  
- **Prompt Versioning & Traceability**  
- **Evaluation Alignment Checks**  
- **Seamless RUXAILAB Integration**  

**Keywords:** Prompt Engineering, UX Methodologies, AI Evaluation, Research Reproducibility  
**Expected Outcome:** A **robust prompt-generation subsystem** ensuring consistent and reproducible AI-based evaluations.  
**Skills Required:** Python, Prompt Engineering, UX Research Methods  
**Mentor:** Marc  
**Difficulty:** Medium  

### Implementation of A/B Testing Capability in RUXAILAB (175h)  
This project focuses on **implementing A/B testing functionality within RUXAILAB** to enhance usability evaluation and data-driven decision-making. The goal is to provide an integrated system for running **controlled experiments**, comparing different UI designs, and gathering insights on user preferences.  

**Key Features:**  
- **Automated A/B Test Setup:** Allow testers to configure and manage A/B tests within RUXAILAB  
- **Real-Time Performance Tracking:** Collect user interaction data for different variations  
- **Statistical Analysis Module:** Provide insights on test results using key performance indicators  
- **User Segmentation:** Enable tests based on demographic, behavior, or experience level  
- **Seamless UI Integration:** Ensure compatibility with existing usability testing workflows  

**Keywords:** A/B Testing, User Experience, Usability Testing, Data Analysis, Front-End Development  
**Expected Outcome:** A **fully integrated A/B testing module** that allows usability researchers to conduct controlled experiments and make data-driven design decisions in RUXAILAB  
**Skills Required:** JavaScript, Python, Data Analysis, UI/UX Testing  
**Mentor:** Igor  
**Difficulty:** Medium

## Small size projects (~90h)

---

### Enhancing Playwright Testing in RUXAILAB (90h)  
This project aims to **refine and optimize Playwright-based automated testing** in RUXAILAB, improving test efficiency and documentation to enhance maintainability and ease of use. The focus will be on **ensuring robust test coverage, optimizing test workflows, and developing comprehensive documentation** to support contributors.  

**Key Features:**  
- **Improving Test Maintainability:** Refactor test scripts for better reusability and efficiency  
- **Cross-Browser and Device Compatibility:** Ensure consistent behavior across different browsers and devices  
- **Accessibility Testing Enhancements:** Strengthen WCAG compliance validation for UI components  
- **Comprehensive Documentation:** Develop detailed guides on test creation, execution, and maintenance  
- **Integration with CI/CD Pipelines:** Enhance GitHub Actions workflows for streamlined automated testing  

**Keywords:** Playwright, Automated Testing, UI Testing, Accessibility, Documentation  
**Expected Outcome:** A **more maintainable and well-documented Playwright testing framework**, ensuring long-term usability and ease of contribution in RUXAILAB  
**Skills Required:** JavaScript, Playwright, Automated Testing, CI/CD, GitHub Actions, Technical Writing  
**Mentor:** Eric  
**Difficulty:** Easy

