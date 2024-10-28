import React from 'react';
import Navbar from './Navbar.js';
import StarField from './StarField.js';
import Hero from './Hero.js';
import AboutMe from './AboutMe.js';
import Tecnico from './Tecnico.js';
import Projects from './Project.js';
import Footer from './Footer.js';
import '../dist/style/style.css';
import Study from './Arrray/Studies.js'


const App = () => {
  const handleClick = () => {
    // Añadir la clase 'rotate-bg' al body o un contenedor para activar la animación del fondo
    document.body.classList.add('rotate-bg');
    
    // Eliminar la clase después de la animación para que pueda repetirse
    setTimeout(() => {
      document.body.classList.remove('rotate-bg');
    }, 5000); // La duración de la animación (5 segundos en este caso)
  };
  return (
    <div className='NavBAr'>
      <StarField />
      <Navbar />
      <Hero />
      <Tecnico />
      <AboutMe />
      <Study />
      <Projects />
      <Footer />
    </div>
  );
};


export default App;