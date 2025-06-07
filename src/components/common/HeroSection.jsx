import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="bg-[#f5f7f9] py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#4d4d4d] mb-4">
            Lessons and insights 
            <span className="text-[#4caf4f]"> from 8 years</span>
          </h1>
          <p className="text-[#717171] mb-6">
            Where to grow your business as a photographer: site or social media?
          </p>
          <Button variant="primary" className="rounded-sm">
            Register
          </Button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/images/img_illustration.svg" 
            alt="Hero Illustration" 
            className="max-w-full h-auto"
          />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <img src="/images/img_dot.svg" alt="Slider dots" className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;