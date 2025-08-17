// ======================
// SKILLS
// ======================
import postgrestoreLogo from "./assets/projectImage/PostGreStore.png";
import JobWebsiteLogo from "./assets/projectImage/Job.png";
import CodeCast from "./assets/projectImage/CodeCast.png";
import KnowBee from "./assets/projectImage/KnowBee.png"
import PlateForAll from "./assets/projectImage/PlateForAll.png"

export const SkillsInfo = [
  {
    title: 'Languages',
    skills: [
      { name: 'C/C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', logo: 'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'RESTful APIs', logo: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-api-web-development-flaticons-lineal-color-flat-icons.png' },
      { name: 'WebSockets', logo: 'https://miro.medium.com/v2/resize:fit:1358/1*S_phGzoPMWgQFCaD6iTFIg.jpeg' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://tse3.mm.bing.net/th/id/OIP.Lwbgu4eSpSz4gKe-F_k58gHaHa?w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3' },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    ],
  },
];

// ======================
// PROJECTS
// ======================
export const projects = [
  {
    id: 0,
    title: "CodeCast",
    description:
      "Engineered a real-time code editor supporting up to 10 concurrent users, reducing group coding setup time by 75%. Implemented CodeMirror syncing for collaborative editing and delivered a responsive UI that decreased bounce rate by 40%.",
    image: CodeCast,
    tags: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Express.js", logo: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" },
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Socket.IO", logo: "https://socket.io/images/logo.svg" },
      { name: "CodeMirror", logo: "https://codemirror.net/doc/logo.png" },
    ],
    github: "https://github.com/AkshitMehta2005/CodeCast",
    webapp: "https://github.com/AkshitMehta2005/CodeCast",
  },
  {
    id: 1,
    title: "PlateForAll",
    description:
      "Developed a food donation platform that connects donors with people in need, helping to reduce hunger. Integrated user and delivery modules to streamline food distribution, and used Leaflet.js for real-time routing and delivery tracking. Built with MERN stack for scalability and seamless user experience.",
    image: PlateForAll,
    tags: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Express.js", logo: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" },
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Leaflet.js", logo: "https://w7.pngwing.com/pngs/347/210/png-transparent-leaflet-javascript-library-web-browser-plug-in-software-framework-others-leaf-rss-map.png" },
    ],
    github: "https://github.com/AkshitMehta2005/PlateForAll",
    webapp: "https://plateforall-demo.vercel.app",
  },
  {
    id: 2,
    title: "PostgreStore",
    description:
      "Built a scalable product management platform supporting 100+ products, reducing server response time by 25%. Integrated Arcjet security with rate limiting, applied Zustand for state management, and implemented Redis caching for fast data retrieval.",
    image: postgrestoreLogo,
    tags: [
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Express.js", logo: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" },
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Zustand", logo: "https://docs.pmnd.rs/zustand.ico" },
      { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "Arcjet", logo: "https://thetechcrime.com/wp-content/uploads/2025/01/Leonardo_Phoenix_09_Design_a_sleek_and_modern_thumbnail_for_a_2-768x434.jpg" },
    ],
    github: "https://github.com/AkshitMehta2005/PostgreStore",
    webapp: "https://postgrestore-aw2v.onrender.com/",
  },
  {
    id: 3,
    title: "Job Seeking Website",
    description:
      "Developed a job portal with dynamic dashboards used by 50+ test users, reducing hiring turnaround time by 40%. Implemented JWT-based authentication, Cloudinary integration, and advanced filtering with application tracking.",
    image: JobWebsiteLogo,
    tags: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Express.js", logo: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" },
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "JWT", logo: "https://jwt.io/img/pic_logo.svg" },
      { name: "Cloudinary", logo: "https://tse2.mm.bing.net/th/id/OIP.v33i4NeDbAAMSm_JFteP7gHaGl?w=860&h=765&rs=1&pid=ImgDetMain&o=7&rm=3" },
    ],
    github: "https://github.com/AkshitMehta2005/job-seeking-website",
    webapp: "https://github.com/AkshitMehta2005/job-seeking-website",
  },
  {
    id: 4,
    title: "Q/A Website (StackFlow Clone with Admin Dashboard)",
    description:
      "Built a full-stack Q/A platform inspired by StackOverflow, featuring user authentication with JWT, question & answer posting, upvoting, and admin dashboard for moderation. Integrated Cloudinary for media uploads and implemented advanced search and filtering for better user experience.",
    image: KnowBee,
    tags: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Express.js", logo: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" },
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "JWT", logo: "https://jwt.io/img/pic_logo.svg" },
      { name: "Cloudinary", logo: "https://tse2.mm.bing.net/th/id/OIP.v33i4NeDbAAMSm_JFteP7gHaGl?w=860&h=765&rs=1&pid=ImgDetMain&o=7&rm=3" },
    ],
    github: "https://github.com/AkshitMehta2005/knowBee",
    webapp: "https://github.com/AkshitMehta2005/job-seeking-website",
  },
]

export const experiences = [
  
  {
    id: 0,
    img: 'https://clipground.com/images/tata-logo-3.jpg',
    role: "Software Development Engineer Intern",
    company: "Tata Motors Ltd, Jamshedpur",
    date: "May 2025 – July 2025",
    desc: "Developed a real-time vehicle diagnostics dashboard, reducing manual issue detection time by 60%. Improved backend performance by reducing processing time from 1.2s to 700ms using MySQL optimizations. Automated regression testing with Selenium, saving 8 hours per sprint and cutting bugs by 30%.",
    skills: [
      "PHP",
      "MySQL",
      "XAMPP",
    ],
  },
  {
    id: 1,
    img: 'https://mir-s3-cdn-cf.behance.net/user/276/a4bcec1686479165.652a24f5b430e.jpg', // Replace with actual Transcybernetics logo URL if available
    role: "Software Development Engineer Intern",
    company: "Unified Mentor,Noida",
    date: "May 2024 - June 2024",
    desc: "Designed a role-based admin panel to improve internal workflow efficiency by 78%. Optimized backend APIs and MongoDB queries for a 40% boost in data performance.",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "Tailwind CSS",
    ],
  },
];