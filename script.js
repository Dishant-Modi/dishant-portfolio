// ---------- Project data ----------
// Add a "url" once each project is deployed to enable the live iframe preview.
const projects = {
  privacy: {
    name: "Resilient Privacy",
    date: "2025",
    type: "University–Industry Collaboration",
    roles: "Full Stack Developer",
    url: "", // e.g. "https://resilient-privacy.vercel.app"
    desc: "A privacy-focused SaaS platform built from the ground up: frontend architecture, backend services, and database integration. Figma designs were converted into reusable, scalable React components with structured state management. RESTful APIs were built with Node.js and Express, and PostgreSQL data models were defined with Sequelize.",
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Sequelize", "Postman"],
    github: "https://github.com/Dishant-Modi",
    accent: "#1E7A54",
  },
  scheduler: {
    name: "Patient Scheduler",
    date: "2024",
    type: "Personal Project",
    roles: "Full Stack Developer",
    url: "",
    desc: "A full-stack patient scheduling system with a React frontend and a PHP/MySQL backend. Includes custom conflict-detection logic to prevent overlapping appointments, relational schemas for patients and appointments, and PHP-session authentication with role-based access control.",
    stack: ["React.js", "Node.js", "Express.js", "PHP", "MySQL"],
    github: "https://github.com/Dishant-Modi",
    accent: "#D9503F",
  },
  ecommerce: {
    name: "E-Commerce Website",
    date: "2024",
    type: "Personal Project",
    roles: "Frontend Developer",
    url: "",
    desc: "A responsive single-page storefront with reusable, component-driven UI patterns. Redux Toolkit manages cart state centrally, React Router handles client-side navigation, and the interface is built mobile-first with Tailwind CSS.",
    stack: ["React.js", "Redux Toolkit", "Tailwind CSS", "React Router"],
    github: "https://github.com/Dishant-Modi",
    accent: "#5B57D1",
  },
};

// ---------- Modal ----------
const modalOverlay = document.getElementById("modalOverlay");
const modalDate = document.getElementById("modalDate");
const modalType = document.getElementById("modalType");
const modalRoles = document.getElementById("modalRoles");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalStack = document.getElementById("modalStack");
const modalLinks = document.getElementById("modalLinks");
const modalUrl = document.getElementById("modalUrl");
const browserBody = document.getElementById("browserBody");
const modalClose = document.getElementById("modalClose");

function openProject(key) {
  const project = projects[key];
  if (!project) return;

  modalDate.textContent = project.date;
  modalType.textContent = project.type;
  modalRoles.textContent = project.roles;
  modalTitle.textContent = project.name;
  modalDesc.textContent = project.desc;

  modalStack.innerHTML = "";
  project.stack.forEach((s) => {
    const span = document.createElement("span");
    span.textContent = s;
    modalStack.appendChild(span);
  });

  modalLinks.innerHTML = "";
  if (project.url) {
    const liveLink = document.createElement("a");
    liveLink.href = project.url;
    liveLink.target = "_blank";
    liveLink.rel = "noopener";
    liveLink.textContent = "View project ↗";
    modalLinks.appendChild(liveLink);
  }
  const codeLink = document.createElement("a");
  codeLink.href = project.github;
  codeLink.target = "_blank";
  codeLink.rel = "noopener";
  codeLink.textContent = "Visit GitHub repo ↗";
  modalLinks.appendChild(codeLink);

  if (project.url) {
    modalUrl.textContent = project.url.replace(/^https?:\/\//, "");
    browserBody.innerHTML = `<iframe src="${project.url}" title="${project.name} live preview" loading="lazy"></iframe>`;
  } else {
    modalUrl.textContent = "preview pending";
    browserBody.innerHTML = `
      <div class="preview-pending">
        <span>// live preview not deployed yet</span>
        <span>Add this project's URL in script.js once it's live</span>
      </div>
    `;
  }

  document.documentElement.style.setProperty("--accent", project.accent);
  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("open");
  browserBody.innerHTML = "";
  document.body.style.overflow = "";
}

document.querySelectorAll(".work-card").forEach((card) => {
  card.addEventListener("click", () => openProject(card.dataset.project));
});

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("open")) closeModal();
});

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();
