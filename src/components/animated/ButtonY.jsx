import React from 'react';
import style from './ButtonY.module.css'; // Import the CSS file

const ButtonY = ({ text, onClick }) => {
  return (
    <button className={ style.animatedBtn } onClick={ onClick }>
      { text }
    </button>
  );
};

export default ButtonY;
