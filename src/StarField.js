import React, { useEffect } from 'react';
import '/dist/style/style.css'; // Asegúrate de tener el CSS para las estrellas

const StarField = () => {
  useEffect(() => {
    const starField = document.querySelector(".star-field");
    const starCount = 5;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 6 + 6}s`;
      star.style.animationDelay = `${Math.random() * 0.1}s`;
      starField.appendChild(star);
    }
  }, []);

  return <div className="star-field"></div>;
};

export default StarField;
