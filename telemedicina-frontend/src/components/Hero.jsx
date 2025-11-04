// src/components/Hero.jsx (КАТАЛАРЫ ОҢДОЛГОН ТОЛУК ВЕРСИЯ)

import React, { useState } from 'react';
// Link эми негизги баскычка керек эмес, бирок келечекте керек болуп калышы мүмкүн
import { Link } from 'react-router-dom'; 
import './Hero.css';

// Өзүнчө файлдарда түзүлгөн компоненттерди импорт кылабыз
import FaqAccordion from './FaqAccordion';
import ContactInfo from './ContactInfo';

// Иконкалар үчүн Base64 коддору
const heartIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjZWMzNzRjIj48cGF0aCBkPSJNMTIgOS4yMjlsMS40NS0zLjA5TDIsMy4yMmw2LjA5IDYuMDlMMTIsOS4yMnpNMy4yMiAyTDYuMyAxLjQ1IDEyIDlsLTIuNzggMi4yOEwzLjIyIDJ6bTkuNTYgOS41NmwtMi4xNyAyLjE3TDE4LjggMjJsMi43OC0yLjc4TDEyLjc4IDExLjU2ek0xMS41NiAxMi43OEwyMSA0LjQzbC0yLjc4LTIuNzhMMTEuNTYgMTIuNzh6bTAgMGwzLjA5IDEuNDVMOSAxOHYtNi4wOWwyLjU2LTIuNTZ6bTAgMGwtMS40NSAzLjA5TDYgMTQuOTFWMjBsNi02LjA5TDExLjU2IDEyLjc4eiIvPjwvc3ZnPg==";
const arrowIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcgMS43MDd2MTEuMDQzbDIuNjQ2LTIuNjQ3YS43NS43NSAwIDAxMS4wNiAxLjA2bC00IDRhLjc1Ljc1IDAgMDEtMS4wNiAwcS0uMjkzLS4yOTMtLjUzLS41MzFsLTQgLTRhLjc1Ljc1IDAgMDExLjA2LTEuMDZMNyAxMi43NVYxLjcwN2E3LjUgMC0uMDA3IDAtLjAwNy0xLjV6Ii8+PC9zdmc+";

// Калкып чыкма терезе (модал) үчүн жардамчы компонент
const Modal = ({ title, onClose, children }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <h2>{title}</h2>
      <button onClick={onClose} className="modal-close-btn">&times;</button>
      {children}
    </div>
  </div>
);

// Көп берилүүчү суроолордун маалыматтары (орусча версиясы)
const faqItems = [
  {
    question: 'Как записаться на приём?',
    answer: 'Чтобы записаться на приём, нажмите на кнопку «Записаться на приём» на сайте, выберите удобное время и врача. Также вы можете записаться, позвонив по нашему контактному номеру.'
  },
  {
    question: 'Как проходит онлайн-консультация?',
    answer: 'Консультации проводятся как в онлайн, так и в офлайн формате. Онлайн-консультация проходит через видеозвонок — вы связываетесь со специалистом в заранее назначенное время и можете задать интересующие вас вопросы о здоровье. Офлайн-приём проводится в нашей клинике при личной встрече с врачом. Оба формата удобны, безопасны и полностью конфиденциальны. Для онлайн-формата достаточно компьютера или смартфона с интернетом, для офлайн — визита в клинику.'
  },
  {
    question: 'В каком режиме работает клиника?',
    answer: 'Наша клиника работает с понедельника по пятницу с 9:00 до 18:00. В субботу — с 9:00 до 14:00. В воскресенье — выходной день.'
  }
];


const Hero = () => {
  // Модалдык терезелердин "ачык" же "жабык" экенин көзөмөлдөйт
  const [isConsultationModalOpen, setConsultationModalOpen] = useState(false);
  const [isQuestionModalOpen, setQuestionModalOpen] = useState(false);

  // ===== 1. ЖОК ФУНКЦИЯНЫ КОШТУК =====
  // Бул функция "Онлайн-консультация" бөлүгүнө жылмакай жылдырат
  const handleScrollToConsultation = (event) => {
    event.preventDefault();
    const section = document.getElementById('consultation'); // Consultation.jsx ичиндеги ID
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section className="hero-section-new">
        <div className="container hero-container-new">
          
          {/* Сол тарап */}
          <div className="hero-left-new">
            <div className="hero-title-block">
              <h1>МЫ ЗАБОТИМСЯ <img src={heartIcon} alt="heart icon" /> О ВАШЕМ ЗДОРОВЬЕ</h1>
            </div>
            <p className="hero-description">
              Telemedicina — это современная частная клиника, расположенная в сердце Донецка. Мы предлагаем широкий спектр медицинских услуг, включая диагностику, лечение и профилактику заболеваний. Наша клиника оснащена новейшим оборудованием, что позволяет проводить точные исследования и обеспечивать высококачественное лечение.
            </p>
            <div className="hero-actions">
              
              {/* ===== 2. АШЫКЧА БАСКЫЧТЫ АЛЫП САЛДЫК ===== */}
              {/* Бир гана ылдый жылдыруучу баскычты калтырдык */}
              <a href="#consultation" className="action-card primary" onClick={handleScrollToConsultation}>
                <img src="/images/hero-btn-icon.png" alt="Записаться на прием" />
                <span>ЗАПИСАТЬСЯ НА ПРИЕМ</span>
                <div className="arrow-circle"><img src={arrowIcon} alt="arrow"/></div>
              </a>

              <div className="secondary-actions">
                <a href="#" className="action-card secondary" onClick={(e) => { e.preventDefault(); setConsultationModalOpen(true); }}>
                  <span>СПОСОБЫ СВЯЗИ С НАМИ</span>
                  <div className="arrow-circle"><img src={arrowIcon} alt="arrow"/></div>
                </a>
                <a href="#" className="action-card tertiary" onClick={(e) => { e.preventDefault(); setQuestionModalOpen(true); }}>
                  <span>ЗАДАТЬ ВОПРОС</span>
                  <div className="arrow-circle"><img src={arrowIcon} alt="arrow"/></div>
                </a>
              </div>
            </div>
          </div>

          {/* Оң тарап */}
          <div className="hero-right-new">
            <div className="hero-image-wrapper">
              <div className="slider-dots"><span></span><span></span><span></span></div>
              <img src="/images/doctors-team.png" alt="Команда врачей Telemedicina" className="doctors-team-photo" />
              <div className="specialists-info">
                <div className="specialist-avatars">
                  <img src="/images/doctor-1.png" alt="врач"/>
                  <img src="/images/doctor-2.png" alt="врач"/>
                  <img src="/images/doctor-3.png" alt="врач"/>
                  <button className="avatar-arrow">&gt;</button>
                </div>
                <p>В Telemedicina работают квалифицированные специалисты, которые стремятся предоставить каждому пациенту индивидуальный подход и заботу.</p>
              </div>
            </div>
          </div>
        
        </div>
      </section>
      
      {/* Модалдык терезелердин чакырылышы */}
      {isConsultationModalOpen && (
        <Modal title="СПОСОБЫ СВЯЗИ С НАМИ" onClose={() => setConsultationModalOpen(false)}>
          <ContactInfo />
        </Modal>
      )}

      {isQuestionModalOpen && (
        <Modal title="Часто задаваемые вопросы" onClose={() => setQuestionModalOpen(false)}>
          <FaqAccordion items={faqItems} />
        
        </Modal>
      )}
    </>
  );
};

export default Hero;