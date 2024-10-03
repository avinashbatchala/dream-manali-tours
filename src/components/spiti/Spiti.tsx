// src/components/spiti/Spiti.tsx
import React from 'react';
import './Spiti.css';

const Spiti: React.FC = () => {
  return (
      <div className="spiti">
        <h2>Spiti</h2>
        <p>
          Spiti Valley is a cold desert mountain valley located high in the Himalayas in the north-eastern part of the Indian state of Himachal Pradesh. It is known for its stunning landscapes, ancient monasteries, and unique culture.
        </p>
        <img src="https://example.com/spiti.jpg" alt="Spiti" className="spiti-image" />
      </div>
  );
};

export default Spiti;