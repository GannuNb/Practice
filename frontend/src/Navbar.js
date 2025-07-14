import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, [location]);

  const toggleMobileMenu = () => setShowMobileMenu((prev) => !prev);

  // Navigate to user profile page on clicking profile icon
  const goToProfile = () => {
    setShowMobileMenu(false);
    navigate("/userprofile");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="custom-navbar">
      <div className="nav-container">
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>

        <Link to="/" className="brand-link" onClick={() => setShowMobileMenu(false)}>
          <div className="brand-text">
            <span role="img" aria-label="rocket">
              🚀
            </span>{" "}
            Tourists
          </div>
        </Link>

        <div className={`nav-links-wrapper ${showMobileMenu ? "show" : ""}`}>
          <div className="nav-links">
            {["/", "/about", "/places", "/contact"].map((p, i) => (
              <Link
                key={p}
                to={p}
                className={`nav-item ${isActive(p) ? "active-link" : ""}`}
                onClick={() => setShowMobileMenu(false)}
              >
                {["Home", "About", "Places", "Contact"][i]}
              </Link>
            ))}

            {!isLoggedIn ? (
              <Link
                to="/login"
                className={`nav-item ${isActive("/login") ? "active-link" : ""}`}
                onClick={() => setShowMobileMenu(false)}
              >
                Login
              </Link>
            ) : (
              <div className="profile-icon" onClick={goToProfile} title="Go to Profile" style={{ cursor: "pointer" }}>
                👤
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
