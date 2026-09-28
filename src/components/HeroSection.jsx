import React from 'react';
import { FiCheckCircle, FiShield, FiUsers, FiGlobe, FiHeart, FiClock, FiPlus, FiAward } from 'react-icons/fi';
import SearchBar from './SearchBar';
import HeroIllustration from './HeroIllustration';
import { POPULAR_SEARCHES } from '../data/mockData';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* COLUMN 1: LEFT CONTENT */}
        <div className="hero-col-left">
          {/* Badge */}
          <div className="hero-badge">
            <span className="green-bullet">●</span>
            <span className="badge-text">The specialist board for GMP, GLP and GCP careers</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            Pharma, biotech and life<br />
            sciences jobs
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Quality Assurance, Regulatory Affairs, Clinical Research, Validation and<br />
            Manufacturing roles from verified cGxP employers — searchable in one place.
          </p>

          {/* Search Bar */}
          <div className="hero-search-wrapper">
            <SearchBar />
          </div>

          {/* Trust Indicators (Single Horizontal Line) */}
          <div className="hero-indicators">
            <div className="indicator-item">
              <FiAward className="indicator-icon" />
              <span><strong>16 live</strong> roles</span>
            </div>
            <div className="indicator-item">
              <FiCheckCircle className="indicator-icon" />
              <span><strong>Verified</strong> employers</span>
            </div>
            <div className="indicator-item">
              <FiClock className="indicator-icon" />
              <span>Updated hourly</span>
            </div>
            <div className="indicator-item">
              <FiPlus className="indicator-icon" />
              <span>Free for job seekers</span>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="popular-searches-wrapper">
            <span className="popular-label">POPULAR SEARCHES</span>
            <div className="popular-pills">
              {POPULAR_SEARCHES.map((term, index) => (
                <button key={index} className="popular-pill">
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* COLUMN 2: CENTER DIAGRAM */}
        <div className="hero-col-center">
          <HeroIllustration />
        </div>

        {/* COLUMN 3: RIGHT SLOGAN & FEATURES */}
        <div className="hero-col-right">
          <div className="vertical-slogan">
            Connecting<br />
            talent with<br />
            opportunities<br />
            in life sciences<br />
            today and<br />
            tomorrow.
          </div>

          <div className="slogan-divider"></div>

          <div className="side-features">
            <div className="side-feature-item">
              <FiShield className="side-icon" />
              <span>Verified opportunities</span>
            </div>
            <div className="side-feature-item">
              <FiUsers className="side-icon" />
              <span>Trusted employers</span>
            </div>
            <div className="side-feature-item">
              <FiGlobe className="side-icon" />
              <span>Global reach</span>
            </div>
            <div className="side-feature-item">
              <FiHeart className="side-icon" />
              <span>A healthier tomorrow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
