// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

import jenkins from "./assets/tech_logo/jenkins.png"
import docker from "./assets/tech_logo/docker.png"

// Experience Section Logo's
import tech from "./assets/company_logo/techiehelp_logo.jpg";
import ibm from "./assets/company_logo/ibm.png";

// Education Section Logo's
import iiit from "./assets/education_logo/iiitdharwad.png";
import StKarens from "./assets/education_logo/Karens.png";
import StPaul from "./assets/education_logo/stpaul.jpg";

// Project Section Logo's

import chess from "./assets/work_logo/chess.jpg";
import idap from "./assets/work_logo/IDAP.png";
import lost from "./assets/work_logo/Lost.png";
import society from "./assets/work_logo/society.png";
import construction from "./assets/work_logo/construction.png";
import truck from "./assets/work_logo/Truck.jpg";


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Docker", logo: docker },
      { name: "Jenkins", logo: jenkins },
      
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: tech,
    role: "Software Developer Intern",
    company: "TechieHelp",
    date: "August 2025 - September 2025",
    desc: "Developed responsive and user-friendly web applications using HTML, CSS, JavaScript, and React, handling frontend development and integrating dynamic features for real-world projects. Collaborated with cross-functional teams to implement designs, optimize performance, and ensure seamless user experience. Participated in a hackathon during the internship, where I built a complete project from scratch, focusing on practical, creative, and scalable solutions, and was selected as the winner. Gained hands-on experience in version control (Git/GitHub), debugging, and agile development workflows.",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "TypeScript"],
  },
  {
    id: 1,
    img: ibm,
    role: "Software Developer Intern",
    company: "IBM SkillsBuild",
    date: "Sept 2025 - Oct 2025",
    desc: "Developed responsive and user-friendly web applications using HTML, CSS, JavaScript, and React, focusing on building scalable frontend solutions. Collaborated with cross-functional teams to implement designs, optimize performance, and ensure seamless user experience. Gained hands-on experience in version control (Git/GitHub), debugging, and agile development workflows, while working on real-world projects that strengthened my practical web development skills.",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "TypeScript"],
  },
  {
    id: 2,
    img: tech, // replace with the relevant company/project image
    role: "Project Developer",
    company: "TechieHelp",
    date: "October 2025 - Present",
    desc: "Joined the TechieHelp development team as a Software Developer, contributing to multiple live client and internal projects. Designing and implementing responsive, efficient, and user-friendly interfaces using React, Tailwind CSS, and TypeScript. Collaborating with cross-functional teams to deliver high-quality solutions, ensuring scalability, maintainability, and performance of web applications.",
    skills: [
      "React JS",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "Responsive Design",
      "UI/UX Implementation",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: iiit,
    school: "Indian Institue Of Information Technology , Dharwad",
    date: "July 2023 - July 2027",
    grade: "8.14 CGPA",
    desc: "Currently pursuing a Bachelor’s degree in  Computer Science & Engineering at IIIT Dharwad. Gaining a strong foundation in core computer science concepts, software development, and problem-solving, while also exploring hands-on projects and technical skills in web development, programming, and other emerging technologies.",
    degree: "BTech",
  },
  {
    id: 1,
    img: StKarens,
    school: "St Karens High School , Patna",
    date: "",
    grade: "90%",
    desc: "I Completed Class 12 (Senior Secondary) from St Karen's High School, focusing on Science stream. Developed a strong foundation in core subjects and analytical skills, preparing for higher education and technical learning.",
    degree: "Senior Secondary Education / Class XII",
  },
  {
    id: 2,
    img: StPaul,
    school: "St Pauls's Schhol , Sasaram",
    date: "",
    grade: "87%",
    desc: "I Completed Class 10 (Secondary Education) from St Pauls's School, building fundamental knowledge in core subjects and strengthening problem-solving and learning skills for future academic pursuits.",
    degree: "Secondary Education / Class X",
  },
];

