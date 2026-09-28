import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { LOCATIONS } from '../data/mockData';
import './JobsByLocation.css';

const LOCATION_SVG_FALLBACK = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <defs>
    <linearGradient id="locBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#dbeafe"/>
      <stop offset="100%" stop-color="#93c5fd"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="url(#locBg)"/>
  <path d="M 200 110 C 180 110 165 125 165 145 C 165 175 200 205 200 205 C 200 205 235 175 235 145 C 235 125 220 110 200 110 Z" fill="#0066cc"/>
  <circle cx="200" cy="142" r="10" fill="#ffffff"/>
</svg>
`)}`;

export default function JobsByLocation() {
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = LOCATION_SVG_FALLBACK;
  };

  return (
    <section className="section location-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrapper">
            <h2 className="section-title">Jobs by Location</h2>
            <p className="section-subtitle">Explore opportunities in top locations worldwide</p>
          </div>
          <a href="#all-locations" className="section-link">
            View all locations <FiArrowRight size={14} />
          </a>
        </div>

        {/* 9 Location Cards Grid */}
        <div className="location-grid">
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className="location-card">
              <div className="location-image-wrapper">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="location-image"
                  onError={handleImgError}
                />
              </div>
              <div className="location-info">
                <h3 className="location-name">{loc.name}</h3>
                <span className="location-jobs-link">Jobs</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
