import React, { useEffect, useState, useRef } from 'react';
import '/dist/style/style.css';


const Hero = () => {
  const [text, setText] = useState('');
  const currentIndex = useRef(0);
  const fullText = "MEERN Stack Developer";

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex.current < fullText.length) {
        setText(prev => prev + fullText.charAt(currentIndex.current));
        currentIndex.current++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [fullText]);

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>¡Hola, soy Jonatan Arroyo!</h1>
        <p className="animated-text">{text}</p>
      </div>
    </div>
  );
};

export default Hero;
