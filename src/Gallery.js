import React from 'react';
import '/dist/style/Gallery.css'

const Gallery = () => {
  return (
    <div className="galery_cont">
      <h3 className="about__content-main-title">Intereses Personales: Fotografía</h3>
      <p className="galery--details-p">
      La fotografía es un hobby que me permite capturar momentos y explorar la creatividad visual. Me interesa especialmente el trabajo con paisajes y la edición, buscando siempre un balance entre técnica y narrativa. A continuación, te presento una selección de algunas de mis fotos favoritas que muestran mi enfoque en este arte.</p>

      <div className="container-img">
        {[...Array(7)].map((_, index) => {
          const imgNumber = index + 1;
          return (
            <div
              key={imgNumber}
              className={`box-img ${index === 0 ? 'box-img-child' : ''} ${index === 3 ? 'box-img-tall' : ''}`}
            ></div>
          );
        })}
      </div>

    </div>
  );
};

export default Gallery;
