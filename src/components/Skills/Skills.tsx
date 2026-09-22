import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";

const SKILL_MODULES = [
  {
    title: "Languages",
    items: [
      "C / C++",
      "Python",
      "Kotlin",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML / CSS",
      "R",
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React",
      "FastAPI",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "Mobile & Web",
    items: [
      "Android Studio",
      "Firebase",
      "Vite",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases & Tools",
    items: [
      "SQLite",
      "Git",
      "GitHub",
      "VS Code",
      "Google Colab",
    ],
  },
  {
    title: "Core Coursework",
    items: [
      "DSA",
      "OOPS",
      "DBMS",
      "Operating Systems",
      "Software Engineering",
      "Machine Learning",
    ],
  },
];

function Skills() {
  return (
    <section
      className="section skills"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <Reveal>
          <SectionHead
            number="04"
            title="Skills"
            id="skills-title"
          />

          <div className="skills__grid">
            {SKILL_MODULES.map((module) => (
              <div className="skill-module" key={module.title}>
                <h3 className="skill-module__title label label--red">
                  {module.title}
                </h3>

                <ul className="skill-module__list">
                  {module.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;