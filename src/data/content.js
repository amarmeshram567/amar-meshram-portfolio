// All portfolio content lives here. Replace placeholders marked TODO with real details.

export const profile = {
  name: 'Amar Meshram',
  title: 'Full Stack Developer',
  location: 'Nagpur, India',
  availability: 'Available for opportunities',
  email: 'meshramamar567@gmail.com',
  github: 'https://github.com/amarmeshram567',
  linkedin: 'https://www.linkedin.com/in/TODO-your-linkedin',
  resumePdf: '/Resumes.pdf',
  tagline: 'Turning ideas into fast, scalable and meaningful digital products.',
  stack: 'REACT • NODE • JAVASCRIPT • PYTHON',
  about:
    "I'm a Full Stack Developer focused on building modern web applications that combine thoughtful UX, reliable backend systems and scalable architecture.",
  name: 'Amar Meshram',
  title: 'Full Stack MERN Developer',

  location: 'Nagpur, Maharashtra, India',

  contact: {
    phone: '+91 9284572177',
    email: 'meshramamar567@gmail.com',

    linkedin: 'www.linkedin.com/in/amar-meshram-1a51a3235',
    github: 'https://github.com/amarmeshram567',
  },

  availability: 'Available for opportunities',
};

export const aboutFacts = [
  { n: '01', label: 'FULL STACK DEVELOPMENT' },
  { n: '02', label: 'MERN / JAVASCRIPT' },
  { n: '03', label: 'AI-POWERED PRODUCTS' },
  { n: '04', label: 'PROBLEM SOLVING' },
];


