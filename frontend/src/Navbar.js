import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);
  const toggleAboutDropdown = () => setShowAboutDropdown((prev) => !prev);
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="custom-navbar">
      <div className="nav-container">
        {/* Hamburger on left */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>

        {/* Logo on right */}
        <Link to="/" onClick={() => setShowMobileMenu(false)} className="brand-link">
          <div className="brand-text">
            <span role="img" aria-label="rocket">🚀</span> Tourists
          </div>
        </Link>

        {/* Nav links */}
        <div className={`nav-links-wrapper ${showMobileMenu ? "show" : ""}`}>
          <div className="nav-links">
            <Link to="/" className={`nav-item ${isActive("/") ? "active-link" : ""}`} onClick={() => setShowMobileMenu(false)}>Home</Link>
            <Link to="/About" className={`nav-item ${isActive("/") ? "active-link" : ""}`} onClick={() => setShowMobileMenu(false)}>About</Link>
            <Link to="/Places" className={`nav-item ${isActive("/") ? "active-link" : ""}`} onClick={() => setShowMobileMenu(false)}>Places</Link>
            <Link to="/contact" className={`nav-item ${isActive("/contact") ? "active-link" : ""}`} onClick={() => setShowMobileMenu(false)}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
