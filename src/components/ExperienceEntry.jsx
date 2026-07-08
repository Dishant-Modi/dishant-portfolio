export default function ExperienceEntry({ index, entry }) {
  return (
    <article className="experience-entry">
      <div className="experience-index">
        <span>{index}</span>
        <span className="eyebrow-mono">{entry.type}</span>
      </div>
      <div className="experience-body">
        <h3 className="experience-title">{entry.title}</h3>
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
    </article>
  );
}
