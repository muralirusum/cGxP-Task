import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import JobCategories from './components/JobCategories';
import LatestJobs from './components/LatestJobs';
import JobsByLocation from './components/JobsByLocation';
import TopCompanies from './components/TopCompanies';
import PromoBanners from './components/PromoBanners';
import WhyChooseUs from './components/WhyChooseUs';
import TargetAudience from './components/TargetAudience';
import InsightsAndFAQ from './components/InsightsAndFAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <HeroSection />
        <JobCategories />
        <LatestJobs />
        <JobsByLocation />
        <TopCompanies />
        <PromoBanners />
        <WhyChooseUs />
        <TargetAudience />
        <InsightsAndFAQ />
      </main>
      <Footer />
    </div>
  );
}
