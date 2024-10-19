import React, { useContext, useEffect, useState } from 'react';

import '../../App.css';
import Header from '../header/Header';
import { LanguageContext } from '../language/LanguageContext.jsx';
import { ThemeContext } from '../themeContext/ThemeContext.jsx';
import style from './Project.module.css';

import Footer from '../footer/Footer.jsx';
import Photo from '../photo/Photo.jsx';
import hangGame from './hangGame.png';
import playGame from './playGame.jpg';
import tiktaktoe from './tiktaktoe.png';

// import photo from './photo.jpg'




export default function Project() {
   const { language, translations } = useContext(LanguageContext);
   const [visible, setVisible] = useState(false);
   const { theme } = useContext(ThemeContext);
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
      }, 500); // Optional delay
   }, []);


   const hangmenLink = " https://giedrekite.github.io/hangman-game/  ";
   const tiktactoeLink = "https://giedrekite.github.io/tik-tak-toe-game/";




   return <>
      <Header />
      <main className={ `page ${theme}` }>

         <div className={ style.container }>

            <h2 className={ style.name }>{ translations[language].pro }</h2>

         </div>



         <div className={ style.container }>
            <div className={ style.textY }>
               <p className={ `text ${visible ? 'slide-in-right' : 'hidden'}` }> { translations[language].pro1 }
               </p>
               { isMobile && (<a href={ hangmenLink } target="_blank" rel="noopener noreferrer">
                  <img src={ playGame } alt="Game hangmen link" style={ { width: '80px', height: 'auto', padding: '1rem' } } />
               </a>) }
            </div>

            { !isMobile && (
               <a href={ hangmenLink } target="_blank" rel="noopener noreferrer">
                  <Photo src={ hangGame } alt="Game hangmen" />
               </a>) }

         </div>


         <div className={ style.container }>

            <div className={ style.textG }>
               <p className={ `text ${visible ? 'slide-in-right' : 'hidden'}` }> { translations[language].pro2 }
               </p>
               { isMobile && (<a href={ tiktactoeLink } target="_blank" rel="noopener noreferrer">
                  <img src={ playGame } alt="Game hangmen link" style={ { width: '80px', height: 'auto', padding: '1rem' } } />
               </a>) }
            </div>
            { !isMobile && (<a href={ tiktactoeLink } target="_blank" rel="noopener noreferrer">
               <Photo src={ tiktaktoe } alt="Tik-Tak-Toe" />
            </a>) }
         </div>







      </main >
      <Footer />


   </>

}


