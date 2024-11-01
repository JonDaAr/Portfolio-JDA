import React from 'react';
import Studies from '../Study';

const studies = [
  {
    title: 'Tecnicatura en Desarrollo en Web',
    institution: 'Universidad Nacional de La Matanza',
    date: 'Abril 2023 - Presente',
  },
  {
    title: 'Programación Web Full Stack MERN',
    institution: 'JP Morgan | EducacionIT | Fundación Pescar',
    date: 'Marzo 2024 - Octubre 2024',
    description: 'Formación en habilidades interpersonales (81 hs)',
  },
  {
    title: 'Análisis de Datos',
    institution: 'Google',
    date: 'Julio 2024 - Octubre 2024',
    description: 'Competencias en hojas de cálculo, SQL, R, y herramientas de visualización',
  },
  {
    title: 'SQL y Python',
    institution: 'ARTECH | Capacitación Profesional',
    date: 'Mayo 2024 - Septiembre 2024',
    description: 'Conocimientos en PowerBI también incluidos',
  },
  {
    title: 'Desarrollo en JAVA',
    institution: 'Huevo Bootcamp de Desarrollo JAVA',
    date: 'Mayo 2023 - Agosto 2023',
    description: 'Habilidades en Java y Spring Framework',
  },
  {
    title: 'Desarrollo Web',
    institution: 'MindHub',
    date: 'Agosto 2023 - Noviembre 2023',
    description: 'Tecnologías: HTML5, CSS, JavaScript, JSON, Bootstrap, y Vue.js',
  },
];


  const App = () => {
    return (
      <div>
        <Studies items={studies} title="Estudios" />
    </div>
    );
  };

export default App;