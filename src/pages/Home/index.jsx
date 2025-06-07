import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import ClientsSection from './ClientsSection';
import ValuePropositionSection from './ValuePropositionSection';
import CaseStudySection from './CaseStudySection';
import TestimonialSection from './TestimonialSection';
import BlogSection from './BlogSection';
import CtaSection from './CtaSection';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ClientsSection />
        <ValuePropositionSection />
        <CaseStudySection />
        <TestimonialSection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;