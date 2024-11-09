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
              <div className="img_project"></div>
            </div>
            <div className="projects-row-cont">
              <h3 className="projects-row-cont-title">Ajedrez en JavaScript</h3>
              <p className="projects-row-cont-desc">
              Desarrollé un juego de ajedrez completamente funcional en JavaScript, con movimientos válidos de piezas, detección de jaque y jaque mate. Implementé la lógica del juego, ofreciendo una experiencia interactiva y fluida.
              </p>
              <a 
                className="btn btn--med btn--theme dynamicBgClr" 
                href="/public/assets/projects/chess-game.jpg" 
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
