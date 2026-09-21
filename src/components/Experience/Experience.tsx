import SectionHead from "../ui/SectionHead";

const TIMELINE = [
  {
    year: "2026",
    title: "ML & GenAI Intern",
    org: "Anveshan Foundation",
    text: "Completed an eight-week internship in machine learning and generative AI, building a fake news detection project with DistilBERT and SHAP-based explainability.",
    context: "Python · NLP · DistilBERT · SHAP",
  },
];

function Experience() {
  return (
    <section
      className="section experience"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <SectionHead number="02" title="Experience" id="experience-title" />

        <ol className="timeline">
          {TIMELINE.map((item) => (
            <li className="timeline__item" key={item.title}>
              <p className="timeline__year">{item.year}</p>
              <div className="timeline__body">
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__org label label--red">{item.org}</p>
                <p className="timeline__text">{item.text}</p>
                <p className="timeline__context label">{item.context}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
