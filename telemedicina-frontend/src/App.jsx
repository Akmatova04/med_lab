// src/App.jsx (ИМПОРТТОР ОҢДОЛДУ)

import { Routes, Route } from 'react-router-dom';
import './App.css';

// ===== НЕГИЗГИ ОҢДОО УШУЛ ЖЕРДЕ: БАРДЫК КОМПОНЕНТТЕРДИ ИМПОРТ КЫЛАБЫЗ =====
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Doctors from './components/Doctors.jsx';
import Consultation from './components/Consultation.jsx';
import Services from './components/Services.jsx';
import DoctorProfile from './components/DoctorProfile.jsx';

const HomePage = () => (
  <>
    <Hero />
    <Doctors />
    <Consultation />
    <Services />
  </>
);

function App() {
  return (
    <div className="App">
      {/* Эми компьютер "Header" деген эмне экенин билет */}
      <Header /> 
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctors/:id" element={<DoctorProfile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;