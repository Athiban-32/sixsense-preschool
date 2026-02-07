import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

// Assuming AnimatedSection is a component you have
// import AnimatedSection from './AnimatedSection';

/**
 * --- NEW: Our Branches Section ---
 */
const OurBranches = () => {
  return (
    <section id='branches' className='py-20 bg-white'>
      <div className='container mx-auto px-6'>
        {/* <AnimatedSection> */}
        <h2 className='text-3xl md:text-4xl font-nunito font-bold text-indigo-700 mb-12 text-center'>
          🏠 Our Branches
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch'>
          {/* --- Card 1: Main Branch --- */}
          <motion.div
            className='bg-gray-50 rounded-2xl shadow-lg overflow-hidden border-t-8 border-indigo-500 flex flex-col'
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <div className='p-6 flex-grow'>
              <h3 className='text-xl font-nunito font-bold text-indigo-700 mb-3'>
                Main Branch – Dombivli (East)
              </h3>
              <div className='space-y-4'>
                <p className='flex items-start text-gray-700'>
                  <FiMapPin className='mr-3 mt-1 text-indigo-500 flex-shrink-0' />
                  <span>
                    Shop No 1, Vasudev Krupa, Ground Floor, Ekta Nagar,
                    Nandivali Rd, Next to Rajan Marathe Office, Dombivli (East)
                  </span>
                </p>
                <p className='flex items-center text-gray-700'>
                  <FiPhone className='mr-3 text-indigo-500' />
                  <span>7506030742</span>
                </p>
              </div>
            </div>
            {/* Add a WhatsApp link, as it's a key CTA */}
            <a
              href='https://wa.me/917506030742'
              target='_blank'
              rel='noopener noreferrer'
              className='block bg-indigo-50 text-indigo-700 p-4 font-bold text-center hover:bg-indigo-100 transition-colors'
            >
              <FaWhatsapp className='inline-block mr-2' />
              Contact This Branch
            </a>
          </motion.div>

          {/* --- Card 2: 1st Branch (JK) --- */}
          <motion.div
            className='bg-gray-50 rounded-2xl shadow-lg overflow-hidden border-t-8 border-green-500 flex flex-col'
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <div className='p-6 flex-grow'>
              <h3 className='text-xl font-nunito font-bold text-green-700 mb-3'>
                1st Branch – Dombivli (East)
              </h3>
              <h4 className='text-lg font-nunito font-semibold text-gray-800 mb-3 -mt-2'>
                JK Six Senses Preschool
              </h4>
              <div className='space-y-4'>
                <p className='flex items-start text-gray-700'>
                  <FiMapPin className='mr-3 mt-1 text-green-500 flex-shrink-0' />
                  <span>
                    Navkar Heights, opp. Blossom School, Near East-West new
                    bridge, Dombivli (East)
                  </span>
                </p>
                <p className='flex items-center text-gray-700'>
                  <FiPhone className='mr-3 text-green-500' />
                  <span>7506030742 / 8424030007</span>
                </p>
              </div>
            </div>
            <a
              href='https://wa.me/917506030742' // Update if this branch has a different WA number
              target='_blank'
              rel='noopener noreferrer'
              className='block bg-green-50 text-green-700 p-4 font-bold text-center hover:bg-green-100 transition-colors'
            >
              <FaWhatsapp className='inline-block mr-2' />
              Contact This Branch
            </a>
          </motion.div>

          {/* --- Card 3: 2nd Branch (West) --- */}
          <motion.div
            className='bg-gray-50 rounded-2xl shadow-lg overflow-hidden border-t-8 border-yellow-500 flex flex-col'
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <div className='p-6 flex-grow'>
              <h3 className='text-xl font-nunito font-bold text-yellow-800 mb-3'>
                2nd Branch – Dombivli (West)
              </h3>
              <div className='space-y-4'>
                <p className='flex items-start text-gray-700'>
                  <FiMapPin className='mr-3 mt-1 text-yellow-600 flex-shrink-0' />
                  <span>
                    C/o Little Paradise Preschool, C/1 1st Floor, Satshrungi
                    Bldg, Near Hindustan Bank, M.Phule Rd, Jadhav wadi, Dombivli
                    (West)
                  </span>
                </p>
              </div>
            </div>
            {/* Announcement integrated into the card */}
            <a
              href='https://wa.me/917506030742'
              target='_blank'
              rel='noopener noreferrer'
              className='block bg-yellow-50 text-yellow-700 p-4 font-bold text-center hover:bg-yellow-100 transition-colors'
            >
              <FaWhatsapp className='inline-block mr-2' />
              Contact This Branch
            </a>
          </motion.div>

          {/* --- Card 4: 3rd Branch (Runwal Garden, Dombivli East) --- */}
          <motion.div
            className='bg-gray-50 rounded-2xl shadow-lg overflow-hidden border-t-8 border-pink-500 flex flex-col'
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <div className='p-6 flex-grow'>
              <h3 className='text-xl font-nunito font-bold text-pink-700 mb-3'>
                3rd Branch – Runwal Garden, Dombivli (East)
              </h3>
              <div className='space-y-4'>
                <p className='flex items-start text-gray-700'>
                  <FiMapPin className='mr-3 mt-1 text-pink-500 flex-shrink-0' />
                  <span>Runwal Garden, Dombivli (East)</span>
                </p>
                <p className='flex items-center text-gray-700'>
                  <FiPhone className='mr-3 text-pink-500' />
                  <span>7506030742</span>
                </p>
              </div>
            </div>
            <a
              href='https://wa.me/917506030742'
              target='_blank'
              rel='noopener noreferrer'
              className='block bg-pink-50 text-pink-700 p-4 font-bold text-center hover:bg-pink-100 transition-colors'
            >
              <FaWhatsapp className='inline-block mr-2' />
              Contact This Branch
            </a>
          </motion.div>
        </div>
        {/* </AnimatedSection> */}
      </div>
    </section>
  );
};

export default OurBranches;
