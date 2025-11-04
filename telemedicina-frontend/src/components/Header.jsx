// src/components/Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';

// Иконкалар (меню үчүн гана)
const MenuIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const CloseIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>;

// Менюнун ичиндеги иконкалар
const ClinicIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>;
const DoctorsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const ConsultationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isMenuOpen]);

    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="nav">
                        <a href="/" className="logo">Telemedicina</a>
                        
                        {/* Бургер баскычы гана калды */}
                        <button className="menu-toggle" onClick={toggleMenu} aria-label="Меню">
                            <MenuIcon />
                        </button>
                    </nav>
                </div>
            </header>

            {/* Жылмыш чыгуучу мобилдик меню (өзгөрүүсүз) */}
            <div className={`mobile-menu-container ${isMenuOpen ? 'open' : ''}`}>
                <div className="overlay" onClick={toggleMenu}></div>
                <div className="mobile-menu-panel">
                    <div className="panel-header">
                        <a href="/" className="logo">Telemedicina</a>
                        <button onClick={toggleMenu} className="close-btn" aria-label="Жабуу">
                            <CloseIcon />
                        </button>
                    </div>
                    <div className="panel-body">
                        <a href="#about" onClick={toggleMenu}><ClinicIcon /> О клинике</a>
                        <a href="#doctors" onClick={toggleMenu}><DoctorsIcon /> Врачи</a>
                        <a href="#consultation" onClick={toggleMenu}><ConsultationIcon /> Консультация</a>
                    </div>
                    <div className="panel-footer">
                        <button className="btn btn-secondary">Вход</button>
                        <button className="btn btn-primary">Регистрация</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;