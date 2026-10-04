/**
 * PORTFOLIO DATA CONFIGURATION - LAUKESH BHATI
 * Computer Science Engineering Student | Full-Stack & AI Developer
 */

export const personalInfo = {
  name: "LAUKESH BHATI",
  shortName: "Laukesh",
  role: "Computer Science Engineer | AI/ML & Full-Stack Developer",
  badge: "Available for Internships & Full-Time Roles",
  tagline: "Building Intelligent Digital Experiences with Code & AI.",
  bio: "Computer Science Engineering student with a strong foundation in Java, Python, Data Structures & Algorithms, SQL, and Web Development. Experienced in building practical software systems using OpenCV, MySQL, JavaScript, and APIs. Passionate about problem-solving and delivering user-focused software solutions.",
  aboutText: "I am a Computer Science Engineering student at Dr. A. P. J. Abdul Kalam Technical University (AKTU), Lucknow. With hands-on experience developing computer vision biometric systems, responsive safety platforms, and database-driven web apps, I combine strong algorithmic thinking with practical software craftsmanship.",
  subIntro: "Focused on developing production-ready applications across Python, Java, modern Web Technologies, and Applied Computer Vision.",
  location: "Greater Noida, Uttar Pradesh, India",
  phone: "+91 7668715004",
  email: "bhatilaukesh2006@gmail.com",
  github: "https://github.com/Laukesh-bhati11",
  linkedin: "https://www.linkedin.com/in/laukesh-bhati/",
  leetcode: "https://leetcode.com/u/Laukesh_bhati22",
  resumeUrl: "/Laukesh_Bhati_Resume.pdf",
  avatarUrl: "/avatar.jpg"
};

export const aboutStats = [
  {
    id: "education",
    value: "B.Tech CSE",
    label: "AKTU Lucknow",
    detail: "2023 - Present | Core CS Foundations"
  },
  {
    id: "projects",
    value: "2+ Major",
    label: "End-to-End Systems",
    detail: "OpenCV Vision & Smart Safety Web Apps"
  },
  {
    id: "leetcode",
    value: "DSA",
    label: "Problem Solving",
    detail: "Java, Python & C Algorithmic Mastery"
  },
  {
    id: "certifications",
    value: "Google AI",
    label: "Certified",
    detail: "Intro to AI & Productivity with AI Tools"
  }
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "Terminal",
    skills: [
      { name: "Python", category: "OpenCV, Flask, Scripting & ML", level: "Advanced" },
      { name: "Java", category: "Core OOP, Servlets & Algorithms", level: "Proficient" },
      { name: "C", category: "Data Structures & Low-Level Foundations", level: "Intermediate" },
      { name: "JavaScript", category: "Interactive Modern Web Apps (ES6+)", level: "Proficient" }
    ]
  },
  {
    title: "Computer Science Foundations",
    icon: "Cpu",
    skills: [
      { name: "Data Structures & Algorithms", category: "Arrays, Trees, Graphs, DP, Sorting", level: "Advanced" },
      { name: "Object-Oriented Programming", category: "Polymorphism, Inheritance, Encapsulation", level: "Advanced" },
      { name: "Problem Solving", category: "Algorithmic Efficiency & Complexities", level: "Continuous" }
    ]
  },
  {
    title: "Computer Vision & AI",
    icon: "Eye",
    skills: [
      { name: "OpenCV", category: "Image Processing, Video Streams & Contours", level: "Advanced" },
      { name: "Facial Recognition", category: "Haar Cascades, Face Encodings & Biometrics", level: "Advanced" },
      { name: "Machine Learning", category: "Feature Engineering & Predictive Pipelines", level: "Intermediate" }
    ]
  },
  {
    title: "Web Technologies",
    icon: "Globe",
    skills: [
      { name: "HTML5", category: "Semantic Markup, Responsive UI & a11y", level: "Advanced" },
      { name: "CSS3", category: "Modern Flexbox, Grid, Animations & Tailwind", level: "Advanced" },
      { name: "JavaScript", category: "Async/Await, DOM APIs & Event Handling", level: "Proficient" },
      { name: "React", category: "Component Architecture & Hooks", level: "Proficient" },
      { name: "Flask", category: "RESTful Python Microservices & Routing", level: "Proficient" }
    ]
  },
  {
    title: "Databases & Storage",
    icon: "Database",
    skills: [
      { name: "MySQL", category: "Relational Schema, Joins, Indexing & ACID", level: "Advanced" },
      { name: "SQL", category: "Complex Queries, DDL/DML & Aggregations", level: "Advanced" },
      { name: "MongoDB", category: "Document-Based NoSQL Data Modeling", level: "Intermediate" }
    ]
  },
  {
    title: "Tools & APIs",
    icon: "Wrench",
    skills: [
      { name: "TomTom API", category: "Location-Based Safety & Geocoding", level: "Proficient" },
      { name: "Git", category: "Distributed Version Control & Branching", level: "Essential" },
      { name: "GitHub", category: "Open Source Repositories & Collaboration", level: "Daily" },
      { name: "VS Code", category: "Full-Stack Development Environment", level: "Primary IDE" }
    ]
  }
];

