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
 * YOUR FULL SECTION: Includes the new CTAs and your existing Mission/Vision
 */
const AboutSection = () => {
  return (
    // We wrap the whole section in a light background color for separation
    <div className='py-16 md:py-24 bg-sky-50'>
      <div className='container mx-auto px-6'>
        {/* === NEW: Motto as Headline === */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-nunito font-bold text-indigo-700 mb-3'>
            Our Core Values
          </h2>
          <p className='text-xl text-gray-600 font-semibold italic'>
            “Learning through love, laughter, and discovery.”
          </p>
          <div className='w-24 h-1 bg-yellow-400 mx-auto mt-4'></div>
        </div>

        {/* === UPDATED: Combined Grid === */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-stretch'>
          {/* --- Card 1: Mission (Unchanged) --- */}
          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            className='bg-white p-6 rounded-2xl shadow-lg border-b-4 border-pink-400 flex flex-col'
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

          {/* --- Card 2: Vision (Updated Text) --- */}
          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            className='bg-white p-6 rounded-2xl shadow-lg border-b-4 border-green-500 flex flex-col'
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

          {/* --- Card 3: NEW "Get Started" Card --- */}
          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            className='bg-white p-6 rounded-2xl shadow-lg border-b-4 border-yellow-400 flex flex-col'
          >
            <FiBookOpen className='text-yellow-400 mx-auto' size={40} />
            <h3 className='text-2xl font-nunito font-bold text-indigo-700 my-2'>
              Get Started
            </h3>
            <p className='text-gray-600 mb-6'>
              Explore our programs or book a tour to see our campus in person.
            </p>

            {/* CTA Buttons INSIDE the card */}
            <div className='flex flex-col gap-3 mt-auto'>
              <motion.a
                href='#admissions'
                className='block'
                whileHover={{ scale: 1.03 }}
              >
                <div className='bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-lg shadow-md h-full flex items-center justify-center'>
                  <FiClipboard size={20} className='mr-2' />
                  <span className='text-lg font-nunito font-bold'>
                    Admissions Open
                  </span>
                </div>
              </motion.a>

              <motion.a
                href='#contact'
                className='block'
                whileHover={{ scale: 1.03 }}
              >
                <div className='bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg shadow-md h-full flex items-center justify-center'>
                  <FiCalendar size={20} className='mr-2' />
                  <span className='text-lg font-nunito font-bold'>
                    Book a Visit
                  </span>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
