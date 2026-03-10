import { useState } from "react";
import '../styles/navbar.css'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Gael.dev</div>

      <div 
        className="hamburger" 
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>
      
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li onClick={() => setIsOpen(false)} >
          <a href="#home_hero">Home</a>
        </li>
        <li onClick={() => setIsOpen(false)} >
          <a href="#experience">Experiencia</a>
        </li>
        <li onClick={() => setIsOpen(false)} >
          <a href="#projects">Proyectos</a>
        </li>
        <li onClick={() => setIsOpen(false)} >
          <a href="#sobre-mi">Sobre mi</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;