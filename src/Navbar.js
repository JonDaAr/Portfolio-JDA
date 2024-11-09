import React, { useState } from 'react';
import '../dist/style/style.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="conteiner_Nav">
      <div className="navbar">
        <div className="navbar-left">
          <h1>Jonatan Arroyo</h1>
        </div>
        {/* Botón de hamburguesa solo para pantallas pequeñas */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-right ${isOpen ? 'open' : ''}`}>
          <li><a href="#inicio" onClick={toggleMenu}>Inicio</a></li>
          <li><a href="#about" onClick={toggleMenu}>Sobre mí</a></li>
          <li><a href="#proyectos" onClick={toggleMenu}>Proyectos</a></li>
          <li><a href="#contacto" onClick={toggleMenu}>Contacto</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

