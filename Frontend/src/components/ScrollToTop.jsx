import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component scrolls to the top of the page when the route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when path changes
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop; 