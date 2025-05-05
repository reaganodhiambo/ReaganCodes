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
  disabled = false,
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
    filled: "bg-sky-blue text-white hover:bg-opacity-90",
    outlined: "border border-sky-blue text-white hover:bg-sky-blue hover:text-white"
  };
  
  // Disabled styles
  const disabledStyle = disabled ? "opacity-50 cursor-not-allowed" : "";
  
  // Combine all styles
  const buttonClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyle} ${className}`;
  
  // If href is provided and not disabled, render an anchor tag
  if (href && !disabled) {
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
  
  // If to is provided and not disabled, render a Link component from react-router-dom
  if (to && !disabled) {
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
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 