import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/language/LanguageContext';
import { ThemeProvider } from './components/themeContext/ThemeContext';
import MainPage from './components/mainPage/MainPage';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Project from './components/projects/Project';
import Education from './components/education/Education';
import Work from './components/works/Work';


// import style from './App.css'

export default function App() {
  return (

    <LanguageProvider>
      <ThemeProvider>

        <BrowserRouter>
          <Routes>

            <Route path='/portfolio-giedre-narvilaite/' element={ <MainPage /> }></Route>
            <Route path='/portfolio-giedre-narvilaite/contact' element={ <Contact /> }></Route>
            <Route path='/portfolio-giedre-narvilaite/about' element={ <About /> }></Route>
            <Route path='/portfolio-giedre-narvilaite/project' element={ <Project /> }></Route>
            <Route path='/portfolio-giedre-narvilaite/education' element={ <Education /> }></Route>
            <Route path='/portfolio-giedre-narvilaite/work' element={ <Work /> }></Route>


          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>

  );
}