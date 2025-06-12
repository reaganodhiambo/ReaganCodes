import React from 'react';
import { FaCode, FaCoffee, FaSkating, FaLaptopCode, FaRegLightbulb } from 'react-icons/fa';
import Button from '../components/Button';
import PageMeta from '../components/PageMeta';
import reagan from '../assets/images/reagan.png';

const About = () => {
  return (
    <main className="bg-dark-background">
      <PageMeta 
        title="About"
        description="I transform business problems into elegant solutions as a versatile full-stack developer. Think of me as a digital architect, but instead of buildings, I create experiences creating impactful digital solutions."
        keywords="about Reagan Codes, software developer portfolio, full stack developer experience, React expert, Django specialist, web development skills, tech stack, professional background, coding journey, developer expertise"
      />
      
      {/* Hero Section */}
      <section className="section-full bg-dark-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="mb-8">
              about<span className='text-sky-blue'>/</span>me
            </h1>
            <p className="text-xl md:text-2xl text-neutral-gray max-w-4xl mx-auto leading-relaxed">
              The rare combination of a tech geek, problem solver, and sports enthusiast. 
              When I'm not busy turning coffee into code, I'm usually out playing rollball or skating through the streets of Nairobi.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="section-large bg-card-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-semibold">Reagan <span className="text-sky-blue">Odhiambo</span></h2>
                <div className="card space-y-6">
                  <p className="text-lg leading-relaxed">
                    I'm that dev who actually enjoys finding bugs — it's like being a detective, but the culprit is usually a missing semicolon.
                  </p>
                  <p className="text-lg leading-relaxed">
                    I transform business problems into elegant solutions as a versatile full-stack developer. Think of me as a digital architect, but instead of buildings, I create experiences.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Based in Nairobi but my code runs worldwide. Freelancer by choice because I like variety — and working in pajamas.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="filled" to="/projects" size="large" glow>See My Work</Button>
                  <Button variant="outlined" to="/contact" size="large">Get In Touch</Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-blue/20 to-transparent rounded-full blur-3xl"></div>
                  <img
                    src={reagan}
                    alt="Reagan Odhiambo"
                    className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4 border-sky-blue/30"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="section-large bg-dark-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-sky-blue">tech<span className="text-white">/</span>stack</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-elevated">
                <h3 className="text-2xl font-semibold mb-6 border-b border-gray-700/50 pb-3">Languages</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-lg">Python</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-lg">JavaScript</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-lg">HTML/CSS</span>
                  </li>
                </ul>
              </div>
              <div className="card-elevated">
                <h3 className="text-2xl font-semibold mb-6 border-b border-gray-700/50 pb-3">Frameworks</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-lg">Django</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-lg">React</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-lg">Tailwind CSS</span>
                  </li>
                </ul>
              </div>
              <div className="card-elevated">
                <h3 className="text-2xl font-semibold mb-6 border-b border-gray-700/50 pb-3">Databases</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-lg">MySQL</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-lg">PostgreSQL</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-lg">MongoDB</span>
                  </li>
                </ul>
              </div>
              <div className="card-elevated">
                <h3 className="text-2xl font-semibold mb-6 border-b border-gray-700/50 pb-3">Tools</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-lg">Git & GitHub</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-lg">Excel & PowerBI</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-sky-blue text-lg">●</span>
                    <span className="text-lg">WordPress</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="section-large bg-card-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold mb-6">fun<span className="text-sky-blue">/</span>facts</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Code Whisperer",
                  description: "I talk to my code. Sometimes it talks back. That's usually when I know it's time for more coffee.",
                  icon: <FaCode className="text-sky-blue text-5xl" />
                },
                {
                  title: "Coffee-Powered",
                  description: "My blood type is probably caffeine+. I'm pretty sure my best code has been written between cups 3 and 4.",
                  icon: <FaCoffee className="text-sky-blue text-5xl" />
                },
                {
                  title: "Rollball MVP",
                  description: "Proud MVP of the Kenya Rollball League for the 2024/2025 season. I roll on wheels as smoothly as I roll out code.",
                  icon: <FaSkating className="text-sky-blue text-5xl" />
                }
              ].map((item, index) => (
                <div key={index} className="card-elevated text-center group">
                  <div className="mb-8 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-6">{item.title}</h3>
                  <p className="text-lg leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-dark-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-elevated text-center">
              <FaRegLightbulb className="text-sky-blue text-6xl mx-auto mb-8" />
              <blockquote className="text-2xl md:text-3xl italic mb-8 leading-relaxed">
                "I don't always test my code, but when I do, I do it in production."
              </blockquote>
              <p className="text-sky-blue text-xl font-medium">— Me, just kidding (maybe)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="section-large bg-card-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="card-elevated">
              <div className="flex items-center gap-6 mb-12">
                <FaLaptopCode className="text-sky-blue text-5xl" />
                <h2 className="text-4xl md:text-5xl font-semibold">Skills<span className="text-sky-blue">/</span>Summary</h2>
              </div>
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-8 border-b border-gray-700/50 pb-3">What I'm Good At</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-sky-blue text-xl mt-1">●</span>
                      <span className="text-lg">Building full-stack web applications that solve real problems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-blue text-xl mt-1">●</span>
                      <span className="text-lg">Turning coffee into functional, beautiful code</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-blue text-xl mt-1">●</span>
                      <span className="text-lg">Finding creative solutions to complex problems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-blue text-xl mt-1">●</span>
                      <span className="text-lg">Making technical concepts easy to understand</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-8 border-b border-gray-700/50 pb-3">What I'm Still Learning</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-sky-blue text-xl mt-1">●</span>
                      <span className="text-lg">The art of estimating project time accurately</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-blue text-xl mt-1">●</span>
                      <span className="text-lg">Resisting the urge to refactor everything</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-blue text-xl mt-1">●</span>
                      <span className="text-lg">Walking away from the computer occasionally</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-blue text-xl mt-1">●</span>
                      <span className="text-lg">Not getting distracted by shiny new technologies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-medium bg-dark-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8">Ready to work together?</h2>
            <p className="text-xl md:text-2xl text-neutral-gray mb-12 leading-relaxed max-w-3xl mx-auto">
              If you're looking for a developer who brings both technical skills and a unique perspective to the table, let's connect!
            </p>
            <Button variant="filled" to="/contact" size="large" glow>
              Let's Work Together
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;