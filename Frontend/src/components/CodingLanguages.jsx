import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';


const CodingLanguages = () => {
  const codingLanguages = [
    "JavaScript", "Python", "React", "HTML", "CSS", "Django", "DRF", "PostgreSQL", "Bash","Tailwind", "Bootstrap"
  ];

  return (
    <section className=" py-16 px-4 bg-dark-background overflow-hidden max-w-screen-2xl mx-auto">
        <div className="container mx-auto mb-12">
          <div className="flex flex-col md:min-h-[20vh] md:items-center md:justify-center mb-10">
            <h2 className="text-4xl md:text-6xl font-semibold mb-4 text-sky-blue">
              languages<span className='text-sky-blue'>/</span>
            </h2>
            <p className="text-xl mb-6 max-w-3xl md:text-center">
              Programming languages I've worked with throughout my journey.
            </p>
          </div>
        </div>
        
        {/* Scrolling Languages Ticker */}
        <div className="relative mx-auto">
          {/* First row - moving from right to left */}
          <motion.div
            className="flex space-x-8 mb-8"
            animate={{ x: [0, -2000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear"
              }
            }}
          >
            {codingLanguages.map((lang, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 py-3 px-6 bg-dark-background rounded-lg border border-gray-700 hover:border-sky-blue transition-all text-xl font-mono"
              >
                <span className="text-sky-blue mr-2">&lt;/&gt;</span> {lang}
              </div>
            ))}
            {/* Duplicate the languages to ensure continuous flow */}
            {codingLanguages.map((lang, index) => (
              <div
                key={`row1-dup-${index}`}
                className="flex-shrink-0 py-3 px-6 bg-dark-background rounded-lg border border-gray-700 hover:border-sky-blue transition-all text-xl font-mono"
              >
                <span className="text-sky-blue mr-2">&lt;/&gt;</span> {lang}
              </div>
            ))}
          </motion.div>
          
          {/* Second row - moving from right to left faster */}
          <motion.div
            className="flex space-x-8"
            animate={{ x: [0, -2000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
          >
            {/* Reverse the array to make it visually different */}
            {[...codingLanguages].reverse().map((lang, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 py-3 px-6 bg-dark-background rounded-lg border border-gray-700 hover:border-sky-blue transition-all text-xl font-mono"
              >
                <span className="text-sky-blue mr-2">{'{}'}</span> {lang}
              </div>
            ))}
            {/* Duplicate the languages to ensure continuous flow */}
            {[...codingLanguages].reverse().map((lang, index) => (
              <div
                key={`row2-dup-${index}`}
                className="flex-shrink-0 py-3 px-6 bg-dark-background rounded-lg border border-gray-700 hover:border-sky-blue transition-all text-xl font-mono"
              >
                <span className="text-sky-blue mr-2">{'{}'}</span> {lang}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
  );
};

export default CodingLanguages; 