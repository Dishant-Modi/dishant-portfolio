import { motion, useReducedMotion } from "framer-motion";

// Splits `text` into words (and "\n" into separate lines) and staggers a
// translateY + opacity entrance across them. Falls back to a static render
// under prefers-reduced-motion. `mutedLastWords` de-emphasizes the trailing
// N words (e.g. a soft closing word at the end of a CTA heading).
export default function AnimatedText({ text, as: Tag = "span", className = "", stagger = 0.05, mutedLastWords = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  const lines = text.split("\n");
  const totalWords = lines.reduce((acc, line) => acc + line.split(" ").length, 0);
  let wordIndex = 0;

  if (shouldReduceMotion) {
    wordIndex = 0;
    return (
      <Tag className={className}>
        {lines.map((line, li) => (
          <span key={li}>
            {line.split(" ").map((w, wi) => {
              wordIndex++;
              const isMuted = wordIndex > totalWords - mutedLastWords;
              return (
                <span key={wi} className={isMuted ? "muted" : ""}>
                  {w}
                  {wi < line.split(" ").length - 1 ? " " : ""}
                </span>
              );
            })}
            {li < lines.length - 1 && <br />}
          </span>
        ))}
      </Tag>
    );
  }

  const container = { animate: { transition: { staggerChildren: stagger } } };
  const word = {
    initial: { opacity: 0, y: "-0.5em" },
    animate: { opacity: 1, y: "0em", transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <Tag className={`animated-text ${className}`}>
      <motion.span initial="initial" animate="animate" variants={container} style={{ display: "inline" }}>
        {lines.map((line, li) => (
          <span key={li} style={{ display: "block" }}>
            {line.split(" ").map((w, wi) => {
              wordIndex++;
              const isMuted = wordIndex > totalWords - mutedLastWords;
              return (
                <motion.span key={wi} variants={word} className={`animated-text-word${isMuted ? " muted" : ""}`}>
                  {w}&nbsp;
                </motion.span>
              );
            })}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
