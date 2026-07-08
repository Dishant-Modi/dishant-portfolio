import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  const isOpen = Boolean(project);

  useEffect(() => {
    if (!isOpen) return;

    document.documentElement.style.setProperty("--accent", project.accent);
    document.body.style.overflow = "hidden";

    const handleKeydown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [isOpen, project, onClose]);

  return (
    <div
      className={`modal-overlay${isOpen ? " open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {isOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
          <button className="modal-close" aria-label="Close preview" onClick={onClose}>✕</button>

          <div className="modal-head">
            <div className="modal-meta">
              <span>{project.date}</span>
              <span>{project.type.toUpperCase()}</span>
              <span>{project.roles.toUpperCase()}</span>
            </div>
            <h2 id="modalTitle" className="modal-title">{project.name}</h2>
          </div>

          <div className="modal-details">
            <div className="modal-col">
              <span className="modal-col-label">Tech Stack</span>
              <div className="modal-stack">
                {project.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div className="modal-col modal-col-wide">
              <span className="modal-col-label">Description</span>
              <p className="modal-desc">{project.desc}</p>
              <div className="modal-links">
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener">View project ↗</a>
                )}
                <a href={project.github} target="_blank" rel="noopener">Visit GitHub repo ↗</a>
              </div>
            </div>
          </div>

          <div className="modal-preview">
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
          </div>
        </div>
      )}
    </div>
  );
}
