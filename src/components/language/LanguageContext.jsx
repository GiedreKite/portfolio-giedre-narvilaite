// src/LanguageContext.js
import React, { useState, createContext } from 'react';
import translations from './translations';

// Create a context
export const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={ { language, changeLanguage, translations } }>
      { children }
    </LanguageContext.Provider>
  );
};
