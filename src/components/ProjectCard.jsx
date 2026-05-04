import { useEffect, useRef, useState } from "react";

function ProjectCard({ image, title, description, tech, github, demo, className }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`project-card ${className} ${visible ? "show" : ""}`}
    >

      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <div className="project-info">

        <h2>{title}</h2>

        <div className="project-tech">
          {tech.map((item, index) => (
            <span key={index} className="tech-badge">{item}</span>
          ))}
        </div>

        <p>{description}</p>

        <div className="project-buttons">
          <a href={github} target="_blank" rel="noopener noreferrer" className="btn">
            Código
          </a>

          <a href={demo} target="_blank" rel="noopener noreferrer" className="btn preview">
            Ver
          </a>
        </div>

      </div>
    </div>
  );
}

export default ProjectCard;