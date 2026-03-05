import '../styles/hero.css'
import { Mail, MessageCircle} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";



function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <section className="img-button">
        <img src="src/img/img_Gael.jpeg" alt="Foto de Gael" className="img_Gael"></img>
        <button className="button-contact">Contactame para trabajar</button>
        </section>

        <h1>
         Hola, soy Gael <span className="lastname"> Bataz</span>
        </h1>

        <h2 className="description">
          <span className="accent"> Licenciado en Ciencias de la Computación</span> con enfoque en 
          desarrollo web y creación de productos digitales elegantes,
          funcionales y modernos.
        </h2>

<section className="contacts-content"> 
  <a 
    href="mailto:ubaldogaelcein@gmail.com" 
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
    href="https://www.linkedin.com/in/gael-bataz-617a223a6" 
    target="_blank"
    rel="noopener noreferrer"
    className="contact-me"
  >
    <FontAwesomeIcon icon={faLinkedin} className="icon" />Linkedin
  </a>
</section>
      </div>





      <div className="glow-circle"></div>
    </section>
  );
}

export default Hero;

