import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCloud, FaSun } from 'react-icons/fa';

// SVG for the rainbow
const Rainbow = () => (
  <motion.svg
    width="200"
    height="100"
    viewBox="0 0 200 100"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
    className="absolute top-1/4 left-[15%] hidden lg:block"
  >
    <path d="M10 90 A 80 80 0 0 1 190 90" stroke="#FF6B6B" strokeWidth="15" fill="none" strokeLinecap="round"/>
    <path d="M25 90 A 65 65 0 0 1 175 90" stroke="#FFD761" strokeWidth="15" fill="none" strokeLinecap="round"/>
    <path d="M40 90 A 50 50 0 0 1 160 90" stroke="#6BCB77" strokeWidth="15" fill="none" strokeLinecap="round"/>
  </motion.svg>
);


const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-brand-blue/20 to-bg-light">
      {/* Animated Illustrations */}
      <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="absolute top-20 right-20 text-brand-yellow/50 text-8xl hidden lg:block"><FaSun /></motion.div>
      <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="absolute bottom-20 left-1/4 text-white text-9xl"><FaCloud /></motion.div>
      <Rainbow />

      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center px-6 relative z-10">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-5xl md:text-7xl font-fredoka text-text-dark mb-6"
        >
          A Colorful World of Learning & Fun
        </motion.h1>
        <motion.p 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
          className="text-lg md:text-xl text-text-light max-w-2xl mx-auto mb-10"
        >
          At Six Sense, we turn curiosity into creativity. Discover a place where your child will learn, laugh, and grow every day.
        </motion.p>
        <motion.a 
          href="#about"
          className="bg-brand-coral text-white font-bold text-xl py-4 px-10 rounded-full shadow-xl inline-flex items-center gap-3"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
        >
          Discover More <FaArrowRight />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;