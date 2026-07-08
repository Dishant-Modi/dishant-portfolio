import { projects } from "./projects.js";

export const site = {
  name: "Dishant Modi",
  title: "Full Stack Developer",
  location: "Dallas, TX",
  focusLines: ["FULL-STACK DEVELOPER", "REACT · NODE.JS · POSTGRESQL"],
  heroSub:
    "React, Node.js, and PostgreSQL, mostly. Currently finishing an M.S. in Information Technology & Management at UT Dallas.",
  bioTeaser: [
    "I build things that run in production — React and TypeScript on the frontend, Node.js and Express on the backend, PostgreSQL and MySQL for data.",
    "Currently finishing an M.S. in Information Technology & Management at UT Dallas, and working as a Teaching Assistant there.",
  ],
  bioFull: [
    "I work across the entire stack — React and TypeScript on the frontend, Node.js and Express on the backend, PostgreSQL and MySQL for data. Most of what I've built has come from taking a project from an empty repository to something a real user can rely on: architecture, data models, endpoints, and the interface on top of all of it.",
    "Outside of building, I've spent the last year as a Teaching Assistant at UT Dallas, breaking down spreadsheet modeling concepts for students — which has made me a better communicator about technical work, not just a better builder of it.",
  ],
  skills: [
    {
      category: "Languages",
      tags: ["HTML", "CSS", "JavaScript (ES6+)", "TypeScript", "Python", "SQL / PostgreSQL"],
    },
    {
      category: "Frameworks & Libraries",
      tags: ["React", "Next.js", "Redux Toolkit", "Tailwind CSS", "Bootstrap", "React Query", "Lodash"],
    },
    {
      category: "Backend, APIs & Testing",
      tags: ["Node.js", "REST APIs", "WebSockets", "Jest", "React Testing Library"],
    },
    {
      category: "Tools & Platforms",
      tags: ["Git", "GitHub", "Webpack", "npm", "AWS", "VS Code", "Postman", "Figma"],
    },
  ],
  experience: [
    {
      type: "Part-Time",
      date: "JAN 2025 — DEC 2025",
      role: "Teaching Assistant",
      org: "University of Texas at Dallas — Dallas, TX",
      bullets: [
        "Supported Introduction to Spreadsheet Modeling by resolving student doubts and reinforcing core modeling concepts.",
        "Collaborated with faculty to develop and refine the course syllabus and instructional structure.",
        "Led review sessions to strengthen spreadsheet modeling proficiency across the class.",
        "Assisted faculty research by sourcing and synthesizing academic literature in healthcare management and Lean Six Sigma.",
      ],
    },
    {
      type: "Part-Time",
      date: "MAY 2024 — DEC 2024",
      role: "Visitor Experience",
      org: "Crow Museum of Asian Art Dallas — Dallas, TX",
      bullets: [
        "Guided visitors through exhibitions, offering context while ensuring smooth visitor flow.",
        "Monitored and safeguarded artworks, maintaining gallery security and preservation protocols.",
        "Coordinated with staff to support daily museum operations and visitor satisfaction.",
      ],
    },
  ],
  education: [
    {
      date: "JAN 2024 — DEC 2025",
      role: "M.S. in Information Technology & Management",
      org: "University of Texas at Dallas — Dallas, TX · GPA 3.79 / 4.00",
    },
    {
      date: "JUL 2020 — JUL 2023",
      role: "Bachelor of Computer Application",
      org: "MIT World Peace University — Pune, India · GPA 3.85 / 4.00",
    },
  ],
  contact: {
    intro:
      "Open to full-time and internship opportunities in full-stack development. The fastest way to reach me is email.",
    links: [
      { label: "Email", value: "modidishant30@gmail.com", href: "mailto:modidishant30@gmail.com" },
      { label: "Phone", value: "469-756-3009", href: "tel:4697563009" },
      { label: "LinkedIn", value: "/in/dishantmodi", href: "https://linkedin.com/in/dishantmodi/" },
      { label: "GitHub", value: "/Dishant-Modi", href: "https://github.com/Dishant-Modi" },
    ],
    // "Social" profile links only (no email/phone) -- used by the home page
    // closing CTA, which points people at profiles rather than direct contact.
    socials: [
      { label: "GitHub", href: "https://github.com/Dishant-Modi" },
      { label: "LinkedIn", href: "https://linkedin.com/in/dishantmodi/" },
    ],
  },
  experienceIntro:
    "A quick rundown of where I've worked and what I've helped ship along the way.",
  closing: {
    headline: "Looking for a full-stack developer?\nLet's talk.",
    headlineMutedWords: 1,
    socialsLabel: "Or find me here:",
    bigLine: "THANKS FOR STOPPING BY!",
    madeWith: "Built with ❤️ by Dishant Modi",
  },
};

function jobToTimelineEntry(job) {
  return { type: job.type, title: job.role, org: job.org, date: job.date, bullets: job.bullets };
}

function projectToTimelineEntry(project) {
  return {
    type: project.type,
    title: project.name,
    org: project.roles,
    date: project.date,
    desc: project.desc,
    stack: project.stack,
  };
}

// Merges site.experience (real jobs) with any project that was also a work
// role -- reuses the project's own desc/stack instead of duplicating them.
export const experienceTimeline = [
  jobToTimelineEntry(site.experience[0]),
  projectToTimelineEntry(projects.privacy),
  jobToTimelineEntry(site.experience[1]),
];
