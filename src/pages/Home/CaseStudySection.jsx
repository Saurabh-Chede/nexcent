import React from 'react';
import Button from '../../components/ui/Button';

const CaseStudySection = () => {
  const stats = [
    { icon: "/images/img_icon_green_500.svg", number: "2,245,341", label: "Members" },
    { icon: "/images/img_icon_green_500_33x33.svg", number: "46,328", label: "Clubs" },
    { icon: "/images/img_icon_33x33.svg", number: "828,867", label: "Event Bookings" },
    { icon: "/images/img_icon_1.svg", number: "1,926,436", label: "Payments" },
  ];

  return (
    <section>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <img 
              src="/images/img_frame_35.svg" 
              alt="Case Study Illustration" 
              className="max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-[#4d4d4d] mb-4">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="text-[#717171] text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
            <Button variant="primary" className="rounded-sm">
              Learn More
            </Button>
          </div>
        </div>

        <div className="bg-[#f5f7f9] py-10 rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 px-6 mb-6 md:mb-0">
              <h2 className="text-2xl font-semibold text-[#4d4d4d] mb-2">
                Helping a local <span className="text-[#4caf4f]">business reinvent itself</span>
              </h2>
              <p className="text-[#18191f] text-sm">
                We reached here with our hard work and dedication
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 gap-6 px-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start">
                  <img src={stat.icon} alt="Icon" className="w-8 h-8 mr-3" />
                  <div>
                    <p className="text-lg font-bold text-[#4d4d4d]">{stat.number}</p>
                    <p className="text-xs text-[#717171]">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 order-2 md:order-1">
            <img 
              src="/images/img_vector.svg" 
              alt="Mobile App" 
              className="max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-2xl font-semibold text-[#4d4d4d] mb-4">
              How to design your site footer like we did
            </h2>
            <p className="text-[#717171] text-sm mb-6">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>
            <Button variant="primary" className="rounded-sm">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;