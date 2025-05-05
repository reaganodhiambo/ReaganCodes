import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Logo from '../components/Logo';
import PageMeta from '../components/PageMeta';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark-background text-white py-16 px-4">
      <PageMeta 
        title="404 - Page Not Found"
        description="Oops! The page you're looking for doesn't exist or has been moved. Return to Reagan Codes to explore software development projects and services."
      />
      
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <Logo size="xl" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-sky-blue">404</h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">Page Not Found</h2>
        
        <div className="mb-10">
          <p className="text-neutral-gray text-lg md:text-xl max-w-xl mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button variant="filled" to="/">
            Back to Home
          </Button>
          <Button variant="outlined" to="/contact">
            Contact Me
          </Button>
        </div>
        
        <div className="mt-12 text-neutral-gray">
          <p className="text-sm">
            Lost? Check out my <Link to="/projects" className="text-sky-blue hover:underline">projects</Link> or 
            learn more <Link to="/about" className="text-sky-blue hover:underline">about me</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 