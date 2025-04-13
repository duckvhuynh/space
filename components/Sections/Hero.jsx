import React from 'react';
import { motion } from 'framer-motion';
import ArtisticText from '../UI/ArtisticText';
import MagneticElement from '../UI/MagneticElement';

const Hero = ({ data }) => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center relative px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-screen-lg mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <ArtisticText 
            text={data.subtitle || "Welcome to my portfolio"}
            splitBy="letter"
            effect="slide"
            className="text-base md:text-lg font-light tracking-widest mb-6 text-gray-400"
          />
        </motion.div>
        
        <div className="mt-4 mb-12">
          <ArtisticText 
            text={data.title || "Creative Developer"}
            splitBy="word"
            effect="fade"
            fontSize="2.5rem"
            fontWeight="700"
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter"
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg md:text-xl font-light max-w-2xl mb-8 text-gray-300"
        >
          {data.description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12"
        >
          <MagneticElement strength={40}>
            <a 
              href="#projects" 
              className="border-2 border-white px-8 py-3 text-lg inline-block hover:bg-white hover:text-black transition-colors duration-300"
            >
              View My Work
            </a>
          </MagneticElement>
        </motion.div>
      </div>
      
      {/* Abstract shapes */}
      <motion.div
        className="absolute top-1/4 right-[10%] w-16 h-16 rounded-full border border-white opacity-20"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-[15%] w-24 h-24 border border-white opacity-10"
        animate={{ 
          rotate: [0, 180],
          opacity: [0.1, 0.2, 0.1], 
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </section>
  );
};

export default Hero;
