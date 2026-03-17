import '../styles/projects.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "./ProjectCard";

function Projects() {

  const projects = [
    {
      image: "/img/nutricionist.png",
      title: "Nestor Guinto - Nutrición",
      description: "Página web responsive para nutriólogo desarrollada con React y CSS.",
      tech: ["React", "CSS"],
      github: "https://github.com/G-morenoB/NestorGuinto-Nutricion-",
      demo: ""
    }
  ];

  return (
    <section className="section-projects" id="projects">

      <h1>
        <FontAwesomeIcon icon={faCode} /> Proyectos
      </h1>

      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

    </section>
  );
}

export default Projects;