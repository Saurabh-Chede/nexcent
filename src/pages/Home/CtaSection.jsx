import React from 'react';
import Button from '../../components/ui/Button';

const CtaSection = () => {
  return (
    <section className="bg-[#f5f7f9] py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold text-[#263238] mb-8 max-w-2xl mx-auto">
          Pellentesque suscipit fringilla libero eu.
        </h2>
        <Button 
          variant="primary" 
          className="rounded-sm"
          rightIcon={<img src="/images/img_16_arrows_directions_right.svg" alt="arrow" className="w-3 h-3" />}
        >
          Get a Demo
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;