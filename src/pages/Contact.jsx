import AnimatedText from "../components/AnimatedText.jsx";
import SectionLabel from "../components/SectionLabel.jsx";
import { site } from "../data/site.js";

export default function Contact() {
  return (
    <div className="page">
      <section className="section">
        <SectionLabel>Contact</SectionLabel>
        <AnimatedText as="h1" text={"Let's talk about\na role."} className="section-title" />
        <p className="contact-text">{site.contact.intro}</p>
        <div className="contact-grid">
          {site.contact.links.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <a
                href={link.href}
                key={link.label}
                className="contact-item"
                {...(isExternal ? { target: "_blank", rel: "noopener" } : {})}
              >
                <span className="contact-label">{link.label}</span>
                <span className="contact-value">{link.value}</span>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}
