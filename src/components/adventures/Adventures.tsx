// src/components/Adventures/Adventures.tsx
import React from 'react';
import './Adventures.css';

const adventureActivities = [
  {
    name: 'Tube Sliding',
    overview: 'Experience the thrill of sliding down snow-covered slopes on a tube. It’s a fun-filled activity for all ages.',
    bestTime: 'Winter months (December to February) for the best snow experience.',
  },
  {
    name: 'Paragliding',
    overview: 'Soar high above the mountains and valleys of Manali, offering a bird’s-eye view of the breathtaking landscape.',
    bestTime: 'March to June and September to November for the most favorable weather conditions.',
  },
  {
    name: 'Hot Air Ballooning',
    overview: 'Enjoy a serene and majestic flight in a hot air balloon, witnessing panoramic views of the Himalayan ranges.',
    bestTime: 'All year round, but the calm weather in spring and autumn is perfect for smooth rides.',
  },
  {
    name: 'Rafting',
    overview: 'Navigate through the rapids of the Beas River for an adrenaline-pumping experience. Suitable for beginners and pros alike.',
    bestTime: 'May to June when the river is at its best for rafting.',
  },
  {
    name: 'Camping',
    overview: 'Spend a night under the stars in the lush valleys of Manali. Ideal for nature enthusiasts and adventure seekers.',
    bestTime: 'April to June and September to October for mild weather and clear skies.',
  },
];

const Adventures: React.FC = () => {
  return (
      <section className="adventures">
        <h2>Adventure Activities</h2>
        <div className="activities-container">
          {adventureActivities.map((activity, index) => (
              <div key={index} className="activity-card">
                <h3>{activity.name}</h3>
                <p><strong>Overview:</strong> {activity.overview}</p>
                <p><strong>Best Time to Visit:</strong> {activity.bestTime}</p>
              </div>
          ))}
        </div>
      </section>
  );
};

export default Adventures;
