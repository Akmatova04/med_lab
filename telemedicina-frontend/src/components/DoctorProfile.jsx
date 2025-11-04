
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import "react-datepicker/dist/react-datepicker.css";
import './DoctorProfile.css';

registerLocale('ru', ru);

// Иконкалар
const CalendarIcon = () => <svg fill="#6c757d" viewBox="0 0 24 24" width="24" height="24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg>;
const WhatsAppIcon = () => <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.61 15.35 3.48 16.84L2 22L7.32 20.55C8.75 21.33 10.36 21.79 12.04 21.79C17.5 21.79 21.95 17.34 21.95 11.88C21.95 6.42 17.5 2 12.04 2M17.43 14.65C17.18 14.53 15.91 13.91 15.69 13.82C15.46 13.73 15.3 13.68 15.13 13.93C14.96 14.18 14.45 14.79 14.28 14.97C14.11 15.14 13.93 15.17 13.68 15.04C13.43 14.92 12.55 14.62 11.51 13.69C10.68 12.95 10.13 12.12 9.96 11.87C9.79 11.62 9.92 11.48 10.04 11.36C10.15 11.24 10.3 11.05 10.43 10.9C10.56 10.75 10.61 10.63 10.74 10.4C10.87 10.18 10.81 9.99 10.75 9.87C10.68 9.75 10.18 8.48 9.96 7.93C9.74 7.38 9.53 7.47 9.38 7.47C9.24 7.47 9.09 7.47 8.95 7.47C8.8 7.47 8.52 7.54 8.27 7.79C8.02 8.04 7.38 8.63 7.38 9.78C7.38 10.94 8.3 11.99 8.42 12.14C8.55 12.28 10.16 14.8 12.71 15.91C13.29 16.16 13.72 16.3 14.07 16.41C14.69 16.59 15.21 16.54 15.6 16.18C16.04 15.78 16.92 14.86 17.12 14.65Z" /></svg>;

const DoctorProfile = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        const apiUrl = `http://127.0.0.1:8001/api/doctors/${id}/`;
        axios.get(apiUrl)
            .then(response => setDoctor(response.data))
            .catch(error => console.error("Дарыгердин маалыматын алууда ката кетти:", error))
            .finally(() => setLoading(false));
    }, [id]);

    // Бааны .00 жок, бүтүн сан кылып форматтоочу функция
    const formatPrice = (price) => {
        const integerPrice = parseInt(price, 10);
        if (isNaN(integerPrice)) return '1200';
        return integerPrice;
    };

    const formatDate = (date) => date.toLocaleString("ru-RU", { day: 'numeric', month: 'long' });
    const handleWhatsAppBooking = () => { /* ... */ };
    const handleWhatsAppInquiry = () => { /* ... */ };

    const CustomCalendarInput = React.forwardRef(({ onClick }, ref) => (
        <button className="date-btn calendar-btn" onClick={onClick} ref={ref}>
            <CalendarIcon />
        </button>
    ));

    if (loading) return <div className="loading-container">Маалыматтар жүктөлүүдө...</div>;
    if (!doctor) return <div className="loading-container">Дарыгер табылган жок.</div>;

    return (
        <div className="profile-page-container">
            <Link to="/" className="back-to-home-link">← Артка кайтуу</Link>

            <div className="appointment-card">
                <div className="doctor-profile-header">
                    <img src={doctor.image} alt={doctor.name} className="profile-photo" />
                    <div className="profile-info">
                        <h2>{doctor.name}</h2>
                        <p>{doctor.specialty}</p>
                    </div>
                </div>

                <div className="booking-section">
                    <h3 className="booking-title">
                        Онлайн- <br/> консультация
                    </h3>
                    
                    <div className="booking-price">
                        <span className="price-value">{formatPrice(doctor.online_consultation_price)}</span>
                        <span className="price-currency">рубль</span>
                    </div>

                    <div className="date-selector">
                        <button
                            onClick={() => setSelectedDate(new Date())}
                            className={`date-btn ${new Date().toDateString() === selectedDate.toDateString() ? 'active-today' : ''}`}
                        >
                            Сегодня
                        </button>
                        <button className="date-btn selected-date">
                            {formatDate(selectedDate)}
                        </button>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            customInput={<CustomCalendarInput />}
                            locale="ru"
                            minDate={new Date()}
                        />
                    </div>
                    
                    <button className="whatsapp-btn" onClick={handleWhatsAppBooking}>
                        <WhatsAppIcon /> Записаться через WhatsApp
                    </button>
                </div>

                <div className="inquiry-section" onClick={handleWhatsAppInquiry}>
                    <span className="inquiry-text">Задать вопрос</span>
                    <div className="inquiry-doctor">
                        <img src={doctor.image} alt={doctor.name} />
                        <span>Врач</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;