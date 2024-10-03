import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
      <header className="header">
        <Link to="/">
          <img src={logo} alt="Dream Manali Tours Logo" className="logo" />
        </Link>
        <nav className="nav">
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
