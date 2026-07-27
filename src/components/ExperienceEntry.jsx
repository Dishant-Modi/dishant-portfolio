import { Link } from "react-router-dom";

export default function ExperienceEntry({ index, entry }) {
  const body = (
    <>
      <div className="experience-index">
        <span>{index}</span>
        <span className="eyebrow-mono">{entry.type}</span>
      </div>
      <div className="experience-body">
        <h3 className="experience-title">
          {entry.title}
          {entry.slug && <span className="experience-title-arrow">↗</span>}
        </h3>
        {entry.desc && <p className="experience-desc">{entry.desc}</p>}
        {entry.bullets && (
          <ul className="timeline-list">
            {entry.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
        {entry.stack && (
          <div className="skill-tags">
            {entry.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        )}
      </div>
      <div className="experience-meta">
        <span>{entry.date}</span>
        <span>{entry.org}</span>
      </div>
    </>
  );

  if (entry.slug) {
    return (
      <Link
        to={`/works/${entry.slug}`}
        className="experience-entry experience-entry-link"
        style={{ "--accent": entry.accent }}
      >
        {body}
      </Link>
    );
  }

  return <article className="experience-entry">{body}</article>;
}
