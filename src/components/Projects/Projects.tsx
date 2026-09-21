import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";

function Projects() {
  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <Reveal>
        <SectionHead number="03" title="Projects" id="projects-title" />

        <div className="projects__grid">
          <article className="project">
            <div className="project__media project__media--plot">
              <img
                src="/images/project-fake-news-shap.jpg"
                width={1400}
                height={922}
                loading="lazy"
                alt="SHAP waterfall plot showing the words that pushed a news article toward a fake prediction"
              />
            </div>
            <div className="project__body">
              <p className="project__index label label--red">Project 01</p>
              <h3 className="project__title">Fake News Detection</h3>
              <p className="project__text">
                Machine learning project focused on detecting misleading
                information using NLP and classification techniques.
              </p>
              <p className="project__tech label">Python · Machine Learning · NLP</p>
              <div className="project__links">
                <a
                  className="link-button"
                  href="https://github.com/yashikasingh1307/Fake-News-Detection-Machine-Learning-Model"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Fake News Detection on GitHub"
                >
                  View on GitHub <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="link-button link-button--ghost"
                  href="https://drive.google.com/drive/folders/1WEL2BhHhCyJnH2IkJ2Q08lJq5nOobCa7?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Read the Fake News Detection research paper"
                >
                  Research Paper <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>

          <article className="project">
            <div className="project__media project__media--phones">
              <img
                src="/images/project-foodbridge-signup.jpg"
                width={403}
                height={859}
                loading="lazy"
                alt="FoodBridge sign-up screen with Donor, NGO and Buyer role selection"
              />
              <img
                src="/images/project-foodbridge-donate.jpg"
                width={411}
                height={873}
                loading="lazy"
                alt="FoodBridge Donate Food screen with a listing form"
              />
              <img
                src="/images/project-foodbridge-browse.jpg"
                width={416}
                height={894}
                loading="lazy"
                alt="FoodBridge Browse Food screen with filters and food listings"
              />
            </div>
            <div className="project__body">
              <p className="project__index label label--red">Project 02</p>
              <h3 className="project__title">FoodBridge</h3>
              <p className="project__text">
                Android app designed to connect donors, NGOs, and people in need.
              </p>
              <p className="project__tech label">Android · Firebase · Kotlin</p>
              <div className="project__links">
                <a
                  className="link-button"
                  href="https://github.com/yashikasingh1307/FOOD-BRIDGE-CONNECT"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View FoodBridge on GitHub"
                >
                  View on GitHub <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="link-button link-button--ghost"
                  href="https://drive.google.com/drive/folders/1-kWQ_Dt4Y01DlZKEj2CerMl6WauBWdL7?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch the FoodBridge demo video"
                >
                  Demo Video <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>

          <article className="project">
            <div className="project__media">
              <img
                src="/images/project-delhi-heritage.jpg"
                width={1400}
                height={708}
                loading="lazy"
                alt="Delhi Heritage Explorer home screen with the Start Exploring button and four feature tiles"
              />
            </div>
            <div className="project__body">
              <p className="project__index label label--red">Project 03</p>
              <h3 className="project__title">Delhi Heritage Explorer</h3>
              <p className="project__text">
                Web platform exploring Delhi's heritage sites, culture, and
                food with AI recommendations.
              </p>
              <p className="project__tech label">HTML · CSS · JavaScript</p>
              <div className="project__links">
                <a
                  className="link-button"
                  href="https://github.com/yashikasingh1307/delhi-heritage-explorer"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Delhi Heritage Explorer on GitHub"
                >
                  View on GitHub <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="link-button link-button--ghost"
                  href="https://delhi-heritage-explorer.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open the Delhi Heritage Explorer live site"
                >
                  Live Site <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Projects;
