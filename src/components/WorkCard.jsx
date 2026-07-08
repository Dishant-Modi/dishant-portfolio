export default function WorkCard({ id, project, onOpen }) {
  return (
    <button
      className="work-card"
      style={{ "--accent": project.accent, "--accent-soft": project.accentSoft }}
      onClick={() => onOpen(id)}
    >
      <div className="work-card-color">
        <div className="device-frame">
          <div className="device-bar">
            <span className="device-dot"></span><span className="device-dot"></span><span className="device-dot"></span>
            <span className="device-url">{project.url_label}</span>
          </div>
          <div className="device-body">
            <span className="device-hint">Click to open live preview</span>
          </div>
        </div>
      </div>
      <div className="work-card-meta">
        <h3 className="work-name">{project.name}</h3>
        <span className="work-date">{project.date}</span>
      </div>
    </button>
  );
}
