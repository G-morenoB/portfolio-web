import '../styles/hero.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Mail } from "lucide-react";
import ProfileCard from './ProfileCard'

function Hero() {
  return (
    <section className="hero" id="home_hero">

      {/* Barra lateral vertical */}
      <aside className="hero-sidebar">
        <a href="https://github.com/G-morenoB" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/ubaldo-gael-moreno-bataz-617a223a6/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&to=ubaldogaelcein@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Correo">
          <Mail size={18} />
        </a>
        <span className="sidebar-label">SÍGUEME</span>
      </aside>

      {/* Contenido principal: texto izquierda, foto derecha */}
      <div className="hero-content">

        {/* Columna izquierda */}
        <div className="hero-left">
          <span className="hero-tag">Licenciado en Ciencias de la Computación</span>
          <h1>Desarrollador <span className="accent-green">Full-Stack Jr.</span></h1>
          <p className="hero-description">
          Desarrollador full-stack enfocado en construir experiencias web modernas y escalables.
          </p>
          <a href="/cv_gaelbataz.pdf" className="btn-cv" download>
            <FontAwesomeIcon icon={faDownload} /> DESCARGAR CV
          </a>
        </div>

        {/* Columna derecha: foto */}
        <div className="hero-right">
          <ProfileCard
            name="Gael Bataz"
            title=""
            handle="Gael"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/img/img_Gael.png"
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            behindGlowEnabled
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />
        </div>

      </div>

      <div className="glow-circle"></div>
    </section>
  );
}

export default Hero;