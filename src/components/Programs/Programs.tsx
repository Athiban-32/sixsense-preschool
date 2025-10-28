import React from 'react';
import { motion } from 'framer-motion';

// --- Import all necessary components and icons ---
// Assuming these are in the same file or imported correctly
// import AnimatedSection from './AnimatedSection';
// import WavyDivider from './WavyDivider';

// Icons for the NEW program cards
import { FaPuzzlePiece, FaPaintBrush, FaChild, FaHeart } from 'react-icons/fa';
// Icons for the EXISTING activity cards
import { FaPalette, FaMusic, FaSeedling } from 'react-icons/fa';
// Icons for Blue Bird section and KG
import { FiBookOpen, FiCheckCircle } from 'react-icons/fi';

// (Assuming WavyDivider and AnimatedSection are defined elsewhere)
// ...

/**
 * Data for the main "Programs" section
 */
const programList = [
  {
    icon: <FaPuzzlePiece size={30} className='text-indigo-600' />,
    ageGroup: '1.8 – 2.5 yrs',
    title: 'Playgroup',
    desc: 'Fun-filled first step into learning through play and sensory activities.',
    borderColor: 'border-indigo-500',
    iconBg: 'bg-indigo-100',
  },
  {
    icon: <FaPaintBrush size={30} className='text-pink-600' />,
    ageGroup: '2.5 – 3.5 yrs',
    title: 'Nursery',
    desc: 'Focus on communication, pre-writing, and creative skills.',
    borderColor: 'border-pink-500',
    iconBg: 'bg-pink-100',
  },
  {
    icon: <FiBookOpen size={30} className='text-green-600' />,
    ageGroup: '3.5 – 5.5 yrs',
    title: 'Jr. KG & Sr. KG',
    desc: 'Foundation building for primary school through phonics, numbers, art & stories.',
    borderColor: 'border-green-500',
    iconBg: 'bg-green-100',
  },
  {
    icon: <FaHeart size={30} className='text-red-600' />,
    ageGroup: '6 months – 10 yrs',
    title: 'Daycare',
    desc: 'Safe, caring, and hygienic environment with meals, nap time, and activities.',
    borderColor: 'border-red-500',
    iconBg: 'bg-red-100',
  },
];

/**
 * Data for the "Activities" section
 */
const activities = [
  {
    icon: <FaPalette size={30} className='text-white' />,
    title: 'Creative Arts',
    desc: 'Painting, crafting, and storytelling to unleash imagination.',
    color: 'from-pink-400 to-red-500',
  },
  {
    icon: <FaMusic size={30} className='text-white' />,
    title: 'Music & Movement',
    desc: 'Singing, dancing, and playing instruments for joyful expression.',
    color: 'from-yellow-400 to-orange-400',
  },
  {
    icon: <FaSeedling size={30} className='text-white' />,
    title: 'Nature Exploration',
    desc: 'Gardening and outdoor play to connect with the natural world.',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: <FiBookOpen size={30} className='text-white' />,
    title: 'Early Literacy',
    desc: 'Fun with letters, sounds, and stories to build a love for reading.',
    color: 'from-sky-400 to-blue-500',
  },
];

/**
 * NEW: Component for the Blue Bird School highlight
 */
