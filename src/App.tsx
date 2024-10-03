import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import FloatingCallButton from "./components/floatingcallbutton/FloatingCallButton";
import Description from "./components/description/Description";
import ManaliLocal from './components/manalilocal/ManaliLocal';
import Rohtang from "./components/rohtang/Rohtang";
import Adventures from "./components/adventures/Adventures";
import Solang from "./components/solang/Solang";
import Sissu from "./components/sissu/Sissu";
import Kasol from "./components/kasol/Kasol";
import Spiti from "./components/spiti/Spiti";

const App: React.FC = () => {
  return (
      <Router>
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/" element={<>
              {/*<Description/>*/}
              <Hero/>
              <Services/>
              <About/>
            </>}/>
            <Route path="/dream-manali-tours" element={<Navigate to="/"/>}/>
            <Route path="/manalilocal" element={<ManaliLocal/>}/>
            <Route path="/rohtang" element={<Rohtang/>}/>
            <Route path="/adventures" element={<Adventures/>}/>
            <Route path="/solang" element={<Solang/>}/>
            <Route path="/sissu" element={<Sissu/>}/>
            <Route path="/kasol" element={<Kasol/>}/>
            <Route path="/spit" element={<Spiti/>}/>
          </Routes>
          <Footer/>
          <FloatingCallButton/>
        </div>
      </Router>
  );
};

export default App;