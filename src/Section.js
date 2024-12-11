import React from 'react';
import { useInView } from 'react-intersection-observer';
import '/dist/style/animations.css'; // Archivo CSS para animaciones

const Section = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // La sección será visible cuando el 20% entre en pantalla
  });

  return (
    <div ref={ref} className={`fade-in-section ${inView ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default Section;
