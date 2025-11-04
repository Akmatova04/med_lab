import React, { useState, useEffect, useRef } from 'react'; // 1. useRef кошулду
import axios from 'axios';
import './Doctors.css';

// === Иконкалар үчүн SVG компоненттери ===
const ExperienceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>;
const EducationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>;
const SpecialityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2.7 13.84 6.94 6.94c.39.39 1.02.39 1.41 0l11.32-11.31c.39-.39.39-1.02 0-1.41l-6.94-6.94c-.39-.39-1.02-.39-1.41 0L2.7 12.42c-.39.39-.39 1.02 0 1.42z"/><path d="m7.35 18.25-4.24-4.24"/></svg>;
const HospitalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 16V4H6v12H2v6h20v-6h-4zM10 10h4m-2-2v4"/></svg>;


// === Негизги компонент ===
const Doctors = () => {
  // --- State жана Ref ---
  const [doctorsList, setDoctorsList] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // 2. Сыдырма үчүн Ref жарыяланды
  const scrollContainerRef = useRef(null);

  // --- useEffect (Серверден маалымат алуу) ---
  useEffect(() => {
    axios.get('http://127.0.0.1:8001/api/doctors/')
      .then(response => {
        setDoctorsList(response.data);
      })
      .catch(error => {
        console.error("Дарыгерлерди жүктөөдө ката:", error);
        setError("Маалыматты жүктөө мүмкүн болбоду. Сервер менен байланышты текшериңиз.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // --- Функциялар ---
   const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  // 3. Кайталанган функциялар алынып салынды, бирден гана калтырылды
  const openDoctorModal = (doctorId) => {
    axios.get(`http://127.0.0.1:8001/api/doctors/${doctorId}/`)
      .then(response => {
        setSelectedDoctor(response.data);
      })
      .catch(error => {
        console.error("Дарыгердин толук маалыматын алууда ката:", error);
        alert("Дарыгердин маалыматын жүктөөдө ката кетти.");
      });
  };

  const closeModal = () => {
    setSelectedDoctor(null);
  };

  // --- JSX (Компоненттин көрүнүшү) ---
  return (
    <>
      <section id="doctors" className="doctors-section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">НАШИ ВРАЧИ</h1>
            <p className="section-subtitle">В Telemedicina работают квалифицированные специалисты...</p>
          </div>
        </div>

        {isLoading && <p className="loading-message">Жүктөлүүдө...</p>}
        {error && <p className="error-message">{error}</p>}
        
        {/* 4. Сыдырма үчүн туура JSX структурасы кошулду */}
        {!isLoading && !error && (
          <div className="doctors-slider-wrapper">
            <button onClick={scrollLeft} className="scroll-btn prev">&#8249;</button>
            <div className="doctors-scroll-container" ref={scrollContainerRef}>
              <div className="doctors-row">
                {doctorsList.map(doctor => (
                  <article
                    key={doctor.id}
                    className="doctor-card"
                    onClick={() => openDoctorModal(doctor.id)}
                    tabIndex="0"
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openDoctorModal(doctor.id)}
                  >
                    <img src={doctor.image} alt={`${doctor.name}, ${doctor.specialty.split(',')[0]}`} className="doctor-photo" />
                    <div className="doctor-info">
                      <h3 className="doctor-name">{doctor.name}</h3>
                      <p className="doctor-specialty">{doctor.specialty.split(',')[0]}</p>
                    </div>
                    <button className="btn-appointment">Подробнее</button>
                  </article>
                ))}
              </div>
            </div>
            <button onClick={scrollRight} className="scroll-btn next">&#8250;</button>
          </div>
        )}
      </section>

      {/* --- Модалдык терезе (өзгөрүүсүз калды) --- */}
      {selectedDoctor && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>&times;</button>
            <div className="modal-left-panel">
              <img src={selectedDoctor.image} alt={selectedDoctor.name} className="modal-doctor-photo" />
              <h2>{selectedDoctor.name}</h2>
              <p className="specialty">{selectedDoctor.specialty}</p>
            </div>
            <div className="modal-right-panel">
              <div className="modal-section">
                <h3>Профессиональная информация</h3>
                {selectedDoctor.bio && typeof selectedDoctor.bio === 'object' ? (
                  <table className="bio-table">
                    <tbody>
                      {selectedDoctor.bio.тажрыйба && <tr><td><ExperienceIcon /></td><td>Стаж:</td><td>{selectedDoctor.bio.тажрыйба}</td></tr>}
                      {selectedDoctor.bio.билим && <tr><td><EducationIcon /></td><td>Образование:</td><td>{selectedDoctor.bio.билим}</td></tr>}
                      {selectedDoctor.bio.адистик && <tr><td><SpecialityIcon /></td><td>Специализация:</td><td>{selectedDoctor.bio.адистик}</td></tr>}
                      {selectedDoctor.bio.иштеген_жерлер && Array.isArray(selectedDoctor.bio.иштеген_жерлер) && (
                        <tr className="work-places-row">
                          <td><HospitalIcon /></td>
                          <td>Места работы:</td>
                          <td><ul>{selectedDoctor.bio.иштеген_жерлер.map((place, i) => <li key={i}>{place}</li>)}</ul></td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                ) : <p>{selectedDoctor.bio || "Биография толтурулган эмес."}</p>}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Doctors;