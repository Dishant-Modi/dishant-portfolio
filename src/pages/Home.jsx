import { Link } from "react-router-dom";
import AnimatedText from "../components/AnimatedText.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import ExperienceEntry from "../components/ExperienceEntry.jsx";
import { site, experienceTimeline } from "../data/site.js";
import { projectList } from "../data/projects.js";

function chunkPairs(items) {
  const pairs = [];
  for (let i = 0; i < items.length; i += 2) pairs.push([items[i], items[i + 1]]);
  return pairs;
}

export default function Home() {
  const featured = projectList.slice(0, 2);
  const github = site.contact.links.find((l) => l.label === "GitHub");
  const flatSkills = site.skills.flatMap((group) => group.tags);
  const skillPairs = chunkPairs(flatSkills);

  return (
    <div className="page" id="top">
      <section className="hero">
        <AnimatedText as="h1" text={site.name} className="hero-name" />
        <div className="hero-focus-lines">
          {site.focusLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
        <div className="hero-bio-grid">
          {site.bioTeaser.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-row">
          <h2 className="section-title">Featured works</h2>
          <p className="section-intro">
            A few projects I've shipped end to end. See all of them on the{" "}
            <Link to="/works">works page</Link>, or browse the code on{" "}
            <a href={github.href} target="_blank" rel="noopener">GitHub ↗</a>.
          </p>
        </div>
        <div className="works-grid">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="experience-layout">
          <div>
            <AnimatedText as="h2" text="Experience" className="section-title" />
            <p className="experience-intro">{site.experienceIntro}</p>
          </div>
          <div className="experience-list">
            {experienceTimeline.map((entry, i) => (
              <ExperienceEntry key={entry.title} index={String(i + 1).padStart(2, "0")} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="skills-home-grid">
          <h2 className="section-title">Skills</h2>
          <div>
            {skillPairs.map(([left, right]) => (
              <div className="skills-flat-row" key={left}>
                <span>{left}</span>
                {right && <span>{right}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="closing-cta">
          <AnimatedText
            as="h2"
            text={site.closing.headline}
            className="closing-headline"
            mutedLastWords={site.closing.headlineMutedWords}
          />
          <div className="closing-socials">
            <p className="closing-socials-label">{site.closing.socialsLabel}</p>
            <div className="closing-socials-list">
              {site.contact.socials.map((s) => (
                <a href={s.href} key={s.label} target="_blank" rel="noopener">{s.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="closing-footer">
          <p className="closing-footer-big">{site.closing.bigLine}</p>
          <div className="closing-footer-row">
            <span>{site.closing.madeWith}</span>
            <span>© {new Date().getFullYear()}</span>
            <a href="#top">Back to top</a>
          </div>
        </div>
      </section>
    </div>
  );
}
