import React from 'react';
import { works } from '../assets/data';
import Button from '../components/Button';
import PageMeta from '../components/PageMeta';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <main className="bg-dark-background">
      <PageMeta 
        title="Projects"
        description="Explore my portfolio of web development projects showcasing my expertise and see how I solve real-world problems through code."
        keywords="web development portfolio, React projects, Django projects, full stack applications, freelance developer projects, web apps, responsive design, UI/UX portfolio, code samples, development case studies"
      />

      {/* Hero Section */}
      <section className="section-full bg-dark-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="mb-8">
              projects<span className='text-sky-blue'>/</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-gray max-w-4xl mx-auto leading-relaxed">
              Here's a showcase of real-world projects I've developed for clients. Each project demonstrates my approach 
              to solving business challenges with elegant digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-large bg-card-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {works.map((project, index) => (
                <div 
                  key={index}
                  className="card-elevated group flex flex-col h-full"
                >
                  {/* Project Header */}
                  <div className="h-48 relative overflow-hidden rounded-lg mb-6 bg-gradient-to-br from-sky-blue/20 to-dark-background flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/10 to-transparent"></div>
                    <div className="z-10 text-2xl font-semibold text-center text-white px-4">{project.title}</div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">{project.title}</h3>
                    
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.description.split(', ').map((tech, i) => (
                        <span 
                          key={i} 
                          className="bg-dark-background text-xs px-3 py-1 rounded-full text-neutral-gray border border-gray-700/50 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-neutral-gray mb-8 leading-relaxed flex-1">{project.details}</p>
                    
                    {/* Buttons */}
                    <div className="flex gap-3">
                      <Button variant="filled" size="small" href={project.live} isExternal={true}>
                        <FaExternalLinkAlt className="text-sm" />
                        Live Demo
                      </Button>
                      
                      {project.code ? (
                        <Button variant="outlined" size="small" href={project.code} isExternal={true}>
                          <FaGithub className="text-sm" />
                          Source Code
                        </Button>
                      ) : (
                        <Button variant="ghost" size="small" disabled={true}>
                          Private Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Profile */}
      <section className="section-medium bg-dark-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-elevated text-center">
              <FaGithub className="text-6xl mx-auto mb-8 text-sky-blue" />
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">View More on GitHub</h2>
              <p className="text-lg md:text-xl text-neutral-gray mb-12 leading-relaxed max-w-3xl mx-auto">
                Explore more of my open-source projects and code contributions on GitHub. While many client projects have private 
                codebases, my GitHub showcases my personal projects and coding skills.
              </p>
              <Button 
                variant="filled" 
                href="https://github.com/reaganodhiambo" 
                isExternal={true}
                size="large"
                glow
              >
                <FaGithub className="text-lg" />
                Visit My GitHub Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-large bg-card-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-elevated text-center">
              <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-sky-blue">
                Want to work together?
              </h2>
              <p className="text-lg md:text-xl text-neutral-gray mb-12 leading-relaxed max-w-3xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button variant="filled" to="/contact" size="large" glow>
                  Contact Me
                </Button>
                <Button variant="outlined" href="mailto:hello@reagancodes.com" size="large">
                  Send Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;