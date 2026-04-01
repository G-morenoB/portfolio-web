import "../styles/skills.css";
import SkillCard from "./SkillCard";

function Skills() {

  const data = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React","Tailwind", "Bootstrap"]
    },
    {
      title: "Backend",
      skills: ["Java", "PHP"]
    },
    {
      title: "Bases de Datos",
      skills: ["MySQL"]
    },
        {
      title: "Herramientas",
      skills: ["vsCode", "Git", "GitHub"]
    },
  {
      title: "Idiomas",
      skills: ["Inglés: Técnico", "Español: Nativo"]
    }
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Skills & Especialidades</h2>

      <div className="skills-container">
        {data.map((item, index) => (
          <SkillCard 
            key={index}
            title={item.title}
            skills={item.skills}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;