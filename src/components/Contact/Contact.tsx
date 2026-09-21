import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";

function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
        <SectionHead number="06" title="Contact" id="contact-title" />

        <h3 className="contact__title">
          Let's build
          <br />
          something.
        </h3>
        <p className="contact__text">
          Have an idea, opportunity, project or just want to say hi?
          <br />
          I'm always open to new opportunities, collaborations and great
          conversations.
        </p>

        <div className="contact__links">
          <a
            className="link-button"
            href="https://github.com/yashikasingh1307"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a
            className="link-button"
            href="https://leetcode.com/u/YashikaSingh_1311/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LeetCode <span aria-hidden="true">↗</span>
          </a>
          <a
            className="link-button"
            href="https://www.linkedin.com/in/yashika-singh-39b9a8378"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a className="link-button" href="mailto:yashikasingh13nov@gmail.com">
            Email <span aria-hidden="true">↗</span>
          </a>
        </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
