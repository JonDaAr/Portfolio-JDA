import React, { useState } from "react";
import "/dist/style/Gallery.css";
import imagen1 from "/public/assets/gallery/imagen2.jpg";
import imagen2 from "/public/assets/gallery/imagen7.jpg";
import imagen3 from "/public/assets/gallery/imagen30.jpg";
import imagen4 from "/public/assets/gallery/imagen10.png";
import imagen5 from "/public/assets/gallery/imagen33.png";
import imagen6 from "/public/assets/gallery/imagen28.png";
import imagen7 from "/public/assets/gallery/imagen27.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(imagen1);

  return (
    <div className="gallery-container">
      <div className="central-image">
        <img src={selectedImage} alt="Imagen central" />
      </div>
      <div className="circle-container">
        {[imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7].map(
          (img, index) => (
            <div
              key={index}
              className={`circle-image ${
                img === selectedImage ? "active" : ""
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`imagen${index + 1}`} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Gallery;
