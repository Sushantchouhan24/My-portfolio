/**
 * Portfolio Central Data Store
 * Configured with Sushant's personal information, education, skills, projects, and achievements.
 */

export const personalData = {
  name: "Sushant",
  role: "B.Tech Student | AI & Technology Enthusiast",
  degree: "Bachelor of Technology (B.Tech)",
  college: "JECRC UNIVERSITY",
  graduationYear: "2026",
  location: "JAIPUR, INDIA",
  email: "chouhansushant@gmail.com",
  githubHandle: "GITHUB",
  githubUrl: "https://github.com/Sushantsingh",
  linkedinHandle: "Sushantsingh",
  linkedinUrl: "https://linkedin.com/in/Sushantsingh",
  status: "Open to Internships & Projects",
  heroBio:
    "I am a B.Tech student passionate about artificial intelligence, modern web development, and digital productivity. Dedicated to learning emerging technologies and engineering practical, high-impact digital solutions.",
  aboutMe:
    "I am a B.Tech student interested in technology, artificial intelligence, web development and digital productivity. I am learning modern technologies and building practical projects. With strong problem-solving fundamentals and hands-on experience in building intuitive web interfaces and exploring AI systems, I enjoy transforming ideas into real-world applications.",
  highlights: [
    { label: "College", value: "JECRC UNIVERSITY" },
    { label: "Location", value: "JAIPUR, INDIA" },
    { label: "Degree", value: "B.Tech (2022 - 2026)" },
    { label: "Interests", value: "AI, Web Dev & Productivity" },
  ],
};

export const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "JECRC UNIVERSITY",
    location: "JAIPUR, INDIA",
    duration: "2022 - 2026",
    status: "Currently Pursuing (Expected 2026)",
    description:
      "Pursuing a comprehensive curriculum in Computer Science, combining foundational computing paradigms with modern applied software engineering and artificial intelligence.",
    relevantCoursework: [
      "Artificial Intelligence & Machine Learning",
      "Modern Web Development",
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming (OOP)",
      "Software Engineering & System Design",
    ],
    highlights: [
      "Focusing on emerging AI technologies, LLM integrations, and modern full-stack development",
      "Participating in university tech hackathons, coding sprints, and collaborative projects",
      "Consistently building real-world projects to solidify classroom learning",
    ],
  },
];

export const skillsData = [
  {
    id: "html",
    name: "HTML",
    category: "Web Development",
    level: "Advanced",
    iconName: "Code2",
    description: "Semantic HTML5, accessibility (a11y), responsive structures, and SEO best practices.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: "css",
    name: "CSS",
    category: "Web Development",
    level: "Advanced",
    iconName: "Palette",
    description: "Modern CSS3, Tailwind CSS, Flexbox, CSS Grid, custom keyframe animations, and mobile-first design.",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Web Development",
    level: "Intermediate",
    iconName: "FileCode2",
    description: "ES6+ syntax, asynchronous programming (Async/Await, Promises), DOM APIs, and dynamic interactive logic.",
    gradient: "from-amber-400 to-yellow-500",
  },
  {
    id: "python",
    name: "Python",
    category: "Core & AI",
    level: "Intermediate",
    iconName: "Terminal",
    description: "Object-oriented scripting, algorithmic problem-solving, data manipulation, and AI/ML model prototyping.",
    gradient: "from-blue-500 to-emerald-400",
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    category: "Core & AI",
    level: "Intermediate",
    iconName: "Cpu",
    description: "Core AI concepts, machine learning pipelines, intelligent agents, and automated decision-making systems.",
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    id: "genai",
    name: "Generative AI",
    category: "Core & AI",
    level: "Intermediate",
    iconName: "Sparkles",
    description: "Prompt engineering, Large Language Models (LLMs), AI tool integration, and building generative applications.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "webdev",
    name: "Web Development",
    category: "Web Development",
    level: "Advanced",
    iconName: "Globe",
    description: "React component architectures, Vite tooling, responsive layouts, API consumption, and Vercel deployment.",
    gradient: "from-cyan-400 to-teal-500",
  },
  {
    id: "productivity",
    name: "Digital Productivity",
    category: "Productivity",
    level: "Advanced",
    iconName: "Zap",
    description: "Git/GitHub version control, workflow automation, modern developer tooling, and agile time management.",
    gradient: "from-emerald-400 to-teal-500",
  },
];

