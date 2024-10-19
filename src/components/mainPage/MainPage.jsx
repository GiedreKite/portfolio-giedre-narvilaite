
import React, { useContext, useState, useEffect } from 'react';
import style from './MainPage.module.css';
import photo from './img/photo.jpg';
import logo from './img/logo.png';
import logoL from './img/logoL.png';

import Header from '../header/Header';
import translations from '../language/translations.js';
import Language from '../language/LanguageSwitcher.jsx'
import Footer from '../footer/Footer.jsx';
import '../text/textLeft.css';
import '../text/textRight.css';
import { LanguageContext } from '../language/LanguageContext';
import Photo from '../photo/Photo.jsx';
import { ThemeContext } from '../themeContext/ThemeContext.jsx';
import '../../App.css'






export default function MainPage() {
  const { language, translations } = useContext(LanguageContext);

  const [visible, setVisible] = useState(false);
  const { theme } = useContext(ThemeContext); // Get the current theme
  const [isMobile, setIsMobile] = useState(false);

  // Custom Hook to detect screen width

  const checkScreenSize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);


  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 700); // Optional delay
  }, []);


  return <>
    <Header />

    <main className={ `page ${theme}` }>




      <div className={ style.container }>

        <div className={ style.photoContainer }>
          { !isMobile && <img className={ style.bouncingPhoto } src={ logo } alt="logo" /> }
        </div>


        <div className={ `highlight-text ${theme === 'light' ? 'light-text' : 'dark-textg'}` }>
          <h1 className={ `text ${visible ? 'slide-in-right' : 'hidden'}` }>{ translations[language].description }</h1>
        </div>



      </div>




    </main>

    <Footer />

  </>

}