export const projects = [
  {
    id: 0,
    title: "CargoMesh – Smart Logistics & Truck Optimization Platform",
    description:
      "Built and deployed a full-stack logistics platform supporting shipment creation, truck booking, fleet operations, and role-based dashboards for Warehouse, Dealer, and Admin users. Developed a truck assignment and load optimization engine using geolocation-based distance calculations, capacity utilization scoring, route matching, cost estimation, and CO2 emission analysis. Implemented real-time delivery tracking with ETA checkpoints, analytics dashboards, automated PDF reports, and email notifications.",
    image: truck,
    tags: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Geolocation",
    ],
    github: "https://github.com/KeshriDev018/Cargo-Mesh",
    webapp: "https://cargo-mesh.vercel.app/",
    date: "Dec 2025",
    award: "Hackathon Winner",
  },
  {
    id: 1,
    title:
      "ChessForge – AI-Driven Chess Learning & Academy Management Platform",
    description:
      "Built a production SaaS chess coaching platform managing the lifecycle from demo booking, enrollment, subscriptions, and class delivery supporting 100+ concurrent users. Implemented JWT authentication and RBAC with dashboards for Admin, Coach, and Student/Parent, and integrated Socket.io for real-time chat, messaging, broadcasts, and live updates. Designed a modular MVC backend with 14+ controllers and 13+ MongoDB schemas, delivering REST APIs for demos, batches, classes, payments, and subscriptions. Integrated Razorpay subscriptions with payment verification and renewal automation, and built analytics dashboards using MongoDB aggregation and Gemini AI insights.",
    image: chess,
    tags: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Razorpay",
      "Multer",
      "Cloudinary",
    ],
    github: "https://github.com/KeshriDev018/ChessForge",
    webapp: "https://ica-ops-platform-16h8.vercel.app/",
    date: "Jan 2026",
  },
  {
    id: 2,
    title: "IIIT Dharwad Admission Management System",
    description:
      "Built a full-stack admission management platform streamlining institutional workflows including CSAB allotment handling, student profile management, application processing, and multi-role administrative operations. Implemented JWT authentication and RBAC (Admin, Student, Verifier, Accounts), integrated CSV data uploads and Cloudinary storage, and developed RESTful APIs using modular MVC architecture with MongoDB.",
    image: idap,
    tags: [
      "Node.js",
      "Express.js",
      "React.js",
      "TypeScript",
      "MongoDB",
      "REST APIs",
      "JWT",
      "RBAC",
      "Cloudinary",
    ],
    github:
      "https://github.com/KeshriDev018/IIIT-Dharwad-Admission-Management-System",
    webapp: "https://iiit-dharwad-admission-management-s.vercel.app/",
    date: "Feb 2026",
  },
  {
    id: 3,
    title: "Lost & Listed",
    description:
      "A modern, full-stack campus community platform for lost & found items, affordable deals, and student exchanges. Features include reporting and searching for lost or found items, a marketplace to buy/sell/exchange products, live activity ticker for real-time updates, and a mobile-first responsive design. Implemented secure authentication with JWT, email notifications, and admin tools for managing users and platform content.",
    image: lost,
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "JWT",
    ],
    github: "https://github.com/KeshriDev018/Lost-Listed",
    webapp: "https://lost-listed.vercel.app/",
    date: "Ongoing",
  },
  {
    id: 4,
    title: "UrbanSphere – Society Management Platform",
    description:
      "A production-grade SaaS backend system for managing residential societies at scale. Provides secure, role-based, and workflow-driven APIs for user onboarding, complaints with SLA tracking, visitor & security management, maintenance billing, payments, notices, packages, and multi-society operations. Designed following enterprise backend practices with RESTful API design, JWT authentication with refresh tokens, RBAC middleware, and multi-tenant architecture support.",
    image: society,
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "RBAC",
      "Razorpay",
      "REST APIs",
      "MVC Architecture",
      "Multi-tenant",
    ],
    github: "https://github.com/KeshriDev018/UrbanSphere",
    webapp: null,
    date: "Ongoing",
  },
  {
    id: 5,
    title: "Rai Construction Solutions – Company Website",
    description:
      "A responsive, modern website built for Rai Construction Solutions showcasing company services, projects, and facilitating client inquiries. Features include responsive design across all devices, modern UI/UX with clean layouts, dynamic navbar with active link highlighting, multiple pages (Home, About, Services, Projects, Blog, Contact), contact form with validation and toast notifications, Google Maps integration, and smooth animations on scroll.",
    image: construction,
    tags: [
      "React",
      "TypeScript",
      "React Router",
      "Tailwind CSS",
      "Shadcn UI",
      "Lucide Icons",
      "Vercel",
      "Responsive Design",
    ],
    github: "https://github.com/KeshriDev018/Rai-Construction",
    webapp: "https://raiconstruction.vercel.app/",
    date: "Ongoing",
  },
];
