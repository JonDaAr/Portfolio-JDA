import React from 'react';
import Navbar from './Navbar.js';
import StarField from './StarField.js';
import Hero from './Hero.js';
import AboutMe from './AboutMe.js';
import Tecnico from './Tecnico.js';
import Projects from './Project.js';
import Footer from './Footer.js';
import '../dist/style/style.css';
import Study from './Arrray/Studies.js';
import Gallery from './Gallery.js';


const App = () => {

  return (
    <div>
      <StarField />
      <Navbar />
      <Hero />
      <Tecnico />
      <AboutMe />
      <Gallery/>
      <Study />
      <Projects />
      <Footer />
    </div>
  );
};


export default App;