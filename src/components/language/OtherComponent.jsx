// src/OtherComponent.js
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext'; // Import the context

const OtherComponent = () => {
  const { language, translations } = useContext(LanguageContext); // Access the language and translations

  return (
    <div>
      <h2>{ translations[language].description }</h2>
    </div>
  );
};

export default OtherComponent;
