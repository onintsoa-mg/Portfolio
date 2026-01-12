export const portfolioData = {
    personal: {
        name: "RAZAFIMANDIMBY Andriarivolanirina Onintsoa",
        shortName: "Onintsoa Razafimandimby",
        titles: [
            "Software & AI Engineer",
            "Full-Stack Developer",
            "Web & Mobile Application Developer"
        ],
        contact: {
            email: "onintsoazafimandimby@gmail.com",
            location: "Antsirabe, Madagascar",
            phone: "0380611756",
            linkedin: "https://www.linkedin.com/in/onintsoa-razafimandimby-08269119b",
            github: null // Not in CV, can add placeholder or omit
        }
    },

    about: {
        summary: "Experienced Software Engineer specializing in scalable web architectures, AI integration, and cross-platform mobile development. Proven track record of delivering production-ready solutions for E-commerce, Fintech, and Enterprise clients."
    },

    skills: [
        {
            category: "Frontend",
            items: [
                { name: "React", level: "Expert", context: "Production" },
                { name: "Next.js", level: "Advanced", context: "Production" },
                { name: "TypeScript", level: "Advanced", context: "Production" },
                { name: "Tailwind CSS", level: "Expert", context: "Production" },
                { name: "Ionic", level: "Advanced", context: "Mobile Apps" },
                { name: "Angular", level: "Intermediate", context: "Legacy Projects" }
            ]
        },
        {
            category: "Backend",
            items: [
                { name: "Node.js", level: "Expert", context: "High-Performance APIs" },
                { name: "Python", level: "Expert", context: "AI & Automation" },
                { name: "FastAPI", level: "Advanced", context: "Microservices" },
                { name: "Symfony/Laravel", level: "Advanced", context: "Enterprise Apps" },
                { name: "PHP", level: "Advanced", context: "Production" }
            ]
        },
        {
            category: "AI & Data",
            items: [
                { name: "NLP", level: "Advanced", context: "Voicebots & Text Analysis" },
                { name: "TensorFlow", level: "Intermediate", context: "Model Integration" },
                { name: "Scikit-learn", level: "Intermediate", context: "Predictive Analytics" },
                { name: "MySQL/PostgreSQL", level: "Expert", context: "Complex Modeling" },
                { name: "MongoDB", level: "Advanced", context: "NoSQL Data" }
            ]
        },
        {
            category: "DevOps & Tools",
            items: [
                { name: "Git", level: "Expert", context: "CI/CD Workflows" },
                { name: "Docker", level: "Advanced", context: "Containerization" },
                { name: "AWS/Azure", level: "Intermediate", context: "Cloud Deployment" },
                { name: "Linux", level: "Advanced", context: "Server Management" }
            ]
        }
    ],

    experience: [
        {
            id: 1,
            company: "Innov-art",
            role: "Multi-Framework Web Developer",
            period: "Feb 2024 - Present",
            description: "Leading the development of modern web applications with a strong focus on scalability, security, and maintainability.",
            achievements: [
                "Architected and deployed high-performance REST APIs using Node.js and FastAPI.",
                "Designed complex database models for enterprise-grade applications.",
                "Implemented secure authentication and payment gateway integrations.",
                "Optimized frontend performance using Next.js and React best practices."
            ],
            tech: ["Next.js", "React", "Node.js", "MySQL", "FastAPI", "Ionic"]
        },
        {
            id: 2,
            company: "United Call Center",
            role: "Software & AI Engineer",
            period: "Jan 2023 - Feb 2024",
            description: "Engineered high-availability web platforms and AI-powered voice solutions.",
            achievements: [
                "Developed AI-powered voicebot solutions using NLP for real-time customer interaction.",
                "Maintained and scaled high-traffic web platforms ensuring 99.9% uptime.",
                "Integrated Microsoft Azure services for scalable cloud infrastructure.",
                "Automated call tracking and lead management workflows."
            ],
            tech: ["Symfony", "Laravel", "Python", "TensorFlow", "Azure", "Asterisk"]
        },
        {
            id: 3,
            company: "Innov-art",
            role: "Full Stack & AI Developer",
            period: "Apr 2021 - Dec 2022",
            description: "Managed end-to-end web project lifecycles and implemented algorithmic trading systems.",
            achievements: [
                "Designed and implemented automated trading algorithms using reinforcement learning.",
                "Managed technical architecture from design to production deployment.",
                "Developed predictive analytics systems for financial markets."
            ],
            tech: ["React", "Python", "Scikit-learn", "Stable Baselines", "MATLAB"]
        },
        {
            id: 4,
            company: "LTI",
            role: "Full Stack Developer",
            period: "Jan 2019 - Dec 2020",
            description: "Responsible for design, development, and continuous improvement of web applications.",
            achievements: [
                "Collaborated with business teams to translate requirements into technical solutions.",
                "Maintained legacy systems while migrating critical components to modern frameworks.",
                "Ensured code quality through rigorous testing and code reviews."
            ],
            tech: ["CodeIgniter", "Symfony", "React", "Angular", "Vue.js"]
        }
    ],

    projects: [
        {
            id: 1,
            title: "E-commerce Platforms (B2B/B2C)",
            category: "Web",
            problem: "Clients needed robust, scalable online sales platforms with secure payment processing.",
            solution: "Designed and deployed 3 custom e-commerce platforms with integrated payment gateways and admin dashboards.",
            impact: "Streamlined sales processes and increased digital reach for local businesses.",
            tech: ["React", "Node.js", "Stripe API", "MySQL"],
            links: { live: "#", github: "#" }, // Placeholders
            featured: true
        },
        {
            id: 2,
            title: "AI Voicebot Assistant",
            category: "AI",
            problem: "Call centers faced high volumes of repetitive queries, leading to long wait times.",
            solution: "Implemented a conversational voice agent using NLP to handle common requests automatically.",
            impact: "Reduced agent workload by 40% and improved 24/7 availability for customers.",
            tech: ["Python", "NLP", "Asterisk", "TensorFlow"],
            links: { live: "#", github: "#" },
            featured: true
        },
        {
            id: 3,
            title: "Money Transfer App",
            category: "Mobile",
            problem: "Need for a secure, user-friendly P2P money transfer solution.",
            solution: "Developed a FinTech mobile application with digital wallet integration and secure transaction protocols.",
            impact: "Facilitated secure, instant peer-to-peer transfers.",
            tech: ["Ionic", "Node.js", "Security APIs"],
            links: { live: "#", github: "#" },
            featured: true
        },
        {
            id: 4,
            title: "Investment Dashboard",
            category: "Web",
            problem: "Investors lacked a real-time tool to track asset performance.",
            solution: "Built a financial asset management dashboard with real-time data visualization.",
            impact: "Empowered users with actionable insights and up-to-the-minute portfolio tracking.",
            tech: ["React", "D3.js", "FastAPI"],
            links: { live: "#", github: "#" }
        },
        {
            id: 5,
            title: "ESTA Application Platform",
            category: "Web",
            problem: "Official visa application processes were complex and confusing for users.",
            solution: "Created a simplified web platform for US ESTA applications.",
            impact: "Improved submission success rates through a user-guided interface.",
            tech: ["Laravel", "MySQL", "PHP"],
            links: { live: "#", github: "#" }
        },
        {
            id: 6,
            title: "Smart Heating System",
            category: "IoT",
            problem: "Inefficient energy usage in home heating systems.",
            solution: "Developed a home automation solution for intelligent thermal regulation.",
            impact: "Optimized energy consumption and reduced utility costs.",
            tech: ["IoT", "Embedded C", "Python"],
            links: { live: "#", github: "#" }
        }
    ]
};
