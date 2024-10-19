import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../language/LanguageContext';

import style from './Contact.module.css';
import link from './link.svg'
import git from './github.png'
import gitW from './gitW.svg'
import linkedin from './linkedin.svg'
import Header from '../header/Header';
import Photo from '../photo/Photo';
import Footer from '../footer/Footer';
import { ThemeContext } from '../themeContext/ThemeContext.jsx';
import '../../App.css'
import '../text/textLeft.css';
import '../text/textRight.css';


export default function Contact() {
   const { language, translations } = useContext(LanguageContext);
   const [visible, setVisible] = useState(false);
   const { theme } = useContext(ThemeContext); // Get the current theme


   useEffect(() => {
      setTimeout(() => {
         setVisible(true);
      }, 500); // Optional delay
   }, []);

   const imageUrl = "https://example.com/photo.jpg"; // URL of the photo
   const gitLink = "https://github.com/GiedreKite"; // URL to open when the photo is clicked
   const linkedinLink = "https://www.linkedin.com/in/giedr%C4%97-narvilait%C4%97-759a54273/"; // URL to open when the photo is clicked

   return (<>
      <Header />
      <main className={ `page ${theme}` }>



         <div className={ style.section1 }>
            <div className={ `text ${visible ? 'slide-in-right' : 'hidden'}` }>
               <div className={ style.card }>
                  <div className={ style.cf }>
                     <div className={ `highlight-text ${theme === 'light' ? 'light-text' : 'dark-textg'}` }>
                        <p className={ `text ${visible ? 'slide-in-right' : 'hidden'}` }> { translations[language].contactMe }
                        </p>
                     </div>
                     <div className={ `highlight-text ${theme === 'light' ? 'light-text' : 'dark-textg'}` }>
                        <p className={ `text ${visible ? 'slide-in-left' : 'hidden'}` }>  Git
                        </p>

                     </div>
                  </div>
                  <div className={ style.cb }>
                     <Photo src={ git } alt="Git" />
                     <a href={ gitLink } target="_blank" rel="noopener noreferrer">
                        <img src={ gitW } alt="GitHub" style={ { width: '100px', height: 'auto' } } />
                     </a>


                  </div>
               </div>
            </div>
            <div className={ `text ${visible ? 'slide-in-left' : 'hidden'}` }>
               <div className={ style.card }>
                  <div className={ style.cf }>
                     <div className={ `highlight-text ${theme === 'light' ? 'light-text' : 'dark-textg'}` }>
                        <p className={ `text ${visible ? 'slide-in-right' : 'hidden'}` }> { translations[language].contactMe }
                        </p>
                     </div>

                     <br />
                     <div className={ `highlight-text ${theme === 'light' ? 'light-text' : 'dark-textg'}` }>

                        <p className={ `text ${visible ? 'slide-in-left' : 'hidden'}` }>  Linkedin
                        </p>
                     </div>
                  </div>
                  <div className={ style.cb }>
                     <Photo src={ linkedin } alt="Linkedin" />

                     <a href={ linkedinLink } target="_blank" rel="noopener noreferrer">
                        <img src={ link } alt="Linkedin logo" style={ { width: '100px', height: 'auto' } } />
                     </a>

                  </div>

               </div>
            </div>

            <div className={ `text ${visible ? 'slide-in-right' : 'hidden'}` }>
               <div className={ style.card }>
                  <div className={ style.cf }>
                     <div className={ `highlight-text ${theme === 'light' ? 'light-text' : 'dark-textg'}` }>{ translations[language].contactMe3 }
                     </div>
                  </div>
                  <div className={ style.cb }>Giedrė Narvilaitė: <br />
                     Email: giedre.narvilaite@gmail.com <br />
                     { translations[language].contactMe1 }  <br />
                     +370 67 669 034 <br />
                     { translations[language].contactMe2 } <br />
                     FB - Giedrė Narvilaitė <br />
                     Linkedin - Giedrė Narvilaitė

                  </div>

               </div>
            </div>
         </div>

      </main>

      <Footer />



   </>


   )
};