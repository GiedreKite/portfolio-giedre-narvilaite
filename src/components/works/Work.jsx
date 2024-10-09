import React, { useContext } from 'react';
import { LanguageContext } from '../language/LanguageContext';


import Header from '../header/Header';
import style from './Work.module.css';
import Footer from '../footer/Footer';
import { ThemeContext } from '../themeContext/ThemeContext.jsx';
import '../../App.css'




import works from './works';


const Work = () => {


  const { theme } = useContext(ThemeContext); // Get the current theme

  const { language, translations } = useContext(LanguageContext);
  const t = translations[language];



  return <>
    <Header />
    <main className={ `page ${theme}` }>
      <div className={ style.head }>
        <h1 className={ style.head }>{ translations[language].work0 }</h1>

        <div className={ style.timeline }>
          <div className={ style.timelineItem }>
            <div className={ style.timelineContent }>
              <div className={ style.timelineLeft }>
                <h4>"VMG Corp"</h4>
                <p>{ translations[language].work1 }</p>
                <span className={ style.timelineDate }>2023-01 2024-01</span>
              </div>
              <div className={ style.timelineRight }>
                <p>{ translations[language].work2 }</p>
                <p>{ translations[language].workskill }</p>
              </div>
              <span className={ style.timelineCircle }></span>
            </div>
          </div>
          <div className={ style.timelineItem }>
            <div className={ style.timelineContent }>
              <div className={ style.timelineLeft }>
                <h4>"Vakarų apskaita"</h4>
                <p>{ translations[language].work1 }</p>
                <span className={ style.timelineDate }>2022-07 2022-12</span>
              </div>
              <div className={ style.timelineRight }>
                <p>{ translations[language].work3 }</p>
                <p>{ translations[language].workskill1 }</p>
              </div>
              <span className={ style.timelineCircle }></span>
            </div>
          </div>
          <div className={ style.timelineItem }>
            <div className={ style.timelineContent }>
              <div className={ style.timelineLeft }>
                <h4>"Savitos transportas"</h4>
                <p>{ translations[language].work4 }</p>
                <span className={ style.timelineDate }>2020-11 2022-07</span>
              </div>
              <div className={ style.timelineRight }>
                <p>{ translations[language].work5 }</p>
                <p>{ translations[language].workskill5 }</p>
              </div>
              <span className={ style.timelineCircle }></span>
            </div>
          </div>
          <div className={ style.timelineItem }>
            <div className={ style.timelineContent }>
              <div className={ style.timelineLeft }>
                <h4>"Santehkomplektas"</h4>
                <p>{ translations[language].work6 }</p>
                <span className={ style.timelineDate }>2017-01 2020-03</span>
              </div>
              <div className={ style.timelineRight }>
                <p>{ translations[language].work7 }</p>
                <p>{ translations[language].workskill2 }</p>
              </div>
              <span className={ style.timelineCircle }></span>
            </div>
          </div>

          <div className={ style.timelineItem }>
            <div className={ style.timelineContent }>
              <div className={ style.timelineLeft }>
                <h4>"Komskaita"</h4>
                <p>{ translations[language].work4 }</p>
                <span className={ style.timelineDate }>2013-09 2016-12</span>
              </div>
              <div className={ style.timelineRight }>
                <p>{ translations[language].work8 }</p>
                <p>{ translations[language].workskill4 }</p>
              </div>
              <span className={ style.timelineCircle }></span>
            </div>
          </div>

        </div>





      </div>

    </main>
    <Footer />

  </>

}
export default Work;

