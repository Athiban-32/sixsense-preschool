import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaThumbsUp } from 'react-icons/fa';

const Awards = () => {
  return (
    <section id="awards" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <FaAward className="text-brand-yellow text-6xl mx-auto mb-4" />
        <h2 className="text-4xl md:text-5xl font-fredoka text-text-dark mb-4">Recognized for Excellence</h2>
        <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
          We're proud to be recognized for our commitment to child-centered learning and creating a nurturing environment where curiosity grows every day.
        </p>
        <div className="inline-flex items-center gap-3 bg-bg-cream p-4 rounded-full shadow-md">
          <FaThumbsUp className="text-brand-blue text-2xl"/>
          <span className="font-bold text-text-dark text-lg">Parent's Choice Award 2025</span>
        </div>
      </div>
    </section>
  );
};

export default Awards;