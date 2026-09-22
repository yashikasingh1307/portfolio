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
                I’m a second-year Computer Science Engineering student at
                IGDTUW, and most of what I’ve learned so far has come from
                trying to build things and figuring out what I need to know
                along the way. I’ve worked on Android apps, web projects, and
                machine learning, while spending a lot of time getting more
                comfortable with data structures and algorithms in C++.
              </p>

              <p>
                What I enjoy most is the process between having an idea and
                actually making it work. A project usually starts with
                something simple, then turns into debugging, learning a new
                tool, changing the approach, and occasionally starting over.
              </p>

              <p>
                That process has made me more interested in the different
                sides of software rather than trying to decide too early that
                I belong to just one. For now, I’m exploring, building, and
                getting a better sense of what I want to go deeper into.
              </p>

              <div className="about__milestone">
                <span className="about__milestone-number">200+</span>
                <span className="label">LeetCode problems</span>
              </div>
            </div>

            <div className="about__aside">
              <div className="about__block">
                <h3 className="about__block-title label label--red">
                  Education
                </h3>

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