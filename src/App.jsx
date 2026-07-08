import { useState } from "react";
import { projects } from "./data/projects.js";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import WorksGrid from "./components/WorksGrid.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ProjectModal from "./components/ProjectModal.jsx";

export default function App() {
  const [activeProjectKey, setActiveProjectKey] = useState(null);
  const activeProject = activeProjectKey ? projects[activeProjectKey] : null;

  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <WorksGrid onOpen={setActiveProjectKey} />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </main>
      <ProjectModal project={activeProject} onClose={() => setActiveProjectKey(null)} />
    </>
  );
}