export const projects = [
  {
    id: "01",
    title: "Face Recognition Attendance System",
    tagline: "Automated Biometric Authentication & Real-Time Classroom Attendance",
    period: "Aug 2025 – Nov 2025",
    description: "An end-to-end intelligent biometric attendance application developed using Python, OpenCV, and MySQL. Automates classroom and institutional attendance, reducing manual logging time by 10-15 minutes per session with deep face encodings and instant database synchronization.",
    bullets: [
      "Reduced manual attendance work by automating the attendance process and saved 10-15 min daily of class attendance.",
      "Developed the application using Python and OpenCV for high-speed image processing, webcam frame capture, and facial recognition.",
      "Designed an optimized MySQL database schema to store student profiles, face encodings, and attendance timestamp logs for 100+ records.",
      "Connected the biometric recognition pipeline with backend database operations to create a seamless, end-to-end verification portal."
    ],
    technologies: ["Python", "OpenCV", "MySQL", "Computer Vision", "Flask", "Face Recognition"],
    githubUrl: "https://github.com/Laukesh-bhati11/Face_Recognition_Attendance_System",
    demoUrl: "#",
    category: "Computer Vision & AI",
    badge: "Featured CV Project",
    architecturePreview: {
      type: "face-recognition",
      metrics: [
        { label: "Recognition Accuracy", value: "99.1%" },
        { label: "Time Saved Daily", value: "10-15 Min" },
        { label: "Database Records", value: "100+ Enrolled" }
      ],
      codeSnippet: `# Face Recognition Attendance Matching Engine
import cv2, face_recognition
matches = face_recognition.compare_faces(known_encodings, current_face_encoding)
if True in matches:
    first_match_index = matches.index(True)
    student_id = student_ids[first_match_index]
    log_attendance_to_mysql(student_id, status='Present', timestamp=datetime.now())`
    }
  },
  {
    id: "02",
    title: "SmartPath Security Dashboard (A.M.A.R.I.)",
    tagline: "Advanced Mobility & Assistance for Resilient India — Emergency & Safety Platform",
    period: "Mar 2026 – Apr 2026",
    description: "A responsive location-based safety intelligence and emergency assistance platform combining frontend dashboards, TomTom API mapping, real-time weather integration, and emergency SOS dispatch to empower safer urban transit.",
    bullets: [
      "Developed a responsive web dashboard for location-based safety, navigation assistance, and real-time emergency services.",
      "Integrated the TomTom API to dynamically identify and display nearby police stations, hospitals, and emergency hubs using live GPS coordinates.",
      "Implemented live weather radar notifications, automated one-tap SOS functionality, and Safe Spot data persistence.",
      "Combined frontend development, RESTful API integration, location intelligence, and MySQL database components into a cohesive web platform."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "TomTom API", "MySQL", "Java Servlets"],
    githubUrl: "https://github.com/Laukesh-bhati11/A.M.A.R.I",
    demoUrl: "#",
    category: "Full-Stack Web & GIS",
    badge: "Smart City Safety",
    architecturePreview: {
      type: "amari-security",
      metrics: [
        { label: "Location Services", value: "TomTom Maps" },
        { label: "Emergency Response", value: "Instant SOS" },
        { label: "Telemetry", value: "Live Weather" }
      ],
      codeSnippet: `// TomTom Emergency Radar & SOS Dispatch
navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    tt.services.nearbySearch({
        key: TOMTOM_API_KEY,
        center: [longitude, latitude],
        categorySet: '7321,7322' // Police & Hospitals
    }).then(renderNearbySafeSpots);
});`
    }
  },
  {
    id: "03",
    title: "FraudShield AI Platform",
    tagline: "Real-Time Financial Transaction Anomaly Detection with Explainable ML",
    period: "2026",
    description: "An AI-powered risk evaluation pipeline engineered to identify fraudulent financial transactions in real time with high precision, providing transparent SHAP decision interpretability for compliance and security auditing.",
    bullets: [
      "Built an ensemble machine learning classifier for high-velocity transaction fraud scoring.",
      "Integrated SHAP (SHapley Additive exPlanations) for explainable feature impact scoring per transaction.",
      "Engineered sub-50ms inference latency architecture with clean API contracts."
    ],
    technologies: ["Python", "Machine Learning", "SHAP", "FastAPI", "React", "SQL"],
    githubUrl: "https://github.com/Laukesh-bhati11",
    demoUrl: "#",
    category: "AI & Machine Learning",
    badge: "Applied AI",
    architecturePreview: {
      type: "fraud-shield",
      metrics: [
        { label: "Precision", value: "98.4%" },
        { label: "Inference Latency", value: "< 45ms" },
        { label: "Explainability", value: "SHAP Values" }
      ],
      codeSnippet: `def evaluate_transaction(payload):
    score = fraud_model.predict_proba([payload])[0][1]
    shap_vals = explainer(payload)
    return {"risk_level": "HIGH" if score > 0.75 else "LOW", "score": float(score)}`
    }
  },
  {
    id: "04",
    title: "DSA Problem Solving & Core Algorithms",
    tagline: "Algorithmic Rigor & Competitive Problem Solving in Java, Python & C",
    period: "Ongoing",
    description: "Active problem solver on LeetCode focusing on Data Structures and Algorithms including Arrays, Two Pointers, Sliding Window, Trees, Graphs, Dynamic Programming, and Object-Oriented Software Design.",
    bullets: [
      "Practicing optimized time & space complexity implementations across LeetCode and competitive programming platforms.",
      "Applied foundational DSA principles to optimize database indexing and computer vision matrix operations.",
      "Proficient in Java OOP principles and clean, modular coding standards."
    ],
    technologies: ["Java", "Python", "C", "Data Structures", "Algorithms", "OOP"],
    githubUrl: "https://leetcode.com/u/Laukesh_bhati22",
    demoUrl: "https://leetcode.com/u/Laukesh_bhati22",
    category: "Algorithmic Engineering",
    badge: "LeetCode Active",
    architecturePreview: {
      type: "dsa-algorithms",
      metrics: [
        { label: "Primary Language", value: "Java / Python" },
        { label: "Focus Areas", value: "Arrays, Trees, DP" },
        { label: "Profile", value: "Laukesh_bhati22" }
      ],
      codeSnippet: `// Algorithmic Depth-First Search & Complexity Optimization
class Solution {
    public boolean isValidBST(TreeNode root) {
        return validate(root, null, null);
    }
    private boolean validate(TreeNode node, Integer low, Integer high) {
        if (node == null) return true;
        if ((low != null && node.val <= low) || (high != null && node.val >= high)) return false;
        return validate(node.left, low, node.val) && validate(node.right, node.val, high);
    }
}`
    }
  }
];

