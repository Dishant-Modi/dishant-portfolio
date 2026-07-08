import AnimatedText from "../components/AnimatedText.jsx";
import SectionLabel from "../components/SectionLabel.jsx";
import { site } from "../data/site.js";

export default function About() {
  return (
    <div className="page">
      <section className="section">
        <SectionLabel>01 / About</SectionLabel>
        <AnimatedText as="h1" text={"A developer who reads\nthe whole request."} className="section-title" />
        <div className="about-grid">
          {site.bioFull.map((p) => (
            <p key={p} className="about-text">{p}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionLabel>02 / Skills</SectionLabel>
        <h2 className="section-title">What I work with.</h2>
        <div className="skills-grid">
          {site.skills.map((group) => (
            <div key={group.category}>
              <h3 className="skill-cat">{group.category}</h3>
              <div className="skill-tags">
                {group.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionLabel>03 / Experience</SectionLabel>
        <h2 className="section-title">Where I've worked.</h2>
        <div className="timeline">
          {site.experience.map((item) => (
            <article className="timeline-item" key={item.role}>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-body">
                <h3 className="timeline-role">{item.role}</h3>
                <p className="timeline-org">{item.org}</p>
                <ul className="timeline-list">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionLabel>04 / Education</SectionLabel>
        <h2 className="section-title">Where I studied.</h2>
        <div className="edu-list">
          {site.education.map((item) => (
            <article className="edu-item" key={item.role}>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-body">
                <h3 className="timeline-role">{item.role}</h3>
                <p className="timeline-org">{item.org}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
