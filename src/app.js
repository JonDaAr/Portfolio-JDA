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
import Section from './Section.js'; // Nuevo componente para animaciones

const App = () => {
  return (
    <div>
      <StarField />
      <Navbar />
      <Section>
        <Hero />
      </Section>
      <Section>
        <Tecnico />
      </Section>
      <Section>
        <AboutMe />
      </Section>
      <Section>
        <Gallery />
      </Section>
      <Section>
        <Study />
      </Section>
      <Section>
        <Projects />
      </Section>
      <Footer />
    </div>
  );
};

export default App;
