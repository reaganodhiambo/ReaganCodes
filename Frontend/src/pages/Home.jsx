import React from 'react';
import Button from '../components/Button';
import PageMeta from '../components/PageMeta';
import { works } from '../assets/data';
import reagan from '../assets/images/reagan.png';
import CodingLanguages from '../components/CodingLanguages';

const Home = () => {
  
  
  return (
    <div className="bg-dark-background">
      <PageMeta 
        title="Home"
        description="I'm Reagan Odhiambo, a full-stack software developer and I transform ideas into exceptional digital experiences that engage users and drive growth."
        keywords="freelance developer, full stack developer, React developer, Django developer, web development Nairobi, software engineer, frontend developer, backend developer, JavaScript expert, Python developer, UI/UX designer"
      />
      
      {/* Hero Section */}
      <section className="section-full bg-dark-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="text-left space-y-6 animate-fade-in">
              <p className='text-xl md:text-2xl text-neutral-gray font-light'>Hello, My Name is</p>
              <h1 className="leading-tight">
                Reagan
                <span className="text-gradient block lg:inline"> Odhiambo</span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-neutral-gray font-light leading-relaxed max-w-2xl">
                A full stack software developer transforming ideas into exceptional digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button variant='filled' to="/projects" size="large" glow>
                  View Projects
                </Button>
                <Button variant="outlined" to="/contact" size="large">
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-blue/20 to-transparent rounded-full blur-3xl"></div>
                <img
                  src={reagan}
                  alt="Reagan Odhiambo"
                  className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4 border-sky-blue/30 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-large bg-card-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-6">
                about<span className='text-sky-blue'>/</span>me
              </h2>
              <p className="text-xl md:text-2xl text-neutral-gray max-w-4xl mx-auto leading-relaxed">
                The rare combination of a tech geek, problem solver, and sports enthusiast. When I'm not turning coffee into code, I'm out playing rollball.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <p className="text-lg md:text-xl text-neutral-gray leading-relaxed">
                  I'm that dev who actually enjoys finding bugs — it's like being a detective, but the culprit is usually a missing semicolon. Based in Nairobi but my code runs worldwide.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="card text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-sky-blue mb-2">4+</h3>
                    <p className="text-neutral-gray font-medium">Years Experience</p>
                  </div>
                  <div className="card text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-sky-blue mb-2">30+</h3>
                    <p className="text-neutral-gray font-medium">Completed Projects</p>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <Button variant="outlined" to="/about" size="large">Read More About Me</Button>
                </div>
              </div>
              <div className="relative order-first lg:order-last flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-blue/20 to-transparent rounded-full blur-2xl"></div>
                  <img
                    src={reagan}
                    alt="Reagan Odhiambo"
                    className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-sky-blue/30"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-large bg-dark-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-6">
                expertise<span className='text-sky-blue'>/</span>
              </h2>
              <p className="text-xl md:text-2xl text-neutral-gray max-w-4xl mx-auto leading-relaxed">
                Areas where I can help transform your ideas into reality, from concept to deployment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
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
                <div key={index} className="card-elevated text-center group">
                  <div className="text-5xl md:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-neutral-gray leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-large bg-card-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-6">
                projects<span className='text-sky-blue'>/</span>
              </h2>
              <p className="text-xl md:text-2xl text-neutral-gray max-w-4xl mx-auto leading-relaxed">
                Recent work that showcases my skills and approach to development challenges.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {works.slice(0, 3).map((project, index) => (
                <div key={index} className="card-elevated group flex flex-col h-full">
                  <div className="h-48 bg-gradient-to-br from-sky-blue/20 to-dark-background rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/10 to-transparent"></div>
                    <h4 className="text-xl font-semibold text-center px-4 relative z-10">{project.title}</h4>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">{project.title}</h3>
                    
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.description.split(', ').map((tech, i) => (
                        <span 
                          key={i} 
                          className="bg-dark-background text-xs px-3 py-1 rounded-full text-neutral-gray border border-gray-700/50 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-neutral-gray mb-6 leading-relaxed flex-1">{project.details}</p>
                    
                    <div className="flex gap-3">
                      <Button variant="filled" size="small" href={project.live} isExternal={true}>
                        Live Demo
                      </Button>
                      {project.code ? (
                        <Button variant="outlined" size="small" href={project.code} isExternal={true}>
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
            
            <div className="text-center">
              <Button variant="outlined" to="/projects" size="large">View All Projects</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-large bg-dark-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-6">
                skills<span className='text-sky-blue'>/</span>
              </h2>
              <p className="text-xl md:text-2xl text-neutral-gray max-w-4xl mx-auto leading-relaxed">
                My technical toolbox that I use to build amazing digital experiences.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-elevated">
                <h3 className="text-xl font-semibold mb-6 border-b border-gray-700/50 pb-3">Languages</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-neutral-gray">Python</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-neutral-gray">JavaScript</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-neutral-gray">HTML/CSS</span>
                  </li>
                </ul>
              </div>
              <div className="card-elevated">
                <h3 className="text-xl font-semibold mb-6 border-b border-gray-700/50 pb-3">Frameworks</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-neutral-gray">Django</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-neutral-gray">React</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-neutral-gray">Tailwind CSS</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-neutral-gray">Bootstrap</span>
                  </li>
                </ul>
              </div>
              <div className="card-elevated">
                <h3 className="text-xl font-semibold mb-6 border-b border-gray-700/50 pb-3">Databases</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-neutral-gray">MySQL</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-neutral-gray">PostgreSQL</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-neutral-gray">MongoDB</span>
                  </li>
                </ul>
              </div>
              <div className="card-elevated">
                <h3 className="text-xl font-semibold mb-6 border-b border-gray-700/50 pb-3">Tools</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-neutral-gray">Git & GitHub</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-neutral-gray">Excel & PowerBI</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-neutral-gray">WordPress</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-neutral-gray">CPanel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coding Languages Ticker Section */}
      <CodingLanguages />

      {/* Contact Section */}
      <section className="section-large bg-card-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">
              contact<span className='text-sky-blue'>/</span>me
            </h2>
            <p className="text-xl md:text-2xl text-neutral-gray mb-12 leading-relaxed">
              Interested in working together? Let's discuss how I can help bring your ideas to life.
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
      </section>
    </div>
  );
};

export default Home;