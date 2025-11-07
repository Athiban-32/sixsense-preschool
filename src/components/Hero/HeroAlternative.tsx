import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import HeroAnnouncements from './HeroAnnouncements';

// --- Re-usable Animated Components ---

const HangingPhoto = () => (
  <motion.div
    className='relative group w-64 md:w-80 origin-top -translate-y-6 md:-translate-y-12'
    initial={{ opacity: 0, y: -100, rotate: -15 }}
    animate={{ opacity: 1, y: 0, rotate: 5 }}
    transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.8 }}
    whileHover={{ rotate: 0, scale: 1.05 }}
  >
    {/* Thread now styled to look like a real hanging thread and starts above viewport */}
    <div
      className='absolute origin-bottom group-hover:rotate-0 transition-transform duration-300'
      style={{
        top: '-120vh',
        left: '50%',
        height: '140vh',
        width: '1px',
        transform: 'translateX(-50%)',
        // repeating-linear-gradient creates a subtle dashed / twisted thread look
        background:
          'repeating-linear-gradient(to bottom, rgba(55,65,81,0.95) 0 6px, rgba(255,255,255,0) 6px 12px)',
        // slight blur for natural softness
        filter: 'blur(0.2px)',
      }}
    ></div>

    {/* Small knot/hook where the thread meets the frame */}
    <div className='absolute -top-5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-300 rounded-full shadow-sm z-20'></div>

    {/* The Image Frame (Polaroid style) */}
    <div className='bg-white p-3 pb-10 rounded-md shadow-xl relative'>
      <img
        src='/images/hero-section.jpg'
        alt='Students at Six Senses Preschool'
        className='w-full h-auto object-cover rounded-sm bg-gray-200'
      />
      <p className='absolute bottom-3 left-3 right-3 text-center text-gray-700 font-serif text-sm italic'>
        Our Happy Learners!
      </p>
    </div>
  </motion.div>
);

const WavyDivider = ({
  top = false,
  color = '#FFFFFF',
}: {
  top?: boolean;
  color?: string;
}) => (
  <div
    className={`absolute left-0 w-full ${top ? '-top-1' : '-bottom-1'}`}
    style={{ lineHeight: 0 }}
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1440 320'
      preserveAspectRatio='none'
      className={`relative block w-full h-24 md:h-40 ${
        top ? 'transform rotate-180' : ''
      }`}
    >
      <path
        fill={color}
        fillOpacity='1'
        d='M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,245.3C672,267,768,277,864,256C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L0,320Z'
      ></path>
    </svg>
  </div>
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
        stroke='#FFB6C1'
        strokeWidth='15'
        fill='none'
        strokeLinecap='round'
      />
      <path
        d='M 25 100 A 75 75 0 0 1 175 100'
        stroke='#FFD700'
        strokeWidth='15'
        fill='none'
        strokeLinecap='round'
      />
      <path
        d='M 40 100 A 60 60 0 0 1 160 100'
        stroke='#90EE90'
        strokeWidth='15'
        fill='none'
        strokeLinecap='round'
      />
      <path
        d='M 55 100 A 45 45 0 0 1 145 100'
        stroke='#87CEEB'
        strokeWidth='15'
        fill='none'
        strokeLinecap='round'
      />
    </svg>
  </motion.div>
);

// --- Main Hero Section ---

const HeroSection = () => {
  return (
    <div className='relative bg-gradient-to-b from-sky-300 to-blue-400 overflow-hidden min-h-screen flex flex-col items-center justify-center pt-24 pb-40 md:pt-16 md:pb-20'>
      {/* Background Elements */}
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
      <div className='container mx-auto px-6 text-center relative z-10 max-w-4xl'>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          className='text-white font-nunito font-black text-4xl md:text-6xl mb-4'
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
        >
          Where Little Minds Bloom with
          <span className='text-yellow-300'>Love, Learning & Laughter</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className='text-lg md:text-xl text-white mt-4 max-w-3xl mx-auto'
        >
          Welcome to Six Senses Preschool & Daycare — a joyful world where
          children learn through play, imagination, and exploration. With
          <strong className='font-bold'>13+ years of trusted experience</strong>
          , we're proud to shape confident and caring young learners, giving
          them a strong start for life.
        </motion.p>

        <HeroAnnouncements />

        <motion.a
          href='#contact'
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

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className='mt-4 text-white/90 text-sm'
        >
          Franchises are welcome.
          <a
            href='#contact'
            className='font-bold underline hover:text-yellow-300'
          >
            Click here to inquire.
          </a>
        </motion.p>
      </div>
      <div className='absolute right-0 hidden md:block'>
        {/* small top offset to align with the thread height above; tweak -mt values if needed */}
        <div className='-mt-16 md:-mt-24 mr-0'>
          <HangingPhoto />
        </div>
      </div>
      <WavyDivider color='#FFFFFF' />
    </div>
  );
};

export default HeroSection;
