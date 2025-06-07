import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Community', path: '/community' },
    { name: 'Blog', path: '/blog' },
    { name: 'Pricing', path: '/pricing' },
  ];

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/img_icon.svg" alt="Nexcent Icon" className="h-6 w-6" />
          <img src="/images/img_nexcent.svg" alt="Nexcent" className="h-4 ml-2" />
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path} 
              className="text-[#4d4d4d] font-medium text-base hover:text-[#4caf4f]"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <Button 
          variant="primary" 
          className="rounded-sm"
          rightIcon={<img src="/images/img_16_arrows_directions_right.svg" alt="arrow" className="w-3 h-3" />}
        >
          Register Now
        </Button>
      </div>
    </header>
  );
};

export default Header;