import React, { useContext, useState, useEffect } from 'react';

import Header from '../header/Header';
import style from './Project.module.css';
import { ThemeContext } from '../themeContext/ThemeContext.jsx';
import '../../App.css'
import { LanguageContext } from '../language/LanguageContext.jsx';
import Photo from '../photo/Photo.jsx';
import hangmen from './hangmen.svg';
import playGame from './playGame.jpg';
import hangGame from './hangGame.png';
import Footer from '../footer/Footer.jsx';

// import photo from './photo.jpg'




export default function Project() {
   const { language, translations } = useContext(LanguageContext);
   const [visible, setVisible] = useState(false);
   const { theme } = useContext(ThemeContext); // Get the current theme


   useEffect(() => {
      setTimeout(() => {
         setVisible(true);
      }, 500); // Optional delay
   }, []);


   const hangmenLink = " https://giedrekite.github.io/hangman-game/  "; // URL to open when the photo is clicked
   const linkedinLink = "https://www.linkedin.com/in/giedr%C4%97-narvilait%C4%97-759a54273/"; // URL to open when the photo is clicked



   return <>
      <Header />
      <main className={ `page ${theme}` }>
         <div>
            <h2 className={ style.name }>{ translations[language].pro }</h2>
         </div>




         <div className={ style.section1 }>
            <div className={ `text ${visible ? 'slide-in-right' : 'hidden'}` }>
               <div className={ style.card }>
                  <div className={ style.cf }>
                     <div className={ `highlight-text ${theme === 'light' ? 'light-text' : 'dark-textg'}` }>
                        <p className={ `text ${visible ? 'slide-in-right' : 'hidden'}` }> { translations[language].pro1 }
                        </p>
                        <a href={ hangmenLink } target="_blank" rel="noopener noreferrer">
                           <img src={ playGame } alt="Game hangmen link" style={ { width: '80px', height: 'auto', padding: '1rem' } } />
                        </a>
                     </div>
                     <div className={ `highlight-text ${theme === 'light' ? 'light-text' : 'dark-textg'}` }>
                        <p className={ `text ${visible ? 'slide-in-left' : 'hidden'}` }>

                        </p>

                     </div>
                  </div>
                  <div className={ style.cb }>
                     <a href={ hangmenLink } target="_blank" rel="noopener noreferrer">
                        <Photo src={ hangGame } alt="Game hangmen" />
                     </a>
                  </div>
               </div>

               <div className={ style.card }>
                  <div className={ style.cf }>
                     <div className={ `highlight-text ${theme === 'light' ? 'light-text' : 'dark-textg'}` }>
                        <p className={ `text ${visible ? 'slide-in-right' : 'hidden'}` }> { translations[language].pro1 }
                        </p>
                        <a href={ hangmenLink } target="_blank" rel="noopener noreferrer">
                           <img src={ playGame } alt="Game hangmen link" style={ { width: '80px', height: 'auto', padding: '1rem' } } />
                        </a>
                     </div>
                     <div className={ `highlight-text ${theme === 'light' ? 'light-text' : 'dark-textg'}` }>
                        <p className={ `text ${visible ? 'slide-in-left' : 'hidden'}` }>

                        </p>

                     </div>
                  </div>
                  <div className={ style.cb }>
                     <a href={ hangmenLink } target="_blank" rel="noopener noreferrer">
                        <Photo src={ hangGame } alt="Game hangmen" />
                     </a>
                  </div>
               </div>

               <div className={ style.card }>
                  <div className={ style.cf }>
                     <div className={ `highlight-text ${theme === 'light' ? 'light-text' : 'dark-textg'}` }>
                        <p className={ `text ${visible ? 'slide-in-right' : 'hidden'}` }> { translations[language].pro1 }
                        </p>
                        <a href={ hangmenLink } target="_blank" rel="noopener noreferrer">
                           <img src={ playGame } alt="Game hangmen link" style={ { width: '80px', height: 'auto', padding: '1rem' } } />
                        </a>
                     </div>
                     <div className={ `highlight-text ${theme === 'light' ? 'light-text' : 'dark-textg'}` }>
                        <p className={ `text ${visible ? 'slide-in-left' : 'hidden'}` }>

                        </p>

                     </div>
                  </div>
                  <div className={ style.cb }>
                     <a href={ hangmenLink } target="_blank" rel="noopener noreferrer">
                        <Photo src={ hangGame } alt="Game hangmen" />
                     </a>
                  </div>
               </div>
            </div>

         </div>


      </main>
      <Footer />


   </>

}


