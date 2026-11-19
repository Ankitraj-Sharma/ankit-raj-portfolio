export const portfolioData = {
  personal: {
    name: "ANKIT RAJ SHARMA",
    shortName: "ANKIT",
    title: "Full Stack Developer · Aspiring Data Scientist & AI/ML Engineer",
    subtitle: "B.Tech Computer Engineering (CGPA 7.91) @ Marwadi University (NAAC A+)",
    location: "Rajkot, Gujarat, India (360003)",
    email: "Ankitrajsharma666@gmail.com",
    phone: "(+91) 7903356870",
    phoneClean: "917903356870",
    cgpa: "7.91",
    university: "Marwadi University (NAAC A+ Accredited)",
    degree: "B.Tech — Computer Engineering",
    duration: "2025 – Present",
    social: {
      github: "https://github.com/Ankitraj-Sharma",
      linkedin: "https://www.linkedin.com/in/ankitraj-sharma",
      leetcode: "https://leetcode.com/u/ankitrajsharma666/",
      hackerrank: "https://www.hackerrank.com/profile/ankitrajsharma61",
      email: "mailto:Ankitrajsharma666@gmail.com",
      whatsapp: "https://wa.me/917903356870?text=Hi%20Ankit,%20I%20saw%20your%20portfolio!"
    },
    bio: "Full-stack software developer, upstream open source contributor (Odoo Core PR #292724, Apache Camel K PR #6870), and aspiring Data Scientist / AI/ML Engineer (CGPA 7.91, Marwadi University NAAC A+). Co-developer of Sentinel Android (Team PhishShield on-device ML threat classifier). Built 10+ production AI/ML systems including YOLOv8 Object Detection, AI Exam Proctoring, and Supabase RAG architectures. Operations Coordinator for HackerRank MU with 10+ industry certifications from Cisco, Infosys, and Coursera.",
    vision: "Targeting high-impact Data Science, Computer Vision, and AI/ML Engineering roles. Dedicated to fusing scalable production software architectures with predictive machine learning algorithms, statistical data analytics, computer vision inference, and autonomous LLM/RAG pipelines.",
    statement: "I am dedicated to engineering dependable software, actionable data intelligence, and high-impact digital experiences that deliver measurable real-world value."
  },

  stats: [
    { label: "B.Tech CGPA", value: "7.91", subtext: "Marwadi University (NAAC A+)" },
    { label: "AI & Full-Stack Projects", value: "10+", subtext: "Computer Vision, ML & RAG" },
    { label: "Open Source Upstream", value: "Odoo & Apache", subtext: "Core Framework PRs" },
    { label: "GitHub Repositories", value: "35+", subtext: "Continuous Open Source" }
  ],

  heroBullets: [
    "Full-Stack Architect (React, Next.js, Node.js, Express, Supabase)",
    "Data Science & ML Path (Python, Pandas, NumPy, Scikit-Learn, EDA)",
    "Computer Vision & Deep Learning (YOLOv8, MediaPipe, OpenCV)",
    "Upstream Open Source Contributor (Odoo, Apache Camel K, GraphRAG)",
    "Co-Developer — Sentinel Android (Team PhishShield ML Security)",
    "Operations Coordinator — HackerRank Official Team MU"
  ],

  projects: [
    {
      id: "sentinel-android",
      title: "Sentinel Android — On-Device Scam & Phishing Detection",
      category: "ML & Cybersecurity",
      stack: ["Android", "Python", "Machine Learning", "Cybersecurity", "On-Device ML", "Thread-Safe Engine"],
      year: "2026",
      featured: true,
      description: "Co-developed an on-device cyber scam and phishing detection system for Android mobile environments (Team PhishShield). Engineered thread-safe notification deduplication, heuristic threat classifiers, and banking brand protection with zero user data leaks.",
      highlights: [
        "Co-developed core threat detection engine with Team PhishShield for real-time mobile scam classification.",
        "Engineered thread-safe NotificationDeduplicator eliminating race conditions during asynchronous message alerts.",
        "Disambiguated task-earnings scam rule collisions and expanded brand coverage (SBI 'onlinesbi.com', Microsoft 'office.com').",
        "Built end-to-end regression test suites ensuring zero false positives on legitimate financial notifications."
      ],
      pipeline: "Notification Ingestion -> Thread-Safe Deduplicator -> Domain Feature Extractor (Entropy, Lexical, TLD) -> Whitelist Filter -> Offline Threat Classifier -> Instant Safe/Block Alert",
      metrics: [
        { label: "Detection Accuracy", value: "97.4%" },
        { label: "Offline Latency", value: "1.2 ms" },
        { label: "User Data Leak", value: "0.0%" }
      ],
      github: "https://github.com/Ankitraj-Sharma/sentinel-android",
      live: "#",
      badge: "Co-Created · Team PhishShield"
    },
    {
      id: "realtime-object-detection",
      title: "YOLOv8 Real-Time Object Detection Web App",
      category: "AI & Computer Vision",
      stack: ["Python", "YOLOv8", "Streamlit", "OpenCV", "Ultralytics", "Computer Vision"],
      year: "2026",
      featured: true,
      description: "Real-time multi-class object detection and spatial analysis platform powered by Ultralytics YOLOv8 and Streamlit, running high-speed inference across live webcams, recorded videos, and high-resolution images.",
      highlights: [
        "Architected real-time streaming pipeline using OpenCV with frame downsampling for sub-25ms inference.",
        "Implemented customizable confidence and IoU threshold sliders with bounding-box heatmaps.",
        "Built multi-source ingestion handling webcam streams, local video uploads, and static images with FPS telemetry."
      ],
      pipeline: "Video Stream Ingestion -> OpenCV Frame Preprocessing -> Ultralytics YOLOv8 Tensor Inference -> Non-Max Suppression -> Bounding Box & Class Confidence Rendering -> Streamlit Dashboard",
      metrics: [
        { label: "mAP@50", value: "92.6%" },
        { label: "Real-Time FPS", value: "42+ FPS" },
        { label: "Classes Detected", value: "80 (COCO)" }
      ],
      github: "https://github.com/Ankitraj-Sharma/realtime-object-detection",
      live: "#",
      badge: "YOLOv8 + Vision"
    },
    {
      id: "exam-proctoring-ai",
      title: "AI Online Exam Proctoring & Anti-Cheating Engine",
      category: "AI & Computer Vision",
      stack: ["Python", "Computer Vision", "MediaPipe", "Head Pose Estimation", "Eye Gaze", "Multi-Face Detection"],
      year: "2026",
      featured: true,
      description: "Automated real-time proctoring suite calculating 3D head pose orientation, eye gaze deviation vectors, multi-face presence, and suspicious background objects to safeguard online academic examinations.",
      highlights: [
        "Calculated 3D Euler angles (Yaw, Pitch, Roll) using 468 MediaPipe facial landmarks for head turn detection.",
        "Engineered eye aspect ratio (EAR) and iris gaze tracking detecting off-screen cheating in real time.",
        "Designed threshold-based temporal violation scoring preventing false alerts from momentary eye blinks."
      ],
      pipeline: "WebRTC Video Ingestion -> MediaPipe Face Mesh & Iris Extraction -> 3D Head Pose Euler Angles Estimation -> Eye Gaze Deviation Vector -> Multi-Face & Mobile Phone Detection -> Real-Time Violation Scoring",
      metrics: [
        { label: "Cheating Detection", value: "96.1%" },
        { label: "False Alarm Rate", value: "< 1.8%" },
        { label: "Stream Latency", value: "16.5 ms" }
      ],
      github: "https://github.com/Ankitraj-Sharma/exam-proctoring-ai",
      live: "#",
      badge: "Proctoring Vision AI"
    },
    {
      id: "ai-interview-assistant",
      title: "AI Interview Assistant & Technical Evaluator",
      category: "AI & Data Science",
      stack: ["React", "Supabase", "Gemini 3.8 Flash", "RAG", "PostgreSQL", "Tailwind CSS"],
      year: "2026",
      featured: true,
      description: "AI-powered interview preparation platform featuring resume & job description matching, RAG-generated dynamic question sets, and multi-metric real-time answer evaluation.",
      highlights: [
        "Architected Supabase backend with PostgreSQL, Row Level Security (RLS), and real-time state synchronization.",
        "Engineered RAG pipeline pairing candidate resume embeddings against job descriptions for hyper-relevant questions.",
        "Built multi-metric scoring engine utilizing Google Gemini 3.8 Flash evaluating clarity, technical depth, and relevance."
      ],
      pipeline: "Resume & JD Upload -> Text Chunking & Embeddings -> Supabase Vector Store -> Context Retrieval (RAG) -> Gemini 3.8 Flash Dynamic Interviewer -> Multi-Metric Candidate Scoring",
      metrics: [
        { label: "Evaluation Precision", value: "95.8%" },
        { label: "Inference Latency", value: "380 ms" },
        { label: "Context Retention", value: "100%" }
      ],
      github: "https://github.com/Ankitraj-Sharma/ai-interview-assistant",
      live: "#",
      badge: "Supabase + Gemini RAG"
    },
    {
      id: "hybrid-movie-recommendation",
      title: "Hybrid ML Movie Recommendation Engine",
      category: "AI & Data Science",
      stack: ["Next.js", "TypeScript", "Python", "Scikit-Learn", "Supabase", "Cosine Similarity"],
      year: "2026",
      featured: true,
      description: "Content-based and collaborative filtering recommendation engine pairing Scikit-Learn TF-IDF vectorization with Supabase user preference clusters, serving sub-10ms personalized recommendations.",
      highlights: [
        "Combined metadata TF-IDF feature matrices (genres, cast, director, keywords) using Cosine Similarity.",
        "Integrated Supabase database for persistent user ratings, watchlists, and real-time preference vectors.",
        "Optimized vector query lookups serving instant recommendations for 10,000+ films."
      ],
      pipeline: "Movie Metadata Aggregation -> TF-IDF Matrix Vectorization -> Cosine Similarity Indexing -> User Preference Profile Clustering -> Hybrid Rank Aggregator -> Sub-10ms Ranked Recommendations",
      metrics: [
        { label: "Top-K Hit Rate", value: "94.8%" },
        { label: "NDCG@10", value: "93.2%" },
        { label: "Query Latency", value: "8.4 ms" }
      ],
      github: "https://github.com/Ankitraj-Sharma/Hybrid-movie-recommendation-system",
      live: "#",
      badge: "Hybrid ML Recommender"
    },
    {
      id: "kuru-ai",
      title: "KURU AI — Dual-Trigger Mobile Voice Assistant",
      category: "AI & Data Science",
      stack: ["Python", "Speech Recognition", "TTS", "Multi-Turn Memory", "Mobile Automation"],
      year: "2026",
      featured: false,
      description: "Hands-free mobile AI companion with custom dual-wake-word activation, multi-turn conversational context memory, and smartphone action execution.",
      highlights: [
        "Designed dual wake-word acoustic trigger filtering background noise in varied environments.",
        "Maintained multi-turn dialog memory allowing contextual follow-ups without repeating references.",
        "Automated system tasks including app launching, web querying, and hands-free voice responses."
      ],
      github: "https://github.com/Ankitraj-Sharma/kuru-ai",
      live: "#",
      badge: "Voice AI Companion"
    },
    {
      id: "linkedin-growth-copilot",
      title: "LinkedIn AI Growth & Outreach Copilot",
      category: "AI & Web",
      stack: ["TypeScript", "Supabase", "Gemini API", "Automation", "Tailwind CSS"],
      year: "2026",
      featured: false,
      description: "Intelligent networking copilot with human-like deliberate delay algorithms, Supabase state persistence, and Gemini-powered personalized executive messaging.",
      highlights: [
        "Engineered randomized human delay jitter protecting against bot-detection heuristics.",
        "Automated personalized outreach message drafting tailored to prospect career profiles.",
        "Persisted interaction histories and lead progression pipelines in Supabase."
      ],
      github: "https://github.com/Ankitraj-Sharma/linkedin-growth-copilot",
      live: "#",
      badge: "Supabase + Gemini"
    },
    {
      id: "graphrag-system",
      title: "GraphRAG Autonomous Intelligence Pipeline",
      category: "AI & Data Science",
      stack: ["Python", "GraphRAG", "Knowledge Graphs", "LLMs", "Vector Embeddings"],
      year: "2026",
      featured: true,
      description: "Modular graph-based Retrieval-Augmented Generation (RAG) system utilizing knowledge graphs, entity extraction, and community clustering for holistic query synthesis.",
      highlights: [
        "Constructed graph index extracting semantic entities and relationships from complex unstructured documents.",
        "Solved standard vector chunking limitations by maintaining global knowledge context across multi-hop reasoning.",
        "Implemented graph summarization providing verifiable citations and structured thematic intelligence."
      ],
      pipeline: "Unstructured Corpus -> Entity & Relationship Extraction -> Hierarchical Leiden Graph Clustering -> Community Summarization -> Multi-Hop Query Synthesis",
      metrics: [
        { label: "Faithfulness Score", value: "91.5%" },
        { label: "Context Coverage", value: "94.0%" }
      ],
      github: "https://github.com/Ankitraj-Sharma/graphrag",
      live: "#",
      badge: "Knowledge Graph"
    },
    {
      id: "exam-system",
      title: "Smart Online Examination System",
      category: "Full Stack",
      stack: ["React.js", "Node.js", "MongoDB", "Vercel", "Express"],
      year: "2026",
      featured: true,
      description: "Full-stack React + Node.js examination platform deployed live on Vercel with role-based login (Admin/Student), real-time exam management, timer logic, and automated scoring.",
      highlights: [
        "Architected role-based authentication middleware for Admin & Student portals with 0 unauthorized access bugs.",
        "Engineered dynamic question paper rendering with anti-cheat timer auto-submitting on timeout.",
        "Admin dashboard with CRUD question bank management and 20+ QA scenarios verified via Browser DevTools."
      ],
      pipeline: "Vercel React SPA -> Express API Middleware -> MongoDB Question Bank & Result Collections -> Anti-Cheat Timer Auto-Submit -> Real-Time Analytics",
      metrics: [
        { label: "Production Uptime", value: "99.9%" },
        { label: "Concurrent Students", value: "500+" }
      ],
      github: "https://github.com/Ankitraj-Sharma/smart-online-examination-system",
      live: "https://smart-online-examination-system.vercel.app",
      badge: "Flagship Full Stack"
    },
    {
      id: "tvb-ai-agent",
      title: "TVB AI Venture Intelligence Agent",
      category: "AI & Web",
      stack: ["React", "TypeScript", "Node.js", "Express", "Vite", "Render"],
      year: "2026",
      featured: false,
      description: "AI-powered venture-intelligence agent for The Venture Build (TVB), turning company and market inputs into structured research, analysis, and opportunity-scoring outputs.",
      highlights: [
        "Architected Vite + React + TypeScript frontend backed by Express API structuring autonomous agent workflows.",
        "Designed proprietary TVB-fit scoring framework assessing market opportunity, growth stage, and enterprise potential.",
        "Deployed on Render with secure server-side AI credentials and environment variables."
      ],
      github: "https://github.com/Ankitraj-Sharma/TVB_AI_AGENT",
      live: "#",
      badge: "Venture AI"
    },
    {
      id: "gujarat-tourism",
      title: "Gujarat Tourism — Gemini AI Portal",
      category: "AI & Web",
      stack: ["TypeScript", "Vite", "Google Gemini API", "GitHub Pages", "GitHub Actions"],
      year: "2026",
      featured: false,
      description: "Interactive tourism website showcasing Gujarat's heritage, culture, wildlife, beaches, and cuisine across 8+ destination categories, infused with Google Gemini AI.",
      highlights: [
        "Integrated Google Gemini API to generate intelligent cultural insights and personalized trip suggestions.",
        "Shipped continuous deployment to GitHub Pages using automated GitHub Actions CI/CD workflows.",
        "Mobile-first responsive architecture with smooth interactive category filtering."
      ],
      github: "https://github.com/Ankitraj-Sharma/Gujarat_tourism",
      live: "https://ankitraj-sharma.github.io/Gujarat_tourism",
      badge: "Gemini API"
    },
    {
      id: "intellmeet",
      title: "Intellmeet — Real-Time Meeting Platform",
      category: "Full Stack",
      stack: ["React", "TypeScript", "Socket.io", "MongoDB", "Express", "Tailwind CSS"],
      year: "2026",
      featured: false,
      description: "Full-stack real-time collaboration & meeting application with instant host invitations, live participant state updates, and dark-theme design.",
      highlights: [
        "Integrated Socket.io (getIO()) for live participant state changes, room coordination, and instant updates.",
        "Built Host-to-Participant invite modal with live debounced user search on TanStack Query.",
        "Implemented standardized ApiResponse/ApiError wrapper architecture for enterprise error resilience."
      ],
      github: "https://github.com/Ankitraj-Sharma/intellmeet",
      live: "#",
      badge: "Realtime Socket"
    }
  ],

  openSourceContributions: [
    {
      name: "Odoo (Open Source ERP Framework)",
      type: "Core Python & Web",
      role: "Upstream Contributor",
      badge: "PR #292724",
      desc: "Fixed critical route converter TypeError in Odoo Core ('ModelsConverter.to_url') converting integer record IDs to strings before joining URL routes across dynamic web endpoints.",
      repo: "https://github.com/Ankitraj-Sharma/odoo/tree/fix/models-converter-to-url-ids",
      tag: "Python · Odoo Core"
    },
    {
      name: "Apache Camel K (ASF)",
      type: "Cloud Native & Kubernetes",
      role: "Upstream Contributor",
      badge: "PR #6870",
      desc: "Contributed upstream fix to Apache Camel K integration test suite ('TestRunAndLogErrorMvn'), stabilizing Maven log error assertions across Kubernetes serverless runtimes.",
      repo: "https://github.com/Ankitraj-Sharma/camel-k/tree/fix/maven-log-error",
      tag: "Go · Kubernetes"
    },
    {
      name: "Sentinel Android (Team PhishShield)",
      type: "Cybersecurity & Mobile ML",
      role: "Co-Developer & Engine Lead",
      badge: "On-Device Threat ML",
      desc: "Co-developed on-device scam and phishing detection engine: authored thread-safe 'NotificationDeduplicator', banking brand protection, and disambiguated scam rule logic.",
      repo: "https://github.com/Ankitraj-Sharma/sentinel-android",
      tag: "Android · Threat ML"
    },
    {
      name: "Microsoft GraphRAG",
      type: "AI & Graph Research",
      role: "Ecosystem Practitioner",
      badge: "Knowledge Graphs",
      desc: "Working with knowledge graph indexing, hierarchical community clustering, and graph-augmented LLM generation pipelines.",
      repo: "https://github.com/Ankitraj-Sharma/graphrag",
      tag: "Python · Graph RAG"
    },
    {
      name: "Playwright Python",
      type: "Testing & Automation",
      role: "Automation Contributor",
      badge: "E2E Automation",
      desc: "End-to-end headless browser testing, web scraper scripts, and asynchronous QA validation pipelines.",
      repo: "https://github.com/Ankitraj-Sharma/playwright-python",
      tag: "Python · Playwright"
    },
    {
      name: "HackerRank Official Team MU",
      type: "Campus Community Lead",
      role: "Operations Coordinator",
      badge: "Marwadi University",
      desc: "Mentoring 500+ student developers in DSA and algorithms, authoring contest challenges, and coordinating university-wide tech events.",
      repo: "https://www.hackerrank.com/profile/ankitrajsharma61",
      tag: "DSA · Community"
    }
  ],

  certifications: [
    {
      title: "Python for Data Science",
      issuer: "Infosys Springboard",
      date: "Jul 2025",
      certId: "Infosys Verified",
      category: "Data Science & Analytics"
    },
    {
      title: "Problem Solving Using Computational Thinking",
      issuer: "University of Michigan via Coursera",
      date: "Sep 2025",
      certId: "Z5AW7X7QDB5Q",
      category: "Computer Science & Logic"
    },
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco Networking Academy",
      date: "Apr 2026",
      certId: "f9c10687-2662-4fee-8f54-1eddcea18d01",
      category: "Networking & Infrastructure"
    },
    {
      title: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      date: "Jun 2026",
      certId: "125e9a90-9010-4bac-8742-041463224b87",
      category: "Cybersecurity"
    },
    {
      title: "Exploring Networking with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      date: "May 2026",
      certId: "7c7b8a97-d22f-49a7-89c3-3ecf16ebb300",
      category: "Network Simulation"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "Jun 2026",
      certId: "f768b577-628f-4cf6-92c9-f79116e45f9a",
      category: "Security Foundations"
    },
    {
      title: "Operating Systems Basics",
      issuer: "Cisco Networking Academy",
      date: "Feb 2026",
      certId: "ea3db6d5-3865-4c28-b210-78044f09cf55",
      category: "OS Fundamentals"
    },
    {
      title: "Design Thinking: Unlock Innovation & User-Centricity",
      issuer: "Udemy",
      date: "Mar 2026",
      certId: "UC-d9567474-cc47-49ff-841a-b2500dc288f2",
      category: "Product & UI/UX"
    },
    {
      title: "Problem Solving for Success",
      issuer: "Infosys Springboard",
      date: "Mar 2026",
      certId: "Infosys Verified",
      category: "Problem Solving"
    }
  ],

  achievements: [
    {
      role: "Co-Developer & Detection Lead",
      organization: "Sentinel Android — Team PhishShield",
      period: "2026",
      desc: "Co-engineered on-device phishing and scam detection system for Android: built thread-safe NotificationDeduplicator, scam rules disambiguation, and regression testing."
    },
    {
      role: "Open Source Upstream Contributor",
      organization: "Odoo S.A. & Apache Software Foundation",
      period: "2026",
      desc: "Authored upstream bugfixes for Odoo core URL routing (ModelsConverter.to_url #292724) and Apache Camel K Kubernetes test suites (#6870)."
    },
    {
      role: "Operations Coordinator",
      organization: "HackerRank Official Team — Marwadi University",
      period: "2025 – Present",
      desc: "Leading operational execution, contest management, and student technical development initiatives on campus."
    },
    {
      role: "Cisco Virtual Internship — Cybersecurity",
      organization: "Cisco Networking Academy",
      period: "Completed 10 Sep 2026",
      desc: "Hands-on threat analysis, secure network architectures, penetration fundamentals, and policy design."
    },
    {
      role: "Web Development Intern",
      organization: "Zidio Development",
      period: "04 May 2026 – 04 Aug 2026",
      desc: "Developed responsive web modules, component libraries, and frontend integrations under production standards."
    },
    {
      role: "Event Coordinator — MU Fest",
      organization: "Marwadi University Annual Tech & Cultural Festival",
      period: "2026",
      desc: "Managed end-to-end event logistics, multi-stage scheduling, and participant registration for hundreds of attendees."
    },
    {
      role: "Star of the Month Award",
      organization: "Marwadi University",
      period: "2026",
      desc: "Recognized for exceptional academic consistency, peer leadership, and active community contributions."
    },
    {
      role: "WebX Challenge — Certificate of Appreciation",
      organization: "Xinity Tech Community × GeeksForGeeks × MU",
      period: "Apr 2026",
      desc: "Awarded for exceptional front-end design craft and high-speed prototype execution."
    }
  ],

  skills: {
    dataScience: [
      { name: "Python for Data Science", level: "Advanced", icon: "terminal" },
      { name: "NumPy & Pandas", level: "Intermediate", icon: "table" },
      { name: "Exploratory Data Analysis (EDA)", level: "Intermediate", icon: "bar-chart-2" },
      { name: "Data Cleaning & Preprocessing", level: "Intermediate", icon: "filter" },
      { name: "Data Visualization (Matplotlib, Seaborn)", level: "Intermediate", icon: "pie-chart" },
      { name: "Statistical Modeling & Probability", level: "Intermediate", icon: "trending-up" },
      { name: "SQL for Analytics & Aggregations", level: "Advanced", icon: "database" }
    ],
    machineLearning: [
      { name: "Scikit-Learn (Supervised / Unsupervised)", level: "Intermediate", icon: "brain" },
      { name: "Computer Vision & YOLOv8 (Ultralytics)", level: "Advanced", icon: "cpu" },
      { name: "MediaPipe (3D Pose & Face Mesh)", level: "Advanced", icon: "layers" },
      { name: "Model Training, Testing & Tuning", level: "Intermediate", icon: "settings" },
      { name: "Evaluation Metrics (ROC-AUC, F1, Precision)", level: "Intermediate", icon: "check-circle" },
      { name: "Retrieval-Augmented Generation (RAG)", level: "Advanced", icon: "sparkles" },
      { name: "GraphRAG & Knowledge Graphs", level: "Advanced", icon: "git-merge" },
      { name: "Google Gemini 3.8 Flash & Agent SDKs", level: "Advanced", icon: "bot" }
    ],
    dataPlatforms: [
      { name: "Jupyter Notebooks", level: "Expert", icon: "book-open" },
      { name: "Google Colab", level: "Expert", icon: "cloud" },
      { name: "Streamlit App Development", level: "Advanced", icon: "globe" },
      { name: "Kaggle Platforms", level: "Proficient", icon: "globe" },
      { name: "Anaconda Environment", level: "Advanced", icon: "package" },
      { name: "Git & GitHub Version Control", level: "Expert", icon: "git-branch" },
      { name: "Linux CLI & Bash Scripting", level: "Advanced", icon: "terminal" }
    ],
    databases: [
      { name: "Supabase (PostgreSQL + RLS + Realtime)", level: "Advanced", icon: "zap" },
      { name: "MongoDB (Document Collections)", level: "Advanced", icon: "database" },
      { name: "MySQL (Relational Schema & Joins)", level: "Advanced", icon: "table" },
      { name: "Vector Databases & Embeddings (pgvector)", level: "Intermediate", icon: "layers" },
      { name: "Database Design & Normalization", level: "Expert", icon: "check-circle" }
    ],
    frontend: [
      { name: "React.js", level: "Advanced", icon: "atom" },
      { name: "Next.js", level: "Proficient", icon: "layers" },
      { name: "TypeScript", level: "Proficient", icon: "code" },
      { name: "JavaScript (ES6+)", level: "Expert", icon: "file-code" },
      { name: "Tailwind CSS", level: "Expert", icon: "wind" },
      { name: "HTML5 & CSS3", level: "Expert", icon: "layout" },
      { name: "Bootstrap 5", level: "Advanced", icon: "box" }
    ],
    backend: [
      { name: "Node.js & Express", level: "Advanced", icon: "server" },
      { name: "Python APIs (FastAPI / Flask / Streamlit)", level: "Proficient", icon: "terminal" },
      { name: "Odoo Framework (Python / ERP Core)", level: "Proficient", icon: "layers" },
      { name: "Apache Camel K (Cloud Native)", level: "Proficient", icon: "cloud" },
      { name: "Java & JDBC", level: "Proficient", icon: "coffee" },
      { name: "C# & ASP.NET Core", level: "Proficient", icon: "cpu" },
      { name: "REST API Integration & QA", level: "Expert", icon: "link" }
    ]
  },

  education: [
    {
      degree: "B.Tech — Computer Engineering",
      institution: "Marwadi University (NAAC A+ Accredited)",
      score: "CGPA: 7.91",
      period: "2025 – Present",
      coursework: "Data Structures & Algorithms, DBMS, Web Technologies, Computer Networks, Machine Learning Fundamentals, OOP"
    },
    {
      degree: "Higher Secondary (Science)",
      institution: "Bihar School Examination Board",
      score: "First Division Completed",
      period: "Bihar Board",
      coursework: "Physics, Chemistry, Mathematics"
    }
  ]
};
