const POSITIONS = ["left", "right", "center"];

export default function ScreenshotGallery({ images }) {
  if (!images || images.length === 0) return null;

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
