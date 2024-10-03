import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const services = [
  { title: 'Local Sightseeing', description: 'Explore Manali’s best spots.' },
  { title: 'Rohtang Pass', description: 'Experience the stunning beauty of Rohtang Pass.' },
  {title: 'Solang Valley', description: 'Enjoy adventure sports and scenic views.'},
  { title: 'Adventure Tours', description: 'Rafting, trekking, and more.' },
];

const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceTitle: string) => {
    if (serviceTitle === 'Local Sightseeing') {
      navigate('/manalilocal'); // Ensure this path matches the route in App.tsx
    } else if (serviceTitle === 'Adventure Tours') {
      navigate('/adventures');
    } else if (serviceTitle === 'Solang Valley') {
      navigate('/solang');
    }
    else if (serviceTitle === 'Rohtang Pass') {
      navigate('/rohtang');
    }
  };

  return (
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="services-container">
          {services.map((service, index) => (
              <div key={index} className="service-card" onClick={() => handleServiceClick(service.title)}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
          ))}
        </div>
      </section>
  );
};

export default Services;