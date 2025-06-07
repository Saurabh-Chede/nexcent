import React from 'react';

const TestimonialSection = () => {
  const testimonialLogos = [
    { src: "/images/img_vector_deep_purple_a700.svg", alt: "Logo 1" },
    { src: "/images/img_logo_blue_gray_800_01.svg", alt: "Logo 2" },
    { src: "/images/img_logo_gray_100.svg", alt: "Logo 3" },
    { src: "/images/img_logo_gray_100_33x33.svg", alt: "Logo 4" },
    { src: "/images/img_logo_33x33.svg", alt: "Logo 5" },
    { src: "/images/img_logo_1.svg", alt: "Logo 6" },
  ];

  return (
    <section className="bg-[#f5f7f9] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <img 
              src="/images/img_image_9.png" 
              alt="Testimonial" 
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="md:w-3/4">
            <p className="text-[#717171] text-sm mb-6">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </p>
            <h3 className="text-[#4caf4f] font-semibold mb-1">Tim Smith</h3>
            <p className="text-[#88939e] text-sm mb-4">British Dragon Boat Racing Association</p>
            
            <div className="flex flex-wrap items-center gap-4">
              {testimonialLogos.map((logo, index) => (
                <div 
                  key={index} 
                  className={`w-8 h-8 flex items-center justify-center rounded ${index === 0 ? 'bg-[#e8f5e9]' : 'bg-[#f5f7f9]'}`}
                >
                  <img src={logo.src} alt={logo.alt} className="max-w-[70%] max-h-[70%]" />
                </div>
              ))}
              <a href="#" className="text-[#4caf4f] font-semibold text-sm flex items-center ml-4">
                Meet all customers
                <img 
                  src="/images/img_24_arrows_directions_right.svg" 
                  alt="Arrow right" 
                  className="w-4 h-4 ml-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;