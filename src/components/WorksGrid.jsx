import { projects } from "../data/projects.js";
import WorkCard from "./WorkCard.jsx";

export default function WorksGrid({ onOpen }) {
  return (
    <section className="section works" id="projects">
      <div className="works-grid">
        {Object.entries(projects).map(([id, project]) => (
          <WorkCard key={id} id={id} project={project} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}
