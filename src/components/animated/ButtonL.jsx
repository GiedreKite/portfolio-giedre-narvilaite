import React from 'react';
import style from './ButtonL.module.css'; // Import the CSS file

const ButtonL = ({ text, onClick }) => {
  return (
    <button className={ style.animatedBtn } onClick={ onClick }>
      { text }
    </button>
  );
};

export default ButtonL;
