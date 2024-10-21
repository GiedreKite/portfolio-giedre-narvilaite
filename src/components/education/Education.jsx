import React, { useContext } from 'react';
import { LanguageContext } from '../language/LanguageContext';

import Header from '../header/Header';
import style from './Education.module.css';
import Footer from '../footer/Footer';
import { ThemeContext } from '../themeContext/ThemeContext.jsx';
import '../../App.css'
import { Link } from 'react-router-dom';




const Education = () => {



  const { language, translations } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext); // Get the current theme




  return <>
    <Header />
    <main className={ `page ${theme}` }>
      <div className={ style.head }>
        <h1 className={ style.head }>{ translations[language].edu }</h1>

      </div>


      <div className={ style.timeline }>
        <div className={ style.timelineItem }>
          <div className={ style.timelineContent }>
            <div className={ style.timelineLeft }>
              <h4>"BIT" Baltijos technologijų institutas   </h4>
              <span className={ style.timelineDate }>2024-04 2024-09</span>
            </div>
            <div className={ style.timelineRight }>
              <p>{ translations[language].edu1 }
                <Link to="/portfolio-giedre-narvilaite/project" className={ style.link }>   { translations[language].projects }</Link>
              </p>
              <p> { translations[language].workskill3 } </p>
            </div>
            <span className={ style.timelineCircle }></span>
          </div>
        </div>
        <div className={ style.timelineItem }>
          <div className={ style.timelineContent }>
            <div className={ style.timelineLeft }>
              <h4>"LAJM" Lietuvos aukštoji jūreivystės mokykla</h4>
              <span className={ style.timelineDate }>2007-09 2010-07</span>
            </div>
            <div className={ style.timelineRight }>
              <p>{ translations[language].edu2 }</p>
              <p> { translations[language].workskill6 } </p>
            </div>
            <span className={ style.timelineCircle }></span>
          </div>
        </div>
        <div className={ style.timelineItem }>
          <div className={ style.timelineContent }>
            <div className={ style.timelineLeft }>
              <h4>"Ąžuolyno gimnazija"</h4>
              <span className={ style.timelineDate }>1999-09 2007-06</span>
            </div>
            <div className={ style.timelineRight }>
              <p>{ translations[language].edu3 }</p>
              <p> { translations[language].workskill7 } </p>
            </div>
            <span className={ style.timelineCircle }></span>
          </div>
        </div>
      </div>






    </main>
    <Footer />

  </>

}
export default Education;

