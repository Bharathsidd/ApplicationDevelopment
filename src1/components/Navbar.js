import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
      <Link to="/" className="logo">SPRINT</Link>
      <div className="nav-links">
        <Link to="/signin" className="nav-link">Sign In</Link>
        <Link to="/register" className="nav-link">Register</Link>
        <Link to="/customize" className="nav-link">Customize</Link> {/* Correct link here */}
        <div className="nav-link products">
          <span>Products</span>
          <div className="dropdown-menu">
            <Link to="/products/shoes" className="dropdown-item">Shoes</Link>
            <Link to="/products/jerseys" className="dropdown-item">Jerseys</Link>
            <Link to="/products/tracksuits" className="dropdown-item">Tracksuits</Link>
            <Link to="/products/hoodies" className="dropdown-item">Hoodies</Link>
          </div>
        </div>
        <Link to="/cart" className="nav-link cart-link">
          Cart
        </Link>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span className="hamburger-icon">&#9776;</span>
      </div>
    </nav>
  );
};

export default Navbar;
