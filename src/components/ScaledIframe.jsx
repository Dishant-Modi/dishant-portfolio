import { useEffect, useRef, useState } from "react";

// Renders the iframe at a fixed "natural" desktop size internally, then
// scales the whole thing down to fit the container via CSS transform.
// Loading a cross-origin site directly at a narrow container width can
// break non-responsive layouts (tables collapsing, 100vh-relative CSS
// inside the iframe resolving against a tiny height, etc.) -- rendering
// it at its real width first and shrinking visually avoids that entirely.
export default function ScaledIframe({ src, title, naturalWidth = 1280, naturalHeight = 900 }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => setScale(el.offsetWidth / naturalWidth);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [naturalWidth]);

  return (
    <div ref={containerRef} className="scaled-iframe" style={{ height: naturalHeight * scale }}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        width={naturalWidth}
        height={naturalHeight}
        style={{ transform: `scale(${scale})` }}
      />
    </div>
  );
}
