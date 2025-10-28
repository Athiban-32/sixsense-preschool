import React from 'react';
import { motion } from 'framer-motion';

// Import all necessary icons
import {
  FiHeart,
  FiSmile,
  FiClipboard,
  FiCalendar,
  FiBookOpen,
} from 'react-icons/fi';
import { FaChild } from 'react-icons/fa';

/**
 * NEW: The 3-Button CTA Section
 * This component uses colorful, card-style buttons for high visibility.
 */
const CtaButtonSection = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-16 md:mb-20'>
      {/* CTA 1: Admissions Open Now */}
      <motion.a
        href='#admissions' // <-- Add your link here
        className='block' // Makes the entire card clickable
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className='bg-pink-500 hover:bg-pink-600 text-white p-6 rounded-2xl shadow-lg h-full flex flex-col justify-center items-center min-h-[150px]'>
          <FiClipboard size={32} className='mb-2' />
          <h3 className='text-xl font-nunito font-bold'>Admissions Open Now</h3>
        </div>
      </motion.a>

      {/* CTA 2: Book a Visit */}
      <motion.a
        href='#book-visit' // <-- Add your link here
        className='block'
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className='bg-green-500 hover:bg-green-600 text-white p-6 rounded-2xl shadow-lg h-full flex flex-col justify-center items-center min-h-[150px]'>
          <FiCalendar size={32} className='mb-2' />
          <h3 className='text-xl font-nunito font-bold'>Book a Visit</h3>
        </div>
      </motion.a>

      {/* CTA 3: Know More About Our Schools */}
      <motion.a
        href='#about-schools' // <-- Add your link here
        className='block'
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className='bg-yellow-500 hover:bg-yellow-600 text-white p-6 rounded-2xl shadow-lg h-full flex flex-col justify-center items-center min-h-[150px]'>
          <FiBookOpen size={32} className='mb-2' />
          <h3 className='text-xl font-nunito font-bold'>
            Know More About Our Schools
          </h3>
        </div>
      </motion.a>
    </div>
  );
};

/**
 * YOUR FULL SECTION: Includes the new CTAs and your existing Mission/Vision
 */
const AboutSection = () => {
  return (
    // We wrap the whole section in a light background color for separation
    <div className='py-16 md:py-24 bg-sky-50'>
      <div className='container mx-auto px-6'>
        {/* === NEW CTA BUTTONS === */}
        <CtaButtonSection />

        {/* === YOUR EXISTING MISSION/VISION SECTION === */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            className='bg-white p-6 rounded-2xl shadow-lg border-b-4 border-pink-400'
          >
            <FiHeart className='text-pink-400 mx-auto' size={40} />
            <h3 className='text-2xl font-nunito font-bold text-indigo-700 my-2'>
              Mission
            </h3>
            <p className='text-gray-600'>
              To nurture confident, curious, and compassionate children in a
              safe, inspiring, and joyful environment.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            className='bg-white p-6 rounded-2xl shadow-lg border-b-4 border-green-500'
          >
            <FiSmile className='text-green-500 mx-auto' size={40} />
            <h3 className='text-2xl font-nunito font-bold text-indigo-700 my-2'>
              Vision
            </h3>
            <p className='text-gray-600'>
              To create a generation of confident, happy, and emotionally
              balanced learners who grow with a sense of purpose and kindness.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            className='bg-white p-6 rounded-2xl shadow-lg border-b-4 border-yellow-400'
          >
            <FaChild className='text-yellow-400 mx-auto' size={40} />
            <h3 className='text-2xl font-nunito font-bold text-indigo-700 my-2'>
              Motto
            </h3>
            <p className='text-gray-600'>
              “Learning through love, laughter, and discovery.”
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
