
import React, { useContext, useState, useEffect } from 'react';

import { LanguageContext } from '../language/LanguageContext';
import free from './img/free.jpg';
import freedom from './img/freedom.jpg';
import freee from './img/freee.jpg';
import careme from './img/careme.jpg';
import freetime from './img/freetime.jpg';
import fre from './img/fre.jpg';
import I from './img/I.jpg';
import moletai from './img/moletai.jpg';
import bum from './img/bum.jpg';
import photo from './img/photo.jpg';

import Header from '../header/Header';
import style from './About.module.css';
import Photo from '../photo/Photo';
import Footer from '../footer/Footer';
import { ThemeContext } from '../themeContext/ThemeContext';
import '../../App.css'



export default function About() {
  const { language, translations } = useContext(LanguageContext);


  const [visible, setVisible] = useState(false);
  const { theme } = useContext(ThemeContext); // Get the current theme
  const [isMobile, setIsMobile] = useState(false);

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

  return (<>
    <Header />

    <main className={ `page ${theme}` }>
      <div className={ style.containerMe }>
        <div className={ `highlight-text ${theme === 'light' ? 'light-text' : 'dark-textg'}` }>
          <h3 className={ `text ${visible ? 'slide-in-left' : 'hidden'}` }>{ translations[language].name }</h3>
        </div>
        <div className={ `highlight-text ${theme === 'light' ? 'light-text' : 'dark-texty'}` }>
          <h3 className={ `text ${visible ? 'slide-in-right' : 'hidden'}` }>Giedrė Narvilaitė</h3>
        </div>
        { !isMobile && (<Photo src={ photo } alt="My Photo" />) }

      </div>

      <div className={ `highlight-text ${theme === 'light' ? 'light-text' : 'dark-textg'}` }>
        <div className={ style.center }>
          <h1 className={ `text ${visible ? 'slide-in-right' : 'hidden'}` }>{ translations[language].aboutMe }</h1>

        </div>
      </div>
      <div className={ style.container }>

        <div className={ style.img }>
          { !isMobile && (<Photo src={ moletai } alt="My Photo" />) }
        </div>
        <div className={ style.textY }>
          <p>{ translations[language].aboutMe1 }</p>
        </div>

        <div className={ style.img }>
          { !isMobile && (<Photo src={ I } alt="My Photo" />) }
        </div>
      </div>
      <div className={ style.container }>

        <div className={ style.textG }>
          <p>{ translations[language].aboutMe2 }</p>
        </div>
        <div className={ style.img }>
          { !isMobile && (<Photo src={ careme } alt="My Photo" />) }
        </div>

        <div className={ style.textG }>
          <p>{ translations[language].aboutMe3 }</p>
        </div>
      </div>
      <div className={ style.container }>
        <div className={ style.img }>
          { !isMobile && (<Photo src={ freetime } alt="My Photo" />) }
        </div>

        <div className={ style.textY }>
          <p>{ translations[language].aboutMe4 }</p>
        </div>
        <div className={ style.img }>
          { !isMobile && (<Photo src={ fre } alt="My Photo" />) }
        </div>
      </div>
      <div className={ style.container }>
        <div className={ style.textG }>
          <p>{ translations[language].aboutMe5 }</p>
        </div>
        <div className={ style.img }>
          { !isMobile && (<Photo src={ freedom } alt="My Photo" />) }
        </div>

        <div className={ style.textG }>
          <p>{ translations[language].aboutMe6 }</p>
        </div>
      </div>
      <div className={ style.container }>
        <div className={ style.img }>
          { !isMobile && (<Photo src={ freee } alt="My Photo" />) }
        </div>

        <div className={ style.textY }>
          <p>{ translations[language].aboutMe7 }</p>
        </div>
        <div className={ style.img }>
          { !isMobile && (<Photo src={ bum } alt="My Photo" />) }
        </div>
      </div>
      <div className={ style.container }>
        <div className={ style.textG }>
          <p>{ translations[language].aboutMe8 }</p>

        </div>
      </div>
    </main>


    <Footer />




  </>


  )
};