import React from 'react';
import Card from '../../components/common/Card';

const ValuePropositionSection = () => {
  const valueCards = [
    {
      icon: "/images/img_icon_green_50.svg",
      title: "Membership Organisations",
      description: "Our membership management software provides full automation of membership renewals and payments"
    },
    {
      icon: "/images/img_icon_green_50_38x45.svg",
      title: "National Associations",
      description: "Our membership management software provides full automation of membership renewals and payments"
    },
    {
      icon: "/images/img_icon_38x45.svg",
      title: "Clubs And Groups",
      description: "Our membership management software provides full automation of membership renewals and payments"
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-[#4d4d4d] text-center mb-2">
          Manage your entire community in a single system
        </h2>
        <p className="text-[#717171] text-center text-sm mb-10">
          Who is Nextcent suitable for?
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueCards.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              className="h-full shadow-[0px_1px_2px_rgba(171,190,209,0.2)] rounded-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;