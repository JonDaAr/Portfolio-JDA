import React, { useEffect } from 'react';
import '/dist/style/style.css';

const StarField = () => {
  useEffect(() => {
    const starField = document.querySelector(".star-field");
    const starCount = 5; // Número de estrellas fugaces
    const fixedStarCount = 100; // Número de estrellas fijas

    // Crear estrellas fugaces
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star", "shooting-star");
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 6 + 6}s`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      starField.appendChild(star);
    }

    // Crear estrellas fijas
    for (let i = 0; i < fixedStarCount; i++) {
      const fixedStar = document.createElement("div");
      fixedStar.classList.add("star", "fixed-star");
      fixedStar.style.left = `${Math.random() * 100}%`;
      fixedStar.style.top = `${Math.random() * 100}%`;
      starField.appendChild(fixedStar);
    }
  }, []);

  return <div className="star-field"></div>;
};

export default StarField;