export const projects = [
  {
    id: 'sentio-ai',
    no: '01',
    image: '/project/sentio.png',
    name: 'SENTIO AI',
    scene: 'ai',
    tagline: 'An AI-powered conversational experience.',
    role: 'Full Stack Developer',
    stack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Clerk',
      'TailwindCSS',
      'AI Tools',
      'Vercel',
    ],
    live: 'https://sentio-ai-9b9q.vercel.app/',
    source: 'https://github.com/amarmeshram567/sentio-ai',
    overview:
      'A full-stack AI platform with a ChatGPT-style conversational interface for interactive AI-powered conversations, built and deployed end to end.',
    problem:
      'Users need a clear, responsive place to hold AI conversations with secure, personal accounts.',
    solution:
      'A responsive React.js frontend with conversation management and authentication, backed by Node.js and Express.js APIs and MongoDB storage.',
    features: [
      'ChatGPT-style conversational interface for interactive AI-powered conversations',
      'Responsive React.js frontend with modern UI components and conversation management',
      'Node.js and Express.js backend APIs with MongoDB for user and application data',
      'Clerk authentication with protected routes and user account management',
      'Deployed on Vercel with environment configuration and production-ready frontend/backend integration',
    ],
    architecture:
      'React.js frontend on Vercel, Node.js and Express.js APIs, MongoDB for user and application data, Clerk for authentication, with environment configuration for production frontend and backend integration.',
    challenges:
      'Designing the architecture for scalable AI-assisted workflows and integrating modern development practices for production deployment.',
    result:
      'Deployed to production on Vercel with a polished, AI-focused user experience.',
  },

  {
    id: 'invoiceflow',
    no: '02',
    image: '/project/invoiceFlow.png',
    name: 'INVOICEFLOW',
    scene: 'finance',
    tagline: 'Smart invoicing and GST management for modern businesses.',
    role: 'Full Stack Developer',
    stack: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'TailwindCSS',
      'REST APIs',
    ],
    live: 'https://invoice-flow-billing-app.vercel.app/',
    source: 'https://github.com/amarmeshram567/invoiceFlow-Billing-app',
    overview:
      'A business invoicing platform designed to simplify invoice creation, GST management, customer information, and professional invoice customization.',
    problem:
      'Businesses need a convenient way to create professional invoices, manage GST information, and maintain consistent billing records.',
    solution:
      'A full-stack invoicing application with invoice management, GST-related information, email functionality, and customizable business branding.',
    features: [
      'Invoice creation and management',
      'GST-related invoice information and billing',
      'Custom business logo uploads for invoice branding',
      'Email functionality for invoice communication',
      'Structured customer and invoice management',
    ],
    architecture:
      'React.js frontend communicating with Node.js and Express.js backend APIs, with MongoDB for application data storage.',
    challenges:
      'Designing a flexible invoicing workflow that supports business branding, GST information, and invoice communication.',
    result:
      'A centralized invoicing solution focused on simplifying business billing and invoice management.',
  },

  {
    id: 'unifiedops',
    no: '03',
    image: '/project/unified.png',
    name: 'UNIFIEDOPS',
    scene: 'ops',
    tagline: 'A centralized multi-workspace enterprise operations platform.',
    role: 'Full Stack Developer | Hackathon Project',
    stack: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Redis',
      'REST APIs',
      'JavaScript',
    ],
    live: 'https://unified-ops-hakathon-project.vercel.app/',
    source: 'https://github.com/amarmeshram567/UnifiedOpsHakathon-Project',
    overview:
      'An enterprise operations management platform designed to centralize workspace-based operations with role-based access and structured data management.',
    problem:
      'Organizations need centralized operational workflows with workspace isolation and controlled access for different team members.',
    solution:
      'A workspace-oriented backend architecture using Express.js and PostgreSQL, with role-based access for administrators and staff members.',
    features: [
      'Multi-workspace architecture',
      'Workspace isolation using x-workspace-id',
      'Role-based access control with ADMIN and STAFF roles',
      'REST API architecture using Node.js and Express.js',
      'PostgreSQL database integration',
      'Redis and queue-based architecture planning',
    ],
    architecture:
      'Node.js and Express.js backend, PostgreSQL database using the native pg driver without an ORM, workspace identification through x-workspace-id, and Redis/queue infrastructure.',
    challenges:
      'Designing workspace isolation, role-based authorization, and a maintainable backend architecture without relying on an ORM.',
    result:
      'An enterprise-oriented architecture focused on workspace isolation, access control, and scalable operations management.',
  },

  {
    id: 'jg-university',
    no: '04',
    image: '/project/university.png',
    name: 'JG UNIVERSITY',
    scene: 'edu',
    tagline: 'A modern digital experience for university education.',
    role: 'Frontend Developer',
    stack: [
      'Next.js',
      'React.js',
      'TypeScript',
      'TailwindCSS',
      'JavaScript',
    ],
    live: 'https://jg-university-phi.vercel.app/',
    source: 'https://github.com/amarmeshram567/JG-university-project',
    overview:
      'A modern university website built to deliver an organized and responsive digital experience for educational information and university content.',
    problem:
      'Educational institutions need a professional online presence that makes university information accessible and easy to navigate.',
    solution:
      'A responsive university website developed using Next.js and TailwindCSS with a modern component-based frontend architecture.',
    features: [
      'Modern university website interface',
      'Responsive layouts for different screen sizes',
      'Reusable React components',
      'Next.js application architecture',
      'TailwindCSS-based styling and layouts',
    ],
    architecture:
      'Next.js application using React components, TypeScript, and TailwindCSS for the frontend and responsive user interface.',
    challenges:
      'Building a consistent, responsive university interface with reusable components and a maintainable Next.js architecture.',
    result:
      'A modern, responsive university web experience built with Next.js.',
  },
];

