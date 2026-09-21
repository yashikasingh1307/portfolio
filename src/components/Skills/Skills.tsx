import SectionHead from "../ui/SectionHead";

const SKILL_MODULES = [
  { title: "Programming", items: ["C++", "Python", "JavaScript"] },
  { title: "Development", items: ["HTML", "CSS", "JavaScript", "Android"] },
  { title: "Data / AI", items: ["Pandas", "NumPy", "scikit-learn"] },
  { title: "Tools", items: ["Git", "GitHub", "Firebase", "VS Code"] },
];

function Skills() {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHead number="04" title="Skills" id="skills-title" />

        <div className="skills__grid">
          {SKILL_MODULES.map((module) => (
            <div className="skill-module" key={module.title}>
              <h3 className="skill-module__title label label--red">{module.title}</h3>
              <ul className="skill-module__list">
                {module.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
