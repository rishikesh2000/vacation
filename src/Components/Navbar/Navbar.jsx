import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`navbarContainer ${scrolled ? 'navbarScrolled' : ''}`}>
      <div className="navbarLogo">
        <img src={require("../../Assests/bglogo.png")} alt="Tree House Logo" />
      </div>

      <div className="hamburgerIcon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`navbarLinks ${menuOpen ? 'showMenu' : ''}`}>
        <Link to="/" onClick={closeMenu}>HOME</Link>
        <Link to="/about" onClick={closeMenu}>ABOUT US</Link>
        <Link to="/membership" onClick={closeMenu}>MEMBERSHIP</Link>
        <div className="dropdown">
          <button className="dropbtn">CLIENT ▾</button>
          <div className="dropdown-content">
            <Link to="/travceldesk" onClick={closeMenu}>Travel Desk</Link>
            <Link to="/activities" onClick={closeMenu}>Activities</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">HOTELS & RESORTS ▾</button>
          <div className="dropdown-content">
            <Link to="/destinations/domestic" onClick={closeMenu}>India</Link>
            <Link to="/destinations/international" onClick={closeMenu}>International</Link>
          </div>
        </div>
        <Link to="/contact" onClick={closeMenu}>CONTACT US</Link>
        <Link to="/pay" className="loginBtn" onClick={closeMenu}>PAY NOW</Link>
      </div>
    </div>
  );
};

export default Navbar;
