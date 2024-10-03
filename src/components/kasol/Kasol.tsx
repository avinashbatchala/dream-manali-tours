import React from 'react';
import './Kasol.css';

const Kasol: React.FC = () => {
  return (
      <div className="kasol">
        <h2>Kasol</h2>
        <p>
          Kasol is a small village in Himachal Pradesh, India, known for its scenic beauty and
          vibrant culture. It is a popular destination for backpackers and trekkers.
        </p>
        <img src="https://example.com/kasol.jpg" alt="Kasol" className="kasol-image"/>
      </div>
  );
};

export default Kasol;