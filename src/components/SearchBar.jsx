import React, { useState } from 'react';
import { FiSearch, FiMapPin, FiChevronDown } from 'react-icons/fi';
import './SearchBar.css';

export default function SearchBar() {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('Job Type');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', { jobTitle, location, jobType });
  };

  return (
    <form className="search-bar-card" onSubmit={handleSearch}>
      {/* Field 1: Job Title */}
      <div className="search-field">
        <FiSearch className="search-field-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Job title, skill or company"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </div>

      <div className="search-divider"></div>

      {/* Field 2: Location */}
      <div className="search-field">
        <FiMapPin className="search-field-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Location (city, state or country)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="search-divider"></div>

      {/* Field 3: Job Type Dropdown */}
      <div className="search-field search-select-wrapper">
        <select
          className="search-select"
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        >
          <option value="Job Type">Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contractor">Contractor</option>
          <option value="Hybrid">Hybrid</option>
          <option value="On-site">On-site</option>
          <option value="Remote">Remote</option>
        </select>
        <FiChevronDown className="select-arrow" />
      </div>

      {/* Search Button */}
      <button type="submit" className="search-btn">
        Search jobs
      </button>
    </form>
  );
}
