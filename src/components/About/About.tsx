import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";

function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container">
        <Reveal>
        <SectionHead number="01" title="About" id="about-title" />

        <div className="about__grid">
          <div className="about__text">
            <p>
              I'm a second-year Computer Science Engineering student at IGDTUW,
              interested in software development, AI, and the kind of
              problem-solving that turns an idea into something people can use.
            </p>
            <p>
              I like building practical projects from start to finish, from
              Android apps and web platforms to machine learning experiments,
              and I keep sharpening my fundamentals through regular data
              structures and algorithms practice in C++.
            </p>

            <div className="about__milestone">
              <span className="about__milestone-number">200+</span>
              <span className="label">LeetCode problems</span>
            </div>
          </div>

          <div className="about__aside">
            <div className="about__block">
              <h3 className="about__block-title label label--red">Education</h3>
              <p className="about__school">IGDTUW</p>
              <div className="about__details">
                <p>B.Tech Computer Science &amp; Engineering</p>
                <p>2025—2029</p>
                <p>CGPA: 8.3</p>
              </div>
            </div>

            <div className="about__block">
              <h3 className="about__block-title label label--red">
                Currently exploring
              </h3>
              <ul className="about__topics">
                <li>DSA</li>
                <li>Web Development</li>
                <li>AI / ML</li>
                <li>Open Source</li>
              </ul>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;