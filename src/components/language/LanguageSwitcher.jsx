// src/LanguageSwitcher.js
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext'; // Import the context
import style from './LanguageSwitcher.module.css'
import ButtonY from '../animated/ButtonY';
import ButtonG from '../animated/ButtonG';


const LanguageSwitcher = () => {
  const { language, changeLanguage, translations } = useContext(LanguageContext); // Access the context

  return (
    <div>
      <ButtonY onClick={ () => changeLanguage('en') } text='Eng' />
      <ButtonG onClick={ () => changeLanguage('lt') } text='Lt' />
    </div>
  );
};

export default LanguageSwitcher;
