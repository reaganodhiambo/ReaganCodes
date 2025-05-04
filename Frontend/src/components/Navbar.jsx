import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import { navItems } from '../assets/data';
import Logo from './Logo';
import CV from '../assets/Reagan-Odhiambo-CV.pdf';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-dark-background/90 backdrop-blur-sm text-white py-3 px-3 sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <Logo size="responsive" />
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white focus:outline-none hover:text-accent-purple transition-colors"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6 font-light" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors font-medium ${
                    isActive ? 'text-white' : 'text-neutral-gray hover:text-accent-purple'
                  }`
                }
                end={item.path === '/'}
              >
                <span className='text-accent-purple'>#</span>{item.name}
              </NavLink>
            ))}
            <a 
              href={CV} 
              download="Reagan-Odhiambo-CV.docx"
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-accent-purple text-accent-purple px-6 py-2 rounded hover:bg-accent-purple hover:text-white transition-all"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-dark-background flex flex-col items-center justify-center z-50 min-h-screen">
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
            >
              <FaTimes />
            </button>
           <div className="logo mb-8">
            <Logo size="lg" />
           </div>
            <ul className="flex flex-col gap-8 text-2xl">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={`transition-colors font-semibold ${
                    location.pathname === item.path ? 'text-white' : 'text-neutral-gray hover:text-accent-purple'
                  }`}
                  onClick={() => setIsOpen(false)}
                  end={item.path === '/'}
                >
                  <span className='text-accent-purple'>#</span>{item.name}
                </NavLink>
              ))}
            </ul>
            <div className="flex flex-col gap-4 mt-12 w-72 px-8">
              <a 
                href="/Reagan-Odhiambo-CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-accent-purple text-accent-purple px-6 py-2 rounded hover:bg-accent-purple hover:text-white transition-all w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
              <div className="flex gap-8 justify-center items-center text-3xl mt-12">
                <a href="https://www.linkedin.com/in/reaganodhiambo404/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className='hover:text-accent-purple transition-all' />
                </a>
                <a href="https://github.com/reaganodhiambo" target="_blank" rel="noopener noreferrer">
                  <FaGithub className='hover:text-accent-purple transition-all' />
                </a>
                <a href="https://www.instagram.com/fadh3lah/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className='hover:text-accent-purple transition-all' />
                </a>
                <a href="https://www.twitter.com/reaganodhiambo/" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className='hover:text-accent-purple transition-all' />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;