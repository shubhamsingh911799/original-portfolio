/**
 * Single source of truth for all portfolio content.
 * Update values here — no component hardcodes personal data.
 */

export const profile = {
  name: "Kumar Shubham",
  tagline: "Full-Stack Developer | CSE Student | Problem Solver",
  intro:
    "B.Tech Computer Science Engineering student at Amity University, Gwalior. I build full-stack web applications with React and Node.js, solve problems in C++, and explore applied AI/ML.",
  degree: "B.Tech — Computer Science Engineering",
  university: "Amity University, Gwalior",
  cgpa: "9.51",
  email: "shubhamsingh911799@gmail.com",
  focus: ["Full-Stack Development", "DSA", "AI/ML"],
};

export const links = {
  linkedin: "https://www.linkedin.com/in/kumar-shubham-b120673ba/",
  github: "https://github.com/shubhamsingh911799",
  leetcode: "https://leetcode.com/u/s_ubham_18/",
  codeforces: "https://codeforces.com/profile/Kumar_shubham18",
  freecodecamp: "https://www.freecodecamp.org/fcc-396d4edf-a41f-4a24-9857-591f7a749271",
  email: `mailto:${profile.email}`,
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  description?: string;
  logo?: string;
};

export const education: EducationItem[] = [
  {
    institution: "Amity University Gwalior",
    degree: "Bachelor of Technology, Computer Science and engineering",
    period: "2024 – 2028",
    grade: "Grade: Current CGPA 9.51",
    logo: "/logos/amity.png",
    description: "Pursuing B.Tech Computer Science and Engineering with a focus on Full-Stack Development, Data Structures & Algorithms, and Applied AI/ML.",
  },
  {
    institution: "HOLY CROSSPUB SCH MANIKA B CHAND MUZAFFARPUR BR",
    degree: "Higher Secondary School, Science (PCM)",
    period: "Apr 2021 – May 2023",
    grade: "Grade: 81 %",
    logo: "/logos/holycross.png",
    description: "Completed Higher Secondary Education with a focus on Physics, Chemistry, and Mathematics (PCM). Built a strong foundation in analytical thinking and problem-solving.",
  },
  {
    institution: "PANTOCRATOR ACADEMY KUDHANI MUZAFFARPUR BR",
    degree: "Secondary School",
    period: "Apr 2015 – Aug 2021",
    grade: "Grade: 92 %",
    logo: "/logos/pantocrator.png",
    description: "Completed Secondary Education with a strong foundation in Mathematics, Science, and Computer fundamentals.",
  },
];

/** Set to a real PDF path/URL when available (e.g. "/resume.pdf"). Null hides download. */
export const resumeUrl: string | null = "/resume.pdf";

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export const githubUsername = "shubhamsingh911799";

