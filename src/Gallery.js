import React from "react";
import '/dist/style/Gallery.css';
import imagen1 from '/public/assets/gallery/imagen2.jpg';
import imagen2 from '/public/assets/gallery/imagen7.jpg';
import imagen3 from '/public/assets/gallery/imagen30.jpg';
import imagen4 from '/public/assets/gallery/imagen10.png';
import imagen5 from '/public/assets/gallery/imagen33.png';
import imagen6 from '/public/assets/gallery/imagen28.png';
import imagen7 from '/public/assets/gallery/imagen27.png';



const Gallery = () => {
  return (
    

    <div className="container">
      
      <div className="box">
        <img src={imagen7} alt="imagen1"/>
      </div>
      <div className="box">
      <img src={imagen2} alt="imagen2"/>
      </div>
      <div className="box">
      <img src={imagen3} alt="imagen3"/>
      </div>
      <div className="box">
      <img src={imagen1} alt="imagen4"/>
      </div>
      <div className="box">
      <img src={imagen6} alt="imagen5"/>
      </div>
      <div className="box">
      <img src={imagen4} alt="imagen6"/>
      </div>
      <div className="box">
      <img src={imagen5} alt="imagen7"/>
      </div>
    </div>
  );
};

export default Gallery;

