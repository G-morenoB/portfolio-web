// SkillCard.jsx
import "./SkillCard.css";

const SkillCard = ({ name, icon }) => {
  return (
    <div className="skill-card">
      <div className="skill-card__icon-wrapper">
        <img src={icon} alt={name} className="skill-card__icon" />
      </div>
      <span className="skill-card__name">{name}</span>
    </div>
  );
};

export default SkillCard;
