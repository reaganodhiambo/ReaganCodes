import React from 'react';
import Button from '../components/Button';
import { works, services } from '../assets/data';

const LandingPage = () => {
  return (
    <main className="bg-dark-background min-h-screen text-white font-fira">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex-1 flex flex-col justify-center items-start h-full">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Reagan is a <span className="text-accent-purple">Django developer</span> and <span className="text-accent-purple">React specialist</span>
              </h1>
              <p className="text-neutral-gray mb-6 max-w-xl">
                I create custom web solutions for businesses and individuals, specializing in Django backends and React frontends with Tailwind CSS. From concept to deployment, I bring your digital vision to life.
              </p>
              <div className="flex gap-4">
                <Button variant="filled" to="/projects">View Portfolio</Button>
                <Button variant="outlined" to="/contacts">Contact Me</Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center h-full">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=400&q=80" alt="Profile" className="rounded-xl w-64 h-64 object-cover shadow-lg border-2 border-accent-purple" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="min-h-[90vh] flex items-center justify-center py-12 px-4 md:px-16 border-b border-gray-700">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-accent-purple">#projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {works.slice(0, 3).map((project, index) => (
              <div key={index} className="bg-[#23232b] rounded-lg p-6 border border-gray-700 hover:border-accent-purple transition-all">
                <div className="h-40 bg-gray-800 rounded mb-4"></div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-neutral-gray text-sm mb-4">{project.description}</p>
                <p className="text-neutral-gray text-sm mb-4">{project.details}</p>
                <div className="flex gap-2">
                  <Button variant="filled" size="small" href={project.live}>Live</Button>
                  <Button variant="outlined" size="small" href={project.code}>Code</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outlined" to="/projects">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-[90vh] flex items-center justify-center py-12 px-4 md:px-16 border-b border-gray-700">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-accent-purple">#services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#23232b] rounded-lg p-8 border border-gray-700 hover:border-accent-purple transition-all">
                <div className="text-4xl mb-6 text-accent-purple">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="min-h-[90vh] flex items-center justify-center py-12 px-4 md:px-16 border-b border-gray-700">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-accent-purple">#skills</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-[#23232b] rounded-lg p-6 border border-gray-700 hover:border-accent-purple transition-all">
              <h3 className="font-bold mb-4 border-b border-gray-700 pb-2">Languages</h3>
              <ul className="text-neutral-gray space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-accent-purple">●</span>Python
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-purple">●</span>JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-purple">●</span>HTML/CSS
                </li>
              </ul>
            </div>
            <div className="bg-[#23232b] rounded-lg p-6 border border-gray-700 hover:border-accent-purple transition-all">
              <h3 className="font-bold mb-4 border-b border-gray-700 pb-2">Frameworks</h3>
              <ul className="text-neutral-gray space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-accent-purple">●</span>Django
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-purple">●</span>React
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-purple">●</span>Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-purple">●</span>Bootstrap
                </li>
              </ul>
            </div>
            <div className="bg-[#23232b] rounded-lg p-6 border border-gray-700 hover:border-accent-purple transition-all">
              <h3 className="font-bold mb-4 border-b border-gray-700 pb-2">Databases</h3>
              <ul className="text-neutral-gray space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-accent-purple">●</span>MySQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-purple">●</span>PostgreSQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-purple">●</span>MongoDB
                </li>
              </ul>
            </div>
            <div className="bg-[#23232b] rounded-lg p-6 border border-gray-700 hover:border-accent-purple transition-all">
              <h3 className="font-bold mb-4 border-b border-gray-700 pb-2">Tools</h3>
              <ul className="text-neutral-gray space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-accent-purple">●</span>Git & GitHub
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-purple">●</span>Excel & PowerBI
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-purple">●</span>WordPress
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-purple">●</span>CPanel
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="min-h-[90vh] flex items-center justify-center py-12 px-4 md:px-16">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="flex-1 flex flex-col justify-center items-start">
            <h2 className="text-2xl font-bold mb-6 text-accent-purple">#about-me</h2>
            <p className="text-neutral-gray mb-6">
              I'm Reagan, a freelance Software Developer based in Nairobi with expertise in Python (Django) and React, specializing in full-stack web development. I create custom solutions for businesses ranging from e-commerce platforms to data visualization tools.
            </p>
            <p className="text-neutral-gray mb-6">
              With a Bachelor's in Computer Science from Kenyatta University and training in Data Science from ALX, I combine strong technical skills with analytical thinking to deliver high-quality digital solutions.
            </p>
            <Button variant="filled" to="/about">Read More</Button>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=400&q=80" alt="About Me" className="rounded-xl w-64 h-64 object-cover shadow-lg border-2 border-accent-purple" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage; 