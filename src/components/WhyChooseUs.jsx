import React from 'react';
import { FiBriefcase, FiUsers, FiShield, FiBarChart2 } from 'react-icons/fi';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: <FiBriefcase className="why-icon" />,
      title: "Real Opportunities",
      subtitle: "From trusted companies"
    },
    {
      id: 2,
      icon: <FiUsers className="why-icon" />,
      title: "Global Reach",
      subtitle: "India, USA & more"
    },
    {
      id: 3,
      icon: <FiShield className="why-icon" />,
      title: "Verified Jobs",
      subtitle: "Genuine and active listings"
    },
    {
      id: 4,
      icon: <FiBarChart2 className="why-icon" />,
      title: "Career Growth",
      subtitle: "Build a healthier tomorrow"
    }
  ];

  return (
    <section className="section why-choose-section">
      <div className="container">
        <h2 className="section-title why-title">Why Choose cGxP Jobs?</h2>

        <div className="why-row">
          {features.map((item, index) => (
            <React.Fragment key={item.id}>
              <div className="why-col">
                <div className="icon-wrapper">{item.icon}</div>
                <div className="why-text">
                  <h3 className="why-card-title">{item.title}</h3>
                  <p className="why-card-subtitle">{item.subtitle}</p>
                </div>
              </div>
              {index < features.length - 1 && <div className="why-divider"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