export const projectsData = [
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    category: "Web Development",
    shortDescription:
      "A fast, modern, and fully responsive developer portfolio built using React, Vite, and Tailwind CSS. Features dark glassmorphism, responsive navigation, and smooth animations.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "Lucide Icons"],
    featured: true,
    githubUrl: "https://github.com/Sushantsingh/my-portfolio",
    liveDemoUrl: "#hero",
    badge: "Featured Portfolio",
    highlights: [
      "100% mobile-friendly with responsive hamburger navigation",
      "Interactive skill & achievement filterable cards",
      "Engineered for zero-config deployment on Vercel",
    ],
  },
  {
    id: "ai-website",
    title: "AI Website Project",
    category: "Artificial Intelligence",
    shortDescription:
      "An intelligent, interactive AI-powered web platform integrating smart query handling, prompt interfaces, and dynamic response generation for modern users.",
    technologies: ["Python", "JavaScript", "React", "Generative AI", "REST APIs"],
    featured: true,
    githubUrl: "https://github.com/Sushantsingh/ai-website-project",
    liveDemoUrl: "#contact",
    badge: "AI & Innovation",
    highlights: [
      "Prompt-guided generative responses and automated assistance",
      "Clean asynchronous state handling and modern UI",
      "Modular architecture for scalable AI model endpoints",
    ],
  },
  {
    id: "student-productivity",
    title: "Student Productivity Project",
    category: "Digital Productivity",
    shortDescription:
      "A tailored digital productivity hub created specifically for students to manage academic assignments, track study habits, and organize daily goals effectively.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage", "Workflow Design"],
    featured: true,
    githubUrl: "https://github.com/Sushantsingh/student-productivity-tool",
    liveDemoUrl: "#contact",
    badge: "Student Utility",
    highlights: [
      "Prioritized daily task tracking and academic milestone calendar",
      "Distraction-free interface with persistent local storage",
      "Designed specifically for student workflow efficiency",
    ],
  },
];

export const achievementsData = [
  {
    id: 1,
    category: "Certifications",
    title: "Web Development & Frontend Foundations",
    organization: "Online Learning Platform",
    year: "2024",
    status: "Verified",
    description:
      "Completed comprehensive training in modern frontend engineering, covering responsive HTML5, CSS3, JavaScript ES6+, and component-driven architecture.",
    badge: "Certification",
  },
  {
    id: 2,
    category: "Courses",
    title: "Artificial Intelligence & Generative AI Foundations",
    organization: "Technical Coursework",
    year: "2024",
    status: "Completed",
    description:
      "Studied core artificial intelligence methodologies, prompt engineering best practices, LLM tooling, and application integration.",
    badge: "Course",
  },
  {
    id: 3,
    category: "Hackathons",
    title: "University Tech Sprint & Hackathon",
    organization: "JECRC UNIVERSITY",
    year: "2023",
    status: "Participant",
    description:
      "Collaborated with peers to design, build, and pitch a practical technological solution tackling campus student productivity under tight deadlines.",
    badge: "Hackathon",
  },
  {
    id: 4,
    category: "Awards",
    title: "Academic & Practical Excellence Recognition",
    organization: "JECRC UNIVERSITY",
    year: "2023 - Present",
    status: "Honors",
    description:
      "Recognized for consistent academic diligence, active participation in technical workshops, and dedication to building practical software projects.",
    badge: "Award",
  },
  {
    id: 5,
    category: "Other Achievements",
    title: "Open Source Contributions & Technical Learning",
    organization: "Self-Directed & Community",
    year: "Ongoing",
    status: "Active",
    description:
      "Regularly exploring new frontend frameworks, building side-projects, sharing code on GitHub, and refining personal digital productivity workflows.",
    badge: "Milestone",
  },
];

export const navigationLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];
