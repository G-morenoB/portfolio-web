
function SkillCard({ title, skills }) {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <div className="tags">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;