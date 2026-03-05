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
        <li onClick={() => setIsOpen(false)}>Home</li>
        <li onClick={() => setIsOpen(false)}>Experiencia</li>
        <li onClick={() => setIsOpen(false)}>Proyectos</li>
        <li onClick={() => setIsOpen(false)}>Sobre mi</li>
      </ul>
    </nav>
  );
}

export default Navbar;