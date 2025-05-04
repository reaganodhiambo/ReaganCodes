import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Logo from '../components/Logo';
import PageTitle from '../components/PageTitle';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark-background text-white py-16 px-4">
      <PageTitle title="404 - Page Not Found" description="The page you're looking for doesn't exist or has been moved" />
      
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <Logo size="xl" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-accent-purple">404</h1>
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
            Lost? Check out my <Link to="/projects" className="text-accent-purple hover:underline">projects</Link> or 
            learn more <Link to="/about" className="text-accent-purple hover:underline">about me</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 