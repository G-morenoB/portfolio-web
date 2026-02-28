import { Mail, Phone } from "lucide-react";
import '../styles/footer.css'

function Footer() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-item">
        <Mail className="icon" />
        <a href="mailto:ubaldogaelcein@gmail.com">
          Contactame
        </a>
      </div>
    </section>
  );
}

export default Footer;