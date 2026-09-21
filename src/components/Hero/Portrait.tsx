import { motion, useReducedMotion } from "framer-motion";

function Portrait() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="hero__portrait"
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <img
        src="/images/portrait.jpeg"
        width={812}
        height={812}
        alt="Portrait of Yashika Singh"
      />
    </motion.div>
  );
}

export default Portrait;