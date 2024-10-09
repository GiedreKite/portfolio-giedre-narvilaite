import React, { useContext } from 'react';
import { LanguageContext } from '../language/LanguageContext';
import style from './Footer.module.css'
import { ThemeContext } from '../themeContext/ThemeContext.jsx';
import '../../App.css'


export default function Footer() {
    const { language, translations } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext); // Get the current theme


    const title = Math.random() > 0.5
        ? translations[language].footera
        : translations[language].footerb;

    return (

        <footer className={ style.footer }>
            <h6 className={ style.yellow }>&copy; 2024 Giedrė Narvilaitė</h6>
            <h6 className={ style.yellow }>{ title }</h6>
        </footer>

    );
}