// Tech stack map: categories orbit the centre.
export const toolbox = [
  {
    category: 'FRONTEND',
    items: [
      { name: 'React.js', focus: 'Component architecture', usage: 'Responsive, state-driven interfaces' },
      { name: 'Redux Toolkit', focus: 'State management', usage: 'Predictable application state' },
      { name: 'Context API', focus: 'State sharing', usage: 'Lightweight shared state' },
      { name: 'JavaScript', focus: 'ES6+', usage: 'Application logic across client and server' },
      { name: 'HTML5 / CSS3', focus: 'Semantics & layout', usage: 'Accessible markup and styling' },
      { name: 'TailwindCSS', focus: 'Design systems', usage: 'Consistent, fast UI styling' },
      { name: 'Bootstrap', focus: 'Component library', usage: 'Rapid responsive layouts' },
    ],
  },
  {
    category: 'BACKEND & DATA',
    items: [
      { name: 'Node.js', focus: 'Runtime', usage: 'Scalable server-side applications' },
      { name: 'Express.js', focus: 'HTTP layer', usage: 'Routing and middleware for APIs' },
      { name: 'REST APIs', focus: 'Interfaces', usage: 'Clean, predictable service endpoints' },
      { name: 'JWT / Clerk', focus: 'Authentication', usage: 'Secure, protected routes' },
      { name: 'MongoDB', focus: 'Document modelling', usage: 'Atlas-hosted data with Mongoose ODM' },
      { name: 'MongoDB Atlas', focus: 'Cloud database', usage: 'Hosted MongoDB clusters' },
      { name: 'SQL', focus: 'Querying', usage: 'Relational queries and schema design' },
      { name: 'PostgreSQL', focus: 'Relational data', usage: 'Structured, transactional storage' },
      { name: 'Mongoose ODM', focus: 'Data modelling', usage: 'Schemas and validation for MongoDB' },
      { name: 'Python', focus: 'Scripting', usage: 'Backend scripting and tooling' },
      { name: 'DSA', focus: 'Programming fundamentals', usage: 'Arrays, linked lists, stacks, queues, trees, sorting, recursion' },
    ],
  },
  {
    category: 'DEVOPS & TOOLS',
    items: [
      { name: 'Docker', focus: 'Containers', usage: 'Reproducible environments' },
      { name: 'GitHub Actions', focus: 'CI/CD', usage: 'Automated build and deploy pipelines' },
      { name: 'Vercel / Netlify / Render', focus: 'Deployment', usage: 'Production hosting and environments' },
      { name: 'Git / GitHub', focus: 'Version control', usage: 'Branching, history and review' },
      { name: 'Postman', focus: 'API testing', usage: 'Testing and documenting endpoints' },
      { name: 'VS Code', focus: 'Editor', usage: 'Daily development environment' },
    ],
  },
];

// Journey: 2023–2026 milestones from the brief.
export const journey = [
  { year: '2023', text: 'Started professional development' },
  { year: '2024', text: 'Full stack development' },
  { year: '2025', text: 'Completed MERN development program' },
  { year: '2026', text: 'Building real-world products' },
];

// Resume preview: TODO replace with real entries. Nothing here is invented.


