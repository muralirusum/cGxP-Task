import React from 'react';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import './TargetAudience.css';

// SVG Vector Avatars as guaranteed fallbacks
const FEMALE_SCIENTIST_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 220" width="200" height="220">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e0f2fe"/>
      <stop offset="100%" stop-color="#bae6fd"/>
    </linearGradient>
    <linearGradient id="coatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f1f5f9"/>
    </linearGradient>
    <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>

  <rect width="200" height="220" rx="16" fill="url(#bgGrad)"/>
  <circle cx="30" cy="40" r="12" fill="#38bdf8" opacity="0.35"/>
  <circle cx="170" cy="45" r="18" fill="#0284c7" opacity="0.25"/>
  <path d="M 165 25 L 168 32 L 175 35 L 168 38 L 165 45 L 162 38 L 155 35 L 162 32 Z" fill="#0066cc" opacity="0.6"/>

  <path d="M 35 220 C 35 165 65 142 100 142 C 135 142 165 165 165 220 Z" fill="url(#coatGrad)" stroke="#cbd5e1" stroke-width="2"/>
  <path d="M 82 142 L 100 172 L 118 142 Z" fill="#0066cc"/>
  <line x1="100" y1="172" x2="100" y2="220" stroke="#cbd5e1" stroke-width="2"/>

  <rect x="87" y="118" width="26" height="28" fill="#fed7aa" rx="5"/>
  <path d="M 58 75 C 58 40 142 40 142 75 L 145 130 C 145 140 135 145 125 145 L 75 145 C 65 145 55 140 55 130 Z" fill="url(#hairGrad)"/>
  <ellipse cx="100" cy="94" rx="28" ry="32" fill="#ffedd5"/>
  <path d="M 68 76 C 78 52 122 52 132 76 C 118 64 82 64 68 76 Z" fill="url(#hairGrad)"/>

  <rect x="76" y="85" width="20" height="15" rx="4" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <rect x="104" y="85" width="20" height="15" rx="4" fill="none" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="96" y1="91" x2="104" y2="91" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="64" y1="91" x2="76" y2="91" stroke="#0f172a" stroke-width="2"/>
  <line x1="124" y1="91" x2="136" y2="91" stroke="#0f172a" stroke-width="2"/>

  <circle cx="86" cy="92" r="2.5" fill="#0f172a"/>
  <circle cx="114" cy="92" r="2.5" fill="#0f172a"/>
  <path d="M 91 110 Q 100 117 109 110" fill="none" stroke="#ea580c" stroke-width="2.5" stroke-linecap="round"/>

  <rect x="126" y="165" width="20" height="26" rx="3" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
  <rect x="130" y="169" width="12" height="6" rx="1" fill="#0066cc"/>
  <line x1="130" y1="179" x2="142" y2="179" stroke="#cbd5e1" stroke-width="2"/>
  <line x1="130" y1="184" x2="138" y2="184" stroke="#cbd5e1" stroke-width="2"/>

  <g transform="translate(14, 142) scale(0.65)">
    <path d="M 20 8 L 20 22 L 8 48 C 4 58 14 62 25 62 C 36 62 46 58 42 48 L 30 22 L 30 8 Z" fill="#ffffff" stroke="#0284c7" stroke-width="3"/>
    <path d="M 12 42 L 38 42 C 40 54 32 58 25 58 C 18 58 10 54 12 42 Z" fill="#0284c7"/>
    <circle cx="22" cy="32" r="3" fill="#38bdf8"/>
    <circle cx="28" cy="24" r="2" fill="#38bdf8"/>
  </g>
</svg>
`)}`;

