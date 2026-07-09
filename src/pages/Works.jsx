import AnimatedText from "../components/AnimatedText.jsx";
import SectionLabel from "../components/SectionLabel.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projectList } from "../data/projects.js";

export default function Works() {
  return (
    <div className="page">
      <section className="section section-flush">
        <SectionLabel>Works</SectionLabel>
        <AnimatedText as="h1" text="Things I've built." className="section-title" />
        <div className="works-grid">
          {projectList.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
