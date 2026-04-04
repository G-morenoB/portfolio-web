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
      tech: ["React", "CSS",],
      github: "https://github.com/G-morenoB/NestorGuinto-Nutricion-",
      demo: "https://nestorguinto-nutricion.vercel.app/"
    },
        {
      image: "/img/proyect2.png",
      title: "Zona Basquet- Panel de administración",
      description: "Panel de administración con login para una tienda de artículos deportivos con CRUD de productos",
      tech: ["MongoDB","Express","TypeScript","React", "Tailwind","Cloudinary",],
      github: "https://github.com/G-morenoB/inventario-deportivo",
      demo: "https://zonabasquet-app.vercel.app/dashboard"
    },
      {
      image: "/img/proyect3.png",
      title: "Zona Basquet- Catalogo",
      description: "Catálogo para una tienda de artículos deportivos con búsqueda por filtros",
      tech: ["MongoDB","Express","TypeScript","React", "Tailwind","Cloudinary",],
      github: "https://github.com/G-morenoB/inventario-deportivo",
      demo: "https://zonabasquet-app.vercel.app/catalogo"
    },
  ];

  return (
    <section className="section-projects" id="projects">

      <h1>
       Proyectos
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