import React from 'react';
import './ManaliLocal.css';

const places = [
  {
    name: 'Hadimba Temple',
    overview: 'Nestled amidst cedar forests, this unique wooden temple is dedicated to Goddess Hadimba.',
    architecture: 'Known for its pagoda-style roof and intricate wooden carvings, a true architectural marvel.',
    bestTime: 'Open year-round, but summer offers the most pleasant experience.',
    imageUrl: require('../../assets/manalilocal/hadimba-temple.jpg'),
  },
  {
    name: 'Vashisht Village',
    overview: 'Famous for natural hot springs and beautiful temples, just 3 km from Manali.',
    activities: 'Soak in the rejuvenating hot springs, visit the Vashisht Temple, and explore local cafes.',
    bestTime: 'Open year-round, but the hot springs are particularly enjoyable during winter.',
    imageUrl: require('../../assets/manalilocal/vashisht-village.jpg'),
  },
  {
    name: 'Old Manali',
    overview: 'A charming, laid-back area offering stunning mountain views, vibrant cafes, and local shops.',
    activities: 'Shop for local goods, enjoy live music, and try the local cuisine.',
    bestTime: 'Accessible year-round, but the summer months offer the best weather.',
    imageUrl: require('../../assets/manalilocal/old-manali.jpg'),
  },
  {
    name: 'Beas River',
    overview: 'Flowing through Manali, the Beas River offers both scenic beauty and thrilling adventure opportunities.',
    activities: 'River rafting, fishing, and relaxing riverside picnics.',
    bestTime: 'May to June for rafting, though it’s a lovely spot for relaxation year-round.',
    imageUrl: require('../../assets/manalilocal/beas-river.jpg'),
  },
  {
    name: 'Jogini Waterfall',
    overview: 'A scenic waterfall near Vashisht, accessible via a short and enjoyable trek.',
    activities: 'Perfect for trekking, photography, and enjoying nature’s beauty.',
    bestTime: 'March to October for favorable trekking conditions.',
    imageUrl: require('../../assets/manalilocal/jogini-falls.jpg'),
  }
];

const ManaliLocal: React.FC = () => {
  return (
      <section className="manali-local">
        <h2>Local Tours in Manali</h2>
        <div className="places-container">
          {places.map((place, index) => (
              <div key={index} className="place-card">
                <img src={place.imageUrl} alt={place.name} className="place-image" />
                <h3>{place.name}</h3>
                <p><strong>Overview:</strong> {place.overview}</p>
                {place.architecture && <p><strong>Architecture:</strong> {place.architecture}</p>}
                {place.activities && <p><strong>Activities:</strong> {place.activities}</p>}
                <p><strong>Best Time to Visit:</strong> {place.bestTime}</p>
              </div>
          ))}
        </div>
      </section>
  );
};

export default ManaliLocal;