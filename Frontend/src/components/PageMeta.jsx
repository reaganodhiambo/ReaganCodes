import React from 'react';

const PageMeta = ({ title, description }) => {
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
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph tags for social sharing */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/reagan-codes-favicon-color.png" />
      
      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content="/reagan-codes-favicon-color.png" />
    </>
  );
};

export default PageMeta; 