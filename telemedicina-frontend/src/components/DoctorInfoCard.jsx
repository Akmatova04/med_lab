// src/components/DoctorInfoCard.jsx (ЖАҢЫ ФАЙЛ)

import React from 'react';
import './DoctorInfoCard.css'; // Бул файлды кийинки кадамда түзөбүз

const DoctorInfoCard = ({ doctor }) => {
    if (!doctor) return null;

    return (
        <div className="doctor-info-card">
            <div className="doctor-info-photo-wrapper">
                <img 
                    src={doctor.image || '/images/default-avatar.png'} 
                    alt={doctor.name} 
                    className="doctor-info-photo"
                />
            </div>
            <h3 className="doctor-info-name">{doctor.name || 'Аты-жөнү жок'}</h3>
            <p className="doctor-info-specialty">{doctor.specialty ? doctor.specialty.split(',')[0] : 'Адистиги жок'}</p>
            <button className="details-btn">Подробнее</button>
        </div>
    );
};

export default DoctorInfoCard;