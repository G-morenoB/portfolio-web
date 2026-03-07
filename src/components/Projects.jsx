import '../styles/projects.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  return (
    <section className="section-projects">
      <div className="project-row">
        <div>
          <h1> <FontAwesomeIcon icon={faCode} /> Proyectos</h1>
        </div>
        <section className="project-description"> 
        <div className="project-image">
          <img src=" " alt="Proyecto 1" className='img-proyect'/>
          <h1>Nestor Guinto - Nutrición</h1>
          <p>Landing Page para Nutriologo hecha con React y CSS.</p>
        </div>
        </section>
      </div>
    </section>
  );
}

export default Projects;