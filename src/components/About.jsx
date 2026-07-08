export default function About() {
  return (
    <section className="section" id="about">
      <p className="eyebrow-mono">01 / About</p>
      <h2 className="section-title">A developer who reads<br />the whole request.</h2>
      <div className="about-grid">
        <p className="about-text">
          I work across the entire stack — React and TypeScript on the frontend,
          Node.js and Express on the backend, PostgreSQL and MySQL for data.
          Most of what I've built has come from taking a project from an empty
          repository to something a real user can rely on: architecture, data
          models, endpoints, and the interface on top of all of it.
        </p>
        <p className="about-text">
          Outside of building, I've spent the last year as a Teaching Assistant
          at UT Dallas, breaking down spreadsheet modeling concepts for students —
          which has made me a better communicator about technical work, not just
          a better builder of it.
        </p>
      </div>
    </section>
  );
}
