import React from 'react';


const Footer = () => {
  const companyLinks = [
    { name: 'About us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact us', path: '/contact' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  const supportLinks = [
    { name: 'Help center', path: '/help' },
    { name: 'Terms of service', path: '/terms' },
    { name: 'Legal', path: '/legal' },
    { name: 'Privacy policy', path: '/privacy' },
    { name: 'Status', path: '/status' },
  ];

  const socialIcons = [
    { icon: "/images/img_social_icons.svg", alt: "Instagram" },
    { icon: "/images/img_social_icons_white_a700.svg", alt: "Twitter" },
    { icon: "/images/img_social_icons_white_a700_22x22.svg", alt: "Facebook" },
    { icon: "/images/img_social_icons_22x22.svg", alt: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#263238] text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-center">
            <img src="/images/img_icon_white_a700.svg" alt="Nexcent Icon" className="h-6 w-6" />
            <img src="/images/img_nexcent_white_a700.svg" alt="Nexcent" className="h-4 ml-2" />
          </div>
          
          <p className="text-sm text-[#f5f7f9]">
            Copyright © 2020 Landify UI Kit.<br />
            All rights reserved
          </p>
          
          <div className="flex space-x-4 pt-4">
            {socialIcons.map((social, index) => (
              <a 
                key={index} 
                href="#" 
                className="hover:opacity-80 transition-opacity"
              >
                <img src={social.icon} alt={social.alt} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className="text-sm text-[#f5f7f9] hover:text-[#4caf4f] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className="text-sm text-[#f5f7f9] hover:text-[#4caf4f] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Stay up to date</h3>
          <div className="bg-[#ffffff33] rounded px-2 py-1 flex items-center">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent text-[#d9dbe1] text-sm w-full focus:outline-none"
            />
            <button className="p-1">
              <img src="/images/img_essential_icons_send.svg" alt="Send" className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;