const BlueBirdSchoolSection = () => {
  const features = [
    'Smart classrooms & activity-based learning',
    'English-speaking environment',
    'Balanced focus on academics, art, and sports',
    'Value education & life skills',
    'Dedicated, trained teaching staff',
  ];

  return (
    <div className='container mx-auto px-6 mt-16 md:mt-20'>
      {/* <AnimatedSection> */}
      <div className='bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12 border-t-8 border-blue-600'>
        <div className='text-center md:text-left'>
          <h2 className='text-3xl font-nunito font-bold text-blue-700 mb-4'>
            🏫 Blue Bird School – Primary Education (Up to Std 8th)
          </h2>
          <p className='text-lg text-gray-700 leading-relaxed mb-6'>
            Continuing our legacy of excellence,{' '}
            <strong>Blue Bird School</strong> extends the journey beyond
            preschool — providing quality education from <strong>Std 1.</strong>{' '}
            We nurture children’s academic, emotional, and creative growth
            through:
          </p>

          {/* Features List */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8'>
            {features.map((feature, i) => (
              <div key={i} className='flex items-center'>
                <FiCheckCircle className='text-blue-500 mr-3 h-5 w-5 flex-shrink-0' />
                <span className='text-gray-800 text-base'>{feature}</span>
              </div>
            ))}
          </div>

          {/* Admissions Note */}
          <div className='bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 rounded-md'>
            <p className='font-semibold'>
              <span className='font-bold'>
                📘 Admissions for Blue Bird School are now open!
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* </AnimatedSection> */}
    </div>
  );
};

/**
 * --- Main Programs Section ---
 */
const OurPrograms = () => {
  return (
    <section id='programs' className='py-20 bg-sky-50 relative'>
      {/* <WavyDivider top color="#FFFFFF" /> */}

      {/* --- PART 1: MAIN PROGRAMS (Preschool & Daycare) --- */}
      <div className='container mx-auto px-6 text-center z-10 relative'>
        {/* <AnimatedSection> */}
        <h2 className='text-3xl md:text-4xl font-nunito font-bold text-indigo-700 mb-4'>
          Our Programs
        </h2>
        <p className='text-lg text-gray-600 mb-12 max-w-2xl mx-auto'>
          We offer a range of programs tailored to each stage of your child's
          development.
        </p>

        {/* Program Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {programList.map((prog, i) => (
            <motion.div
              key={i}
              className={`bg-white p-6 rounded-2xl shadow-lg text-left relative overflow-hidden border-t-8 ${prog.borderColor}`}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center ${prog.iconBg} mb-4`}
              >
                {prog.icon}
              </div>
              <p className='text-sm font-semibold text-gray-500 mb-1'>
                {prog.ageGroup}
              </p>
              <h3 className='text-xl font-nunito font-bold mb-2 text-gray-800'>
                {prog.title}
              </h3>
              <p className='text-gray-600 text-sm'>{prog.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Note section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='mt-12 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-md max-w-3xl mx-auto text-left'
        >
          <p className='font-semibold'>
            <span className='font-bold'>💡 We also offer</span> activity clubs,
            celebration events, and parent-child workshops!
          </p>
        </motion.div>
        {/* </AnimatedSection> */}
      </div>

      {/* --- PART 2: BLUE BIRD SCHOOL (Primary) --- */}
      <BlueBirdSchoolSection />

      {/* --- PART 3: ACTIVITIES ("A Day Full of Wonder") --- */}
      <div className='container mx-auto px-6 text-center mt-20 md:mt-24 z-10 relative'>
        {/* <AnimatedSection> */}
        <h2 className='text-3xl md:text-4xl font-nunito font-bold text-indigo-700 mb-4'>
          A Day Full of Wonder
        </h2>
        <p className='text-lg text-gray-600 mb-12 max-w-2xl mx-auto'>
          Our curriculum is a vibrant tapestry of activities designed to spark
          curiosity and joy in every child.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {activities.map((prog, i) => (
            <motion.div
              key={i}
              className='bg-white p-6 rounded-2xl shadow-lg text-center'
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div
                className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center bg-gradient-to-br ${prog.color} mb-4 shadow-lg`}
              >
                {prog.icon}
              </div>
              <h3 className='text-xl font-nunito font-bold mb-2 text-gray-800'>
                {prog.title}
              </h3>
              <p className='text-gray-600'>{prog.desc}</p>
            </motion.div>
          ))}
        </div>
        {/* </AnimatedSection> */}
      </div>

      {/* <WavyDivider color="#FFFFFF" /> */}
    </section>
  );
};

export default OurPrograms;
