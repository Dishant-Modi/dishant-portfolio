import { motion, useReducedMotion } from "framer-motion";

export default function PageTransition({ children }) {
  const shouldReduceMotion = useReducedMotion();

  // AnimatePresence mode="wait" runs exit, then enter, sequentially -- so the
  // exit duration is kept short (it's not the animation the user is meant to
  // notice) while enter gets the fuller, more visible duration.
  const variants = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.15, ease: "easeOut" } },
        exit: { opacity: 0, transition: { duration: 0.1, ease: "easeIn" } },
      }
    : {
        initial: { opacity: 0, y: 48 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
        exit: { opacity: 0, y: -24, transition: { duration: 0.2, ease: "easeIn" } },
      };

  return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}
