// SkillSection.jsx
import SkillCard from "./SkillCard";
import "./SkillSection.css";

const SkillSection = ({ title, accentColor, technologies }) => {
  return (
    <div className="skill-section" style={{ "--accent": accentColor }}>
      {/* Window chrome header */}
      <div className="skill-section__header">
        <div className="skill-section__dots">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>
        <h3 className="skill-section__title">{title}</h3>
      </div>

      {/* Grid of skill cards */}
      <div className="skill-section__grid">
        {technologies.map((tech) => (
          <SkillCard key={tech.name} name={tech.name} icon={tech.icon} />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
