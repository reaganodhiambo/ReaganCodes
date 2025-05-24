import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/reagan-codes-favicon-color.png';

const Logo = ({ size = 'responsive', showText = true, linkTo = '/' }) => {
  // Size variants
  const sizes = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10',
    xl: 'h-12 w-12',
    // Responsive size that changes based on screen size
    responsive: 'h-8 w-8 md:h-10 md:w-10'
  };
  
  // Text size variants
  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
    // Responsive text size
    responsive: 'text-2xl md:text-4xl'
  };

  const logoImage = (
    <img 
      src={logo} 
      alt="ReaganCodes Logo" 
      className={sizes[size] || sizes.responsive} 
    />
  );

  // If we don't need a link
  if (linkTo === null) {
    return (
      <div className="flex items-center gap-2">
        {logoImage}
        {showText && <h1 className={`${textSizes[size] || textSizes.responsive} font-semibold`}>ReaganCodes.</h1>}
      </div>
    );
  }

  // Default with link
  return (
    <Link to={linkTo} className="flex items-center gap-2">
      {logoImage}
      {showText && <h2 className={`${textSizes[size] || textSizes.responsive} font-bold`}>Reagan<span className='text-sky-blue'>Codes.</span></h2>}
    </Link>
  );
};

export default Logo;