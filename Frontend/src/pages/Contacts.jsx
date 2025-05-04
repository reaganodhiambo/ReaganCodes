import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaInstagram } from 'react-icons/fa';
import PageTitle from '../components/PageTitle';

const Contacts = () => {
  return (
    <main className="bg-dark-background min-h-screen py-16 px-4">
      <PageTitle title="Contact Me" description="Get in touch with Reagan Odhiambo for web development projects and collaborations" />
      
      <div className="container mx-auto">
        <div className="flex flex-col md:min-h-[40vh] md:p-8 md:items-center md:justify-center">
          <h1 className="text-4xl md:text-8xl font-semibold mb-4 text-accent-purple">
            contacts<span className='text-accent-purple'>/</span>
          </h1>
          <p className="text-xl mb-12 max-w-3xl">
            I'm interested in freelance opportunities and collaborations.
            If you have any questions or would like to work together, feel free to reach out!
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Email",
                description: "For project inquiries or general questions, reach out to me via...",
                icon: <FaEnvelope className="text-accent-purple text-4xl" />,
                contact: "hello@reagancodes.com",
                link: "mailto:hello@reagancodes.com"
              },
              {
                title: "Phone",
                description: "Feel free to schedule a call for project discussions.",
                icon: <FaPhone className="text-accent-purple text-4xl" />,
                contact: "+254 111 224 642",
                link: "tel:+254111224642"
              },
              {
                title: "Location",
                description: "Based in Nairobi, Kenya but available for remote work.",
                icon: <FaMapMarkerAlt className="text-accent-purple text-4xl" />,
                contact: "Nairobi, Kenya",
                link: null
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 border border-neutral-gray rounded-lg hover:border-accent-purple transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="mb-4">{item.description}</p>
                {item.link ? (
                  <a href={item.link} className="text-accent-purple hover:underline text-xl">
                    {item.contact}
                  </a>
                ) : (
                  <span className="text-accent-purple text-xl">{item.contact}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-card rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Message Me</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-neutral-gray mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-dark-background border border-gray-700 rounded-lg p-3 text-white focus:border-accent-purple focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-neutral-gray mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-dark-background border border-gray-700 rounded-lg p-3 text-white focus:border-accent-purple focus:outline-none"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-neutral-gray mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full bg-dark-background border border-gray-700 rounded-lg p-3 text-white focus:border-accent-purple focus:outline-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-accent-purple hover:bg-opacity-90 transition-all text-white px-6 py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <div className="bg-card rounded-lg p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold mb-6">Stay Updated</h2>
              <p className="mb-6">
                Subscribe to my newsletter for web development tips, project updates, and exclusive content on React, Django, and more.
              </p>
              <form className="space-y-4">
                <div>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-dark-background border border-gray-700 rounded-lg p-3 text-white focus:border-accent-purple focus:outline-none"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-2 bg-accent-purple hover:bg-opacity-90 transition-all text-white px-6 py-3 rounded-lg"
                >
                  <FaPaperPlane />
                  <span>Subscribe</span>
                </button>
              </form>
              <p className="text-xs mt-4">
                I respect your privacy. Unsubscribe at any time.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-gray-700 ">
              <h2 className="text-2xl font-bold mb-6 md:pb-12">Connect with Me</h2>
              <div className="flex gap-6">
                <a 
                  href="https://github.com/reaganodhiambo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-gray hover:text-accent-purple"
                >
                  <FaGithub className="text-3xl" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/reaganodhiambo404/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-gray hover:text-accent-purple"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
                <a 
                  href="https://twitter.com/fadh3lah" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-gray hover:text-accent-purple"
                >
                  <FaTwitter className="text-3xl" />
                </a>
                <a 
                  href="https://www.instagram.com/fadh3lah" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-gray hover:text-accent-purple"
                >
                  <FaInstagram className="text-3xl" />
                </a>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contacts; 