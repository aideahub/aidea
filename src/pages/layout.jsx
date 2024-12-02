import React, { useState } from 'react';
import '../styles.css';


import Header from '../components/header';
import Navigation from '../components/navigation';
import Footer from '../components/footer';


const Layout = ({ children, user, onLogout, darkMode, toggleDarkMode }) => {
    return (
        <div id="app" className={darkMode ? 'dark-mode' : ''}>
            <Header />
            <Navigation user={user} onLogout={onLogout} />
            <body>
                <main>{children}</main>
            </body>
            <Footer />
            <button id="mode-toggle" onClick={toggleDarkMode}>
                <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
            </button>
        </div>
    );
};

export default Layout;