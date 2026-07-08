const skillGroups = [
  {
    category: "Languages",
    tags: ["HTML", "CSS", "JavaScript (ES6+)", "TypeScript", "Python", "SQL / PostgreSQL"],
  },
  {
    category: "Frameworks & Libraries",
    tags: ["React", "Next.js", "Redux Toolkit", "Tailwind CSS", "Bootstrap", "React Query", "Lodash"],
  },
  {
    category: "Backend, APIs & Testing",
    tags: ["Node.js", "REST APIs", "WebSockets", "Jest", "React Testing Library"],
  },
  {
    category: "Tools & Platforms",
    tags: ["Git", "GitHub", "Webpack", "npm", "AWS", "VS Code", "Postman", "Figma"],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <p className="eyebrow-mono">03 / Skills</p>
      <h2 className="section-title">What I work with.</h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.category}>
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
  );
}
