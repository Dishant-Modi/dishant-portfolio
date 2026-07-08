export default function Contact() {
  return (
    <section className="section section-contact" id="contact">
      <p className="eyebrow-mono">05 / Contact</p>
      <h2 className="section-title">Let's talk about<br />a role.</h2>
      <p className="contact-text">
        Open to full-time and internship opportunities in full-stack development.
        The fastest way to reach me is email.
      </p>
      <div className="contact-grid">
        <a href="mailto:modidishant30@gmail.com" className="contact-item">
          <span className="contact-label">Email</span>
          <span className="contact-value">modidishant30@gmail.com</span>
        </a>
        <a href="tel:4697563009" className="contact-item">
          <span className="contact-label">Phone</span>
          <span className="contact-value">469-756-3009</span>
        </a>
        <a href="https://linkedin.com/in/dishantmodi/" target="_blank" rel="noopener" className="contact-item">
          <span className="contact-label">LinkedIn</span>
          <span className="contact-value">/in/dishantmodi</span>
        </a>
        <a href="https://github.com/Dishant-Modi" target="_blank" rel="noopener" className="contact-item">
          <span className="contact-label">GitHub</span>
          <span className="contact-value">/Dishant-Modi</span>
        </a>
      </div>
    </section>
  );
}
