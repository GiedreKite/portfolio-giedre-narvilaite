import React from 'react';
import style from './ButtonG.module.css'; // Import the CSS file

const ButtonG = ({ text, onClick }) => {
  return (
    <button className={ style.animatedBtn } onClick={ onClick }>
      { text }
    </button>
  );
};

export default ButtonG;
