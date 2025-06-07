import React from 'react';

const ClientsSection = () => {
  const clientLogos = [
    { src: "/images/img_logo.svg", alt: "Client Logo 1" },
    { src: "/images/img_logo_blue_gray_800_01.svg", alt: "Client Logo 2" },
    { src: "/images/img_logo_black_900.svg", alt: "Client Logo 3" },
    { src: "/images/img_logo_indigo_800.svg", alt: "Client Logo 4" },
    { src: "/images/img_logo_gray_900_01.svg", alt: "Client Logo 5" },
    { src: "/images/img_logo_blue_gray_800_02.svg", alt: "Client Logo 6" },
    { src: "/images/img_logo_black_900.svg", alt: "Client Logo 7" },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-[#4d4d4d] text-center mb-2">
          Our Clients
        </h2>
        <p className="text-[#717171] text-center text-sm mb-8">
          We have been working with some Fortune 500+ clients
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
          {clientLogos.map((logo, index) => (
            <div key={index} className="w-16 h-8 flex items-center justify-center">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;