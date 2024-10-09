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

            <Route path='/' element={ <MainPage /> }></Route>
            <Route path='/contact' element={ <Contact /> }></Route>
            <Route path='/about' element={ <About /> }></Route>
            <Route path='/project' element={ <Project /> }></Route>
            <Route path='/education' element={ <Education /> }></Route>
            <Route path='/work' element={ <Work /> }></Route>


          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>

  );
}