// src/components/sissu/Sissu.tsx
import React from 'react';
import './Sissu.css';

const Sissu: React.FC = () => {
  return (
      <div className="sissu">
        <h2>Sissu</h2>
        <p>
          Sissu is a picturesque village located in the Lahaul Valley of Himachal Pradesh, India. It is known for its stunning landscapes, waterfalls, and serene environment. The village offers a perfect getaway for nature lovers and adventure enthusiasts.
        </p>
        <img src="https://example.com/sissu.jpg" alt="Sissu" className="sissu-image" />
      </div>
  );
};

export default Sissu;