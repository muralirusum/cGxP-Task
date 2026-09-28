import React from 'react';

export default function HeroIllustration() {
  return (
    <div className="hero-illustration-wrapper">
      <svg
        viewBox="0 0 440 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hero-illustration-svg"
      >
        {/* Soft background blue gradient radial dome */}
        <ellipse
          cx="220"
          cy="140"
          rx="190"
          ry="110"
          fill="#edf5ff"
          opacity="0.8"
        />

        {/* Floating Sparkle Stars */}
        <g stroke="#93c5fd" strokeWidth="1.2" fill="none">
          {/* Star 1 (Far Left) */}
          <path d="M 32 60 L 32 66 M 29 63 L 35 63" />
          {/* Star 2 (Top Left) */}
          <path d="M 102 24 L 102 28 M 100 26 L 104 26" />
          {/* Star 3 (Top Right) */}
          <path d="M 330 36 L 330 40 M 328 38 L 332 38" />
          {/* Star 4 (Far Right) */}
          <path d="M 370 75 L 370 81 M 367 78 L 373 78" />
        </g>

        {/* Dotted Network Lines */}
        {/* Outer Top Curve */}
        <path
          d="M 68 85 Q 215 15 348 95"
          stroke="#bfdbfe"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        {/* Inner Connecting Curves */}
        <path
          d="M 68 85 Q 120 115 142 112"
          stroke="#bfdbfe"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <path
          d="M 142 112 Q 180 80 215 52"
          stroke="#bfdbfe"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <path
          d="M 142 112 Q 240 120 348 95"
          stroke="#bfdbfe"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <path
          d="M 68 85 Q 200 180 348 95"
          stroke="#cbd5e1"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.6"
        />
        <path
          d="M 142 112 L 205 150"
          stroke="#cbd5e1"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.6"
        />

        {/* --- 4 CIRCULAR NODES --- */}

        {/* Node 1: Left Candidate Pin */}
        <g transform="translate(68, 85)">
          <circle cx="0" cy="0" r="23" fill="#ffffff" stroke="#dbeafe" strokeWidth="2" />
          <circle cx="0" cy="0" r="23" fill="none" stroke="#bfdbfe" strokeWidth="1" />
          {/* Candidate Pin Icon */}
          <path
            d="M -5 3 C -5 -1, 5 -1, 5 3 M 0 -5 A 3.5 3.5 0 1 1 0 -5.01"
            stroke="#0066cc"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M 2 -4 L 6 -8 L 8 -6"
            stroke="#0066cc"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Node 2: Center-Left Checkmark Box */}
        <g transform="translate(142, 112)">
          <circle cx="0" cy="0" r="24" fill="#ffffff" stroke="#dbeafe" strokeWidth="2" />
          <circle cx="0" cy="0" r="24" fill="none" stroke="#93c5fd" strokeWidth="1" />
          <rect x="-9" y="-9" width="18" height="18" rx="4" stroke="#0066cc" strokeWidth="1.8" fill="none" />
          <path
            d="M -5 -1 L -1 3 L 5 -3"
            stroke="#0066cc"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Node 3: Top Center Location Candidate */}
        <g transform="translate(215, 52)">
          <circle cx="0" cy="0" r="25" fill="#ffffff" stroke="#dbeafe" strokeWidth="2" />
          <circle cx="0" cy="0" r="25" fill="none" stroke="#bfdbfe" strokeWidth="1" />
          {/* User Icon */}
          <path
            d="M -6 4 C -6 0, 6 0, 6 4 M 0 -5 A 4 4 0 1 1 0 -5.01"
            stroke="#0066cc"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Location Pin pointer */}
          <path
            d="M 0 -9 C -4 -9 -6 -6 0 1 C 6 -6 4 -9 0 -9 Z"
            stroke="#0066cc"
            strokeWidth="1.2"
            fill="none"
          />
        </g>

        {/* Node 4: Right Recruiter / Employer */}
        <g transform="translate(348, 95)">
          <circle cx="0" cy="0" r="24" fill="#ffffff" stroke="#dbeafe" strokeWidth="2" />
          <circle cx="0" cy="0" r="24" fill="none" stroke="#bfdbfe" strokeWidth="1" />
          {/* Employer briefcase person icon */}
          <path
            d="M -6 4 C -6 0, 6 0, 6 4 M 0 -4 A 3.5 3.5 0 1 1 0 -4.01"
            stroke="#0066cc"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <rect x="-7" y="2" width="14" height="7" rx="1.5" stroke="#0066cc" strokeWidth="1.2" fill="#ffffff" />
        </g>

        {/* --- LOWER LINE ART OBJECTS & BASELINE --- */}

        {/* Horizontal Ground Line */}
        <line x1="120" y1="240" x2="380" y2="240" stroke="#bfdbfe" strokeWidth="1.5" strokeLinecap="round" />

        {/* 1. Test Tubes Rack (Left) */}
        <g transform="translate(132, 192)">
          {/* Tube 1 */}
          <rect x="0" y="0" width="9" height="46" rx="4.5" fill="#ffffff" stroke="#0066cc" strokeWidth="1.8" />
          {/* Tube 2 */}
          <rect x="13" y="0" width="9" height="46" rx="4.5" fill="#ffffff" stroke="#0066cc" strokeWidth="1.8" />
          {/* Tube 3 */}
          <rect x="26" y="0" width="9" height="46" rx="4.5" fill="#ffffff" stroke="#0066cc" strokeWidth="1.8" />

          {/* Liquid Levels */}
          <path d="M 1.5 28 L 7.5 28" stroke="#60a5fa" strokeWidth="1.5" />
          <path d="M 14.5 20 L 20.5 20" stroke="#0066cc" strokeWidth="1.5" />
          <path d="M 27.5 34 L 33.5 34" stroke="#93c5fd" strokeWidth="1.5" />

          {/* Rack Clip Bar */}
          <line x1="-3" y1="12" x2="38" y2="12" stroke="#0066cc" strokeWidth="1.8" strokeLinecap="round" />
        </g>

        {/* 2. Central Microscope */}
        <g transform="translate(230, 138)">
          {/* Eyepiece & Body Tube (Angled 45 deg) */}
          <g transform="rotate(-32, 0, 20)">
            <rect x="-8" y="-12" width="16" height="34" rx="3" fill="#ffffff" stroke="#0066cc" strokeWidth="2" />
            <line x1="-11" y1="-14" x2="11" y2="-14" stroke="#0066cc" strokeWidth="3.5" strokeLinecap="round" />
            {/* Objective lens */}
            <rect x="-5" y="22" width="10" height="14" rx="2" fill="#0066cc" />
          </g>

          {/* Arm & Base Frame */}
          <path
            d="M 12 98 L 70 98 L 62 90 C 62 40, 25 25, 0 35"
            stroke="#0066cc"
            strokeWidth="2.5"
            fill="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M 10 102 L 72 102 L 72 96 L 10 96 Z" fill="#ffffff" stroke="#0066cc" strokeWidth="2" />

          {/* Stage Platform */}
          <rect x="-22" y="66" width="46" height="5" rx="2.5" fill="#ffffff" stroke="#0066cc" strokeWidth="2" />

          {/* Substage Condenser & Mirror Knob */}
          <circle cx="36" cy="72" r="6" fill="#ffffff" stroke="#0066cc" strokeWidth="2" />
          <circle cx="36" cy="72" r="2" fill="#0066cc" />
        </g>

        {/* 3. Erlenmeyer Flask (Right) */}
        <g transform="translate(325, 172)">
          <path
            d="M 14 0 L 22 0 L 22 18 L 36 58 C 38 65 34 68 27 68 L 9 68 C 2 68 -2 65 0 58 L 14 18 Z"
            fill="#ffffff"
            stroke="#0066cc"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Top Lip */}
          <line x1="12" y1="0" x2="24" y2="0" stroke="#0066cc" strokeWidth="2.5" strokeLinecap="round" />

          {/* Liquid Fill */}
          <path
            d="M 5 50 Q 18 45 31 50 L 28 64 C 27 66 24 66 20 66 L 12 66 C 8 66 5 66 4 64 Z"
            fill="#dbeafe"
            stroke="#60a5fa"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    </div>
  );
}
