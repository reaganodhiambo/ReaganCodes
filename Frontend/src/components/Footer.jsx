import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { navItems } from '../assets/data';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-dark-background text-white py-12 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
          {/* Brand Section */}
          <div className="mb-8 lg:mb-0 flex flex-col items-center md:items-start">
            <div className="mb-4">
              <Logo size="responsive" />
            </div>
            <p className="text-neutral-gray max-w-lg text-center md:text-left">
              Transforming ideas into exceptional digital experiences.
            </p>
          </div>

          {/* Social  Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/reaganodhiambo" className="text-neutral-gray hover:text-accent-purple" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/reaganodhiambo404/" className="text-neutral-gray hover:text-accent-purple" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/fadh3lah" className="text-neutral-gray hover:text-accent-purple" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="mailto:hello@reagancodes.com" className="text-neutral-gray hover:text-accent-purple" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Navigation Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 md:mb-8 border-t border-gray-700 pt-8 text-center text-neutral-gray">
          <div className="md:col-span-1 flex flex-col items-center">
            <ul className="flex flex-wrap justify-center gap-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-neutral-gray hover:text-accent-purple">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <p>&copy; {new Date().getFullYear()} ReaganCodes. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