export const journeyTimeline = [
  {
    period: "2023 - Present",
    title: "B.Tech in Computer Science Engineering",
    role: "Undergraduate Student",
    organization: "Dr. A. P. J. Abdul Kalam Technical University (AKTU), Lucknow",
    description: "Undergraduate curriculum covering Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems (MySQL), Computer Networks, and Operating Systems with consistent academic excellence.",
    tags: ["DSA", "DBMS", "OOP", "Computer Networks", "Software Engineering"],
    icon: "GraduationCap"
  },
  {
    period: "Aug 2025 - Nov 2025",
    title: "Face Recognition Attendance System",
    role: "Computer Vision & Full-Stack Developer",
    organization: "Academic Major Project",
    description: "Architected a full-featured automated attendance system using Python, OpenCV, and MySQL. Designed live face encodings, student self-registration, and teacher attendance reporting, saving 10-15 minutes of manual attendance time daily.",
    tags: ["Python", "OpenCV", "MySQL", "Computer Vision", "Biometrics"],
    icon: "Laptop"
  },
  {
    period: "Mar 2026 - Apr 2026",
    title: "SmartPath Security Dashboard (A.M.A.R.I.)",
    role: "Lead Web & GIS Developer",
    organization: "Urban Mobility & Safety Initiative",
    description: "Engineered a smart mobility and urban emergency dashboard. Integrated TomTom location APIs, live weather tracking, automated distress SOS alerts, and MySQL safe spot storage.",
    tags: ["HTML5", "CSS3", "JavaScript", "TomTom API", "MySQL", "GIS"],
    icon: "Sparkles"
  },
  {
    period: "2026",
    title: "Google AI Professional Certifications",
    role: "Certified Practitioner",
    organization: "Google via Coursera",
    description: "Successfully earned professional certifications: 'Introduction to AI' and 'Maximize Productivity With AI Tools', mastering generative workflows, applied neural networks, and modern AI development frameworks.",
    tags: ["Google AI", "Machine Learning", "Productivity Tools", "Coursera"],
    icon: "Trophy"
  },
  {
    period: "2023",
    title: "Higher Secondary School (12th)",
    role: "Science & Mathematics",
    organization: "Shri Bhawarpal Singh Kanya Inter College, Akalpur",
    description: "Completed higher secondary education with a strong scientific and mathematical foundation, preparing for engineering studies.",
    tags: ["Mathematics", "Physics", "Computer Fundamentals"],
    icon: "GraduationCap"
  }
];

