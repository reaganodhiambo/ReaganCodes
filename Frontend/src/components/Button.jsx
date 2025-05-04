import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'filled', 
  size = 'medium',
  href = null,
  to = null,
  onClick = null,
  className = '',
  isExternal = false,
  ...props 
}) => {
  // Base styles
  const baseStyles = "font-medium transition-all";
  
  // Size variations
  const sizeStyles = {
    small: "px-3 py-1 text-xs",
    medium: "px-6 py-2 text-base",
    large: "px-8 py-3 text-lg"
  };
  
  // Variant styles
  const variantStyles = {
    filled: "bg-accent-purple text-white hover:bg-opacity-90",
    outlined: "border border-accent-purple text-white hover:bg-accent-purple hover:text-white"
  };
  
  // Combine all styles
  const buttonClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;
  
  // If href is provided, render an anchor tag
  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses} 
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  // If to is provided, render a Link component from react-router-dom
  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }
  
  // Otherwise render a regular button
  return (
    <button 
      className={buttonClasses}
      onClick={onClick} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 