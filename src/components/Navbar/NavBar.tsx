import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPenFancy } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

const HeaderCloud = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <motion.div
    className={`absolute -top-8 w-24 opacity-50 ${className}`}
    animate={{ x: [-5, 5, -5] }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    <svg viewBox='0 0 132 81' fill='#F0F8FF' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='40.5' cy='40.5' r='40.5' />
      <circle cx='81' cy='51' r='30' />
      <circle cx='102' cy='40' r='30' />
    </svg>
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['About', 'Programs', 'Gallery', 'Branches', 'Contact'];
  return (
    <nav className='bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 overflow-hidden'>
      {/* NEW: Animated header clouds */}
      <HeaderCloud className='left-10' />
      <HeaderCloud className='left-1/3' delay={2} />
      <HeaderCloud className='right-10 hidden md:block' delay={1} />

      <div className='container mx-auto px-6 py-3 flex justify-between items-center relative z-10'>
        {/* --- MODIFIED: Added Logo --- */}
        <a
          href='#'
          className='flex items-center text-2xl font-nunito font-extrabold text-indigo-700' // Changed text color
        >
          <img
            src='/logo.png' // Path from public folder
            alt='Six Senses Preschool Logo'
            className='h-10 w-auto mr-2' // Adjust height as needed
          />
          Six Senses
        </a>
        {/* --- End Logo Modification --- */}

        <div className='hidden md:flex space-x-6 items-center'>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '')}`}
              className='text-gray-600 hover:text-indigo-700 transition-colors duration-300 font-semibold' // Changed hover color
            >
              {link}
            </a>
          ))}
          <a href='#contact'>
            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className='bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold py-2 px-5 rounded-full shadow-lg flex items-center gap-2' // Changed gradient colors
            >
              <FaPenFancy size={14} /> Enroll Now
            </motion.button>
          </a>
        </div>
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-gray-700'>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden bg-white/95 backdrop-blur-md'
          >
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center'>
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '')}`}
                  className='block text-gray-600 hover:text-indigo-700 px-3 py-2 rounded-md text-base font-medium' // Changed hover color
                  onClick={() => setIsOpen(false)}
                >
                  {' '}
                  {link}{' '}
                </a>
              ))}
              <a
                href='#contact'
                className='w-full text-center mt-2'
                onClick={() => setIsOpen(false)}
              >
                <motion.button className='bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold py-2 px-6 rounded-full shadow-lg w-auto'>
                  {' '}
                  Enroll Now{' '}
                </motion.button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
