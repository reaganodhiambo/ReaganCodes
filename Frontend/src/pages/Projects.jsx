import React from 'react';
import { works } from '../assets/data';
import Button from '../components/Button';
import PageTitle from '../components/PageTitle';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <main className="bg-dark-background min-h-screen py-16 px-4">
      <PageTitle title="Projects" description="View my portfolio of web development projects" />
      
      <div className="container mx-auto">
        <div className="flex flex-col md:min-h-[30vh] md:p-8 md:items-center md:justify-center mb-12">
          <h1 className="text-4xl md:text-8xl font-semibold mb-4 text-accent-purple">
            projects<span className='text-accent-purple'>/</span>
          </h1>
          <p className="text-xl mb-6 max-w-3xl">
            Here's a showcase of my work across web development, WordPress, and data projects. Each project 
            demonstrates my skills in creating tailored solutions for various needs.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg overflow-hidden border border-gray-700 hover:border-accent-purple transition-all flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="h-48 bg-gray-800 relative overflow-hidden group">
                <div className="absolute inset-0 bg-accent-purple bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-dark-background p-3 rounded-full hover:bg-accent-purple transition-colors"
                    >
                      <FaGithub className="text-white text-xl" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-dark-background p-3 rounded-full hover:bg-accent-purple transition-colors"
                    >
                      <FaExternalLinkAlt className="text-white text-xl" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.description.split(', ').map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-dark-background text-xs px-2 py-1 rounded text-neutral-gray border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-neutral-gray mb-6">{project.details}</p>
                
                {/* Buttons */}
                <div className="flex gap-2 mt-auto">
                  <Button variant="filled" size="small" href={project.live} isExternal={true}>
                    Live Demo
                  </Button>
                  <Button variant="outlined" size="small" href={project.code} isExternal={true}>
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-card rounded-lg p-8 border border-gray-700">
          <h2 className="text-3xl font-bold mb-6 text-accent-purple">
            Want to work together?
          </h2>
          <p className="text-neutral-gray mb-8 max-w-3xl">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Let's create something amazing together!
          </p>
          <div className="flex gap-4">
            <Button variant="filled" to="/contact">
              Contact Me
            </Button>
            <Button variant="outlined" href="mailto:hello@reagancodes.com">
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects; 