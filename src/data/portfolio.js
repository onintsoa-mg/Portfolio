export const portfolioData = {
    personal: {
        name: "Onintsoa",
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
            category: "Technologies",
            items: [
                { name: "Python", level: "Expert", context: "AI & Automation" },
                { name: "JavaScript", level: "Expert", context: "Full-Stack" },
                { name: "TypeScript", level: "Advanced", context: "Production" },
                { name: "Java", level: "Intermediate", context: "Enterprise" },
                { name: "C++", level: "Intermediate", context: "Systems/Games" },
                { name: "C#", level: "Intermediate", context: "Enterprise/.NET" },
                { name: "C", level: "Intermediate", context: "Embedded" },
                { name: "PHP", level: "Expert", context: "Web Apps" },
                { name: "HTML/CSS", level: "Expert", context: "Frontend" },
                { name: "Visual Basic", level: "Intermediate", context: "Legacy" }
            ]
        },
        {
            category: "Frameworks & Libraries",
            items: [
                { name: "React", level: "Expert", context: "Frontend" },
                { name: "Next.js", level: "Advanced", context: "Production" },
                { name: "Angular", level: "Advanced", context: "Web Apps" },
                { name: "Vue", level: "Expert", context: "Web Apps" },
                { name: "Node.js", level: "Expert", context: "Backend" },
                { name: "Laravel/Symfony", level: "Advanced", context: "Enterprise" },
                { name: "CodeIgniter", level: "Advanced", context: "Legacy" },
                { name: "Ionic", level: "Expert", context: "Mobile" },
                { name: ".NET", level: "Intermediate", context: "Backend" },
                { name: "Quarkus", level: "Intermediate", context: "Microservices" },
                { name: "Hibernate", level: "Intermediate", context: "ORM" },
                { name: "Bootstrap/jQuery", level: "Expert", context: "Frontend" }
            ]
        },
        {
            category: "Databases",
            items: [
                { name: "MySQL", level: "Expert", context: "Relational" },
                { name: "PostgreSQL", level: "Expert", context: "Complex Models" },
                { name: "Oracle", level: "Intermediate", context: "Enterprise" },
                { name: "MongoDB", level: "Advanced", context: "NoSQL" },
                { name: "Supabase", level: "Expert", context: "BaaS" }
            ]
        },
        {
            category: "AI & Cloud",
            items: [
                { name: "TensorFlow", level: "Intermediate", context: "Deep Learning" },
                { name: "Scikit-Learn", level: "Intermediate", context: "ML" },
                { name: "Stable Baselines", level: "Intermediate", context: "RL" },
                { name: "MATLAB", level: "Intermediate", context: "Analysis" },
                { name: "AWS/Azure", level: "Intermediate", context: "Cloud" },
                { name: "MQL5", level: "Advanced", context: "Trading" }
            ]
        },
        {
            category: "Payment & Additional",
            items: [
                { name: "Stripe/PayPal", level: "Expert", context: "Fintech" },
                { name: "Binance/Coingate", level: "Advanced", context: "Crypto" },
                { name: "Arduino", level: "Advanced", context: "IoT" },
                { name: "WordPress", level: "Expert", context: "CMS" },
                { name: "Photoshop/Blender", level: "Advanced", context: "Design/3D" }
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
            tech: ["Next.js", "React", "Tailwind", "Node.js", "MySQL", "FastAPI", "APIs", "Ionic"]
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
            tech: ["CodeIgniter",
                "Symfony",
                "Laravel",
                "React",
                "Python",
                "FastAPI",
                "TensorFlow",
                "Scikit-learn",
                "Microsoft Azure",
                "Asterisk"]
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
            tech: [
                "React",
                "Python",
                "TensorFlow",
                "Scikit-learn",
                "Stable Baselines",
                "MQL5",
                "REST APIs",
                "MATLAB"
            ]
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
            tech: ["jQuery", "Bootstrap", "CodeIgniter", "Symfony", "React", "Angular", "Vue.js"]
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
            tech: ["Bootstrap", "jQuery", "PHP", "MySQL", "MVC"],
            links: { live: "#", github: "https://github.com/onivola/LTI-full-e-commerce" }, // Placeholders
            featured: true
        },
        {
            id: 2,
            title: "AI Voicebot Assistant",
            category: "AI",
            problem: "Call centers faced high volumes of repetitive queries, leading to long wait times.",
            solution: "Implemented a conversational voice agent using NLP to handle common requests automatically.",
            impact: "Reduced agent workload by 40% and improved 24/7 availability for customers.",
            tech: ["Python", "NLP", "Asterisk", "Scikit-learn", "TensorFlow"],
            links: { live: "#", github: "https://github.com/onivola/UCC-IACallbot-Public" },

        },
        {
            id: 3,
            title: "Money Transfer App",
            category: "Mobile",
            problem: "Need for a secure, user-friendly P2P money transfer solution.",
            solution: "Developed a FinTech mobile application with digital wallet integration and secure transaction protocols.",
            impact: "Facilitated secure, instant peer-to-peer transfers.",
            tech: ["Ionic", "React", "Node.js", "API Rest", "Security APIs", "MongoDB"],
            links: { live: "#", github: "#" },

        },
        {
            id: 4,
            title: "Investment Dashboard",
            category: "Web",
            problem: "Investors lacked a real-time tool to track asset performance.",
            solution: "Built a financial asset management dashboard with real-time data visualization.",
            impact: "Empowered users with actionable insights and up-to-the-minute portfolio tracking.",
            tech: ["Tailwind", "React", "FastAPI", "MongoDB"],
            links: { live: "#", github: "#" }
        },
        {
            id: 5,
            title: "ESTA Application Platform",
            category: "Web",
            problem: "Official visa application processes were complex and confusing for users.",
            solution: "Created a simplified web platform for US ESTA applications.",
            impact: "Improved submission success rates through a user-guided interface.",
            tech: ["HTML/CSS", "Laravel", "PHP", "MySQL"],
            links: { live: "#", github: "#" }
        },
        {
            id: 6,
            title: "Smart Heating System",
            category: "IoT",
            problem: "Inefficient energy usage in home heating systems.",
            solution: "Developed a home automation solution for intelligent thermal regulation.",
            impact: "Optimized energy consumption and reduced utility costs.",
            tech: ["IoT", "Arduino", "React Native", "API Rest", "Mysql"],
            links: { live: "#", github: "#" }
        },
        {
            id: 7,
            title: "Algorithmic Trading System",
            category: "AI",
            problem: "Financial markets are volatile and require split-second decisions that are impossible for humans to execute consistently.",
            solution: "Developed trading algorithms and predictive analytics systems using reinforcement learning to automate trade execution.",
            impact: "Maximized returns and minimized risk through automated, data-driven trading strategies.",
            tech: ["Python", "Pandas", "MATLAB", "Stable Baselines", "TensorFlow", "Scikit-learn", "APIs"],
            links: { live: "#", github: "https://github.com/onivola/Hairamada-algo-trading-with-artificial-intelligence" }
        },
        {
            id: 8,
            title: "Dating Platform",
            category: "Mobile",
            problem: "Users struggle to find meaningful connections on generic platforms with poor matching logic.",
            solution: "Designed a social matchmaking application featuring a robust matching algorithm and real-time messaging.",
            impact: "Enhanced user engagement and connection success rates through intelligent matchmaking.",
            tech: ["React", "Ionic", "Firebase", "Node.js", "Socket.io", "PostgreSQL"],
            links: { live: "https://play.google.com/store/apps/details?id=com.date.tiana&hl=EN", github: "#" },
            featured: true
        },
        {
            id: 9,
            title: "Slot Machine System",
            category: "IoT",
            problem: "Legacy gaming systems lacked secure hardware integration and modern reliability standards.",
            solution: "Engineered software for embedded gaming systems, managing complex hardware input/output interactions.",
            impact: "Delivered a secure, high-performance gaming experience with reliable hardware management.",
            tech: ["C++", "Embedded Systems", "Hardware I/O", "Android"],
            links: { live: "#", github: "#" }
        },
        {
            id: 10,
            title: "School Management System",
            category: "Web",
            problem: "Educational institutions struggled with fragmented academic and administrative record-keeping.",
            solution: "Developed a comprehensive School Management Information System (SMIS) including academic and administrative tracking.",
            impact: "Centralized data management, improving administrative efficiency and academic oversight.",
            tech: ["PHP", "Laravel", "MySQL", "Vue.js"],
            links: { live: "#", github: "#" }
        },
        {
            id: 11,
            title: "Local CRM System",
            category: "Web",
            problem: "Call centers lacked a specialized tool to track leads and optimize sales performance effectively.",
            solution: "Designed a custom CRM tailored for call centers, featuring call tracking, lead management, and interaction history.",
            impact: "Optimized sales performance and streamlined customer relationship management.",
            tech: ["React", "Express.js", "MongoDB", "Twilio"],
            links: { live: "#", github: "#" }
        },
        {
            id: 12,
            title: "Automotive Garage Platform",
            category: "Web",
            problem: "Auto workshops suffered from low online visibility and inefficient booking processes.",
            solution: "Built a professional website showcasing services with features for quote requests and customer contact.",
            impact: "Increased online visibility and streamlined service inquiries for the workshop.",
            tech: ["Vue.js", "APIs", "Node.js", "Mysql"],
            links: { live: "#", github: "#" }
        }
    ]
};
