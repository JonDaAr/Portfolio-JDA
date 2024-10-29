import React from 'react';
import '../dist/style/style.css';

const Navbar = () => {
  

  return (
    <div className='conteiner_Nav'>
    <div className="navbar">
      <div className="navbar-left">
        <h1>Jonatan Arroyo</h1>
      </div>
      <ul className="navbar-right">
        <li><a href="#inicio" >Inicio</a></li>
        <li><a href="#about" >Sobre mí</a></li>
        <li><a href="#proyectos" >Proyectos</a></li>
        <li><a href="#contacto" >Contacto</a></li>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
