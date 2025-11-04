import React from 'react';
import './Footer.css';

// Иконкалар үчүн SVG компоненттер
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.02.74-.25 1.02l-2.2 2.2z"/></svg>;
const EmailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>;

// Социалдык тармактардын жаңы иконкалары
const WhatsappIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.89-9.889-9.89-5.452 0-9.887 4.434-9.889 9.89.001 2.23 1.056 4.41 2.824 5.962l-1.693 6.159 6.345-1.956z"/></svg>;
const TelegramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 2L2 8.66l6.21 2.49L16.66 6 9.3 12.33l.01.01L9.3 12.34l-1 6.17 3.39-3.23L16.33 18 22 2z"/></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8a3.6 3.6 0 003.6 3.6h8.8a3.6 3.6 0 003.6-3.6V7.6a3.6 3.6 0 00-3.6-3.6H7.6zM12 8a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zm4.2-2.8a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z"/></svg>;

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column about">
            <a href="/" className="footer-logo">Telemedicina</a>
            <p className="footer-text">Современная клиника, предоставляющая качественные медицинские услуги для всей семьи.</p>
          </div>
          <div className="footer-column links">
            <h3 className="footer-title">Страницы</h3>
            <ul className="footer-list">
              <li><a href="#about">О клинике</a></li>
              <li><a href="#doctors">Врачи</a></li>
              <li><a href="#services">Услуги</a></li>
              <li><a href="#consultation">Консультация</a></li>
            </ul>
          </div>
          <div className="footer-column contact">
            <h3 className="footer-title">Контакты</h3>
            <ul className="footer-list contact-list">
              <li>
                <a href="https://www.google.com/maps/search/?api=1&query=Донецк,Университетская,25" target="_blank" rel="noopener noreferrer" className="address-link">
                  <LocationIcon /> <span>г. Донецк, ул. Университетская, 25</span>
                </a>
              </li>
              <li><PhoneIcon /> <span>+996 (555) 123-456</span></li>
              <li><EmailIcon /> <span>info@telemedicina.kg</span></li>
            </ul>
          </div>
          <div className="footer-column social-media">
            <h3 className="footer-title">Социальные сети</h3>
            <div className="social-icons">
              <a href="https://wa.me/996555123456" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <WhatsappIcon />
              </a>
              <a href="https://t.me/your_username" target="_blank" rel="noopener noreferrer" title="Telegram">
                <TelegramIcon />
              </a>
              <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer" title="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Telemedicina. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
