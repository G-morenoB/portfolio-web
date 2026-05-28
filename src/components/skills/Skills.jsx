// Skills.jsx  –  página / sección principal de habilidades
import SkillSection from "./SkillSection";
import { skillsData } from "./skillsData";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__heading">
        <span className="skills__heading-icon">{"{ }"}</span>
        Habilidades
      </h2>

      <div className="skills__list">
        {/* Un SkillSection por cada categoría */}
        <SkillSection {...skillsData.frontend} />
        <SkillSection {...skillsData.backend} />
        <SkillSection {...skillsData.tools} />
      </div>
    </section>
  );
};

export default Skills;
