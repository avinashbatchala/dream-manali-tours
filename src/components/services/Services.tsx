import React from 'react';
import {useNavigate} from 'react-router-dom';
import './Services.css';

const services = [
  {
    title: 'Local Sightseeing',
    description: 'Explore Manali’s best spots.',
    imageUrl: require('../../assets/manalilocal/jogini-falls.jpg')
  },
  {
    title: 'Rohtang Pass',
    description: 'Experience the stunning beauty of Rohtang Pass.',
    imageUrl: require('../../assets/manalilocal/jogini-falls.jpg')
  },
  {
    title: 'Solang Valley',
    description: 'Enjoy adventure sports and scenic views.',
    imageUrl: require('../../assets/manalilocal/jogini-falls.jpg')
  },
  {
    title: 'Adventure Tours',
    description: 'Rafting, trekking, and more.',
    imageUrl: require('../../assets/manalilocal/jogini-falls.jpg')
  },
  {
    title: 'Sissu',
    description: 'A picturesque village in Lahaul Valley.',
    imageUrl: require('../../assets/manalilocal/jogini-falls.jpg')
  },
  {
    title: 'Kasol',
    description: 'A popular destination for backpackers.',
    imageUrl: require('../../assets/manalilocal/jogini-falls.jpg')
  },
  {
    title: 'Spiti',
    description: 'A cold desert mountain valley.',
    imageUrl: require('../../assets/manalilocal/jogini-falls.jpg')
  },
];

const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceTitle: string) => {
    if (serviceTitle === 'Local Sightseeing') {
      navigate('/manalilocal');
    } else if (serviceTitle === 'Adventure Tours') {
      navigate('/adventures');
    } else if (serviceTitle === 'Solang Valley') {
      navigate('/solang');
    } else if (serviceTitle === 'Rohtang Pass') {
      navigate('/rohtang');
    } else if (serviceTitle === 'Sissu') {
      navigate('/sissu');
    } else if (serviceTitle === 'Kasol') {
      navigate('/kasol');
    } else if (serviceTitle === 'Spiti') {
      navigate('/spiti');
    }
  };

  return (
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="services-container">
          {services.map((service, index) => (
              <div key={index} className="service-card"
                   onClick={() => handleServiceClick(service.title)}>
                <img src={service.imageUrl} alt={service.title} className="service-image"/>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
          ))}
        </div>
      </section>
  );
};

export default Services;