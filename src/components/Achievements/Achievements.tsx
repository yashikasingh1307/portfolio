import SectionHead from "../ui/SectionHead";

const HIGHLIGHTS = [
  { number: "01", title: "Delhi AI Grind", meta: "Finalist · 2026" },
  { number: "02", title: "LeetCode", meta: "200+ Problems" },
];

function Achievements() {
  return (
    <section
      className="section achievements"
      id="achievements"
      aria-labelledby="achievements-title"
    >
      <div className="container">
        <SectionHead number="05" title="Achievements" id="achievements-title" />

        <div className="highlights">
          {HIGHLIGHTS.map((highlight) => (
            <article className="highlight" key={highlight.title}>
              <span className="label label--red">{highlight.number}</span>
              <h3 className="highlight__title">{highlight.title}</h3>
              <p className="highlight__meta label">{highlight.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
