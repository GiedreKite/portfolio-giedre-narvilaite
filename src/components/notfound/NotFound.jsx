import React, { useContext } from 'react';
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { ThemeContext } from '../themeContext/ThemeContext.jsx';
import '../../App.css'



export function NotFound() {
    const { theme } = useContext(ThemeContext); // Get the current theme

    return (
        <>
            <Header />
            <main className={ `page ${theme}` }>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>404</h1>
                            <p>Page not found</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}