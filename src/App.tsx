import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import FloatingCallButton from "./components/floatingcallusbutton/FloatingCallButton";
import Description from "./components/description/Description";
import ManaliLocal from './components/manalilocal/ManaliLocal';
import Rohtang from "./components/rohtang/Rohtang";
import Adventures from "./components/adventures/Adventures";
import Solang from "./components/solang/Solang";

const App: React.FC = () => {
  return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<>
              <Description />
              <Hero />
              <Services />
              <About />
            </>} />
            <Route path="/manalilocal" element={<ManaliLocal />} />
            <Route path="/rohtang" element={<Rohtang />} />
            <Route path="/adventures" element={<Adventures />} />
            <Route path= "/solang" element={<Solang />} />
          </Routes>
          <Footer />
          <FloatingCallButton />
        </div>
      </Router>
  );
};

export default App;