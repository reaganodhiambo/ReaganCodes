import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaInstagram } from 'react-icons/fa';
import PageMeta from '../components/PageMeta';
import Button from '../components/Button';

const Contacts = () => {
  return (
    <main className="bg-dark-background">
      <PageMeta 
        title="Contact"
        description="Get in touch with Reagan for your web development needs. Whether you need a new website, web application, or digital consultation, I'm here to help bring your vision to life."
        keywords="contact developer, hire freelance developer, web development services, React development, Django development, custom web solutions, website consultation, freelance programmer, software development contact, get in touch"
      />
      
      {/* Hero Section */}
      <section className="section-full bg-dark-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="mb-8">
              contacts<span className='text-sky-blue'>/</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-gray max-w-4xl mx-auto leading-relaxed">
              I'm interested in freelance opportunities and collaborations.
              If you have any questions or would like to work together, feel free to reach out!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="section-large bg-card-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Email",
                  description: "For project inquiries or general questions, reach out to me via...",
                  icon: <FaEnvelope className="text-sky-blue text-5xl" />,
                  contact: "hello@reagancodes.com",
                  link: "mailto:hello@reagancodes.com"
                },
                {
                  title: "Phone",
                  description: "Feel free to schedule a call for project discussions.",
                  icon: <FaPhone className="text-sky-blue text-5xl" />,
                  contact: "+254 111 224 642",
                  link: "tel:+254111224642"
                },
                {
                  title: "Location",
                  description: "Based in Nairobi, Kenya but available for remote work.",
                  icon: <FaMapMarkerAlt className="text-sky-blue text-5xl" />,
                  contact: "Nairobi, Kenya",
                  link: null
                }
              ].map((item, index) => (
                <div key={index} className="card-elevated text-center group">
                  <div className="mb-8 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-6">{item.title}</h3>
                  <p className="text-lg mb-6 leading-relaxed">{item.description}</p>
                  {item.link ? (
                    <a href={item.link} className="text-sky-blue hover:underline text-xl font-medium">
                      {item.contact}
                    </a>
                  ) : (
                    <span className="text-sky-blue text-xl font-medium">{item.contact}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Additional Info */}
      <section className="section-large bg-dark-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="card-elevated">
                <h2 className="text-3xl md:text-4xl font-semibold mb-8">Message Me</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-neutral-gray mb-3 text-lg">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-dark-background border border-gray-700/50 rounded-lg p-4 text-white focus:border-sky-blue focus:outline-none transition-colors text-lg"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-neutral-gray mb-3 text-lg">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-dark-background border border-gray-700/50 rounded-lg p-4 text-white focus:border-sky-blue focus:outline-none transition-colors text-lg"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-neutral-gray mb-3 text-lg">Message</label>
                    <textarea 
                      id="message" 
                      rows="6" 
                      className="w-full bg-dark-background border border-gray-700/50 rounded-lg p-4 text-white focus:border-sky-blue focus:outline-none transition-colors text-lg resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button 
                    type="submit" 
                    variant="filled"
                    size="large"
                    glow
                    className="w-full"
                  >
                    <FaPaperPlane />
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="card-elevated">
                  <h2 className="text-3xl md:text-4xl font-semibold mb-8">Stay Updated</h2>
                  <p className="text-lg mb-8 leading-relaxed">
                    Subscribe to my newsletter for web development tips, project updates, and exclusive content on React, Django, and more.
                  </p>
                  <form className="space-y-6">
                    <div>
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full bg-dark-background border border-gray-700/50 rounded-lg p-4 text-white focus:border-sky-blue focus:outline-none transition-colors text-lg"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      variant="filled"
                      size="large"
                      className="w-full"
                    >
                      <FaPaperPlane />
                      Subscribe
                    </Button>
                  </form>
                  <p className="text-sm text-neutral-gray mt-6">
                    I respect your privacy. Unsubscribe at any time.
                  </p>
                </div>

                <div className="card-elevated">
                  <h2 className="text-3xl md:text-4xl font-semibold mb-8">Connect with Me</h2>
                  <div className="flex gap-6 justify-center">
                    <a 
                      href="https://github.com/reaganodhiambo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-gray hover:text-sky-blue transition-colors p-3 rounded-lg hover:bg-sky-blue/10"
                    >
                      <FaGithub className="text-4xl" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/reaganodhiambo404/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-gray hover:text-sky-blue transition-colors p-3 rounded-lg hover:bg-sky-blue/10"
                    >
                      <FaLinkedin className="text-4xl" />
                    </a>
                    <a 
                      href="https://twitter.com/fadh3lah" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-gray hover:text-sky-blue transition-colors p-3 rounded-lg hover:bg-sky-blue/10"
                    >
                      <FaTwitter className="text-4xl" />
                    </a>
                    <a 
                      href="https://www.instagram.com/fadh3lah" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-gray hover:text-sky-blue transition-colors p-3 rounded-lg hover:bg-sky-blue/10"
                    >
                      <FaInstagram className="text-4xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacts;