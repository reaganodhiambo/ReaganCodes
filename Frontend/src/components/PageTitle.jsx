import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title, description }) => {
  const baseTitle = 'Reagan Codes';
  const fullTitle = title ? ` ${title} | ${baseTitle}` : baseTitle;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export default PageTitle; 