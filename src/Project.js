import React from 'react';
import '/dist/style/Project.css';
const Projects = () => {
  return (
    <section id="projects" className="projects sec-pad">
      <div className="main--container">
        <h2 className="title--main">
          <span className="title__main">Proyectos</span>
          <span className="info__main">
            Aquí encontrará algunos de los proyectos personales y de clientes que creé y cada proyecto contiene su propio estudio de caso.
          </span>
        </h2>
        <div className="projects-content">
          <div className="project-row">
            <div className="projects-img-cont">
              <img 
                src="/img/porfolio-sin-fondo.png" 
                alt="Software Screenshot" 
                className="projects__row-img" 
                loading="lazy" 
              />
            </div>
            <div className="projects-row-cont">
              <h3 className="projects-row-cont-title">Portfolio</h3>
              <p className="projects-row-cont-desc">
                Este proyecto no solo muestra mis habilidades en desarrollo web con HTML, CSS y JavaScript, sino que también refleja mi enfoque en el diseño responsivo y la usabilidad. Cada línea de código representa desafíos superados y aprendizajes. Explora la elegancia de un diseño intuitivo, una carga optimizada y un código bien estructurado.
              </p>
              <a 
                className="btn btn--med btn--theme dynamicBgClr" 
                href="/project-1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ver
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
