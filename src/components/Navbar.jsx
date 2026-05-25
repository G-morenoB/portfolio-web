import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-wrapper">

      <nav className="navbar">

        <div className="navbar-left">
          <div className="navbar-logo">Gael.dev</div>
        </div>

        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <li><a href="#home_hero">Home</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#sobre-mi">Sobre mi</a></li>
        </ul>

        <div className="navbar-right"></div>

      </nav>

    </header>
  );
}

export default Navbar;