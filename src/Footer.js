import React from 'react';
import '/dist/style/Footer.css'

const Footer = () => {
  return (
    <footer className="main-footer">
     
        <div className="main-footer-up">
          {/* Sección de redes sociales */}
          <div className="main-footer-row1">
            <h2 className="title-footer">
              <span>Redes</span>
            </h2>
            <div className="main-footer-redes">
              <div className='float'>
                <a href="https://www.linkedin.com/in/jonatan-david-arroyo/" target="_blanck" rel="LinkedIn">
                  <div className='LinkedIn'></div>
                </a>
              </div>
              <div className='float'>
                <a href='https://github.com/JonDaAr' target="_blanck" rel='GitHub'>
                  <div className='GitHub'></div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Parte inferior del footer */}
        <div className="main-footer--lower">
          &copy; {new Date().getFullYear()} | Made by <a rel="noreferrer" target="_blank" href="">Jonatan Arroyo</a>
        </div>
      
    </footer>
  );
};

export default Footer;
