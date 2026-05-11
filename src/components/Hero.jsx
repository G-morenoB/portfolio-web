import '../styles/hero.css'
import { Mail} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp,faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <section className="hero "id="home_hero">
      <div className="hero-content" >

        <section className="img-button">
        <img src="/img/img_Gael.jpeg" alt="Foto de Gael" className="img_Gael"></img>
        <a 
        href="https://mail.google.com/mail/?view=cm&to=ubaldogaelcein@gmail.com" 
        target="_blank"
        rel="noopener noreferrer"
        className="button-contact">Contactame para trabajar</a>
        </section>
 
        <h1 >
         Hola, soy Gael <span className="lastname"> Bataz</span>
        </h1>

        <h2 className="description">
          <span className="accent"> Licenciado en Ciencias de la Computación</span> enfocado en desarrollo web moderno 
          y creación de productos digitales escalables. 
        </h2>

<section className="contacts-content"> 
  <a 
    href="https://mail.google.com/mail/?view=cm&to=ubaldogaelcein@gmail.com" 
    target="_blank"
    rel="noopener noreferrer"
    className="contact-me"
  >
    <Mail className="icon" /> Correo
  </a>

  <a 
    href="https://wa.me/5217811073905" 
    target="_blank"
    rel="noopener noreferrer"
    className="contact-me"
  >
    <FontAwesomeIcon icon={faWhatsapp} className="icon"/> WhatsApp
  </a>

  <a 
    href="www.linkedin.com/in/ubaldo-gael-moreno-bataz-617a223a6" 
    target="_blank"
    rel="noopener noreferrer"
    className="contact-me"
  >
    <FontAwesomeIcon icon={faLinkedin} className="icon" />Linkedin
  </a>

   <a 
    href="https://github.com/G-morenoB" 
    target="_blank"
    rel="noopener noreferrer" 
    className="contact-me"
  >
    <FontAwesomeIcon icon={faGithub} className="icon"/> GitHub
  </a>

<a href="/cv_gaelbataz.pdf" className="contact-me" download>
  <FontAwesomeIcon icon={faDownload} className="icon" />
  Descargar CV
</a>
</section>
      </div>
      <div className="glow-circle"></div>
    </section>
  );
}

export default Hero;

