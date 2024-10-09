import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../language/LanguageContext';
import logo from './img/logo.png';
import logoL from './img/logoL.png';
import { Link } from 'react-router-dom'
import style from './Header.module.css'
import LanguageSwitcher from '../language/LanguageSwitcher';
import { ThemeContext } from '../themeContext/ThemeContext';
import ButtonG from '../animated/ButtonG';
import ButtonY from '../animated/ButtonY';
import ButtonD from '../animated/ButtonD';
import ButtonL from '../animated/ButtonL';



export default function Header() {
  const { language, translations } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

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

  return (
    <header className={ `header ${theme}` }>
      <div >
        { !isMobile && (<img className={ style.img } src={ theme === 'light' ? logoL : logo } alt="logo" />) }

      </div>

      <Link to="/portfolioEng/" className={ style.link }>{ translations[language].home }</Link>

      <Link to="/portfolioEng/contact" className={ style.link }>{ translations[language].contact }</Link>

      <Link to="/portfolioEng/about" className={ style.link }>{ translations[language].about }</Link>

      <Link to="/portfolioEng/project" className={ style.link }>{ translations[language].projects }</Link>

      <Link to="/portfolioEng/education" className={ style.link }>{ translations[language].education }</Link>

      <Link to="/portfolioEng/work" className={ style.link }>{ translations[language].workplaces }</Link>


      {/* Buttons to toggle theme */ }
      <ButtonD onClick={ () => toggleTheme("dark") } text={ translations[language].dark } />
      <ButtonL onClick={ () => toggleTheme("light") } text={ translations[language].light } />

      <LanguageSwitcher />

    </header>
  );
}