export interface Skill {
    category: string;
    items: string[];
}

export interface Experience {
    role: string;
    company: string;
    client?: string;
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

export interface OtherProject {
    title: string;
    year: string;
    tech: string[];
    github?: string;
}

export interface Publication {
    title: string;
    venue?: string;
    description: string;
    link: string;
}

export interface Currently {
    building: string;
    learning: string;
    openTo: string;
}

export const portfolioData = {
    name: "Uday Kiran Chimpiri",
    title: "Software Engineer",
    intro: "Software Engineer with 5 years of enterprise backend experience, MS in CS (3.9 GPA). Building production LLM applications: RAG pipelines, agentic browser automations, and a full-stack AI resume tool.",
    email: "udaykiranchimpiri@gmail.com",
    phone: "(940) 597-8960",
    linkedin: "https://linkedin.com/in/uday-kiran-chimpiri",
    github: "https://github.com/chimpiriudaykiran",
    website: "https://codewithuday.co/",
    googleScholar: "https://scholar.google.com/citations?user=7DXlEEIAAAAJ&hl",
    about:
        "Software engineer with 5 years of enterprise experience at Capgemini and Accenture, specializing in SAP ABAP and enterprise backend systems. Completing an MS in Computer Science at the University of North Texas (GPA 3.88, May 2025). My recent focus is building production LLM applications — RAG pipelines, Chrome extension automation for ATS forms, and AI-powered tools for job seekers. Open to AI/LLM Engineer, Full-Stack, and Backend roles in the US.",
    currently: {
        building: "JobCopilot — a multi-agent job search system — and a domain-specific LLM fine-tuning experiment.",
        learning: "LangGraph and production LLM evaluation harnesses.",
        openTo: "AI/LLM Engineer, Full-Stack, and Backend roles in the US.",
    } as Currently,
    skills: [
        { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "Java", "C", "C++", "SAP ABAP", "HTML", "CSS"] },
        { category: "AI / ML / LLMs", items: ["LangChain", "LangGraph", "RAG", "OpenAI API", "NLP", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"] },
        { category: "Web & Backend", items: ["React.js", "Node.js", "Express.js", "FastAPI", "Django", "Flask", "REST APIs", "Spring Boot"] },
        { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "SQL", "Hadoop", "Hive"] },
        { category: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins", "Git", "CI/CD"] },
        { category: "Tools", items: ["JIRA", "Postman", "Tableau", "Power BI", "Matplotlib", "Plotly", "VS Code"] },
        { category: "Certifications", items: ["Agile Software Development", "Microsoft Azure Fundamentals"] },
    ] as Skill[],
    experience: [
        {
            role: "Teaching Assistant — Software Engineering",
            company: "University of North Texas",
            location: "Denton, TX",
            period: "Aug 2024 – Present",
            linkedin: "https://www.linkedin.com/school/university-of-north-texas/",
            responsibilities: [
                "Mentored 50+ students in software engineering coursework, improving average project scores by 20%.",
                "Served as Scrum Master for undergraduate capstone teams, guiding them through Agile delivery.",
                "Conducted workshops on Git, debugging, React.js, Node.js, and SQL.",
                "Collaborated with faculty to develop and refine course materials aligned with industry standards.",
            ],
        },
        {
            role: "Application Development Senior Analyst",
            company: "Accenture Solutions Pvt Ltd",
            client: "Solvay",
            location: "India",
            period: "Jan 2023 – Aug 2023",
            linkedin: "https://www.linkedin.com/company/accenture/",
            responsibilities: [
                "Developed SAP ABAP solutions for Solvay, integrating GCP and SAP systems to automate cross-system data workflows.",
                "Led project delivery across multiple workstreams using Agile methodologies, coordinating across functional teams.",
                "Mentored junior developers on SAP ABAP best practices and conducted regular code reviews.",
            ],
        },
        {
            role: "Associate Consultant — SAP ABAP",
            company: "Capgemini Technology Services",
            client: "Boehringer Ingelheim",
            location: "India",
            period: "Dec 2018 – Dec 2022",
            linkedin: "https://www.linkedin.com/company/capgemini/",
            responsibilities: [
                "Developed and maintained SAP ABAP solutions (Reports, BAPI, ALE/IDoc, Workflows) for Boehringer Ingelheim's supply chain processes.",
                "Built a code quality evaluation tool that reduced manual rework and was recognized at the business unit level.",
                "Conducted code reviews across 150+ modules and mentored junior engineers.",
                "Progressed from Analyst to Senior Analyst to Associate Consultant over 4 years.",
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
            title: "Resume Architect",
            year: "2024",
            github: "",
            live: "",
            description: "A full-stack AI resume tool with a Chrome extension that auto-fills ATS forms (Workday, Greenhouse) using RAG pipelines and agentic browser automation. Tailors resume content to job descriptions and submits applications in fewer steps.",
            tech: ["Python", "LangChain", "RAG", "Chrome Extension", "React.js", "FastAPI"],
            contribution: "Designed and built end-to-end: RAG pipeline, Chrome extension content scripts, and full-stack web application.",
        },
        {
            title: "ArguLex",
            year: "2024",
            github: "",
            live: "",
            description: "An AI-powered argumentation assistant that helps users construct, analyze, and counter legal and policy arguments using LLMs.",
            tech: ["Python", "LangChain", "OpenAI API", "React.js", "FastAPI"],
            contribution: "Built the argument generation pipeline and full-stack interface.",
        },
        {
            title: "Beyond Sight — Data Visualization for the Visually Impaired",
            year: "2024",
            github: "",
            live: "",
            description: "An accessible web application that converts data visualizations into audio descriptions for visually impaired users. Awarded at the W4A 2024 conference and published at ACM.",
            tech: ["React.js", "Node.js", "Firebase", "NLP", "Web Audio API"],
            contribution: "Designed and developed the frontend, audio integration system, and accessibility pipeline.",
        },
    ] as Project[],
    otherProjects: [
        { title: "Accident Severity Prediction", year: "2023", tech: ["Python", "TensorFlow", "Scikit-learn", "Pandas"], github: "" },
        { title: "Rest-Assured-Restrooms Locator", year: "2023", tech: ["React.js", "Node.js", "MongoDB", "Google Maps API"], github: "" },
        { title: "Article Summarizer (NLP)", year: "2022", tech: ["Python", "NLP", "Flask"], github: "" },
        { title: "Stock Prediction ML", year: "2021", tech: ["Python", "TensorFlow", "Yahoo Finance API"], github: "" },
    ] as OtherProject[],
    publications: [
        {
            title: "Beyond Sight: Empowering Visually Impaired Users with Audible Graphs",
            venue: "W4A '24 — ACM Web for All Conference",
            description: "Research paper on an innovative tool making data visualizations accessible via audio descriptions for visually impaired users.",
            link: "https://scholar.google.com/citations?user=7DXlEEIAAAAJ&hl",
        },
    ] as Publication[],
    awards: [
        "Web Accessibility Challenge — Judges' Award (W4A 2024) — Data Visualization Tool for Visually Impaired",
        "Out of the Box Award (Q2 2021) — Capgemini Technology Services",
    ] as string[],
};
