import React from 'react';
import '../dist/style/style.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1>Jonatan Arroyo</h1>
      </div>
      <ul className="navbar-right">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </div>
  );
};

export default Navbar;