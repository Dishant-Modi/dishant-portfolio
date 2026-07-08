// Add a "url" once each project is deployed to enable the live iframe preview.
export const projects = {
  privacy: {
    name: "Resilient Privacy",
    date: "2025",
    type: "University–Industry Collaboration",
    roles: "Full Stack Developer",
    url: "", // NDA project -- no live URL or public code, screenshot preview only
    previewType: "screenshot",
    screenshot: "", // e.g. "/screenshots/resilient-privacy.png" once you share the image
    desc: "A privacy-focused SaaS platform built from the ground up: frontend architecture, backend services, and database integration. Figma designs were converted into reusable, scalable React components with structured state management. RESTful APIs were built with Node.js and Express, and PostgreSQL data models were defined with Sequelize.",
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Sequelize", "Postman"],
    github: "", // NDA project -- no public repo to link to
    accent: "#1E7A54",
    accentSoft: "#E4F1EA",
    url_label: "resilient-privacy.app",
  },
  scheduler: {
    name: "Patient Scheduler",
    date: "2024",
    type: "Personal Project",
    roles: "Full Stack Developer",
    url: "e-doc.infinityfreeapp.com",
    desc: "A full-stack patient scheduling system with a React frontend and a PHP/MySQL backend. Includes custom conflict-detection logic to prevent overlapping appointments, relational schemas for patients and appointments, and PHP-session authentication with role-based access control.",
    stack: ["React.js", "Node.js", "Express.js", "PHP", "MySQL"],
    github: "https://github.com/Dishant-Modi/Patient_Scheduler",
    accent: "#D9503F",
    accentSoft: "#F7E4E0",
    url_label: "patient-scheduler.app",
  },
  ecommerce: {
    name: "E-Commerce Website",
    date: "2024",
    type: "Personal Project",
    roles: "Frontend Developer",
    url: "https://dishant-ecommerce.vercel.app",
    desc: "A responsive single-page storefront with reusable, component-driven UI patterns. Redux Toolkit manages cart state centrally, React Router handles client-side navigation, and the interface is built mobile-first with Tailwind CSS.",
    stack: ["React.js", "Redux Toolkit", "Tailwind CSS", "React Router"],
    github: "https://github.com/Dishant-Modi/E-Commerce-Web",
    accent: "#5B57D1",
    accentSoft: "#E7E6F8",
    url_label: "dishant-ecommerce.vercel.app",
  },
};
