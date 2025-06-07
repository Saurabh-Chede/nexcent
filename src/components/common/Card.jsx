import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ 
  title, 
  description, 
  icon, 
  className = '',
  children
}) => {
  return (
    <div className={`bg-white rounded-md shadow-sm p-4 ${className}`}>
      {icon && (
        <div className="flex justify-center mb-4">
          <img src={icon} alt={title} className="h-12" />
        </div>
      )}
      
      {title && (
        <h3 className="text-lg font-bold text-[#4d4d4d] text-center mb-2">{title}</h3>
      )}
      
      {description && (
        <p className="text-[#717171] text-sm text-center">{description}</p>
      )}
      
      {children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Card;