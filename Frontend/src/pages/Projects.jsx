import React from 'react';
import { works } from '../assets/data';
import Button from '../components/Button';
import PageMeta from '../components/PageMeta';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  // Function to get gradient background for each project
  const getProjectBg = (index) => {
    const gradients = [
      'linear-gradient(135deg, #6366f1 0%, #0ea5e9 100%)', // Indigo to Sky
      'linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)', // Sky to Emerald
      'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)', // Violet to Pink
      'linear-gradient(135deg, #f43f5e 0%, #f97316 100%)', // Rose to Orange
      'linear-gradient(135deg, #10b981 0%, #84cc16 100%)', // Emerald to Lime
      'linear-gradient(135deg, #f97316 0%, #eab308 100%)', // Orange to Yellow
    ];
    return { background: gradients[index % gradients.length] };
  };

  return (
    <main className="bg-dark-background min-h-screen py-16 px-4">
      <PageMeta 
        title="Projects"
        description="Explore my portfolio of web development projects showcasing my expertise and see how I solve real-world problems through code."
        keywords="web development portfolio, React projects, Django projects, full stack applications, freelance developer projects, web apps, responsive design, UI/UX portfolio, code samples, development case studies"
      />

      <div className="container mx-auto">
        <div className="flex flex-col md:min-h-[30vh] md:p-8 md:items-center md:justify-center mb-12">
          <h1 className="text-4xl md:text-8xl font-semibold mb-4 text-sky-blue">
            projects<span className='text-sky-blue'>/</span>
          </h1>
          <p className="text-xl mb-6 max-w-3xl md:text-center">
            Here's a showcase of real-world projects I've developed for clients. Each project demonstrates my approach 
            to solving business challenges with elegant digital solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg overflow-hidden border border-gray-700 flex flex-col h-full shadow-md"
            >
              {/* Project Header */}
              <div 
                className="h-48 relative overflow-hidden flex items-center justify-center" 
                style={getProjectBg(index)}
              >
                <div className="absolute inset-0 bg-dark-background bg-opacity-40"></div>
                <div className="z-10 text-3xl font-bold text-center text-white px-4">{project.title}</div>
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
                  
                  {project.code ? (
                    <Button variant="outlined" size="small" href={project.code} isExternal={true}>
                      Source Code
                    </Button>
                  ) : (
                    <Button variant="outlined" size="small" disabled={true}>
                      Private Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile */}
        <div className="mt-16 mb-16 bg-card rounded-lg p-8 border border-gray-700 text-center">
          <FaGithub className="text-5xl mx-auto mb-4 text-sky-blue" />
          <h2 className="text-3xl font-bold mb-4">View More on GitHub</h2>
          <p className="text-neutral-gray mb-8 max-w-2xl mx-auto">
            Explore more of my open-source projects and code contributions on GitHub. While many client projects have private 
            codebases, my GitHub showcases my personal projects and coding skills.
          </p>
          <Button 
            variant="filled" 
            href="https://github.com/reaganodhiambo" 
            isExternal={true}
          >
            Visit My GitHub Profile
          </Button>
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-card rounded-lg p-8 border border-gray-700 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-6 text-sky-blue text-center">
            Want to work together?
          </h2>
          <p className="text-neutral-gray mb-8 max-w-3xl text-center">
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