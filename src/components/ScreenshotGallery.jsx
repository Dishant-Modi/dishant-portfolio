const POSITIONS = ["left", "right", "center"];

export default function ScreenshotGallery({ images, variant = "framed" }) {
  if (!images || images.length === 0) return null;

  if (variant === "plain") {
    return (
      <div className="screenshot-gallery screenshot-gallery--plain">
        {images.map((src, i) => (
          <figure className="screenshot-gallery-item screenshot-gallery-item--plain" key={src}>
            <img src={src} alt="" loading="lazy" />
            <figcaption className="eyebrow-mono">{String(i + 1).padStart(2, "0")}</figcaption>
          </figure>
        ))}
      </div>
    );
  }

  return (
    <div className="screenshot-gallery">
      {images.map((src, i) => {
        const position = POSITIONS[i % POSITIONS.length];
        return (
          <figure className={`screenshot-gallery-item screenshot-gallery-item--${position}`} key={src}>
            <div className="screenshot-gallery-frame">
              <img src={src} alt="" loading="lazy" />
            </div>
            <figcaption className="eyebrow-mono">{String(i + 1).padStart(2, "0")}</figcaption>
          </figure>
        );
      })}
    </div>
  );
}
