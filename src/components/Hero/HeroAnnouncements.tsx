import React from 'react';
import { motion } from 'framer-motion';

const HeroAnnouncements = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className='mt-6 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4' // Use grid for two distinct boxes
    >
      {/* Announcement 1: Blue Bird School */}
      <motion.div
        whileHover={{ scale: 1.03, rotate: 1 }} // Subtle hover effect
        className='relative bg-yellow-300 p-4 rounded-lg shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-200' // Yellow note, slightly rotated
      >
        <p className='font-extrabold text-blue-800 text-base md:text-lg'>
          🎉 Now also running Blue Bird School — a Primary School up to Std 7th!
        </p>
      </motion.div>

      {/* Announcement 2: New Branch */}
      <motion.div
        whileHover={{ scale: 1.03, rotate: -1 }} // Subtle hover effect
        className='relative bg-pink-300 p-4 rounded-lg shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-200' // Pink note, slightly rotated
      >
        <p className='font-extrabold text-purple-800 text-base md:text-lg'>
          📍 New Branch Opening Soon in Dombivli (West)!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default HeroAnnouncements; // Or integrate this directly into your HeroSection component
