// src/components/Consultation.jsx (ТОЛУК ЖАНА ОҢДОЛГОН ВЕРСИЯ)

import React, { useState, useEffect, useRef } from 'react'; // <-- НЕГИЗГИ ОҢДОО УШУЛ ЖЕРДЕ
import axios from 'axios';
import DoctorAppointmentCard from './DoctorAppointmentCard';
import './Consultation.css';

const Consultation = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8001/api/doctors/')
            .then(response => {
                setDoctors(response.data);
            })
            .catch(error => console.error("Дарыгерлерди жүктөөдө ката:", error))
            .finally(() => setLoading(false));
    }, []);

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 410, behavior: 'smooth' });
        }
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -410, behavior: 'smooth' });
        }
    };

    return (
        <section id="consultation" className="consultation-section-scrollable">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">ОНЛАЙН-КОНСУЛЬТАЦИЯ</h2>
                </div>
            </div>

            {loading ? (
                <p className="loading-text">Дарыгерлер жүктөлүүдө...</p>
            ) : (
                <div className="slider-wrapper">
                    <button onClick={scrollLeft} className="scroll-btn prev">&#8249;</button>
                    
                    <div className="scroll-container" ref={scrollContainerRef}>
                        <div className="cards-row">
                            {doctors.map(doctor => (
                                <DoctorAppointmentCard key={doctor.id} doctor={doctor} />
                            ))}
                        </div>
                    </div>

                    <button onClick={scrollRight} className="scroll-btn next">&#8250;</button>
                </div>
            )}
        </section>
    );
};

export default Consultation;