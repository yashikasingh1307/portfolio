import { motion, useReducedMotion } from "framer-motion";
import Portrait from "./Portrait";

function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__top">
        <p className="hero__label label">Portfolio</p>

        <a
          className="hero__resume link-button"
          href="https://drive.google.com/drive/folders/1FLtQbGYq6qhUy_OcSN4_lStostiOogd6?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="hero__main">
        <motion.div
          className="hero__copy"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="hero__name" id="hero-title">
            <span>Yashika</span>
            <span>Singh</span>
          </h1>

          <p className="hero__role">
            Computer Science Engineering student at IGDTUW
          </p>

          <p className="hero__intro">
            A second-year student exploring software development, AI, and
            creative problem-solving
          </p>

          <p className="hero__stack">
            C++ · Python · JavaScript · HTML/CSS · Firebase
          </p>

          <p className="hero__tags">
            CSE STUDENT · DEVELOPER · BUILDER
          </p>
        </motion.div>

        <Portrait />
      </div>

      <p className="hero__footer">
        CSE @ IGDTUW · 2025—2029 · NEW DELHI, INDIA
      </p>
    </section>
  );
}

export default Hero;