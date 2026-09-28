import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* TOP FOOTER ROW */}
        <div className="footer-main-row">
          {/* BRAND COLUMN */}
          <div className="footer-brand-col">
            <a href="#" className="footer-logo-link">
              <div className="logo-box">
                <span className="logo-cgxp">cGxP</span>
                <span className="logo-jobs">.Jobs</span>
              </div>
            </a>
            <p className="footer-brand-desc">
              Connecting talent with opportunities<br />
              in the life sciences industry.
            </p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="X / Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          {/* LINK COLUMNS */}
          <div className="footer-nav-cols">
            {/* Col 1 */}
            <div className="footer-col">
              <h4 className="footer-col-title">Job Categories</h4>
              <ul>
                <li><a href="#">Pharma Jobs</a></li>
                <li><a href="#">Biotech Jobs</a></li>
                <li><a href="#">Medical Devices Jobs</a></li>
                <li><a href="#">Clinical Research Jobs</a></li>
                <li><a href="#">Regulatory Affairs Jobs</a></li>
                <li><a href="#">Quality Jobs</a></li>
                <li><a href="#">Manufacturing Jobs</a></li>
                <li><a href="#">R&amp;D Jobs</a></li>
                <li><a href="#">IT &amp; Digital Jobs</a></li>
              </ul>
            </div>

            {/* Col 2 */}
            <div className="footer-col">
              <h4 className="footer-col-title">Jobs by Location</h4>
              <ul>
                <li><a href="#">India Jobs</a></li>
                <li><a href="#">USA Jobs</a></li>
                <li><a href="#">Bengaluru Jobs</a></li>
                <li><a href="#">Hyderabad Jobs</a></li>
                <li><a href="#">Mumbai Jobs</a></li>
                <li><a href="#">Pune Jobs</a></li>
                <li><a href="#">Delhi Jobs</a></li>
                <li><a href="#">Chennai Jobs</a></li>
                <li><a href="#">Remote Jobs</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="footer-col">
              <h4 className="footer-col-title">For Job Seekers</h4>
              <ul>
                <li><a href="#">Create Account</a></li>
                <li><a href="#">Job Alerts</a></li>
                <li><a href="#">Resume Tips</a></li>
                <li><a href="#">Interview Tips</a></li>
                <li><a href="#">Salary Insights</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="footer-col">
              <h4 className="footer-col-title">For Employers</h4>
              <ul>
                <li><a href="#">Post a Job</a></li>
                <li><a href="#">Search Resumes</a></li>
                <li><a href="#">Employer Branding</a></li>
                <li><a href="#">Recruitment Solutions</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>

            {/* Col 5 */}
            <div className="footer-col">
              <h4 className="footer-col-title">Our Products</h4>
              <ul>
                <li><a href="#">cGxP Directory</a></li>
                <li><a href="#">cGxP Wire</a></li>
              </ul>
            </div>

            {/* Col 6 */}
            <div className="footer-col">
              <h4 className="footer-col-title">About</h4>
              <ul>
                <li><a href="#">About cGxP Jobs</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER BAR */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; 2026 cGxP Jobs. All rights reserved.
          </p>
          <div className="tagline-pills">
            <span>People</span>
            <span className="sep">|</span>
            <span>Science</span>
            <span className="sep">|</span>
            <span>Progress</span>
            <span className="sep">|</span>
            <span>A Healthier Tomorrow</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
