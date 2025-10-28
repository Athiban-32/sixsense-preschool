import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import HeroAnnouncements from './HeroAnnouncements';

// --- Re-usable Animated Components ---

const HangingPhoto = () => (
  <motion.div
    className='relative group w-64 md:w-80 origin-top z-10' // Changed origin-top-left to origin-top
    initial={{ opacity: 0, y: -100, rotate: -15 }}
    animate={{ opacity: 1, y: 0, rotate: 5 }} // Settle with a 5-degree tilt
    transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.8 }}
    whileHover={{ rotate: 0, scale: 1.05 }}
  >
    {/* The Thread */}
    <div
      className='
        absolute top-0 left-1/2 w-px  md:h-24 bg-gray-700 
        origin-bottom transform -translate-y-full -translate-x-1/2 
        group-hover:rotate-0 transition-transform duration-300
      '
    ></div>

    {/* The Image Frame (like a Polaroid) */}
    <div className='bg-white p-3 pb-10 rounded-md shadow-xl relative'>
      <img
        src='/images/hero-section.jpg' // Your student image
        alt='Students at Six Senses Preschool'
        className='w-full h-auto object-cover rounded-sm bg-gray-200'
      />
      {/* Caption space */}
      <p className='absolute bottom-3 left-3 right-3 text-center text-gray-700 font-serif text-sm italic'>
        Our Happy Learners!
      </p>
    </div>
  </motion.div>
);

const WavyDivider = ({ top = false, color = '#FFFFFF' }) => (
  <div
    // Fixed syntax: Used backticks for template literal
    className={`absolute left-0 w-full ${top ? '-top-1' : '-bottom-1'}`}
    style={{ lineHeight: 0 }}
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1440 320'
      preserveAspectRatio='none'
      // Fixed syntax: Used backticks for template literal
      className={`relative block w-full h-24 md:h-40 ${
        top ? 'transform rotate-180' : ''
      }`}
    >
      <path
        fill={color}
        fillOpacity='1'
        d='M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,245.3C672,267,768,277,864,256C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
      ></path>
    </svg>
  </div>
);

const Sun = () => (
  <motion.div
    className='absolute top-16 right-1/4'
    animate={{ rotate: 360, scale: [1, 1.05, 1] }}
    transition={{
      rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
      scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
    }}
  >
    <svg
      width='100'
      height='100'
      viewBox='0 0 125 125'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='62.5' cy='62.5' r='40' fill='url(#sun-gradient)' />
      <defs>
        <radialGradient id='sun-gradient' cx='0.5' cy='0.5' r='0.5'>
          <stop offset='0%' stopColor='#FFD700' />
          <stop offset='100%' stopColor='#FFA500' />
        </radialGradient>
      </defs>
    </svg>
  </motion.div>
);

const Cloud = ({
  top,
  left,
  delay = 0,
  width = 120,
}: {
  top: string;
  left: string;
  delay?: number;
  width?: number;
}) => (
  <motion.div
    className='absolute'
    style={{ top, left }}
    animate={{ x: [-10, 10, -10] }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    <svg
      width={width}
      viewBox='0 0 132 81'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='40.5' cy='40.5' r='40.5' fill='white' fillOpacity='0.8' />
      <circle cx='81' cy='51' r='30' fill='white' fillOpacity='0.8' />
      <circle cx='102' cy='40' r='30' fill='white' fillOpacity='0.8' />
    </svg>
  </motion.div>
);

interface FloatingShapeProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

const FloatingShape = ({
  children,
  className,
  duration = 10,
  delay = 0,
}: FloatingShapeProps) => (
  <motion.div
    // Fixed syntax: Used backticks for template literal
    className={`absolute ${className}`}
    animate={{ y: [-10, 10, -10] }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    {children}
  </motion.div>
);

const Star = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='#FFD700'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
  </svg>
);

const Rainbow = () => (
  <motion.div
    className='absolute bottom-0 left-10 w-48 md:w-64'
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    <svg viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M 10 100 A 90 90 0 0 1 190 100'
        stroke='#FFB6C1' // Light Pink
        strokeWidth='15'
        fill='none'
        strokeLinecap='round'
      />
      <path
        d='M 25 100 A 75 75 0 0 1 175 100'
        stroke='#FFD700' // Gold
        strokeWidth='15'
        fill='none'
        strokeLinecap='round'
      />
      <path
        d='M 40 100 A 60 60 0 0 1 160 100'
        stroke='#90EE90' // Light Green
        strokeWidth='15'
        fill='none'
        strokeLinecap='round'
      />
      <path
        d='M 55 100 A 45 45 0 0 1 145 100'
        stroke='#87CEEB' // Sky Blue
        strokeWidth='15'
        fill='none'
        strokeLinecap='round'
      />
    </svg>
  </motion.div>
);

// --- The Main Hero Section Component ---

const HeroSection = () => {
  return (
    <div className='relative bg-gradient-to-b from-sky-300 to-blue-400 overflow-hidden min-h-screen flex items-center justify-center pt-24 pb-40 md:pt-0 md:pb-0'>
      {/* Animated Scenery */}
      {/* <Sun /> */}
      <Cloud top='20%' left='10%' />
      <Cloud top='40%' left='80%' delay={2} width={160} />
      <Rainbow />
      <FloatingShape className='top-1/4 left-1/4' duration={8}>
        <Star />
      </FloatingShape>
      <FloatingShape className='top-1/2 left-3/4' duration={12} delay={2}>
        <Star />
      </FloatingShape>
      <FloatingShape className='top-3/4 right-1/4' duration={10}>
        <Star />
      </FloatingShape>

      {/* Hero Content */}
      <div className='container mx-auto px-6 text-center z-10'>
        {/* NEW: Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          className='text-white font-nunito font-black text-4xl md:text-6xl mb-4'
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
        >
          Where Little Minds Bloom with{' '}
          <span className='text-yellow-300'>Love, Learning & Laughter</span>
        </motion.h1>

        {/* NEW: Welcome Message */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className='text-lg md:text-xl text-white mt-4 max-w-3xl mx-auto'
        >
          Welcome to Six Senses Preschool & Daycare — a joyful world where
          children learn through play, imagination, and exploration. With{' '}
          <strong className='font-bold'>13+ years of trusted experience</strong>
          , we're proud to shape confident and caring young learners, giving
          them a strong start for life.
        </motion.p>

        {/* NEW: Announcements Block */}
        <HeroAnnouncements />

        {/* NEW: Updated CTA Button */}
        <motion.a
          href='#contact' // Link this to your contact or enrollment section
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='mt-8 inline-block'
        >
          <motion.button
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className='bg-gradient-to-r from-pink-400 to-red-500 text-white font-bold py-3 px-8 rounded-full shadow-xl text-lg'
          >
            Enroll Now
          </motion.button>
        </motion.a>

        {/* NEW: Franchise CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className='mt-4 text-white/90 text-sm'
        >
          Franchises are welcome.{' '}
          <a
            href='#franchise' // Link this to your franchise page
            className='font-bold underline hover:text-yellow-300'
          >
            Click here to inquire.
          </a>
        </motion.p>
      </div>

      <div className='absolute right-0'>
        <HangingPhoto />
      </div>
      <WavyDivider color='#FFFFFF' />
    </div>
  );
};

export default HeroSection;
