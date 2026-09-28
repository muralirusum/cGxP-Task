import React, { useState } from 'react';
import { FiArrowRight, FiPlus, FiMinus } from 'react-icons/fi';
import { ARTICLES, FAQS } from '../data/mockData';
import './InsightsAndFAQ.css';

const ARTICLE_SVG_FALLBACK = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" width="400" height="250">
  <defs>
    <linearGradient id="artBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#002b5c"/>
    </linearGradient>
  </defs>
  <rect width="400" height="250" fill="url(#artBg)"/>
  <rect x="40" y="40" width="320" height="170" rx="8" fill="#ffffff" opacity="0.1"/>
  <line x1="80" y1="80" x2="240" y2="80" stroke="#ffffff" stroke-width="6" stroke-linecap="round" opacity="0.6"/>
  <line x1="80" y1="110" x2="300" y2="110" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity="0.4"/>
  <line x1="80" y1="135" x2="260" y2="135" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity="0.4"/>
</svg>
`)}`;

export default function InsightsAndFAQ() {
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = ARTICLE_SVG_FALLBACK;
  };

  return (
    <section className="section insights-faq-section">
      <div className="container insights-faq-container">
        {/* LEFT COLUMN: Career Insights */}
        <div className="insights-column">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">Life Sciences Careers &amp; Insights</h2>
              <p className="section-subtitle">Expert advice, industry trends and resources</p>
            </div>
          </div>

          <div className="articles-grid">
            {ARTICLES.map((article) => (
              <div key={article.id} className="article-card">
                <div className="article-img-wrapper">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="article-img"
                    onError={handleImgError}
                  />
                </div>
                <div className="article-content">
                  <span className="article-category">{article.category}</span>
                  <h3 className="article-title">{article.title}</h3>
                  <div className="article-footer">
                    <span className="article-date">{article.date}</span>
                    <span className="article-arrow-btn">
                      <FiArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section-vertical-divider"></div>

        {/* RIGHT COLUMN: FAQs */}
        <div className="faq-column">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">FAQs</h2>
            </div>
            <a href="#all-faqs" className="section-link">
              View all FAQs <FiArrowRight size={14} />
            </a>
          </div>

          <div className="faq-box">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <div className="faq-question-row" onClick={() => toggleFaq(faq.id)}>
                    <span className="faq-question">{faq.question}</span>
                    <button className="faq-toggle-btn" aria-label="Toggle FAQ Answer">
                      {isOpen ? <FiMinus className="faq-icon" /> : <FiPlus className="faq-icon" />}
                    </button>
                  </div>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
