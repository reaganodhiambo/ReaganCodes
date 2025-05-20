import React from 'react';
import Button from '../components/Button';
import PageMeta from '../components/PageMeta';
import { works } from '../assets/data';
import reagan from '../assets/images/reagan.png';
import {motion} from "motion/react"
import CodingLanguages from '../components/CodingLanguages';

const Home = () => {
  
  
  return (
    <div className="bg-dark-background min-h-screen">
      <PageMeta 
        title="Home"
        description="I'm Reagan Odhiambo, a full-stack software developer and I transform ideas into exceptional digital experiences that engage users and drive growth."
        keywords="freelance developer, full stack developer, React developer, Django developer, web development Nairobi, software engineer, frontend developer, backend developer, JavaScript expert, Python developer, UI/UX designer"
      />
      
      {/* Hero Section */}
      <section className="relative md:py-20 py-10 bg-dark-background min-h-[92vh] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2  gap-12 items-center">
            <div className="text-left">
              <p className='text-2xl mb-4 '>Hello, My Name is</p>
              <h1 className="text-4xl md:text-7xl font-medium mb-6">Reagan
                <span className="text-sky-blue"> Odhiambo</span>
              </h1>
              <p className="text-2xl mb-8 md:mb-16">
                A full stack software developer and I transform ideas into exceptional digital experiences.
              </p>
              <div className="flex gap-4 md:gap-8 justify-around md:justify-start items-center">
                <Button variant='outlined' to="/projects">
                  View Projects
                </Button>
                <Button variant="outlined" to="/contact">
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src={reagan}
                  alt="Reagan Odhiambo"
                  className="w-full h-full object-cover rounded-full shadow-lg border-b-3 border-sky-blue"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="flex flex-col md:pt-0 md:items-center mb-12">
            <h2 className="text-4xl md:text-6xl font-semibold mb-4 text-sky-blue">
              about<span className='text-sky-blue'>/</span>me
            </h2>
            <p className="text-xl mb-6 max-w-3xl md:text-center">
              The rare combination of a tech geek, problem solver, and sports enthusiast. When I'm not turning coffee into code, I'm out playing rollball.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-neutral-gray text-lg mb-8">
                I'm that dev who actually enjoys finding bugs — it's like being a detective, but the culprit is usually a missing semicolon. Based in Nairobi but my code runs worldwide.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-4 border border-neutral-gray rounded-lg hover:border-sky-blue transition-all bg-card">
                  <h3 className="text-2xl font-bold text-sky-blue mb-2">4+ years</h3>
                  <p className="text-neutral-gray">Professional Experience</p>
                </div>
                <div className="p-4 border border-neutral-gray rounded-lg hover:border-sky-blue transition-all bg-card">
                  <h3 className="text-2xl font-bold text-sky-blue mb-2">30+</h3>
                  <p className="text-neutral-gray">Completed Projects</p>
                </div>
              </div>
              <div className="flex justify-center md:justify-start">
                <Button variant="outlined" to="/about">Read More About Me</Button>
              </div>
            </div>
            <div className="relative order-first md:order-last flex justify-center">
              <img
                src={reagan}
                alt="Reagan Odhiambo"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-b-4 border-sky-blue"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4 bg-dark-background">
        <div className="container mx-auto">
          <div className="flex flex-col md:min-h-[30vh] md:p-8 md:items-center md:justify-center mb-12">
            <h2 className="text-4xl md:text-6xl font-semibold mb-4 text-sky-blue">
              expertise<span className='text-sky-blue'>/</span>
            </h2>
            <p className="text-xl mb-6 max-w-3xl md:text-center">
              Areas where I can help transform your ideas into reality, from concept to deployment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Web Development",
                description: "Full-stack web applications using Django and React. Custom solutions tailored to your specific business needs.",
                icon: "💻"
              },
              {
                title: "WordPress Solutions",
                description: "Custom WordPress websites, theme development, plugin customization, and SEO optimization for better visibility.",
                icon: "🌐"
              },
              {
                title: "Data Analysis",
                description: "Data visualization dashboards, analytics reporting, and insights generation using Python, SQL, and PowerBI.",
                icon: "📊"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 border border-neutral-gray rounded-lg hover:border-sky-blue transition-all bg-card"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="flex flex-col md:min-h-[30vh] md:p-8 md:items-center md:justify-center mb-12">
            <h2 className="text-4xl md:text-6xl font-semibold mb-4 text-sky-blue">
              projects<span className='text-sky-blue'>/</span>
            </h2>
            <p className="text-xl mb-6 max-w-3xl md:text-center">
              Recent work that showcases my skills and approach to development challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {works.slice(0, 3).map((project, index) => (
              <div
                key={index}
                className="bg-dark-background rounded-lg overflow-hidden border border-gray-700 hover:border-sky-blue transition-all flex flex-col h-full"
              >
                <div className="h-48 bg-gray-800"></div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.description.split(', ').map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-card text-xs px-2 py-1 rounded text-neutral-gray border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-neutral-gray mb-6">{project.details}</p>
                  
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
          
          <div className="flex justify-center">
            <Button variant="outlined" to="/projects">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-8 px-4 bg-dark-background">
        <div className="container mx-auto">
          <div className="flex flex-col md:min-h-[30vh] md:p-8 md:items-center md:justify-center mb-12">
            <h2 className="text-4xl md:text-6xl font-semibold mb-4 text-sky-blue">
              skills<span className='text-sky-blue'>/</span>
            </h2>
            <p className="text-xl mb-6 max-w-3xl md:text-center">
              My technical toolbox that I use to build amazing digital experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="bg-card rounded-lg p-6 border border-gray-700 hover:border-sky-blue transition-all">
              <h3 className="font-bold mb-4 border-b border-gray-700 pb-2">Languages</h3>
              <ul className="text-neutral-gray space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>Python
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>HTML/CSS
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-6 border border-gray-700 hover:border-sky-blue transition-all">
              <h3 className="font-bold mb-4 border-b border-gray-700 pb-2">Frameworks</h3>
              <ul className="text-neutral-gray space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>Django
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>React
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>Bootstrap
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-6 border border-gray-700 hover:border-sky-blue transition-all">
              <h3 className="font-bold mb-4 border-b border-gray-700 pb-2">Databases</h3>
              <ul className="text-neutral-gray space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>MySQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>PostgreSQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>MongoDB
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-6 border border-gray-700 hover:border-sky-blue transition-all">
              <h3 className="font-bold mb-4 border-b border-gray-700 pb-2">Tools</h3>
              <ul className="text-neutral-gray space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>Git & GitHub
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>Excel & PowerBI
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>WordPress
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>CPanel
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coding Languages Ticker Section */}
        <CodingLanguages />

      {/* Contact Section */}
      <section className="py-16 px-4 bg-card text-center">
        <div className="container mx-auto">
          <div className="flex flex-col md:min-h-[30vh] md:p-8 md:items-center md:justify-center mb-12">
            <h2 className="text-4xl md:text-6xl font-semibold mb-4 text-sky-blue">
              contact<span className='text-sky-blue'>/</span>me
            </h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Interested in working together? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center mb-16 mx-auto">
            <Button variant="filled" to="/contact" size="large">
              Contact Me
            </Button>
            <Button variant="outlined" href="mailto:hello@reagancodes.com" size="large">
              Send Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;