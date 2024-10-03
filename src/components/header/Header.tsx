import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <header className="header">
        <Link to="/">
          <img src={logo} alt="Dream Manali Tours Logo" className="logo" />
        </Link>
        <button className="menu-button" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;