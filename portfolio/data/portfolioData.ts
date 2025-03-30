export interface Skill {
    category: string;
    items: string[];
}

export interface Experience {
    role: string;
    company: string;
    location: string;
    period: string;
    linkedin: string;
    responsibilities: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    gpa: string;
    location?: string;
    courses: string[];
}

export interface Project {
    title: string;
    year: string;
    github?: string;
    live?: string;
    description: string;
    tech: string[];
    contribution: string;
}

export interface Publication {
    title: string;
    description: string;
    link: string;
}

export const portfolioData = {
    name: "Uday Kiran Chimpiri",
    title: "Full Stack Developer",
    intro: "Crafting scalable, user-focused solutions with a passion for innovation and technology.",
    email: "udaykiranchimpiri@gmail.com",
    phone: "(940) 597-8960",
    linkedin: "https://linkedin.com/in/uday-kiran-chimpiri",
    github: "https://github.com/chimpiriudaykiran",
    website: "https://codewithuday.co/",
    googleScholar: "https://scholar.google.com/citations?user=7DXlEEIAAAAJ&hl",
    about:
        "Highly disciplined and motivated Master's student in Computer Science at the University of North Texas, with 4.5 years of professional experience in software development, problem-solving, and cross-functional collaboration. Proven track record of delivering scalable, user-focused solutions. Passionate about leveraging JavaScript frameworks, Python, cloud platforms, and machine learning to drive innovation. A continuous learner eager to apply technical skills and creativity to impactful projects.",
    skills: [
        { category: "Programming Languages", items: ["Python", "Java", "C", "C++", "JavaScript", "SAP ABAP", "HTML", "CSS"] },
        { category: "Frameworks & Libraries", items: ["React.js", "Node.js", "Express.js", "Django", "Flask", "Spring Boot", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Spark", "jQuery", "GenAI", "LLMs", "NLP"] },
        { category: "Databases & Big Data", items: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "Firebase", "Hadoop", "Hive"] },
        { category: "Cloud & DevOps", items: ["AWS", "Azure", "Google Cloud Platform (GCP)", "Docker", "Kubernetes", "Jenkins", "Git", "CI/CD"] },
        { category: "Tools & Visualization", items: ["JIRA", "Postman", "VS Code", "Eclipse", "Tableau", "Power BI", "Matplotlib", "Plotly"] },
        { category: "Certifications", items: ["Agile Software Development", "Microsoft Azure Fundamentals"] },
        { category: "Soft Skills", items: ["Quick Learner", "Strong Decision Maker", "Complex Problem Solver", "Innovative", "Flexible"] },
    ] as Skill[],
    experience: [
        {
            role: "Teaching Assistant (Software Engineering)",
            company: "University of North Texas",
            location: "Denton, TX",
            period: "Aug 2024 – Present",
            linkedin: "https://www.linkedin.com/school/university-of-north-texas/",
            responsibilities: [
                "Mentored 50+ students in software engineering coursework, improving average project scores by 20%.",
                "Acted as Scrum Master for undergraduate capstone projects, guiding teams in Agile methodologies.",
                "Conducted workshops on Agile, Git, and debugging, enhancing students’ technical proficiency.",
                "Provided one-on-one support for React.js, Node.js, and SQL project development.",
                "Collaborated with faculty to develop course materials aligned with industry standards.",
            ],
        },
        {
            role: "App Development Senior Analyst",
            company: "Accenture Solutions Pvt Ltd",
            location: "India",
            period: "Jan 2023 – Aug 2023",
            linkedin: "https://www.linkedin.com/company/accenture/",
            responsibilities: [
                "Led a team to deliver 4 projects on time, achieving a 97% increase in client satisfaction.",
                "Integrated GCP and SAP systems, reducing processing time by 50% and improving reliability by 20%.",
                "Developed and debugged SAP ABAP solutions using Agile, ensuring high-quality delivery.",
                "Mentored junior developers, boosting team productivity and code quality by 25%.",
            ],
        },
        {
            role: "SAP ABAP Developer & Techno-Functional Lead",
            company: "Capgemini Technology Services",
            location: "India",
            period: "Dec 2018 – Dec 2022",
            linkedin: "https://www.linkedin.com/company/capgemini/",
            responsibilities: [
                "Led a team of 10 professionals, overseeing complex SAP ABAP projects with 97%+ KPI achievement.",
                "Optimized SAP ABAP code, reducing errors by 40% and ensuring zero production regressions.",
                "Developed a code quality evaluation tool, reducing rework by 30% and earning business unit recognition.",
                "Conducted quality assurance on 150+ code modules, decreasing bug reports by 90%.",
                "Mentored 4-5 young developers, fostering a collaborative and high-performing team environment.",
            ],
        },
    ] as Experience[],
    education: [
        {
            degree: "Master of Science in Computer Science",
            institution: "University of North Texas",
            period: "May 2025 (Expected)",
            gpa: "3.88",
            location: "Denton, TX",
            courses: ["Software Engineering", "Machine Learning", "Data Visualization", "Cloud Computing"],
        },
        {
            degree: "Bachelor of Technology in Electrical and Electronics Engineering",
            institution: "Lakireddy Bali Reddy College of Engineering",
            period: "Apr 2017",
            gpa: "71.80%",
            location: "Andhra Pradesh, India",
            courses: ["Programming Fundamentals", "Electronics", "Control Systems"],
        },
    ] as Education[],
    projects: [
        {
            title: "Data Visualization Web App for Blind",
            year: "2024",
            github: "",
            live: "",
            description: "An accessible web app providing audio descriptions of data visualizations for visually impaired users.",
            tech: ["React.js", "Node.js", "Firebase", "NLP"],
            contribution: "Designed and developed the frontend and audio integration system.",
        },
        {
            title: "Accident Severity Prediction Model",
            year: "2023",
            github: "",
            live: "",
            description: "A machine learning model predicting accident severity using a comprehensive dataset.",
            tech: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
            contribution: "Built and evaluated ML models for optimal performance.",
        },
        {
            title: "Rest-Assured-Restrooms Locator",
            year: "2023",
            github: "",
            live: "",
            description: "A location-based web app to find accessible public restrooms nearby.",
            tech: ["React.js", "Node.js", "MongoDB", "Google Maps API"],
            contribution: "Developed the frontend UI and integrated location services.",
        },
        {
            title: "Article Summarizer using NLP",
            year: "2022",
            github: "",
            live: "",
            description: "A tool using NLP to generate short summaries of lengthy articles.",
            tech: ["Python", "NLP", "Flask"],
            contribution: "Implemented NLP algorithms and built the backend API.",
        },
        {
            title: "Stock Prediction using ML",
            year: "2021",
            github: "",
            live: "",
            description: "A machine learning system predicting stock prices with live Yahoo Finance data.",
            tech: ["Python", "TensorFlow", "Yahoo Finance API"],
            contribution: "Developed the ML model and integrated live data feeds.",
        },
    ] as Project[],
    publications: [
        {
            title: "Beyond Sight: Empowering Visually Impaired Users with Audible Graphs",
            description: "A research paper on an innovative tool making data visualizations accessible via audio descriptions.",
            link: "https://scholar.google.com/citations?user=7DXlEEIAAAAJ&hl",
        },
    ] as Publication[],
    awards: [
        "Web Accessibility Challenge Judges Award (2024) - Data Visualization Tool for Visually Impaired",
        "Out of the Box Award (Q2-2021) - Capgemini Technology Services",
    ] as string[],
};