// Add a "url" once each project is deployed to enable the live iframe preview.
export const projects = {
  privacy: {
    slug: "resilient-privacy",
    name: "Resilient Privacy",
    date: "2025",
    type: "University–Industry Collaboration",
    roles: "Full Stack Developer",
    url: "", // NDA project -- no live URL or public code, screenshot preview only
    previewType: "screenshot",
    screenshot: "", // e.g. "/screenshots/resilient-privacy.png" once you share the image
    desc: "A privacy-focused SaaS platform built from the ground up: frontend architecture, backend services, and database integration. Figma designs were converted into reusable, scalable React components with structured state management. RESTful APIs were built with Node.js and Express, and PostgreSQL data models were defined with Sequelize.",
    concept:
      "Privacy-focused SaaS platforms are often built by teams where design, backend, and data modeling happen in silos — and the seams show. Resilient Privacy started as a university–industry collaboration aimed at closing that gap: a single developer taking ownership of the app end to end, from the first Figma frame to the last database query, so the product felt coherent rather than assembled. The goal was a platform where users could trust that their data was modeled, validated, and handled correctly at every layer, not just presented nicely on the surface.",
    development:
      "The frontend was built in React, translating Figma designs into reusable, scalable components with structured state management rather than one-off page layouts. On the backend, a Node.js and Express API handled business logic, request validation, and error handling to keep client-server communication predictable under real-world conditions — malformed requests, edge cases, and all. Data was modeled in PostgreSQL using Sequelize ORM, with relationships and queries designed around how the application actually needed to read and write data, not just how it looked in a schema diagram. Every endpoint was tested in Postman against expected status codes and edge-case behavior before being folded into an agile workflow of code reviews and cross-functional debugging with the rest of the team.",
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Sequelize", "Postman"],
    github: "", // NDA project -- no public repo to link to
    accent: "#1E7A54",
    accentSoft: "#E4F1EA",
    url_label: "resilient-privacy.app",
  },
  scheduler: {
    slug: "patient-scheduler",
    name: "Patient Scheduler",
    date: "2024",
    type: "Personal Project",
    roles: "Full Stack Developer",
    url: "https://patient-scheduler-54v2.onrender.com",
    desc: "A full-stack patient scheduling system with a React frontend and a PHP/MySQL backend. Includes custom conflict-detection logic to prevent overlapping appointments, relational schemas for patients and appointments, and PHP-session authentication with role-based access control.",
    concept:
      "Appointment scheduling sounds simple until two patients get booked into the same slot. Patient Scheduler was built to solve that specific failure mode: a system where conflict prevention isn't an afterthought bolted onto the UI, but enforced at the backend, where it can't be bypassed. The broader goal was a scheduling tool that different types of users — patients, staff, admins — could rely on without needing to double-check each other's work.",
    development:
      "The frontend is a React application for creating, viewing, updating, and managing appointments, backed by a PHP and MySQL server. The core of the system is custom conflict-detection logic on the backend that checks incoming appointment requests against existing bookings before they're confirmed, rather than trusting the client to catch overlaps. The database schema was designed relationally around patients, appointments, and users, so appointment history and user roles stay consistent as the data grows. Authentication runs on PHP sessions with role-based access control, so what a patient can see and do is distinct from what staff or an admin can — keeping sensitive patient information scoped to the people who should have it.",
    stack: ["React.js", "Node.js", "Express.js", "PHP", "MySQL"],
    github: "https://github.com/Dishant-Modi/Patient_Scheduler",
    accent: "#D9503F",
    accentSoft: "#F7E4E0",
    url_label: "patient-scheduler-54v2.onrender.com",
  },
  ecommerce: {
    slug: "e-commerce-website",
    name: "E-Commerce Website",
    date: "2024",
    type: "Personal Project",
    roles: "Frontend Developer",
    url: "https://dishant-ecommerce.vercel.app",
    desc: "A responsive single-page storefront with reusable, component-driven UI patterns. Redux Toolkit manages cart state centrally, React Router handles client-side navigation, and the interface is built mobile-first with Tailwind CSS.",
    concept:
      "Most e-commerce demos look fine until you actually try to shop on them — cart state resets, navigation feels bolted on, or the mobile layout was clearly an afterthought. This project was an exercise in building a storefront that holds up under normal use: a single-page application where the cart persists as you browse, routing feels instant, and the interface was designed mobile-first rather than shrunk down from desktop.",
    development:
      "Built with React using reusable, component-driven UI patterns, the app uses Redux Toolkit to manage cart state centrally — so adding an item, navigating away, and coming back doesn't lose what's in the cart. React Router handles client-side navigation across product listings, detail views, and checkout without full page reloads, and the entire interface is styled with Tailwind CSS, built mobile-first from the start to keep the layout accessible and responsive across screen sizes rather than patched in after the fact.",
    stack: ["React.js", "Redux Toolkit", "Tailwind CSS", "React Router"],
    github: "https://github.com/Dishant-Modi/E-Commerce-Web",
    accent: "#5B57D1",
    accentSoft: "#E7E6F8",
    url_label: "dishant-ecommerce.vercel.app",
  },
};

export const projectList = Object.values(projects);

export function getProjectBySlug(slug) {
  return projectList.find((p) => p.slug === slug);
}
