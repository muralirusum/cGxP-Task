import React, { useState } from 'react';
import { FiBookmark, FiMapPin, FiBriefcase, FiClock, FiArrowRight, FiUser } from 'react-icons/fi';
import { LATEST_JOBS } from '../data/mockData';
import './LatestJobs.css';

export default function LatestJobs() {
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

  const toggleBookmark = (id) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter((item) => item !== id));
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
    }
  };

  return (
    <section className="section latest-jobs-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrapper">
            <span className="section-tag">FRESH THIS WEEK</span>
            <h2 className="section-title">Latest cGxP roles</h2>
            <p className="section-subtitle">
              The most recently published postings across every speciality and location.
            </p>
          </div>
          <a href="#all-jobs" className="section-link">
            Browse all jobs <FiArrowRight size={14} />
          </a>
        </div>

        {/* 4 Job Cards Grid */}
        <div className="jobs-grid">
          {LATEST_JOBS.map((job) => {
            const isBookmarked = bookmarkedIds.includes(job.id);
            return (
              <div key={job.id} className="job-card">
                <div className="job-card-header">
                  <div>
                    <h3 className="job-title">{job.title}</h3>
                    <p className="job-company">{job.company}</p>
                  </div>
                  <button
                    className={`bookmark-btn ${isBookmarked ? 'active' : ''}`}
                    onClick={() => toggleBookmark(job.id)}
                    aria-label="Save Job"
                  >
                    <FiBookmark size={16} fill={isBookmarked ? '#0066cc' : 'none'} />
                  </button>
                </div>

                <div className="job-badges">
                  <div className="badge-pill">
                    <FiMapPin size={11} className="badge-icon" />
                    <span>{job.location}</span>
                  </div>
                  <div className="badge-pill">
                    <FiUser size={11} className="badge-icon" />
                    <span>{job.workMode}</span>
                  </div>
                  <div className="badge-pill">
                    <FiBriefcase size={11} className="badge-icon" />
                    <span>{job.employmentType}</span>
                  </div>
                </div>

                <div className="job-card-footer">
                  <div className="posted-time">
                    <FiClock size={12} className="clock-icon" />
                    <span>{job.postedDate}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
