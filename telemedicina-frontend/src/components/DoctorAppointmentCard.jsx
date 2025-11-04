// src/components/DoctorAppointmentCard.jsx (КАЛЕНДАРЬ МЕНЕН)

import React, { useState } from 'react';

// ===== ЖАҢЫ КИТЕПКАНАНЫ ИМПОРТ КЫЛАБЫЗ =====
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; // Китепкананын стилдери

import './DoctorAppointmentCard.css'; // Биздин өзүбүздүн стилдер

const DEFAULT_WHATSAPP_NUMBER = "996555000000"; 

// Иконкалар
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z"/></svg>;
const InfoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>;

const DoctorAppointmentCard = ({ doctor }) => {
    // ===== ТАНДАЛГАН ДАТАНЫ САКТОО ҮЧҮН STATE =====
    // Эми баштапкы мааниси кадимки Date объектиси болот
    const [selectedDate, setSelectedDate] = useState(new Date()); 
    const [selectedTime, setSelectedTime] = useState('06:00');

    if (!doctor) return null;
    
    // Тандалган датаны "30 октября" сыяктуу форматка келтирүүчү функция
    const formatDate = (date) => {
        return date.toLocaleDateString("ru-RU", { day: 'numeric', month: 'long' });
    };

    const handleWhatsAppBooking = () => {
        const targetNumber = doctor.whatsapp_number || DEFAULT_WHATSAPP_NUMBER;
        const message = `Здравствуйте! Хочу записаться на онлайн-консультацию.\n\n` +
                        `*Врач:* ${doctor.name}\n` +
                        `*Дата:* ${formatDate(selectedDate)}\n` + // Датаны кооз форматта жөнөтөбүз
                        `*Время:* ${selectedTime}`;
        
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${targetNumber}?text=${encodedMessage}`;
        window.open(url, '_blank');
    };
    
    const handleWhatsAppInquiry = () => {
        const targetNumber = doctor.whatsapp_number || DEFAULT_WHATSAPP_NUMBER;
        const message = `Здравствуйте! У меня есть вопрос к врачу (${doctor.name}).`;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${targetNumber}?text=${encodedMessage}`;
        window.open(url, '_blank');
    };

    return (
        <div className="appointment-card">
            <div className="doctor-profile-header">
                {/* ... (бул жер өзгөргөн жок) ... */}
                <img src={doctor.image || '/images/default-avatar.png'} alt={doctor.name} className="profile-photo" />
                <div className="profile-info">
                    <h2>{doctor.name || 'Аты-жөнү жок'}</h2>
                    <p>{doctor.specialty ? doctor.specialty.split(',')[0] : 'Адистиги жок'}</p>
                </div>
            </div>

            <div className="consultation-option">
                <div className="option-header">
                    <h3>Онлайн-консультация </h3>
                    <p className="price">{doctor.online_consultation_price || '0'} рубль</p>
                </div>
                <div className="time-slots">
                    <div className="date-picker">
                        {/* "Сегодня" баскычы */}
                        <button 
                            onClick={() => setSelectedDate(new Date())}
                            className={new Date().toDateString() === selectedDate.toDateString() ? 'date-btn active' : 'date-btn'}
                        >
                            Сегодня
                        </button>
                        {/* Тандалган датаны көрсөтүүчү баскыч */}
                        <button className="date-btn display-date">{formatDate(selectedDate)}</button>

                        {/* ===== КАЛЕНДАРДЫН ӨЗҮ УШУЛ ЖЕРДЕ ===== */}
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            // Календарды биздин иконка-баскычка байлайбыз
                            customInput={<button className="date-btn icon"><CalendarIcon /></button>}
                            dateFormat="dd MMMM"
                            minDate={new Date()} // Бүгүнкү күндөн мурункуну тандоого болбойт
                        />
                    </div>
                    {/* ... (убакыт тандоо өзгөргөн жок) ... */}
                   
                </div>
                <button className="whatsapp-btn" onClick={handleWhatsAppBooking}>
                    Записаться через WhatsApp
                </button>
            </div>
            {/* ... ("Просто спросить" бөлүгү өзгөргөн жок) ... */}
            <div className="consultation-option ask-option">
                <div className="option-header">
                    
                </div>
                <div className="ask-question-body">
                 
                    <div className="ask-action-wrapper">
                        <button className="ask-btn" onClick={handleWhatsAppInquiry}>Задать вопрос</button>
                        <div className="ask-doctor-info">
                            <img src={doctor.image || '/images/default-avatar.png'} alt={doctor.name} />
                            <span>Врач</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorAppointmentCard;