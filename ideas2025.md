# GSoC 2025 Ideas for RUXAILAB

All the current ideas for GSoC2025 are listed bellow:

## Big size projects (~350h)

  ### AI-Powered Accessibility Evaluation in RUXAILAB (350h)  
  This project aims to **develop a comprehensive AI-powered accessibility evaluation system** within RUXAILAB, focusing on **automating and enhancing WCAG compliance testing**. By integrating **artificial intelligence with semi-automated evaluation techniques**, this system will assist developers and usability experts in identifying and addressing accessibility barriers in digital content, including **websites, documents, and mobile applications**. The system will provide **detailed, multi-dimensional reports**, offering both **quantitative compliance scores** and **qualitative insights** in plain language.  
  
  **Key Features:**  
  - **Automated WCAG Compliance Testing:** Utilize **AI-enhanced evaluation tools** and integrate existing APIs (e.g., [WAVE API](https://wave.webaim.org/api/)) to generate **automated accessibility assessments**.  
  - **AI-Powered Accessibility Insights:** Implement **machine learning models** to **detect complex accessibility issues** that may not be captured by traditional automated tools, such as **color contrast issues, ARIA misconfigurations, and screen reader compatibility problems**.  
  - **Data Integration and Analysis:** Merge results from **automated tools and AI-generated insights**, creating a **comprehensive accessibility evaluation framework**.  
  - **Semi-Automated Expert Evaluation:** Enable expert evaluators to **refine AI-generated reports**, ensuring **higher evaluation accuracy and adaptability**.  
  - **Quantitative Compliance Scoring:** Establish a **numerical accessibility index** based on **WCAG success criteria**, enabling users to **track and compare** improvements over time.  
  - **Natural Language Summaries:** Use **AI-driven text generation** to translate technical accessibility reports into **readable, actionable insights** for designers, developers, and content creators.  
  - **Continuous Learning Mechanism:** Implement an AI model that **improves over time** by learning from expert evaluations and new accessibility guidelines.  
  
  **Keywords:** Artificial Intelligence (AI), Accessibility Testing, WCAG Compliance, Data Analysis, Machine Learning, Usability Evaluation  
  **Expected Outcome:** A **fully integrated AI-driven accessibility evaluation system** that enhances and automates **WCAG compliance testing**, making accessibility validation more efficient and insightful within RUXAILAB.  
  **Skills Required:** Python, JavaScript, AI for Data Analysis, Machine Learning, Accessibility Standards (WCAG), NLP for Report Generation  
  **Mentor:** Marc  
  **Difficulty:** Hard

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
  **Mentor:** Marc González  
  **Difficulty:** Hard


  ### Integration of Heat Maps into Remote Usability LAB (350h)  
  Heat maps encompass a variety of tracking tools, including **scroll maps, click maps, and move maps**, each providing distinct insights into user behavior. This project aims to **develop and integrate a comprehensive heatmap recording tool** for usability testing inside the **RUXAILAB** framework. The system will optimize **mouse tracking** and generate detailed reports on user interactions.  
  
  **Key Features:**  
  - **Comprehensive Heatmap Tracking:** Implementation of **scroll maps, click maps, and move maps** for a thorough performance analysis  
  - **Real-Time Data Collection:** AI-powered tracking to capture and visualize user interaction patterns  
  - **Optimized Mouse Tracking System:** Enhancing usability testing with advanced cursor movement analytics  
  - **Automated Report Generation:** AI-driven insights into user behavior for usability evaluation  
  - **Seamless RUXAILAB Integration:** Full compatibility with existing usability testing tools  
  
  **Keywords:** Artificial Intelligence (AI), Algorithm Optimization, JavaScript, Usability Testing, Front-end Development  
  **Expected Outcome:** A **fully integrated heatmap tracking system** that enhances usability testing in RUXAILAB by **analyzing user behavior and generating reports**  
  **Skills Required:** Python, JavaScript, AI for Data Analysis  
  **Mentor:** Murilo  
  **Difficulty:** Hard
  
  ---
  
  ### Integration of User Testing into RUXAILAB with Eye Tracking, Sentiment Analysis and Pre-Post Form Tasks (350h)  
  This project aims to **integrate advanced user testing capabilities into RUXAILAB**, incorporating **eye tracking, sentiment analysis, and structured pre/post-test forms**. By combining these elements, the system will provide **a comprehensive framework for usability testing**, offering insights into user behavior, emotional response, and engagement levels.  
  
  **Key Features:**  
  - **Eye Tracking Integration:** Analyze user gaze patterns to identify usability issues and areas of focus  
  - **Sentiment Analysis:** Utilize AI-driven sentiment detection to assess user emotions during interactions  
  - **Pre and Post-Test Forms:** Structured questionnaires to collect user expectations and post-experience feedback  
  - **Automated Data Analysis:** Generate real-time reports with actionable insights for improving usability  
  - **Seamless RUXAILAB Integration:** Ensure compatibility with existing usability testing workflows  
  
  **Keywords:** User Testing, Eye Tracking, Sentiment Analysis, AI, Usability Testing  
  **Expected Outcome:** A **fully integrated user testing framework** that enhances RUXAILAB by **capturing and analyzing user behavior, emotional responses, and structured feedback**  
  **Skills Required:** Python, JavaScript, AI/ML for Sentiment Analysis, Eye Tracking APIs  
  **Mentor:** Marc and Karine
  **Difficulty:** Hard


## Medium size projects (~175h)

### UI Layout Optimization for RUXAILAB (175h)  
This project aims to redesign the **RUXAILAB user interface (UI)** to improve **usability, accessibility, and responsiveness**. 

**Key Improvements:**  
- **Simplified Navigation:** Improved menu structure for seamless interaction  
- **Responsive Design:** Optimized for mobile, tablet, and desktop  
- **Accessibility Features:** WCAG-compliant color contrast, keyboard navigation, screen reader support  
- **Dark Mode & Custom Themes:** Enhancing user comfort for different environments  

**Keywords:** UI/UX Design, Accessibility, Front-end Development, , Usability Testing  
**Expected Outcome:** A fully **redesigned and accessible RUXAILAB interface**
**Skills Required:** JavaScript, Vue.js, CSS, Figma, AI for UI Optimization  
**Mentor:** Leticia  
**Difficulty:** Medium

---

### Comparative Analysis and Fine-Tuning of Sentiment Models for Improved System Integration (175h)  
This project focuses on **comparing and fine-tuning sentiment analysis models** to enhance **integration efficiency and scalability** within RUXAILAB. The goal is to analyze both **traditional performance metrics** and **operational scalability factors** to determine the most efficient sentiment models for real-time and batch processing scenarios.  

**Key Features:**  
- **Resource Efficiency Analysis:** Evaluate computation time, response latency, and initialization speed  
- **Performance Comparison:** Assess accuracy, F1-score, and contextual processing capabilities  
- **Scalability and Memory Management:** Optimize model performance under varying data loads  
- **Batch vs. Real-Time Processing:** Analyze trade-offs between batch processing and real-time sentiment detection  
- **Storage and Memory Optimization:** Identify strategies to minimize memory footprint while maintaining performance  
- **Monitoring and Observability:** Implement tracking mechanisms for efficient model oversight  

**Keywords:** Sentiment Analysis, Machine Learning, AI Optimization, Scalability, Performance Metrics  
**Expected Outcome:** A **comparative study and fine-tuned sentiment models** optimized for **scalability, resource efficiency, and real-time usability in RUXAILAB**  
**Skills Required:** Python, NLP, AI/ML, Model Optimization  
**Mentor:** Karine  
**Difficulty:** Medium

-----

### Transcription Tool for Usability Testing (175h)  
This project aims to **create a transcription service** designed to streamline **usability testing processes** within RUXAILAB. The service will allow testers to **activate transcription** during specific tasks of a test and provide an interface to **review and analyze transcriptions afterward**. By integrating real-time speech-to-text capabilities, usability researchers can better capture **verbal feedback** from users.  

**Key Features:**  
- **Task-Specific Transcription:** Testers can activate transcription for specific tasks during usability tests  
- **Post-Test Review and Editing:** An interface for reviewing, organizing, and editing transcriptions task by task  
- **Automated Report Generation:** Generate **comprehensive task-specific transcription reports** exportable in multiple formats (e.g., PDF, CSV)  
- **Seamless RUXAILAB Integration:** Ensuring compatibility with existing usability testing workflows  
- **Real-Time Speech-to-Text Processing:** Enable accurate transcription of verbal feedback during user testing  

**Keywords:** Speech-to-Text, Transcription, Usability Testing, AI, Automation  
**Expected Outcome:** A **task-based transcription system** integrated into RUXAILAB, allowing testers to **capture, analyze, and report usability test transcriptions efficiently**  
**Skills Required:** Python, NLP, Speech-to-Text APIs, Front-End Development  
**Mentor:** Anna  
**Difficulty:** Medium

-----

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

### Integration of GitHub Actions with Discord Role Management (90h)  
This project aims to **integrate GitHub Actions with Discord** to automate **role creation, pull request (PR) management, and collaboration analytics**. The system will enable **seamless automation** between GitHub repositories and Discord servers, ensuring that users receive appropriate roles based on their contributions and project interactions.  

**Key Features:**  
- **Automated Role Assignment:** Assign Discord roles based on GitHub contributions, such as merged PRs, issues opened, and commits  
- **Pull Request Management:** Automate PR reviews, label assignments, and notifications to Discord channels  
- **Collaborator Analytics:** Generate **visual charts** of contributors' activities and display them in Discord  
- **Customizable GitHub Actions:** Enable project maintainers to define rules for PR handling, auto-merging, and CI/CD notifications  
- **Seamless RUXAILAB Integration:** Extend usability for research and open-source projects  

**Keywords:** GitHub Actions, Discord API, Automation, Open Source Collaboration, Workflow Management  
**Expected Outcome:** A **GitHub Actions-powered integration** that automates **role management, PR handling, and contributor analytics** for Discord communities  
**Skills Required:** JavaScript, Python, GitHub Actions, Discord API  
**Mentor:** Leticia  
**Difficulty:** Easy

---


### Automating Issue Creation from SonarQube in CI/CD Pipelines (90h)  
This project focuses on **automating the creation of GitHub issues based on SonarQube analysis** in a **CI/CD pipeline**. By integrating SonarQube results into the development workflow, the system will automatically detect **code quality issues**, create GitHub issues, and notify maintainers for quick action.  

**Key Features:**  
- **Automated Issue Creation:** Detect new issues from SonarQube scans and create corresponding GitHub issues  
- **Severity-Based Issue Prioritization:** Categorize issues based on severity (Critical, Major, Minor)  
- **Pipeline Integration:** Ensure smooth integration with CI/CD workflows for real-time analysis  
- **Developer Notifications:** Automatically notify responsible developers about newly created issues  
- **Customizable Rules:** Allow maintainers to define which issues should trigger automatic creation  

**Keywords:** SonarQube, Software Quality, CI/CD, GitHub Actions, Automation  
**Expected Outcome:** A **fully automated issue tracking system** that integrates SonarQube with GitHub for **better software quality management**  
**Skills Required:** Python, JavaScript, GitHub Actions, SonarQube API  
**Mentor:** Leticia  
**Difficulty:** Easy  

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


