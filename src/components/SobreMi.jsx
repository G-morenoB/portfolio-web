import '../styles/SobreMi.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
function SobreMi() {
  return (
    <section id="sobre-mi" className="sobre-mi-section">
        <h2 className="sobre-mi-title">      
         <FontAwesomeIcon icon={faUserAstronaut} className="icon" />  Sobre mí
      </h2>

      <div className="container_sobremi">

        <div className="container_info_sobremi">
          <p>
            Me llamo Ubaldo Gael, estudié<span className="highlight"> Licenciatura en Ciencias de la Computación en la Benémerita Universidad Autónoma de Puebla (BUAP).</span>
           </p>
            <p>
            
            Disfruto aprender nuevas tecnologías y transformar ideas en proyectos funcionales. He trabajado 
            con tecnologías como <span className="highlight">HTML, CSS, JavaScript y React</span> para desarrollar interfaces web, además de crear aplicaciones
            móviles con Android Studio. 
            También utilizo herramientas como Git para gestionar el desarrollo de mis proyectos.
            </p>
            <p>
            Actualmente sigo fortaleciendo mis habilidades como desarrollador mientras construyo proyectos que me permitan <span className="highlight">aprender, experimentar y mejorar continuamente.
         </span> </p>
        </div>

        <div className="container_img">
          <img 
            src="/img/img_sobremi-gael.jpeg"
            alt="Foto de Gael"
          />
        </div>

      </div>

    </section>
  );
}
export default SobreMi;