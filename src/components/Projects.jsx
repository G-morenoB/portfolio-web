import '../styles/projects.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "./ProjectCard";

function Projects() {

  const projects = [
    {
      image: "/img/nutricion.png",
      title: "Nestor Guinto - Nutrición",
      description: "Landing page para nutriólogo desarrollada con React y CSS.",
      tech: ["React", "CSS"],
      github: "https://github.com/",
      demo: "https://demo.com"
    },
    {
      image: "/img/app.png",
      title: "Task Manager",
      description: "Aplicación web para gestionar tareas.",
      tech: ["React", "Node.js"],
      github: "https://github.com/",
      demo: "https://demo.com"
    }
  ];

  return (
    <section className="section-projects">

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