export const certifications = [
  {
    title: "Introduction to AI",
    issuer: "Google (Coursera)",
    year: "2026",
    credentialId: "Google AI Authorized",
    description: "Foundational AI principles, machine learning paradigms, neural network basics, and ethical AI deployment.",
    skills: ["Artificial Intelligence", "Machine Learning", "Neural Networks", "Google AI"]
  },
  {
    title: "Maximize Productivity With AI Tools",
    issuer: "Google (Coursera)",
    year: "2026",
    credentialId: "Google AI Productivity",
    description: "Harnessing generative AI tools, prompt engineering, automated workflows, and developer productivity enhancement.",
    skills: ["AI Productivity", "Prompt Engineering", "Workflow Automation", "LLM Tooling"]
  }
];

export const achievements = [
  {
    icon: "Laptop",
    badge: "Computer Vision",
    title: "Biometric Attendance Automation",
    description: "Built an OpenCV-powered facial recognition attendance system that eliminated manual register tracking, saving 10-15 minutes daily with 99.1% recognition accuracy.",
    highlight: "10-15 min Saved Daily"
  },
  {
    icon: "Trophy",
    badge: "Smart City Safety",
    title: "A.M.A.R.I. Emergency Platform",
    description: "Designed a location-aware smart security dashboard integrating the TomTom API, live weather telemetry, and emergency SOS dispatch to enhance urban travel safety.",
    highlight: "Location-Based Safety"
  },
  {
    icon: "BookOpen",
    badge: "Algorithmic Rigor",
    title: "DSA & LeetCode Practice",
    description: "Consistent problem-solving on LeetCode covering Arrays, Linked Lists, Trees, Dynamic Programming, and Graph algorithms in Java and Python.",
    highlight: "LeetCode: Laukesh_bhati22"
  },
  {
    icon: "Bot",
    badge: "Google Certified",
    title: "Dual Google AI Certifications",
    description: "Earned industry-recognized credentials from Google via Coursera in Introduction to AI and AI Productivity Tools.",
    highlight: "Google (Coursera) 2026"
  }
];

export const codingStats = {
  headline: "Code. Build. Solve. Repeat.",
  subtext: "Continuous commitment to computer science fundamentals, LeetCode problem solving, and practical full-stack projects.",
  githubUsername: "Laukesh-bhati11",
  githubProfileUrl: "https://github.com/Laukesh-bhati11",
  leetcodeUsername: "Laukesh_bhati22",
  leetcodeProfileUrl: "https://leetcode.com/u/Laukesh_bhati22",
  metrics: [
    { label: "GitHub Repositories", value: "Active", status: "Public & Open Source" },
    { label: "Core Languages", value: "Java & Python", status: "DSA & AI Systems" },
    { label: "Web Stack", value: "React & JS", status: "Modern SPAs & APIs" },
    { label: "Database", value: "MySQL", status: "Relational ACID Schemas" }
  ],
  weeklyActivity: [
    { day: "Mon", commits: 5 },
    { day: "Tue", commits: 8 },
    { day: "Wed", commits: 6 },
    { day: "Thu", commits: 10 },
    { day: "Fri", commits: 7 },
    { day: "Sat", commits: 9 },
    { day: "Sun", commits: 4 }
  ],
  recentCommits: [
    { repo: "Face_Recognition_Attendance_System", message: "Feat: Add webcam live face capture and MySQL attendance logging", time: "Recent" },
    { repo: "A.M.A.R.I", message: "Integrate TomTom API emergency services & live weather dashboard", time: "Recent" },
    { repo: "LeetCode-Solutions", message: "Solved Binary Tree Maximum Path Sum & Dynamic Programming questions", time: "Recent" },
    { repo: "FraudShield-AI", message: "Added SHAP feature contribution visualization for transaction risk", time: "Recent" }
  ]
};
