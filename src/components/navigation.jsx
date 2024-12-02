import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css';

// Navigation component
const Navigation = ({ user, onLogout }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
  
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
    const handleLogout = (e) => {
      e.preventDefault();
      onLogout();
      navigate.push('/');
    };
  
    return (
      <nav>
        <button className="nav-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/register">Register</Link></li>
          {!user ? (
            <li><Link to="/login">Login</Link></li>
          ) : (
            <li><a href="#" onClick={handleLogout}>Logout</a></li>
          )}
        </ul>
      </nav>
    );
  };
export default Navigation;