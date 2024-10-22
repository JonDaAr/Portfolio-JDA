import React from 'react';
import '../dist/style/style.css';

const Navbar = () => {
  
  const handleClick = () => {
    // Añadir la clase 'rotate-bg' al body para activar la animación del fondo
    document.body.classList.add('rotate-bg');
    
    // Eliminar la clase después de la animación (5 segundos en este caso)
    setTimeout(() => {
      document.body.classList.remove('rotate-bg');
    }, 5000); // Duración de la animación
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1>Jonatan Arroyo</h1>
      </div>
      <ul className="navbar-right">
        <li><a href="#inicio" onClick={handleClick}>Inicio</a></li>
        <li><a href="#about" onClick={handleClick}>Sobre mí</a></li>
        <li><a href="#proyectos" onClick={handleClick}>Proyectos</a></li>
        <li><a href="#contacto" onClick={handleClick}>Contacto</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
