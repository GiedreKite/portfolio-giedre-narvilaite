import React, { useState, useEffect } from 'react';
import './Photo.css'

const Photo = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to ensure the animation runs smoothly after mount

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <img
      src={ src }
      alt={ alt }
      className={ `fade-in ${isVisible ? 'visible' : ''}` }
    />
  );
};

export default Photo;
