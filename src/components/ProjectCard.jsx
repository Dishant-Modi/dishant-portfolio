import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/works/${project.slug}`}
      className="project-card"
      style={{ "--accent": project.accent, "--accent-soft": project.accentSoft }}
    >
      <div className="project-card-color">
        <div className="device-frame">
          <div className="device-bar">
            <span className="device-dot"></span><span className="device-dot"></span><span className="device-dot"></span>
            <span className="device-url">{project.url_label}</span>
          </div>
          <div className="device-body">
            <span className="device-hint">Click to view case study</span>
          </div>
        </div>
      </div>
      <div className="project-card-meta">
        <h3 className="project-name">{project.name}</h3>
        <span className="project-date">{project.date}</span>
      </div>
    </Link>
  );
}
