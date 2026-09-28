import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { CATEGORIES } from '../data/mockData';
import './JobCategories.css';

const GENERIC_SVG_FALLBACK = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <defs>
    <linearGradient id="catBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e2ecf9"/>
      <stop offset="100%" stop-color="#cbd5e1"/>
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="url(#catBg)"/>
  <circle cx="200" cy="150" r="50" fill="#0066cc" opacity="0.2"/>
  <path d="M 175 150 L 225 150 M 200 125 L 200 175" stroke="#0066cc" stroke-width="4" stroke-linecap="round"/>
</svg>
`)}`;

export default function JobCategories() {
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = GENERIC_SVG_FALLBACK;
  };

  return (
    <section className="section categories-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrapper">
            <h2 className="section-title">Explore Jobs by Category</h2>
            <p className="section-subtitle">Find the right role in your area of expertise</p>
          </div>
          <a href="#all-categories" className="section-link">
            View all categories <FiArrowRight size={14} />
          </a>
        </div>

        {/* 9 Category Cards Grid */}
        <div className="categories-grid">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="category-card">
              <div className="category-image-container">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="category-image"
                  onError={handleImgError}
                />
              </div>
              <div className="category-content">
                <h3 className="category-title">{cat.title}</h3>
                <p className="category-subtitle">{cat.subtitle}</p>
                <div className="category-action">
                  <span className="action-circle">
                    <FiArrowRight size={12} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
