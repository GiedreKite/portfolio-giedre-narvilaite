import React, { useState, useEffect } from 'react';
import './Text.module.css'; // Import the CSS file where the animations are defined

const Text = () => {
  const [visible, setVisible] = useState(false);

  // Trigger the animation after the component mounts
  useEffect(() => {
    setTimeout(() => {
      setVisible(true); // After a delay, make the text visible and apply the animation
    }, 500); // Delay the slide-in by 500ms (optional)
  }, []);

  return (
    <div className={ `text ${visible ? 'slide-in' : 'hidden'}` }>
      <h1>Welcome to My Portfolio</h1>
      <p>This text will slide in from the left!</p>
    </div>
  );
};

export default Text;
