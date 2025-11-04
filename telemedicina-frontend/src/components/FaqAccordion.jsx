// src/components/FaqAccordion.jsx (КАТАСЫ ОҢДОЛДУ)

import React, { useState } from 'react';
import './FaqAccordion.css';

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="faq-item">
      <div className="faq-question" onClick={onClick}>
        <span>{question}</span>
        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FaqAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion">
      {items.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default FaqAccordion;