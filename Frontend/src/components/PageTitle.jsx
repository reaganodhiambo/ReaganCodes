import React from 'react';
import { Helmet } from 'react-helmet-async';


const PageTitle = ({ title, description }) => {
  const baseTitle = 'Reagan Codes';
  // Special case for home page to avoid "Home | Reagan Codes" and just use "Reagan Codes"
  const fullTitle = !title || title === "Home" ? baseTitle : `${title} | ${baseTitle}`;
  
  // Default description if none provided
  const defaultDescription = "Reagan Codes - Software developer creating exceptional digital experiences with React, Django, and modern web technologies.";
  const metaDescription = description || defaultDescription;

  // Get current URL for canonical
  const currentUrl = typeof window !== 'undefined' ? window.location.href.split('?')[0] : '';
  // Base domain for canonical URLs
  const baseUrl = 'https://reagancodes.com';
  // Construct canonical URL - use current URL or fallback to baseUrl
  const canonicalUrl = currentUrl || baseUrl;

  return (
    <Helmet>
      <title data-react-helmet="true">{fullTitle}</title>
      <meta name="description" content={metaDescription} data-react-helmet="true" />
      <link rel="canonical" href={canonicalUrl} data-react-helmet="true" />
      
      {/* Open Graph tags for social sharing */}
      <meta property="og:title" content={fullTitle} data-react-helmet="true" />
      <meta property="og:description" content={metaDescription} data-react-helmet="true" />
      <meta property="og:url" content={canonicalUrl} data-react-helmet="true" />
      <meta property="og:type" content="website" data-react-helmet="true" />
      
      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary" data-react-helmet="true" />
      <meta name="twitter:title" content={fullTitle} data-react-helmet="true" />
      <meta name="twitter:description" content={metaDescription} data-react-helmet="true" />
    </Helmet>
  );
};

export default PageTitle; 