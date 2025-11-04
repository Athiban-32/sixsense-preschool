import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPenFancy } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // <-- 1. Import Link for routing

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
  // 2. Updated to use paths
  const navLinks = [
    { name: 'About', path: '/#about' },
    { name: 'Programs', path: '/#programs' },
    { name: 'Gallery', path: '/#gallery' },
    { name: 'Branches', path: '/#branches' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className='bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 overflow-hidden'>
      <HeaderCloud className='left-10' />
      <HeaderCloud className='left-1/3' delay={2} />
      <HeaderCloud className='right-10 hidden md:block' delay={1} />

      <div className='container mx-auto px-6 py-3 flex justify-between items-center relative z-10'>
        {/* 3. Changed <a> to <Link> */}
        <Link
          to='/'
          className='flex items-center text-2xl font-nunito font-extrabold text-indigo-700'
        >
          <img
            src='/logo.png' // Using consistent logo name
            alt='Six Senses Preschool Logo'
            className='h-10 w-auto mr-2' // Set w-auto
          />
        </Link>

        <div className='hidden md:flex space-x-4 items-center'>
          {/* 5. NEW: Added Event Link as a special button */}
          <Link to='/event/children-day'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-5 rounded-full shadow-lg flex items-center gap-2 animate-pulse'
            >
              ✨ Children Day
            </motion.button>
          </Link>

          {navLinks.map((link) => (
            // 4. Changed <a> to <Link> for smooth SPA navigation
            <Link
              key={link.name}
              to={link.path}
              className='text-gray-600 hover:text-indigo-700 transition-colors duration-300 font-semibold'
            >
              {link.name}
            </Link>
          ))}

          <Link to='/#contact'>
            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className='bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold py-2 px-5 rounded-full shadow-lg flex items-center'
            >
              <FaPenFancy size={14} /> Enroll Now
            </motion.button>
          </Link>
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
                <Link
                  key={link.name}
                  to={link.path}
                  className='block text-gray-600 hover:text-indigo-700 px-3 py-2 rounded-md text-base font-medium'
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* 6. NEW: Added Event Link to mobile menu */}
              <Link
                to='/magic-show'
                className='w-full text-center mt-2'
                onClick={() => setIsOpen(false)}
              >
                <motion.button className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-6 rounded-full shadow-lg w-auto'>
                  ✨ Magic Show
                </motion.button>
              </Link>

              <Link
                to='/#contact'
                className='w-full text-center mt-2'
                onClick={() => setIsOpen(false)}
              >
                <motion.button className='bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold py-2 px-6 rounded-full shadow-lg w-auto'>
                  Enroll Now
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
