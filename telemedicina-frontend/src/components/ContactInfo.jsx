// src/components/ContactInfo.jsx (ТОЛУК ЖАНА ОҢДОЛГОН ВЕРСЯ)

import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  // WhatsApp номерин тазалап, эл аралык форматка келтиребиз
  const whatsappNumber = "79939647874"; // +, -, боштуктарды алып салабыз
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="contact-info-container">
      <p className="contact-intro">
        Способы связи с нами:
      </p>
      
      {/* ======================= НЕГИЗГИ ОҢДОО УШУЛ ЖЕРДЕ ======================= */}
      <div className="contact-item">
        {/* Колдонуучуга түшүнүктүү болуш үчүн "ТЕЛЕФОН" дегенди "WHATSAPP" деп өзгөрттүк */}
        <span className="contact-label">WHATSAPP:</span>
        
        {/* href атрибуту эми WhatsApp'ка багыттайт */}
        <a 
          href={whatsappLink} 
          className="contact-value" 
          target="_blank" // Шилтемени жаңы терезеде ачуу үчүн
          rel="noopener noreferrer" // Коопсуздук үчүн
        >
          +7 993 964-78-74
        </a>
      </div>
      {/* ============================================================================== */}
      
      <div className="contact-item">
        <span className="contact-label">EMAIL:</span>
        <a href="mailto:info@telemedicina.kg" className="contact-value">info@telemedicina.kg</a>
      </div>
      
      <div className="contact-item">
        <span className="contact-label">АДРЕС:</span>
        <span className="contact-value">Донецк шаары, Университет көчөсү, 25</span>
      </div>

      <div className="contact-item">
        <span className="contact-label">РЕЖИМ РАБОТЫ:</span>
        <span className="contact-value">ПН–ПТ: 9:00 – 18:00</span>
      </div>
    </div>
  );
};

export default ContactInfo;