export const resumePreview = {
  'PROFILE SUMMARY': [
    'Full Stack MERN Developer with hands-on experience building and deploying responsive web applications using React.js, Node.js, Express.js, and MongoDB.',
    'Skilled in developing REST APIs, authentication systems, admin dashboards, and production-ready full-stack projects.',
    'Strengthening core problem-solving ability through Data Structures & Algorithms in Python.',
    'Familiar with AI-assisted development workflows, modern deployment platforms, and writing clean, maintainable code.',
  ],

  EDUCATION: [
    'B.Voc – Hardware Technology & Networking, Bhiwapur Mahavidyalaya, Nagpur (2019–2022), CGPA: 9.51',
    'NxtWave – Industry Certification, Full Stack Developer Program (Completed April 2025)',
    'Udemy – Online Course, Python Data Structures & Algorithms (DSA) (September 2026)',
  ],

  'TECHNICAL SKILLS': [
    'Frontend: React.js, Redux Toolkit, Context API, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap',
    'Backend: Node.js, Express.js, Python, REST APIs, Authentication (JWT, Clerk)',
    'Database: MongoDB, MongoDB Atlas, SQL, PostgreSQL, Mongoose ODM',
    'Programming Fundamentals: Data Structures & Algorithms (Python) – Arrays, Linked Lists, Stacks, Queues, Trees, Sorting & Searching, Recursion, Time & Space Complexity',
    'DevOps and Cloud: Docker, GitHub Actions (CI/CD), Vercel, Netlify, Render',
    'Tools and Platforms: Git, GitHub, Postman, VS Code',
    'Soft Skills: Team Leadership, Problem Solving, Time Management, Communication',
  ],

  'AI AUTOMATION SKILLS': [
    'AI Tools: ChatGPT/Codex, Claude AI, Gemini, GitHub Copilot, Cursor AI, Windsurf, Microsoft Copilot, Lovable AI',
    'Automation Tools: Make (Integromat)',
    'Core Skills: Prompt Engineering, AI-Assisted Development, Workflow Automation',
    'Leveraged AI-assisted tools for code generation, debugging, application scaffolding, and technical documentation.',
    'Used AI tools to support code reviews, refactoring, testing, and UI improvements during development.',
    'Created structured prompts to improve code quality, development efficiency, and problem-solving workflows.',
    'Designed workflow automations using Make for notifications, form processing, and data synchronization.',
    'Applied AI tools to streamline repetitive tasks, content drafting, summarization, and developer productivity.',
  ],

  PROJECTS: [
    'Sentio AI | React.js, Node.js, Express.js, MongoDB, Clerk, Tailwind CSS, AI Tools, Vercel',
    'Built and deployed a full-stack AI platform with a ChatGPT-style conversational interface for interactive AI-powered conversations.',
    'Developed a responsive React.js frontend with modern UI components, conversation management, authentication, and a polished AI-focused user experience.',
    'Implemented backend APIs using Node.js and Express.js with MongoDB for user and application data management.',
    'Integrated Clerk authentication with protected routes and user account management for secure access.',
    'Designed the application architecture for scalable AI-assisted workflows and integrated modern development practices for production deployment.',
    'Deployed the application on Vercel with environment configuration and production-ready frontend/backend integration.',
    'Live: https://sentio-ai-9b9q.vercel.app/',

    'Shopping App | React.js, Node.js, Express.js, MongoDB, Clerk, Tailwind CSS, Vercel',
    'Built and deployed a full-stack e-commerce web application with separate customer and admin interfaces for product browsing, cart management, secure authentication, and order handling.',
    'Developed a responsive frontend using React.js and Tailwind CSS with product listings, category-based navigation, and admin dashboard workflows.',
    'Implemented RESTful APIs with Node.js and Express.js for products, categories, orders, coupons, users, and admin operations.',
    'Integrated MongoDB for persistent data storage and added Clerk authentication with protected user and admin routes.',
    'Managed production deployment on Vercel, including environment configuration, API routing, and CORS handling.',
    'Live: https://shoppingapp-sepia.vercel.app/',

    'Hotel Booking | React.js, Node.js, Express.js, MongoDB, Stripe, Clerk, Tailwind CSS',
    'Developed a full-stack hotel booking application enabling users to search, view, and book hotels by location, availability, and price.',
    'Implemented secure authentication using Clerk with booking management and dynamic filtering features.',
    'Built RESTful APIs with Express.js and managed scalable application data using MongoDB.',
    'Integrated Stripe for secure online payment processing.',
    'Live: https://hotel-booking-app-inky-omega.vercel.app',
  ],

  EXPERIENCE: [
    'Supervisor – Meshram Constructor | Construction Project Management & Operations | Mouda, Nagpur (2023–Present)',
    'Oversaw day-to-day on-site operations for residential and commercial projects while maintaining safety, quality, and delivery timelines.',
    'Led and coordinated teams of laborers and subcontractors, resolving on-site issues and ensuring smooth project execution.',
    'Managed procurement, vendor coordination, and inventory planning to reduce material wastage and improve operational efficiency.',
    'Prepared progress reports, cost updates, and milestone summaries for stakeholders to support planning and decision-making.',
    'Simultaneously pursued full-stack development training and built production-grade web applications, demonstrating strong self-learning and career-transition initiative.',
  ],

};



// Highlighted skills (from resume)
export const dsaTopics = [
  'Arrays',
  'Linked Lists',
  'Stacks',
  'Queues',
  'Trees',
  'Sorting & Searching',
  'Recursion',
  'Time & Space Complexity',
  'Dynamic Programming',
];

export const aiAutomationHighlights = [
  'Leveraged AI-assisted tools for code generation, debugging, application scaffolding, and technical documentation.',
  'Used AI tools to support code reviews, refactoring, testing, and UI improvements during development.',
  'Created structured prompts to improve code quality, development efficiency, and problem-solving workflows.',
  'Designed workflow automations using Make for notifications, form processing, and data synchronization.',
  'Applied AI tools to streamline repetitive tasks, content drafting, summarization, and developer productivity.',
];

export const aiToolsList = [
  'ChatGPT / Codex',
  'Claude AI',
  'Gemini',
  'GitHub Copilot',
  'Cursor AI',
  'Windsurf',
  'Microsoft Copilot',
  'Lovable AI',
  'Make (Integromat)',
];

export const tickerSkills = [
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'Python',
  'Data Structures & Algorithms',
  'Docker',
  'GitHub Actions',
  'Vercel',
  'Clerk',
  'Prompt Engineering',
  'AI-Assisted Development',
  'Workflow Automation',
];

export const navItems = [
  { id: 'work', label: 'WORK' },
  { id: 'about', label: 'ABOUT' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'contact', label: 'CONTACT' },
];

