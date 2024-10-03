// src/components/Hero/Hero.tsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import './Hero.css';
import image1 from '../../assets/hero-1.jpg'; // Add your images here
import image2 from '../../assets/hero-2.jpg';
import image3 from '../../assets/hero-3.jpg';

const Hero: React.FC = () => {
  return (
      <section className="hero">
        <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3000}
            dynamicHeight
        >
          <div>
            <img src={image1} alt="Scenic view 1" />
            <p className="legend">Explore the Beauty of Manali</p>
          </div>
          <div>
            <img src={image2} alt="Scenic view 2" />
            <p className="legend">Adventure Awaits</p>
          </div>
          <div>
            <img src={image3} alt="Scenic view 3" />
            <p className="legend">Your Dream Destination</p>
          </div>
        </Carousel>
      </section>
  );
};

export default Hero;
