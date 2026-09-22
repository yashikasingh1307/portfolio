import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";

interface Highlight {
  number: string;
  stat: string;
  title: string;
  text: string;
  linkLabel: string;
  href: string;
}

const HIGHLIGHTS: Highlight[] = [
  {
    number: "01",
    stat: "Finalist",
    title: "Delhi AI Grind · 2026",
    text: "Reached the finals with Delhi Heritage Explorer, a web platform for discovering the city's heritage sites, culture, and food.",
    linkLabel: "View project",
    href: "https://delhi-heritage-explorer.vercel.app/",
  },
  {
    number: "02",
    stat: "200+",
    title: "LeetCode Problems",
    text: "Solved through regular data structures and algorithms practice in C++.",
    linkLabel: "View profile",
    href: "https://leetcode.com/u/YashikaSingh_1311/",
  },
];

function Achievements() {
  return (
    <section
      className="section achievements"
      id="achievements"
      aria-labelledby="achievements-title"
    >
      <div className="container">
        <Reveal>
          <SectionHead
            number="05"
            title="Achievements"
            id="achievements-title"
          />

          <div className="highlights">
            {HIGHLIGHTS.map((item) => (
              <article className="highlight" key={item.title}>
                <span className="highlight__number label label--red">
                  {item.number}
                </span>

                <p className="highlight__stat">{item.stat}</p>

                <h3 className="highlight__title label">
                  {item.title}
                </h3>

                <p className="highlight__text">{item.text}</p>

                <a
                  className="highlight__link label"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.linkLabel} <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Achievements;