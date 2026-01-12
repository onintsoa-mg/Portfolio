export const portfolioData = {
    personal: {
        name: "RAZAFIMANDIMBY Andriarivolanirina Onintsoa",
        shortName: "Onintsoa Razafimandimby",
        titles: [
            "Ingénieur Logiciel & IA",
            "Développeur Full-Stack",
            "Développeur d'Applications Web & Mobiles"
        ],
        contact: {
            email: "onintsoazafimandimby@gmail.com",
            location: "Antsirabe, Madagascar",
            phone: "0380611756",
            linkedin: "https://www.linkedin.com/in/onintsoa-razafimandimby-08269119b",
            github: null
        }
    },

    about: {
        summary: "Ingénieur logiciel expérimenté spécialisé dans les architectures web évolutives, l'intégration de l'IA et le développement mobile multiplateforme. Expérience avérée dans la fourniture de solutions prêtes pour la production pour des clients E-commerce, Fintech et Entreprise."
    },

    skills: [
        {
            category: "Frontend",
            items: [
                { name: "React", level: "Expert", context: "Production" },
                { name: "Next.js", level: "Avancé", context: "Production" },
                { name: "TypeScript", level: "Avancé", context: "Production" },
                { name: "Tailwind CSS", level: "Expert", context: "Production" },
                { name: "Ionic", level: "Avancé", context: "Apps Mobiles" },
                { name: "Angular", level: "Intermédiaire", context: "Projets Legacy" }
            ]
        },
        {
            category: "Backend",
            items: [
                { name: "Node.js", level: "Expert", context: "APIs Haute Perf." },
                { name: "Python", level: "Expert", context: "IA & Automatisation" },
                { name: "FastAPI", level: "Avancé", context: "Microservices" },
                { name: "Symfony/Laravel", level: "Avancé", context: "Apps Entreprise" },
                { name: "PHP", level: "Avancé", context: "Production" }
            ]
        },
        {
            category: "IA & Data",
            items: [
                { name: "NLP", level: "Avancé", context: "Voicebots & Analyse Texte" },
                { name: "TensorFlow", level: "Intermédiaire", context: "Intégration Modèles" },
                { name: "Scikit-learn", level: "Intermédiaire", context: "Analyses Prédictives" },
                { name: "MySQL/PostgreSQL", level: "Expert", context: "Modélisation Complexe" },
                { name: "MongoDB", level: "Avancé", context: "Données NoSQL" }
            ]
        },
        {
            category: "DevOps & Outils",
            items: [
                { name: "Git", level: "Expert", context: "Workflows CI/CD" },
                { name: "Docker", level: "Avancé", context: "Conteneurisation" },
                { name: "AWS/Azure", level: "Intermédiaire", context: "Déploiement Cloud" },
                { name: "Linux", level: "Avancé", context: "Gestion Serveur" }
            ]
        }
    ],

    experience: [
        {
            id: 1,
            company: "Innov-art",
            role: "Développeur Web Multi-Framework",
            period: "Fév 2024 - Présent",
            description: "Direction du développement d'applications web modernes avec un fort accent sur l'évolutivité, la sécurité et la maintenabilité.",
            achievements: [
                "Architecture et déploiement d'APIs REST haute performance utilisant Node.js et FastAPI.",
                "Conception de modèles de base de données complexes pour des applications d'entreprise.",
                "Implémentation d'authentifications sécurisées et d'intégrations de passerelles de paiement.",
                "Optimisation des performances frontend utilisant les meilleures pratiques Next.js et React."
            ],
            tech: ["Next.js", "React", "Node.js", "MySQL", "FastAPI", "Ionic"]
        },
        {
            id: 2,
            company: "United Call Center",
            role: "Ingénieur Logiciel & IA",
            period: "Jan 2023 - Fév 2024",
            description: "Ingénierie de plateformes web haute disponibilité et solutions vocales alimentées par l'IA.",
            achievements: [
                "Développement de solutions voicebot IA utilisant NLP pour l'interaction client en temps réel.",
                "Maintenance et mise à l'échelle de plateformes web à fort trafic assurant 99.9% de disponibilité.",
                "Intégration des services Microsoft Azure pour une infrastructure cloud évolutive.",
                "Automatisation du suivi des appels et des workflows de gestion de leads."
            ],
            tech: ["Symfony", "Laravel", "Python", "TensorFlow", "Azure", "Asterisk"]
        },
        {
            id: 3,
            company: "Innov-art",
            role: "Développeur Full Stack & IA",
            period: "Avr 2021 - Déc 2022",
            description: "Gestion du cycle de vie complet des projets web et implémentation de systèmes de trading algorithmique.",
            achievements: [
                "Conception et implémentation d'algorithmes de trading automatisés utilisant l'apprentissage par renforcement.",
                "Gestion de l'architecture technique de la conception au déploiement en production.",
                "Développement de systèmes d'analyse prédictive pour les marchés financiers."
            ],
            tech: ["React", "Python", "Scikit-learn", "Stable Baselines", "MATLAB"]
        },
        {
            id: 4,
            company: "LTI",
            role: "Développeur Full Stack",
            period: "Jan 2019 - Déc 2020",
            description: "Responsable de la conception, du développement et de l'amélioration continue des applications web.",
            achievements: [
                "Collaboration avec les équipes métier pour traduire les exigences en solutions techniques.",
                "Maintenance des systèmes existants tout en migrant les composants critiques vers des frameworks modernes.",
                "Garantie de la qualité du code par des tests rigoureux et des revues de code."
            ],
            tech: ["CodeIgniter", "Symfony", "React", "Angular", "Vue.js"]
        }
    ],

    projects: [
        {
            id: 1,
            title: "Plateformes E-commerce (B2B/B2C)",
            category: "Web",
            problem: "Les clients avaient besoin de plateformes de vente en ligne robustes et évolutives avec traitement sécurisé des paiements.",
            solution: "Conception et déploiement de 3 plateformes e-commerce personnalisées avec passerelles de paiement intégrées et tableaux de bord admin.",
            impact: "Rationalisation des processus de vente et augmentation de la portée numérique pour les entreprises locales.",
            tech: ["React", "Node.js", "Stripe API", "MySQL"],
            links: { live: "#", github: "#" },
            featured: true
        },
        {
            id: 2,
            title: "Assistant Voicebot IA",
            category: "IA",
            problem: "Les centres d'appels faisaient face à de gros volumes de requêtes répétitives, entraînant de longs temps d'attente.",
            solution: "Mise en œuvre d'un agent vocal conversationnel utilisant le NLP pour traiter automatiquement les demandes courantes.",
            impact: "Réduction de la charge de travail des agents de 40% et amélioration de la disponibilité 24/7 pour les clients.",
            tech: ["Python", "NLP", "Asterisk", "TensorFlow"],
            links: { live: "#", github: "#" },
            featured: true
        },
        {
            id: 3,
            title: "App de Transfert d'Argent",
            category: "Mobile",
            problem: "Besoin d'une solution de transfert d'argent P2P sécurisée et conviviale.",
            solution: "Développement d'une application mobile FinTech avec intégration de portefeuille numérique et protocoles de transaction sécurisés.",
            impact: "Facilitation des transferts pair-à-pair sécurisés et instantanés.",
            tech: ["Ionic", "Node.js", "Security APIs"],
            links: { live: "#", github: "#" },
            featured: true
        },
        {
            id: 4,
            title: "Tableau de Bord d'Investissement",
            category: "Web",
            problem: "Les investisseurs manquaient d'un outil en temps réel pour suivre la performance des actifs.",
            solution: "Construction d'un tableau de bord de gestion d'actifs financiers avec visualisation de données en temps réel.",
            impact: "Autonomisation des utilisateurs avec des informations exploitables et un suivi de portefeuille à la minute près.",
            tech: ["React", "D3.js", "FastAPI"],
            links: { live: "#", github: "#" }
        },
        {
            id: 5,
            title: "Plateforme de Demande ESTA",
            category: "Web",
            problem: "Les processus officiels de demande de visa étaient complexes et confus pour les utilisateurs.",
            solution: "Création d'une plateforme web simplifiée pour les demandes ESTA américaines.",
            impact: "Amélioration des taux de succès des soumissions grâce à une interface guidée par l'utilisateur.",
            tech: ["Laravel", "MySQL", "PHP"],
            links: { live: "#", github: "#" }
        },
        {
            id: 6,
            title: "Système de Chauffage Intelligent",
            category: "IoT",
            problem: "Utilisation inefficace de l'énergie dans les systèmes de chauffage domestique.",
            solution: "Développement d'une solution domotique pour la régulation thermique intelligente.",
            impact: "Optimisation de la consommation d'énergie et réduction des coûts des services publics.",
            tech: ["IoT", "Embedded C", "Python"],
            links: { live: "#", github: "#" }
        }
    ]
};
