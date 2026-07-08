import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getProjectBySlug } from "../data/projects.js";
import Button from "../components/Button.jsx";

export default function WorkDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (project) document.documentElement.style.setProperty("--accent", project.accent);
  }, [project]);

  if (!project) return <Navigate to="/works" replace />;

  return (
    <div className="page">
      <section className="section">
        <Button to="/works">← Back to works</Button>

        <div className="detail-head" style={{ marginTop: "32px" }}>
          <div className="detail-meta">
            <span>{project.date}</span>
            <span>{project.type.toUpperCase()}</span>
            <span>{project.roles.toUpperCase()}</span>
          </div>
          <h1 className="detail-title">{project.name}</h1>
        </div>

        <div className="detail-columns">
          <div>
            <span className="detail-col-label">Tech Stack</span>
            <div className="detail-stack">
              {project.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
          <div>
            <span className="detail-col-label">Description</span>
            <p className="detail-desc">{project.desc}</p>
            <div className="detail-links">
              {project.url && (
                <Button href={project.url} external>View project ↗</Button>
              )}
              {project.github && (
                <Button href={project.github} external>Visit GitHub repo ↗</Button>
              )}
            </div>
          </div>
        </div>

        <div className="detail-preview">
          {project.previewType === "screenshot" ? (
            <>
              <span className="eyebrow-mono">01</span>
              <div className="detail-screenshot">
                {project.screenshot ? (
                  <img src={project.screenshot} alt={`${project.name} screenshot`} />
                ) : (
                  <div className="detail-screenshot-pending">
                    <span>// screenshot pending</span>
                    <span>Add this project's screenshot path in src/data/projects.js</span>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="browser-chrome">
              <div className="browser-chrome-top">
                <div className="browser-dots"><span></span><span></span><span></span></div>
                <div className="browser-addr">
                  <span className="browser-lock">🔒</span>
                  <span>{project.url ? project.url.replace(/^https?:\/\//, "") : "preview pending"}</span>
                </div>
              </div>
              <div className="browser-chrome-body">
                {project.url ? (
                  <iframe src={project.url} title={`${project.name} live preview`} loading="lazy" />
                ) : (
                  <div className="preview-pending">
                    <span>// live preview not deployed yet</span>
                    <span>Add this project's URL in src/data/projects.js once it's live</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
