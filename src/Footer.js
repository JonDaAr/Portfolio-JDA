import React from 'react';
import '/dist/style/Footer.css'

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main--container">
        <div className="main-footer-up">
          {/* Sección de redes sociales */}
          <div className="main-footer-row1">
            <h2 className="title-footer">
              <span>Redes</span>
            </h2>
            <div className="main-footer-redes">
              <a 
                target="_blank" 
                rel="noreferrer" 
                href="https://www.linkedin.com/in/jonatan-arroyo-b0ab19265/"
              >
                <img 
                  className="main-footer-img" 
                  src="/img/img5.png" 
                  alt="Arroyo Jonatan Linkedin" 
                />
              </a>
              <a 
                target="_blank" 
                rel="noreferrer" 
                href="https://github.com/JonDaAr"
              >
                <img 
                  className="main-footer-img" 
                  src="/img/img4.png" 
                  alt="Arroyo Jonatan GITHUB" 
                />
              </a>
              <a 
                target="_blank" 
                rel="noreferrer" 
                href="https://wa.me/1141611903"
              >
                <img 
                  className="main-footer-img" 
                  src="/img/img7.png" 
                  alt="Arroyo Jonatan Whatsapp" 
                />
              </a>
              <a 
                target="_blank" 
                rel="noreferrer" 
                href="https://www.instagram.com/"
              >
                <img 
                  className="main-footer-img" 
                  src="/img/img5.png" 
                  alt="Arroyo Jonatan Instagram" 
                />
              </a>
            </div>
          </div>
          
          {/* Descripción personal */}
          <div className="main-footer-row2">
            <h2 className="title-footer">Jonatan Arroyo</h2>
            <p className="main-footer-desc">
              Desarrollador web frontend especializado en la creación de interfaces atractivas y funcionales para sitios y aplicaciones. Enfocado en impulsar el éxito global del producto, combino habilidades en HTML, CSS y JavaScript para superar expectativas estéticas y de usabilidad. Mi objetivo es elevar la calidad del frontend para contribuir al éxito integral del proyecto.
            </p>
          </div>
        </div>
        
        {/* Parte inferior del footer */}
        <div className="main-footer--lower">
          &copy; {new Date().getFullYear()} | Made by <a rel="noreferrer" target="_blank" href="">Jonatan Arroyo</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
