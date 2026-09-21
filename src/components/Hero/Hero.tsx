function Hero() {
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
        <div className="hero__copy">
          <h1 className="hero__name" id="hero-title">
            <span>Yashika</span>
            <span>Singh</span>
          </h1>
          <p className="hero__role">Computer Science Engineering student at IGDTUW</p>
          <p className="hero__intro">
            Exploring software development, AI, and creative problem-solving
          </p>
          <p className="hero__tags">CSE STUDENT · DEVELOPER · BUILDER</p>
        </div>

        <div className="hero__portrait">
          <img
            src="/images/portrait.jpg"
            width={812}
            height={812}
            alt="Portrait of Yashika Singh"
          />
        </div>
      </div>

      <p className="hero__footer">CSE @ IGDTUW · 2025—2029 · NEW DELHI, INDIA</p>
    </section>
  );
}

export default Hero;
