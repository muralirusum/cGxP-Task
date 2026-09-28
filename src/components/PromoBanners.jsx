import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './PromoBanners.css';

const MOCK_HERO_1 = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80";
const MOCK_HERO_2 = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80";

const SVG_HERO_FALLBACK_1 = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 120" width="300" height="120">
  <rect width="300" height="120" fill="#0066cc"/>
  <circle cx="150" cy="60" r="40" fill="#ffffff" opacity="0.15"/>
  <text x="150" y="66" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">cGxP Directory</text>
</svg>
`)}`;

const SVG_HERO_FALLBACK_2 = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 120" width="300" height="120">
  <rect width="300" height="120" fill="#002b5c"/>
  <circle cx="150" cy="60" r="40" fill="#ffffff" opacity="0.15"/>
  <text x="150" y="66" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">cGxP Wire News</text>
</svg>
`)}`;

export default function PromoBanners() {
  const handleImgError1 = (e) => {
    e.target.onerror = null;
    e.target.src = SVG_HERO_FALLBACK_1;
  };

  const handleImgError2 = (e) => {
    e.target.onerror = null;
    e.target.src = SVG_HERO_FALLBACK_2;
  };

  return (
    <section className="section promo-section">
      <div className="container promo-grid">
        {/* CARD 1: cGxP Directory */}
        <div className="promo-card">
          <div className="promo-content">
            <span className="promo-badge-title">cGxP Directory</span>
            <h3 className="promo-title">Discover Life Sciences Companies</h3>
            <p className="promo-text">
              Explore company profiles, products, locations and more on cGxP Directory.
            </p>
            <a href="#directory" className="promo-btn">
              Visit cGxP Directory <FiArrowRight size={14} />
            </a>
          </div>

          <div className="promo-preview">
            <div className="mock-window">
              <div className="mock-window-header">
                <span className="mock-dot red"></span>
                <span className="mock-dot yellow"></span>
                <span className="mock-dot green"></span>
                <span className="mock-url">cgxp.com/directory</span>
              </div>
              <div className="mock-window-body">
                <div className="mock-hero-img">
                  <img src={MOCK_HERO_1} alt="Directory UI" onError={handleImgError1} />
                </div>
                <div className="mock-grid">
                  <div className="mock-card">
                    <span className="mock-card-name">Pfizer Inc.</span>
                    <span className="mock-card-tag">Pharma &amp; Bio</span>
                  </div>
                  <div className="mock-card">
                    <span className="mock-card-name">Novartis</span>
                    <span className="mock-card-tag">R&amp;D Hub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2: cGxP Wire */}
        <div className="promo-card">
          <div className="promo-content">
            <span className="promo-badge-title">cGxP Wire</span>
            <h3 className="promo-title">Stay Updated with Life Sciences News</h3>
            <p className="promo-text">
              Read the latest industry news, insights and trends on cGxP Wire.
            </p>
            <a href="#wire" className="promo-btn">
              Visit cGxP Wire <FiArrowRight size={14} />
            </a>
          </div>

          <div className="promo-preview">
            <div className="mock-window">
              <div className="mock-window-header">
                <span className="mock-dot red"></span>
                <span className="mock-dot yellow"></span>
                <span className="mock-dot green"></span>
                <span className="mock-url">cgxp.com/wire</span>
              </div>
              <div className="mock-window-body">
                <div className="mock-hero-img">
                  <img src={MOCK_HERO_2} alt="Wire UI" onError={handleImgError2} />
                </div>
                <div className="mock-news-rows">
                  <div className="mock-news-item">
                    <span className="mock-news-title">FDA Approves New Biotech Therapy</span>
                  </div>
                  <div className="mock-news-item">
                    <span className="mock-news-title">2025 Quality Compliance Trends</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

