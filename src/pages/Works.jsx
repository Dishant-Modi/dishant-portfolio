import { Link } from "react-router-dom";
import AnimatedText from "../components/AnimatedText.jsx";
import { projectList } from "../data/projects.js";

export default function Works() {
  return (
    <div className="page">
      <section className="section section-flush">
        <AnimatedText as="h1" text="My works" className="works-headline" />

        <div className="works-layout">
          <div className="works-intro">
            <p>Here's a list of the projects that I've worked on!</p>
            <a href="https://github.com/Dishant-Modi" target="_blank" rel="noopener" className="btn-link">
              See more in my<br />GitHub ↗
            </a>
          </div>

          <div className="works-list">
            {projectList.map((project, i) => (
              <Link to={`/works/${project.slug}`} key={project.slug} className="works-list-row">
                <span className="works-list-index">{String(i + 1).padStart(2, "0")}</span>
                <span className="works-list-name">{project.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
