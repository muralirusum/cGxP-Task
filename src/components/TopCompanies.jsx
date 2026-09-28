import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { COMPANIES } from '../data/mockData';
import './TopCompanies.css';

export default function TopCompanies() {
  const renderLogoContent = (company) => {
    switch (company.variant) {
      case 'pfizer':
        return (
          <div className="company-logo-pfizer">
            <span className="pfizer-oval">Pfizer</span>
          </div>
        );
      case 'novartis':
        return (
          <div className="company-logo-novartis">
            <span className="novartis-icon">▲</span>
            <span className="novartis-text">NOVARTIS</span>
          </div>
        );
      case 'merck':
        return (
          <div className="company-logo-merck">
            <span className="merck-text">MERCK</span>
          </div>
        );
      case 'thermo':
        return (
          <div className="company-logo-thermo">
            <span className="thermo-red">ThermoFisher</span>
            <span className="thermo-sub">SCIENTIFIC</span>
          </div>
        );
      case 'jnj':
        return (
          <div className="company-logo-jnj">
            <span className="jnj-text">johnson&amp;johnson</span>
          </div>
        );
      case 'roche':
        return (
          <div className="company-logo-roche">
            <span className="roche-badge">Roche</span>
          </div>
        );
      case 'sanofi':
        return (
          <div className="company-logo-sanofi">
            <span className="sanofi-text">sanofi</span>
          </div>
        );
      case 'lonza':
        return (
          <div className="company-logo-lonza">
            <span className="lonza-text">Lonza</span>
          </div>
        );
      case 'gsk':
        return (
          <div className="company-logo-gsk">
            <span className="gsk-pill">GSK</span>
          </div>
        );
      case 'abbvie':
        return (
          <div className="company-logo-abbvie">
            <span className="abbvie-text">abbvie</span>
          </div>
        );
      default:
        return <span className="default-company-text">{company.name}</span>;
    }
  };

  return (
    <section className="section companies-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrapper">
            <h2 className="section-title">Top Life Sciences Companies Hiring</h2>
          </div>
          <a href="#all-companies" className="section-link">
            View all companies <FiArrowRight size={14} />
          </a>
        </div>

        {/* 10 Company Logos Row */}
        <div className="companies-row">
          {COMPANIES.map((company) => (
            <div key={company.id} className="company-card">
              {renderLogoContent(company)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