export const skillGroups = [
  { title: "Languages", items: ["C++", "JavaScript", "TypeScript", "Python", "Kotlin", "HTML", "CSS"] },
  { title: "Frontend", items: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Leaflet"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "npm / Bun"] },
  { title: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Oracle Database", "DBMS"] },
  { title: "AI / ML", items: ["Python", "Machine Learning", "Computer Vision", "YOLO"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code"] },
];

export type Project = {
  name: string;
  role: string;
  status: string;
  category: "Full-Stack" | "AI/ML" | "Concept";
  summary: string;
  highlights: string[];
  stack: string[];
  /** Only real URLs. Leave null to hide the button. */
  demoUrl: string | null;
  repoUrl: string | null;
  caseStudyUrl: string | null;
};

export const projects: Project[] = [
  {
    name: "SmartParkingAI",
    role: "Frontend Developer",
    status: "In development",
    category: "Full-Stack",
    summary:
      "A smart parking platform with a map-driven booking experience for customers and an operations dashboard for administrators.",
    highlights: [
      "React frontend with Leaflet maps and dynamic parking markers",
      "Parking availability views and booking flow",
      "Customer portal and admin dashboard",
      "Integration with AI/ML parking detection",
    ],
    stack: ["React", "JavaScript", "Leaflet", "Node.js", "Python"],
    demoUrl: null,
    repoUrl: null,
    caseStudyUrl: null,
  },
  {
    name: "CivicAI (SIH 2026)",
    role: "MERN Stack & AI Developer",
    status: "Completed",
    category: "AI/ML",
    summary:
      "A Smart India Hackathon 2026 (SIH 2026) civic issue reporting platform empowering citizens to report municipal problems with interactive location mapping, AI-assisted classification, and real-time status tracking.",
    highlights: [
      "Handled complete MERN stack architecture (MongoDB, Express.js, React, Node.js)",
      "Interactive map interface with Leaflet integration for geolocation reporting",
      "AI-assisted civic problem classification and severity detection REST APIs",
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js", "Leaflet", "AI/ML"],
    demoUrl: "https://shubhamsingh911799.github.io/CivicAi/",
    repoUrl: "https://github.com/shubhamsingh911799/CivicAi",
    caseStudyUrl: null,
  },
  {
    name: "MeraApnaMargdarshi",
    role: "Full-Stack Developer",
    status: "Completed",
    category: "Full-Stack",
    summary:
      "A personalized life-guidance and growth platform: yearly planning that turns into daily guidance, progress tracking, and adaptation over time.",
    highlights: [
      "HealthMargdarshi — habits and wellbeing guidance",
      "WealthMargdarshi — financial planning modules",
      "GrowthMargdarshi — skills and personal growth tracking",
      "Loop: yearly plan → daily guidance → tracking → adaptation",
    ],
    stack: ["React", "JavaScript", "Node.js", "MongoDB"],
    demoUrl: "https://shubhamsingh911799.github.io/MeraApnaMargdarshi/",
    repoUrl: "https://github.com/shubhamsingh911799/MeraApnaMargdarshi",
    caseStudyUrl: null,
  },
  {
    name: "MyPortfolio",
    role: "Full-Stack Developer",
    status: "Completed",
    category: "Full-Stack",
    summary:
      "My personal developer portfolio website showcasing full-stack web applications, verified certifications, interactive 3D skill matrix, and academic achievements.",
    highlights: [
      "Built with React 19, TanStack Start, TanStack Router & Tailwind CSS",
      "Interactive 3D Bento glass matrix and 3D certificate flow showcase",
      "Fully responsive dark/light mode with clean performance",
    ],
    stack: ["React", "TanStack Start", "Tailwind CSS", "TypeScript", "Vite"],
    demoUrl: "#reload",
    repoUrl: "https://github.com/shubhamsingh911799/kumar-shubham-portfolio-main",
    caseStudyUrl: null,
  },
];

export type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  summary?: string;
  points: string[];
  skills?: string[];
  credentialId?: string;
  image?: string;
  logo?: string;
};

export const experience: ExperienceItem[] = [
  {
    title: "Full Stack Development Intern",
    org: "Thiranex · Internship",
    period: "Jul 2026 – Aug 2026",
    logo: "/logos/thiranex.png",
    credentialId: "THX-JUL2826-480",
    image: "/certificates/thiranex-internship.png",
    skills: ["Full-Stack Development", "Front-End Development", "React", "Node.js", "Web Applications"],
    summary:
      "Completed a Full Stack Development internship at Thiranex, gaining practical exposure to modern web development and full-stack concepts. Worked on hands-on tasks and strengthened my understanding of building and working with production web applications.",
    points: [
      "Completed hands-on full-stack web development tasks and interactive components.",
      "Strengthened understanding of frontend UI, backend API integration, and database workflows.",
      "Gained practical industry exposure to modern software engineering practices.",
    ],
  },
  {
    title: "MERN Stack Developer — CivicAI (SIH 2026)",
    org: "Smart India Hackathon 2026 · Team Project",
    period: "SIH 2026",
    logo: "/logos/sih-2026.png",
    skills: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js", "REST APIs", "Leaflet"],
    summary:
      "Handled the complete MERN stack architecture for CivicAI in Smart India Hackathon 2026 (SIH 2026). Engineered the React frontend with interactive Leaflet geolocation maps, built Express & Node.js backend REST APIs, and managed MongoDB database workflows for citizen issue reporting and real-time status tracking.",
    points: [
      "Handled complete MERN stack (MongoDB, Express.js, React, Node.js) development and backend architecture.",
      "Integrated interactive Leaflet maps for geolocation civic issue reporting and status tracking.",
      "Collaborated with AI/ML teammates to connect municipal issue classification models with backend REST APIs.",
    ],
  },
  {
    title: "Frontend Developer — SmartParkingAI",
    org: "Team project",
    period: "Ongoing",
    logo: "/logos/smartparking-ai.png",
    points: [
      "Built the React interface, map view and booking screens.",
      "Worked with teammates on the AI/ML detection integration.",
    ],
  },
  {
    title: "Hackathon Participant",
    org: "Hacksetu 1.0",
    period: "Winner",
    logo: "/logos/hacksetu.png",
    points: ["Built and presented a project under time constraints as part of a team."],
  },
];

export const achievements = [
  {
    title: "Hacksetu 1.0 — Winner",
    detail: "Won Hacksetu 1.0 hackathon.",
  },
  {
    title: "CGPA 9.51",
    detail: "Consistent academic performance in B.Tech CSE at Amity University, Gwalior.",
  },
];

export const dsaTopics = [
  "C++ / DSA",
  "Problem Solving",
  "Arrays",
  "Sorting",
  "Divide and Conquer",
  "Dynamic Programming",
];

export type Certification = {
  name: string;
  issuer: string;
  date: string | null;
  skills: string[];
  verifyUrl: string | null;
  credentialId?: string | null;
  image?: string | null;
};

export const certifications: Certification[] = [
  {
    name: "Full Stack Development Internship Certificate",
    issuer: "Thiranex (MSME Registered)",
    date: "August 27, 2026",
    skills: ["Full-Stack Development", "Front-End Development", "React", "Node.js", "Web Applications"],
    verifyUrl: null,
    credentialId: "THX-JUL2826-480",
    image: "/certificates/thiranex-internship.png",
  },
  {
    name: "Oracle Cloud Infrastructure Certified AI Foundations Associate",
    issuer: "Oracle University",
    date: "August 16, 2026",
    skills: ["Oracle Cloud", "AI Foundations", "Cloud Infrastructure", "Artificial Intelligence"],
    verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=82581E2552CD587BE3E68ED44CCBC30275382C306344ED738691B3310BAD10A3",
    credentialId: "103518432OCI26AICFA",
    image: "/certificates/oracle-ai-foundations.jpg",
  },
  {
    name: "Kotlin Programming",
    issuer: "Infosys Springboard",
    date: "August 24, 2026",
    skills: ["Kotlin", "Android Development", "Object-Oriented Programming"],
    verifyUrl: "https://verify.onwingspan.com",
    credentialId: "Infosys Springboard",
    image: "/certificates/kotlin-infosys.jpg",
  },
  {
    name: "Node JS: Advanced Concepts",
    issuer: "Udemy (Stephen Grider)",
    date: "August 22, 2026",
    skills: ["Node.js", "Event Loop", "Performance Optimization", "System Architecture"],
    verifyUrl: "http://ude.my/UC-f857809f-906e-478e-a331-b71c13a281ed",
    credentialId: "UC-f857809f-906e-478e-a331-b71c13a281ed",
    image: "/certificates/nodejs-advanced-udemy.jpg",
  },
  {
    name: "Data Analysis with Python",
    issuer: "CognitiveClass.ai (IBM)",
    date: "August 14, 2026",
    skills: ["Python", "Data Analysis", "Pandas", "NumPy"],
    verifyUrl: "https://courses.cognitiveclass.ai/certificates/ee698cad769040d29218bdfdbc3f2990",
    credentialId: "ee698cad769040d29218bdfdbc3f2990",
    image: "/certificates/data-analysis-ibm.jpg",
  },
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "August 9, 2026",
    skills: ["HTML5", "CSS3", "Responsive Design", "Web Development"],
    verifyUrl: "https://freecodecamp.org/certification/fcc-396d4edf-a41f-4a24-9857-591f7a749271/responsive-web-design-v9",
    credentialId: "fcc-396d4edf-a41f-4a24-9857-591f7a749271",
    image: "/certificates/responsive-web-design-fcc.jpg",
  },
  {
    name: "JavaScript Developer Certification",
    issuer: "freeCodeCamp",
    date: "August 4, 2026",
    skills: ["JavaScript", "Algorithms", "Data Structures", "ES6+"],
    verifyUrl: "https://freecodecamp.org/certification/fcc-396d4edf-a41f-4a24-9857-591f7a749271/javascript-v9",
    credentialId: "fcc-396d4edf-a41f-4a24-9857-591f7a749271",
    image: "/certificates/javascript-fcc.png",
  },
  {
    name: "Getting Started in Google Analytics",
    issuer: "Coursera",
    date: "August 1, 2026",
    skills: ["Google Analytics", "Data Analytics", "Web Marketing"],
    verifyUrl: "https://coursera.org/verify/NICO7VBVBHX9",
    credentialId: "NICO7VBVBHX9",
    image: "/certificates/google-analytics-coursera.jpg",
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Simplilearn (Google Cloud)",
    date: "August 1, 2026",
    skills: ["Generative AI", "Google Cloud", "AI/ML Basics"],
    verifyUrl: "https://www.simplilearn.com",
    credentialId: "10544153",
    image: "/certificates/generative-ai-simplilearn.jpg",
  },
  {
    name: "Learning Full Stack Development",
    issuer: "Infosys Springboard",
    date: "July 30, 2026",
    skills: ["Full-Stack Development", "Web Technologies", "Software Engineering"],
    verifyUrl: "https://verify.onwingspan.com",
    credentialId: "Infosys Springboard",
    image: "/certificates/fullstack-infosys.jpg",
  },
  {
    name: "Go for Web Development",
    issuer: "Infosys Springboard",
    date: "July 30, 2026",
    skills: ["Go / Golang", "Web Development", "Backend Development"],
    verifyUrl: "https://verify.onwingspan.com",
    credentialId: "Infosys Springboard",
    image: "/certificates/go-web-dev-infosys.jpg",
  },
  {
    name: "Build a free website with WordPress",
    issuer: "Coursera",
    date: "July 18, 2026",
    skills: ["WordPress", "CMS", "Web Design"],
    verifyUrl: "https://coursera.org/verify/WGZKQT3JGI06",
    credentialId: "WGZKQT3JGI06",
    image: "/certificates/wordpress-coursera.jpg",
  },
  {
    name: "Explore Machine Learning using Python",
    issuer: "Infosys Springboard",
    date: "December 11, 2025",
    skills: ["Python", "Machine Learning", "Data Analysis"],
    verifyUrl: "https://verify.onwingspan.com",
    credentialId: "Infosys Springboard",
    image: "/certificates/ml-infosys.jpg",
  },
  {
    name: "HackSetu 1.0 — Hackathon Certificate",
    issuer: "Amity University & GDG Gwalior / IEEE",
    date: "November 3–4, 2025",
    skills: ["Hackathon Winner", "Teamwork", "Product Innovation"],
    verifyUrl: null,
    credentialId: "HackSetu 1.0 National Hackathon",
    image: "/certificates/hacksetu-certificate.png",
  },
  {
    name: "Mobile App Development",
    issuer: "thingQbator (NASSCOM Foundation & Cisco CSR)",
    date: "thingQbator Program",
    skills: ["Mobile App Development", "Android/iOS", "UI/UX"],
    verifyUrl: null,
    credentialId: "thingQbator Certificate of Excellence",
    image: "/certificates/mobile-app-nasscom.jpg",
  },
];

/**
 * Icon tiles for the Skills section.
 * `slug` + `color` map to simpleicons.org (https://cdn.simpleicons.org/<slug>/<color>).
 */
export const skillIcons = [
  { name: "C++", slug: "cplusplus", color: "00599C" },
  { name: "C", slug: "c", color: "A8B9CC" },
  { name: "Java", slug: "openjdk", color: "ED8B00" },
  { name: "Kotlin", slug: "kotlin", color: "7F52FF" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "HTML5", slug: "html5", color: "E34F26" },
  { name: "CSS3", slug: "css", color: "1572B6" },
  { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
  { name: "Express", slug: "express", color: "FFFFFF" },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  { name: "MySQL", slug: "mysql", color: "4479A1" },
  { name: "npm", slug: "npm", color: "CB3837" },
  { name: "Bun", slug: "bun", color: "FBF0DF" },
  { name: "Leaflet", slug: "leaflet", color: "199900" },
  { name: "Git", slug: "git", color: "F05032" },
  { name: "GitHub", slug: "github", color: "FFFFFF" },
  { name: "VS Code", slug: "vscodium", color: "2F80ED" },
  { name: "LeetCode", slug: "leetcode", color: "FFA116" },
  { name: "Codeforces", slug: "codeforces", color: "1F8ACB" },
  { name: "GeeksforGeeks", slug: "geeksforgeeks", color: "2F8D46" },
];

/**
 * Skill bubbles — grouped skills rendered as 3D interactive bubbles.
 */
export const skillBubbles = [
  {
    title: "Programming Languages",
    items: ["C", "C++", "Python", "Java", "Kotlin", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Technologies",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    title: "Databases & Tools",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Oracle Database", "DBMS", "Git", "GitHub", "VS Code"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Express.js", "Leaflet", "OpenCV", "npm", "Bun"],
  },
  {
    title: "Core Concepts",
    items: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Architecture",
      "Machine Learning",
      "Computer Vision",
      "YOLO Object Detection",
    ],
  },
  {
    title: "Soft Skills",
    items: ["Teamwork", "Problem Solving", "Creativity", "Adaptability", "Communication"],
  },
];
