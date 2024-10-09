import React from 'react';
import style from './ButtonD.module.css'; // Import the CSS file

const ButtonD = ({ text, onClick }) => {
  return (
    <button className={ style.animatedBtn } onClick={ onClick }>
      { text }
    </button>
  );
};

export default ButtonD;
