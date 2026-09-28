import React, { useState } from 'react';
import { FiGlobe, FiChevronDown, FiExternalLink, FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* LEFT: Logo */}
        <div className="header-left">
          <a href="#" className="logo-link">
            <div className="logo-box">
              <span className="logo-cgxp">cGxP</span>
              <span className="logo-jobs">.Jobs</span>
            </div>
          </a>
        </div>

        {/* CENTER: Nav Menu */}
        <nav className={`header-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#find-jobs" className="nav-item active">Find Jobs</a>
          <div className="nav-dropdown">
            <span className="nav-item">
              Categories <FiChevronDown className="dropdown-arrow" />
            </span>
          </div>
          <div className="nav-dropdown">
            <span className="nav-item">
              For Employers <FiChevronDown className="dropdown-arrow" />
            </span>
          </div>
          <a href="#about" className="nav-item">About</a>
        </nav>

        {/* RIGHT: Country Selector & Actions */}
        <div className="header-right">
          {/* Country Selector */}
          <div className="country-selector">
            <FiGlobe className="globe-icon" />
            <span className="country-text">India (IN)</span>
            <FiChevronDown className="dropdown-arrow" />
          </div>

          {/* Direct Product Links */}
          <a href="#directory" className="product-btn">
            cGxP Directory <FiExternalLink className="ext-icon" />
          </a>
          <a href="#wire" className="product-btn">
            cGxP Wire <FiExternalLink className="ext-icon" />
          </a>

          {/* Auth Buttons */}
          <div className="auth-buttons">
            <button className="btn-login">Log in</button>
            <button className="btn-signup">Sign up</button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