const MALE_EXECUTIVE_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 220" width="200" height="220">
  <defs>
    <linearGradient id="bgGradM" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#eff6ff"/>
      <stop offset="100%" stop-color="#dbeafe"/>
    </linearGradient>
    <linearGradient id="suitGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>

  <rect width="200" height="220" rx="16" fill="url(#bgGradM)"/>
  <circle cx="165" cy="40" r="20" fill="#3b82f6" opacity="0.15"/>
  <path d="M 25 30 L 45 30 M 35 20 L 35 40" stroke="#0066cc" stroke-width="2" opacity="0.3" stroke-linecap="round"/>

  <path d="M 35 220 C 35 165 65 142 100 142 C 135 142 165 165 165 220 Z" fill="url(#suitGrad)"/>
  <path d="M 75 142 L 100 185 L 125 142 Z" fill="#ffffff"/>
  <path d="M 96 142 L 104 142 L 106 185 L 100 195 L 94 185 Z" fill="#2563eb"/>

  <rect x="87" y="118" width="26" height="28" fill="#fed7aa" rx="5"/>
  <ellipse cx="100" cy="94" rx="28" ry="32" fill="#ffedd5"/>
  <path d="M 70 82 C 68 55 85 45 100 45 C 118 45 132 55 130 82 C 122 60 105 58 70 82 Z" fill="#334155"/>

  <circle cx="86" cy="90" r="2.5" fill="#0f172a"/>
  <circle cx="114" cy="90" r="2.5" fill="#0f172a"/>
  <path d="M 91 110 Q 100 117 109 110" fill="none" stroke="#b45309" stroke-width="2.5" stroke-linecap="round"/>
</svg>
`)}`;

export default function TargetAudience() {
  const femaleImageFallback = (e) => {
    if (!e.target.dataset.triedBackup) {
      e.target.dataset.triedBackup = "true";
      e.target.src = "https://images.unsplash.com/photo-1594824813566-78a53e680a37?auto=format&fit=crop&w=500&q=80";
    } else {
      e.target.onerror = null;
      e.target.src = FEMALE_SCIENTIST_SVG;
    }
  };

  const maleImageFallback = (e) => {
    if (!e.target.dataset.triedBackup) {
      e.target.dataset.triedBackup = "true";
      e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80";
    } else {
      e.target.onerror = null;
      e.target.src = MALE_EXECUTIVE_SVG;
    }
  };

  return (
    <section className="section target-audience-section">
      <div className="container audience-grid">
        {/* LEFT CARD: Job Seekers */}
        <div className="audience-card seeker-card">
          <div className="audience-info">
            <span className="audience-tag">For Job Seekers</span>
            <p className="audience-headline">Advance your career in life sciences</p>

            <a href="#create-account" className="audience-btn">
              Create Free Account <FiArrowRight size={14} />
            </a>
          </div>

          <div className="audience-bullets-grid">
            <div className="bullet-item">
              <FiCheckCircle className="bullet-check" />
              <span>Save jobs</span>
            </div>
            <div className="bullet-item">
              <FiCheckCircle className="bullet-check" />
              <span>Get job alerts</span>
            </div>
            <div className="bullet-item">
              <FiCheckCircle className="bullet-check" />
              <span>Track applications</span>
            </div>
            <div className="bullet-item">
              <FiCheckCircle className="bullet-check" />
              <span>Find better opportunities</span>
            </div>
          </div>

          <div className="audience-image-container">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=500&q=80"
              alt="Female Scientist Professional"
              className="audience-image"
              onError={femaleImageFallback}
            />
          </div>
        </div>

        {/* RIGHT CARD: Employers */}
        <div className="audience-card employer-card">
          <div className="audience-info">
            <span className="audience-tag">For Employers</span>
            <p className="audience-headline">Hire the right life sciences talent</p>

            <a href="#post-job" className="audience-btn">
              Post a Job <FiArrowRight size={14} />
            </a>
          </div>

          <div className="audience-bullets-grid">
            <div className="bullet-item">
              <FiCheckCircle className="bullet-check" />
              <span>Reach qualified candidates</span>
            </div>
            <div className="bullet-item">
              <FiCheckCircle className="bullet-check" />
              <span>Search resumes</span>
            </div>
            <div className="bullet-item">
              <FiCheckCircle className="bullet-check" />
              <span>Access hiring solutions</span>
            </div>
            <div className="bullet-item">
              <FiCheckCircle className="bullet-check" />
              <span>Build your employer brand</span>
            </div>
          </div>

          <div className="audience-image-container">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80"
              alt="Male Executive Recruiter"
              className="audience-image"
              onError={maleImageFallback}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

