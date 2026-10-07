export interface CoreExpertiseItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'all' | 'ecommerce' | 'enterprise' | 'fintech' | 'ai' | 'automation' | string;
  icon: string;
  role?: string;
  tags: string[];
  duration: string;
  description: string;
  bullets: string[];
  techStack: string[];
  liveStatus?: string;
  links?: {
    label: string;
    url: string;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  badge?: string;
  badgeType?: 'emerald' | 'amber';
  bullets: string[];
  techStack: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ArchitectureStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
  icon: string;
}

export const portfolioData = {
  personal: {
    name: "Ajay Chandani",
    title: "Senior Software Engineer & AI Solutions Engineer",
    shortBio: "Senior Ecommerce & AI Solutions Engineer | WordPress • WooCommerce • Shopify • BigCommerce | PHP • Laravel • Python • Django • FastAPI | GenAI & AI-Powered Ecommerce | n8n | Client Communication • Project Ownership",
    status: "Actively Open to Opportunities",
    statusSubtext: "Senior / Tech Lead Roles (Remote, Hybrid, or Relocation)",
    experienceYears: "13+ Years",
    totalExpDetailed: "13 Years 6 Months",
    email: "ajaychandani003@gmail.com",
    phone: "+919926395979",
    phoneDisplay: "+91-9926395979",
    whatsapp: "https://wa.me/919926395979",
    location: "Indore, India",
    linkedin: "https://www.linkedin.com/in/ajay-chandani-aj03/",
    github: "https://github.com/ajaychandani003",
    avatar: "/ajay-profile.jpg",
    summary: `Senior Software Engineer and Technical Lead with 13+ years of experience delivering enterprise web applications, eCommerce platforms, SaaS solutions, and AI-powered automation for international clients across the US, UK, Australia, and Caribbean.

Strong client-facing and project leadership background: experienced in client communication, requirement gathering, business analysis, technical scoping, architectural design, agile estimation, stakeholder management, team mentoring, and end-to-end project ownership.

Proven ability to translate complex business objectives into scalable, high-converting technical solutions, communicating seamlessly with both technical teams and executive stakeholders from discovery through production deployment and long-term scaling.`,
  },

  stats: [
    { value: "13+", unit: "Yrs", label: "Engineering Experience" },
    { value: "50+", unit: "", label: "Ecommerce & Web Systems" },
    { value: "AI & RAG", unit: "", label: "FastAPI · Ollama · n8n", highlight: true },
    { value: "Global", unit: "", label: "US, UK, AU & Caribbean Clients", isAward: true },
    { value: "Full Life", unit: "", label: "Architecture to Cloud Deploy" },
  ],

  recruiterPitch: `Ajay Chandani · Senior Software Engineer & AI Solutions Engineer (13+ Yrs) · Ecommerce (Shopify, WooCommerce, BigCommerce) + Backend (PHP/Laravel, Python/FastAPI) + AI (RAG, AI Agents, n8n) · International Client Ownership & Leadership · Indore, India · Email: ajaychandani003@gmail.com · Phone: +91-9926395979`,

  coreExpertise: [
    {
      id: "ecommerce",
      icon: "🛒",
      title: "Ecommerce Engineering",
      description: "Custom storefronts, high-converting checkout funnels, payment gateways, multi-currency stores, and headless architectures.",
      tags: ["WooCommerce", "Shopify", "BigCommerce", "Magento", "Headless"]
    },
    {
      id: "ai-rag",
      icon: "🤖",
      title: "AI & RAG Solutions",
      description: "Context-aware AI knowledge assistants, RAG pipelines, local LLMs with Ollama, embeddings, and intelligent customer agents.",
      tags: ["RAG", "LLMs", "LangChain", "Ollama", "Vector DB", "Embeddings"]
    },
    {
      id: "backend-apis",
      icon: "⚙️",
      title: "Backend & APIs",
      description: "Scalable REST & GraphQL API services, microservices, secure authentication, Webhooks, asynchronous queues, and database optimization.",
      tags: ["Laravel", "FastAPI", "Django", "PHP", "Python", "REST/GraphQL"]
    },
    {
      id: "shopify-dev",
      icon: "🔌",
      title: "Shopify Development",
      description: "Custom Shopify themes, Liquid templating, custom private/public apps, Storefront API, checkout customizations, and ERP integrations.",
      tags: ["Shopify Liquid", "Storefront API", "Shopify Apps", "Webhooks"]
    },
    {
      id: "wordpress-woo",
      icon: "🧩",
      title: "WordPress / WooCommerce",
      description: "Enterprise WordPress solutions, bespoke WooCommerce plugin development, custom hooks/filters, REST API extensions, and speed optimization.",
      tags: ["Custom Plugins", "Custom Themes", "Woo REST API", "Hook Architecture"]
    },
    {
      id: "automation",
      icon: "🔄",
      title: "Workflow Automation",
      description: "End-to-end business process automation connecting CRMs, ERPs, messaging APIs (WhatsApp/Twilio), and AI decision engines.",
      tags: ["n8n Workflows", "Voiceflow", "WhatsApp API", "Zapier", "OAuth 2.0"]
    },
    {
      id: "architecture",
      icon: "🏗️",
      title: "Solution Architecture",
      description: "Designing resilient systems, database schemas, decoupled headless frontends, containerized services, and cloud deployments.",
      tags: ["System Design", "Microservices", "Docker", "Database Indexing", "AWS"]
    },
    {
      id: "client-ownership",
      icon: "👥",
      title: "Client & Project Ownership",
      description: "Direct international client communication, requirement discovery, sprint planning, estimation, team leadership, and delivery assurance.",
      tags: ["Global Clients", "Agile Leadership", "Scoping & Estimation", "Code Reviews"]
    }
  ] as CoreExpertiseItem[],

  experiences: [
    {
      id: "encoresky",
      role: "Senior Software Engineer & Technical Lead",
      company: "Encoresky Technologies Pvt. Ltd.",
      location: "Indore, India",
      period: "April 2018 – Present (8+ Years)",
      isCurrent: true,
      badge: "Current Role",
      badgeType: "emerald",
      bullets: [
        "Architected and delivered high-performance enterprise eCommerce solutions and custom web platforms utilizing BigCommerce, Shopify, WooCommerce, and Laravel.",
        "Spearheaded AI engineering initiatives, designing and deploying custom AI Chatbots, Voice Assistants, and RAG pipelines to automate customer operations and knowledge retrieval.",
        "Engineered automated business workflows using n8n and Voiceflow, connecting multi-channel data sources and cutting manual operational overhead by up to 60%.",
        "Designed and integrated mission-critical REST/GraphQL APIs, webhooks, payment gateways, ERPs, trading platforms, and inventory management systems.",
        "Served as primary client-facing technical lead, managing consultations with international enterprise clients and translating complex business goals into scalable software architectures.",
        "Mentored engineering teams, established best practices for code reviews, database optimization, and CI/CD pipelines."
      ],
      techStack: [
        "BigCommerce", "Shopify", "WooCommerce", "WordPress", "Laravel", "PHP", "Python",
        "FastAPI", "RAG & LLMs", "AI Agents", "n8n", "Voiceflow", "GraphQL", "REST APIs", "Docker", "AWS"
      ]
    },
    {
      id: "cis",
      role: "Software Engineer / Web Developer",
      company: "Cyber Infrastructure Private Limited (CIS)",
      location: "Indore, India",
      period: "March 2013 – April 2018 (5 Years 2 Months)",
      badge: "5+ Years Track Record",
      badgeType: "amber",
      bullets: [
        "Developed, customized, and deployed 50+ enterprise websites and dynamic eCommerce portals utilizing PHP, WordPress, and WooCommerce.",
        "Engineered custom WordPress plugins and responsive WooCommerce themes from scratch, enforcing strict coding standards, cross-browser compatibility, and speed optimization.",
        "Maintained proactive technical communications with overseas clients (US, UK, Australia), gathering specifications and leading sprint deliverables.",
        "Integrated secure payment gateways (Stripe, PayPal, Authorize.Net), shipping carriers, and third-party SaaS APIs.",
        "Conducted database query tuning, caching optimization, and front-end performance enhancements to guarantee sub-second page loads."
      ],
      techStack: [
        "PHP", "WordPress", "WooCommerce", "MySQL", "JavaScript", "jQuery", "HTML5/CSS3",
        "Stripe", "PayPal", "Authorize.Net", "REST APIs", "Git", "Apache / Nginx"
      ]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "patrishi-sports",
      title: "Patrishi Sports — Sports & Event Management Platform",
      category: "enterprise",
      icon: "🏆",
      role: "Project Manager & Tech Lead",
      tags: ["Laravel", "React.js", "MySQL", "REST API", "Dymo SDK", "Event Platform"],
      duration: "6 Months",
      liveStatus: "Live Client Platform",
      description: "Enterprise athletic event management platform in Aruba offering real-time athlete registration, automated payment processing, group invitations, and live athlete ranking systems.",
      bullets: [
        "Built an enterprise athletic event platform in Aruba offering real-time athlete registration, payment processing, group invitations, and athlete ranking systems.",
        "Integrated Dymo SDK for automated hardware BIB/label printing; developed custom REST APIs to syndicate live event data across partner platforms.",
        "Managed sprint cycles, client communication, system architecture, database design, and end-to-end production launch."
      ],
      techStack: ["Laravel", "React.js", "MySQL", "REST API", "Dymo Hardware SDK", "Payment Gateways", "Docker"],
      links: [
        { label: "Live Platform", url: "https://patrishisports.com/", icon: "link" }
      ]
    },
    {
      id: "wsmode",
      title: "WSMode — Automated Trading Platform & Mobile App",
      category: "fintech",
      icon: "📈",
      role: "Project Manager & Tech Lead",
      tags: ["Fintech", "Laravel", "WooCommerce", "Bitvavo API", "Coinbase API", "Apple Pay"],
      duration: "6 Months",
      liveStatus: "Live Fintech Platform",
      description: "Automated trading ecosystem featuring membership tiers, affiliate management, algorithmic trading bots, and live crypto/market charts.",
      bullets: [
        "Developed an automated trading ecosystem featuring membership tiers, affiliate management, and live market charts powered by Bitvavo, Coinbase, and Yahoo Finance APIs.",
        "Engineered algorithmic trading bots executing automated Buy/Sell strategies; built secure REST APIs with Apple Pay subscription integration.",
        "Delivered full project ownership as Tech Lead & PM, coordinating cross-functional engineering and financial data compliance."
      ],
      techStack: ["Laravel", "WordPress", "WooCommerce", "Bitvavo API", "Coinbase API", "Yahoo Finance API", "Apple Pay", "REST APIs"],
      links: [
        { label: "Live Platform", url: "https://wsmode.com/", icon: "link" }
      ]
    },
    {
      id: "peace-at-home",
      title: "PeaceAtHome Parenting Solutions",
      category: "ecommerce",
      icon: "🏡",
      role: "Lead Developer",
      tags: ["WordPress", "WooCommerce", "Zoom API", "Subscriptions", "eLearning"],
      duration: "4 Months",
      liveStatus: "Live Education Portal",
      description: "US-based parenting education portal featuring on-demand courses, recurring memberships, and an automated Zoom integration for instant live class registrations.",
      bullets: [
        "Architected a US-based parenting education portal featuring on-demand courses, recurring subscriptions, and an automated Zoom API integration for instant live class registrations.",
        "Engineered custom WooCommerce membership logic, restricted content paywalls, automated email reminders, and payment gateway workflows.",
        "Optimized checkout funnels and database queries for seamless high-traffic live webinar enrollments."
      ],
      techStack: ["WordPress", "WooCommerce", "PHP", "Laravel", "Zoom API", "Apple Pay", "Stripe", "REST APIs"],
      links: [
        { label: "Live Portal", url: "https://peaceathomeparenting.com/", icon: "link" }
      ]
    },
    {
      id: "audio-advisor",
      title: "AudioAdvisor — High-Fidelity Audio eCommerce",
      category: "ecommerce",
      icon: "🎧",
      role: "Lead Developer",
      tags: ["BigCommerce", "Stencil Framework", "JavaScript", "Headless APIs"],
      duration: "2 Months",
      liveStatus: "Live Enterprise Store",
      description: "Enterprise high-fidelity audio eCommerce store with bespoke Stencil theme development, custom product comparison widgets, and optimized checkout flow.",
      bullets: [
        "Customized enterprise high-fidelity audio eCommerce store with bespoke Stencil theme development, custom product comparison widgets, and optimized checkout flow.",
        "Implemented custom JavaScript widgets for dynamic audio component pairing, specification matrices, and rapid search filtering.",
        "Streamlined catalog navigation and page load speeds across thousands of premium audio SKUs."
      ],
      techStack: ["BigCommerce", "Stencil Framework", "JavaScript", "Handlebars.js", "Headless APIs", "CSS3"],
      links: [
        { label: "Live Store", url: "https://www.audioadvisor.com/", icon: "link" }
      ]
    },
    {
      id: "kindtokidz",
      title: "Kindtokidz — Kids Toys Shop",
      category: "ecommerce",
      icon: "🧸",
      role: "Lead Developer",
      tags: ["BigCommerce", "Stencil CLI", "Handlebars.js", "Payment Gateways", "Australia"],
      duration: "4 Months",
      liveStatus: "Live Australian Store",
      description: "High-volume Australian children's toy & furniture eCommerce store built on BigCommerce with custom storefront themes and automated logistics.",
      bullets: [
        "Developed custom Stencil storefront themes and managed end-to-end third-party app, shipping rule, and payment gateway configurations.",
        "Engineered custom shipping calculators tailored for Australian postal codes and bulky parcel dropshipping.",
        "Integrated review widgets, abandoned cart recovery, and localized checkout payment solutions."
      ],
      techStack: ["BigCommerce", "Stencil CLI", "Handlebars.js", "Payment Gateways", "Australia Post API", "JavaScript"],
      links: [
        { label: "Live Store", url: "https://www.kindtokidz.com.au/", icon: "link" }
      ]
    },
    {
      id: "connecting-dna",
      title: "ConnectingDNA — Genetic Profile System",
      category: "enterprise",
      icon: "🧬",
      role: "Lead Developer",
      tags: ["WordPress", "PHP", "Custom Plugin Architecture", "Health Tech"],
      duration: "2 Months",
      liveStatus: "Live Genetic Portal",
      description: "Custom WordPress plugin architecture for managing secure DNA health profiles, automated sample intake, and clinical consultation workflows.",
      bullets: [
        "Developed a custom WordPress plugin for managing secure DNA profiles and health consultation workflows.",
        "Architected secure patient intake forms, automated report dispatch, and restricted medical portal access.",
        "Ensured rigorous data sanitization, privacy compliance, and custom database table optimization."
      ],
      techStack: ["WordPress", "PHP", "Custom Plugin Architecture", "MySQL", "REST APIs", "JavaScript"],
      links: [
        { label: "Live Website", url: "https://connectingdna.com/", icon: "link" }
      ]
    },
    {
      id: "headless-woocommerce",
      title: "Headless WooCommerce Platform",
      category: "ai",
      icon: "🛍️",
      role: "Full-Stack Architect",
      tags: ["Headless Ecommerce", "FastAPI", "React", "PostgreSQL", "Docker"],
      duration: "Live Architecture Project",
      liveStatus: "Featured AI & Headless System",
      description: "Modern decoupled eCommerce architecture separating frontend presentation from WooCommerce backend via a high-performance Python/FastAPI middleware layer and Docker containerization.",
      bullets: [
        "Architected a high-speed decoupled headless storefront using React and Next.js, eliminating PHP rendering bottlenecks for sub-second page loads.",
        "Engineered a resilient FastAPI backend service caching WooCommerce REST API responses, managing cart state, and proxying checkout orders.",
        "Integrated PostgreSQL for custom metadata storage, real-time product search indexing, and customer order analytics."
      ],
      techStack: ["React", "Next.js", "Python", "FastAPI", "WooCommerce REST API", "PostgreSQL", "Docker", "Tailwind CSS"]
    },
    {
      id: "company-ai-assistant",
      title: "Company AI Knowledge Assistant",
      category: "ai",
      icon: "🤖",
      role: "AI Solutions Engineer",
      tags: ["RAG", "Ollama", "LangChain", "Vector DB", "Local LLM"],
      duration: "Production AI System",
      liveStatus: "Live RAG System",
      description: "Enterprise Retrieval-Augmented Generation (RAG) assistant running on local and private LLMs, enabling team members and clients to query documentation with verified source citations.",
      bullets: [
        "Designed a privacy-focused document indexing pipeline ingesting internal PDFs, standard operating procedures, and product manuals into vector embeddings.",
        "Configured Ollama and LangChain to orchestrate similarity searches against vector databases, preventing hallucinations through strict prompt grounding.",
        "Engineered streaming responses over FastAPI WebSockets for instantaneous real-time conversational answers."
      ],
      techStack: ["Python", "FastAPI", "LangChain", "Ollama", "pgvector / ChromaDB", "Embeddings", "Next.js"]
    },
    {
      id: "n8n-automation",
      title: "n8n Enterprise AI & WhatsApp Automation",
      category: "automation",
      icon: "⚡",
      role: "Automation Architect",
      tags: ["n8n", "LLM", "WhatsApp API", "Twilio", "Automations"],
      duration: "Workflow Automation",
      liveStatus: "Live Automation Engine",
      description: "Automated business workflow system connecting conversational WhatsApp interfaces with backend inventory systems, automated invoice generation, and customer alerts.",
      bullets: [
        "Designed production n8n workflows orchestrating complex multi-step data transformations between webhooks, databases, and third-party APIs.",
        "Built WhatsApp interactive assistants via Twilio & OpenAI for instant order confirmations, quote requests, and status inquiries.",
        "Implemented comprehensive error-handling nodes, automatic retries, and failure alerts to guarantee 99.9% pipeline reliability."
      ],
      techStack: ["n8n", "Twilio WhatsApp API", "OpenAI", "Webhooks", "PostgreSQL", "REST APIs"]
    }
  ] as ProjectItem[],

  skillsCategorized: [
    {
      category: "LANGUAGES",
      skills: ["PHP", "Python", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"]
    },
    {
      category: "BACKEND",
      skills: ["Laravel", "FastAPI", "Django", "REST APIs", "GraphQL", "Microservices", "OOP / Clean Architecture"]
    },
    {
      category: "ECOMMERCE",
      skills: ["WooCommerce", "Shopify (Liquid & Apps)", "BigCommerce", "Magento", "Headless Commerce", "Payment Gateways"]
    },
    {
      category: "AI & AGENTS",
      skills: ["LLMs", "RAG Architecture", "Embeddings", "Vector Databases", "LangChain", "Ollama", "AI Agents", "Prompt Engineering"]
    },
    {
      category: "AUTOMATION",
      skills: ["n8n Workflows", "Voiceflow", "Twilio WhatsApp", "Webhooks", "OAuth 2.0", "CRM Sync"]
    },
    {
      category: "FRONTEND",
      skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "jQuery", "Responsive UI"]
    },
    {
      category: "DATABASE",
      skills: ["MySQL", "PostgreSQL", "pgvector", "Redis", "ChromaDB", "Database Indexing"]
    }
  ] as SkillGroup[],

  education: [
    {
      year: "2010 – 2013",
      degree: "Master of Computer Applications (MCA)",
      institution: "School of Computer & Electronics, IPS Academy, Indore | Rajiv Gandhi Proudyogiki Vishwavidyalaya (R.G.P.V)",
      grade: "Aggregate: 8.0 CGPA",
      location: "Indore, India"
    },
    {
      year: "2007 – 2010",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Vikram University, Ujjain (M.P.)",
      grade: "Grade: 69.94%",
      location: "Ujjain, India"
    }
  ],

  certifications: [
    { title: "Senior Software Architecture", subtitle: "Enterprise Systems Design" },
    { title: "Generative AI & RAG Engineering", subtitle: "AI Systems & Agents" },
    { title: "Full-Stack Ecommerce Solutions", subtitle: "Shopify & WooCommerce Specialist" }
  ],

  leadership: {
    title: "End-to-End Client Consultation & Engineering Leadership",
    description: "13+ years of driving solutions from initial discovery to international client sign-off. Mentored engineers across PHP, Python, and AI domains, instituted structured code reviews, and managed long-term stakeholder partnerships across US, UK, Australia, and Caribbean."
  },

  additional: {
    languages: "English (Professional / Client-Facing) · Hindi (Native)",
    interests: "Technology Trends · System Architecture · Chess · Mentoring"
  }
};
