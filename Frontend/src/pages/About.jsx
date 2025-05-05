import React from 'react';
import { FaCode, FaCoffee, FaSkating, FaLaptopCode, FaPuzzlePiece, FaRegLightbulb } from 'react-icons/fa';
import Button from '../components/Button';
import PageMeta from '../components/PageMeta';
import reagan from '../assets/images/reagan.png';

const About = () => {
  return (
    <main className="bg-dark-background min-h-screen py-16 px-4">
      <PageMeta 
        title="About Me"
        description="Meet Reagan, a Nairobi-based freelance developer who transforms business problems into elegant solutions. As a digital architect, I create experiences rather than buildings, crafting digital spaces that engage and inspire."
      />
      
      <div className="container mx-auto">
        <div className="flex flex-col md:min-h-[40vh] md:p-8 md:items-center md:justify-center">
          <h1 className="text-4xl md:text-8xl font-semibold mb-4 text-sky-blue">
            about<span className='text-sky-blue'>/</span>me
          </h1>
          <p className="text-xl mb-12 max-w-3xl">
            The rare combination of a tech geek, problem solver, and sports enthusiast. 
            When I'm not busy turning coffee into code, I'm usually out playing rollball or skating through the streets of Nairobi.
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">Reagan <span className="text-sky-blue">Odhiambo</span></h2>
            <div className="bg-card rounded-lg p-8 border border-gray-700 mb-6">
              <p className="mb-4">
                I'm that dev who actually enjoys finding bugs — it's like being a detective, but the culprit is usually a missing semicolon.
              </p>
              <p className="mb-4">
                I transform business problems into elegant solutions as a versatile full-stack developer. Think of me as a digital architect, but instead of buildings, I create experiences.
              </p>
              <p>
                Based in Nairobi but my code runs worldwide. Freelancer by choice because I like variety — and working in pajamas.
              </p>
            </div>
            <div className="flex gap-4 justify-around">
              <Button variant="filled" to="/projects">See My Work</Button>
              <Button variant="outlined" to="/contact">Get In Touch</Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={reagan}
              alt="Reagan Odhiambo"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-b-4 border-sky-blue"
            />
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-sky-blue">tech<span className="text-white">/</span>stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6 border border-gray-700 hover:border-sky-blue transition-all">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Languages</h3>
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
              <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Frameworks</h3>
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
              </ul>
            </div>
            <div className="bg-card rounded-lg p-6 border border-gray-700 hover:border-sky-blue transition-all">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Databases</h3>
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
              <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Tools</h3>
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
              </ul>
            </div>
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-sky-blue">fun<span className="text-white">/</span>facts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Code Whisperer",
                description: "I talk to my code. Sometimes it talks back. That's usually when I know it's time for more coffee.",
                icon: <FaCode className="text-sky-blue text-4xl" />
              },
              {
                title: "Coffee-Powered",
                description: "My blood type is probably caffeine+. I'm pretty sure my best code has been written between cups 3 and 4.",
                icon: <FaCoffee className="text-sky-blue text-4xl" />
              },
              {
                title: "Rollball MVP",
                description: "Proud MVP of the Kenya Rollball League for the 2024/2025 season. I roll on wheels as smoothly as I roll out code.",
                icon: <FaSkating className="text-sky-blue text-4xl" />
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 border border-neutral-gray rounded-lg hover:border-sky-blue transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="mb-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-card rounded-lg p-8 border border-gray-700 mb-16 text-center">
          <FaRegLightbulb className="text-sky-blue text-4xl mx-auto mb-4" />
          <blockquote className="text-2xl italic mb-4">
            "I don't always test my code, but when I do, I do it in production."
          </blockquote>
          <p className="text-sky-blue">— Me, just kidding (maybe)</p>
        </div>

        {/* Skills Summary */}
        <div className="bg-card rounded-lg p-8 border border-gray-700 mb-16">
          <div className="flex items-center gap-4 mb-6">
            <FaLaptopCode className="text-sky-blue text-4xl" />
            <h2 className="text-3xl font-bold">Skills<span className="text-sky-blue">/</span>Summary</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">What I'm Good At</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>
                  Building full-stack web applications that solve real problems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>
                  Turning coffee into functional, beautiful code
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>
                  Finding creative solutions to complex problems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>
                  Making technical concepts easy to understand
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">What I'm Still Learning</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>
                  The art of estimating project time accurately
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>
                  Resisting the urge to refactor everything
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>
                  Walking away from the computer occasionally
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-blue">●</span>
                  Not getting distracted by shiny new technologies
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Ready to work together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            If you're looking for a developer who brings both technical skills and a unique perspective to the table, let's connect!
          </p>
          <Button variant="filled" to="/contact" size="large">
            Let's Work Together
          </Button>
        </div>
      </div>
    </main>
  );
};

export default About; 