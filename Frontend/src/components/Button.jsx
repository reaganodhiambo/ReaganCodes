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
  glow = false,
  ...props 
}) => {
  // Base styles with enhanced design
  const baseStyles = "font-medium transition-all duration-300 ease-in-out rounded-lg inline-flex items-center justify-center gap-2 relative overflow-hidden group";
  
  // Size variations with better spacing
  const sizeStyles = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  };
  
  // Enhanced variant styles with better shadows and hover effects
  const variantStyles = {
    filled: `bg-sky-blue text-white hover:bg-sky-blue/90 shadow-lg hover:shadow-xl 
             before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent 
             before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700`,
    outlined: `border-2 border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white 
               shadow-md hover:shadow-lg backdrop-blur-sm`,
    ghost: "text-sky-blue hover:bg-sky-blue/10 hover:text-sky-blue"
  };
  
  // Disabled styles
  const disabledStyle = disabled ? "opacity-50 cursor-not-allowed hover:transform-none" : "hover:scale-105 active:scale-95";
  
  // Glow effect
  const glowStyle = glow && !disabled ? "btn-glow" : "";
  
  // Combine all styles
  const buttonClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyle} ${glowStyle} ${className}`;
  
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