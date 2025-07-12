import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Store user info if any, and token presence for login state
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    setIsLoggedIn(!!token); // true if token exists

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, [location]); // update on route change, e.g. login/logout

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setIsLoggedIn(false);
    navigate("/login");
    setShowMobileMenu(false);
  };

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

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
            <Link
              to="/"
              className={`nav-item ${isActive("/") ? "active-link" : ""}`}
              onClick={() => setShowMobileMenu(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-item ${isActive("/about") ? "active-link" : ""}`}
              onClick={() => setShowMobileMenu(false)}
            >
              About
            </Link>
            <Link
              to="/places"
              className={`nav-item ${isActive("/places") ? "active-link" : ""}`}
              onClick={() => setShowMobileMenu(false)}
            >
              Places
            </Link>
            <Link
              to="/contact"
              className={`nav-item ${isActive("/contact") ? "active-link" : ""}`}
              onClick={() => setShowMobileMenu(false)}
            >
              Contact
            </Link>

            {/* Auth Links */}
            {!isLoggedIn ? (
              <Link
                to="/login"
                className={`nav-item ${isActive("/login") ? "active-link" : ""}`}
                onClick={() => setShowMobileMenu(false)}
              >
                Login
              </Link>
            ) : (
              <>
                <span className="nav-item username">Hi, {user?.name  || "User"}</span>
                <button className="nav-item logout-btn" onClick={logout}>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
