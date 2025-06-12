import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const CodingLanguages = () => {
  const codingLanguages = [
    "JavaScript", "Python", "React", "HTML", "CSS", "Django", "DRF", "PostgreSQL", "Bash","Tailwind", "Bootstrap"
  ];

  return (
    <section className="py-20 px-4 bg-dark-background overflow-hidden">
      <div className="container mx-auto mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 text-sky-blue">
            languages<span className='text-sky-blue'>/</span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-gray max-w-4xl mx-auto leading-relaxed">
            Programming languages I've worked with throughout my journey.
          </p>
        </div>
      </div>
      
      {/* Scrolling Languages Ticker */}
      <div className="relative mx-auto space-y-8">
        {/* First row - moving from right to left */}
        <motion.div
          className="flex space-x-8"
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
              className="flex-shrink-0 py-4 px-8 bg-card-background rounded-xl border border-gray-700/50 hover:border-sky-blue transition-all text-xl font-mono shadow-lg"
            >
              <span className="text-sky-blue mr-3">{'<>'}</span> {lang}
            </div>
          ))}
          {/* Duplicate the languages to ensure continuous flow */}
          {codingLanguages.map((lang, index) => (
            <div
              key={`row1-dup-${index}`}
              className="flex-shrink-0 py-4 px-8 bg-card-background rounded-xl border border-gray-700/50 hover:border-sky-blue transition-all text-xl font-mono shadow-lg"
            >
              <span className="text-sky-blue mr-3">{'<>'}</span> {lang}
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
              className="flex-shrink-0 py-4 px-8 bg-card-background rounded-xl border border-gray-700/50 hover:border-sky-blue transition-all text-xl font-mono shadow-lg"
            >
              <span className="text-sky-blue mr-3">{'{}'}</span> {lang}
            </div>
          ))}
          {/* Duplicate the languages to ensure continuous flow */}
          {[...codingLanguages].reverse().map((lang, index) => (
            <div
              key={`row2-dup-${index}`}
              className="flex-shrink-0 py-4 px-8 bg-card-background rounded-xl border border-gray-700/50 hover:border-sky-blue transition-all text-xl font-mono shadow-lg"
            >
              <span className="text-sky-blue mr-3">{'{}'}</span> {lang}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CodingLanguages;