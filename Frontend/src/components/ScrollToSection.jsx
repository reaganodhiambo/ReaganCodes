import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = () => {
  const { hash } = useLocation();
  
  useEffect(() => {
    // If there is a hash in the URL (e.g., /#contact)
    if (hash) {
      // Remove the # symbol
      const id = hash.replace('#', '');
      
      // Find the element by id and scroll to it
      const element = document.getElementById(id);
      if (element) {
        // Small delay to ensure the DOM is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]); // Re-run when hash changes
  
  return null;
};

export default ScrollToSection; 