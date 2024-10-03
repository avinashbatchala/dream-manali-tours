// src/components/FloatingCallButton/FloatingCallButton.tsx
import React from 'react';
import './FloatingCallButton.css';
import { FaPhone, FaWhatsapp } from 'react-icons/fa'; // Import phone and WhatsApp icons

const FloatingCallButton: React.FC = () => {
  return (
      <div className="floating-buttons">
        {/* Call Button */}
        <a href="tel:+917018698271" className="floating-button call-button" aria-label="Call Us">
          <FaPhone />
        </a>

        {/* WhatsApp Button */}
        <a href="https://wa.me/7018698271" target="_blank" rel="noopener noreferrer" className="floating-button whatsapp-button" aria-label="WhatsApp Us">
          <FaWhatsapp />
        </a>
      </div>
  );
};

export default FloatingCallButton;
