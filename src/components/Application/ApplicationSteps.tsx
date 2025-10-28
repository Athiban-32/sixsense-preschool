import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi'; // For the "Why Us" list

// Assuming AnimatedSection is a component you have
// import AnimatedSection from './AnimatedSection';

// --- Data for the Section ---

const whyUsFeatures = [
  '13+ years of trusted preschool expertise',
  'Experienced & trained educators',
  'Safe, hygienic & CCTV-monitored campus',
  'Balanced academics with fun learning',
  'Nutritious meals & extended daycare',
  'Focus on holistic development – body, mind & heart',
];

const enrollingPrograms = [
  '🎈 Playgroup',
  '🎨 Nursery',
  '✏️ Jr. KG',
  '🧩 Sr. KG',
  '🌞 Daycare',
  '📚 Blue Bird School (Std 1–7)',
];

const admissionSteps = [
  'Visit any of our branches',
  'Meet our counsellor',
  'Take a campus tour',
  'Complete admission formalities',
];

/**
 * --- NEW: Why Choose Us & Admissions Section ---
 */
const AdmissionsSection = () => {
  return (
    <section id='admissions' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-6'>
        {/* <AnimatedSection> */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          {/* --- Column 1: Why Choose Us? --- */}
          <div className='lg:pr-8'>
            <h2 className='text-3xl md:text-4xl font-nunito font-bold text-indigo-700 mb-4'>
              Why Choose Us?
            </h2>
            <p className='text-lg text-gray-600 mb-8'>
              Your child's best start begins here. We are dedicated to providing
              a second home where they can learn, laugh, and grow with
              confidence.
            </p>

            <div className='space-y-4'>
              {whyUsFeatures.map((feature, i) => (
                <div key={i} className='flex items-start'>
                  <FiCheckCircle className='text-green-500 mr-3 mt-1 h-5 w-5 flex-shrink-0' />
                  <span className='text-lg text-gray-700'>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* --- Column 2: Admissions Card --- */}
          <motion.div
            className='bg-white rounded-2xl shadow-xl p-8 border-t-8 border-indigo-500'
            whileHover={{ y: -5 }}
          >
            <h3 className='text-3xl font-nunito font-bold text-gray-800 mb-6'>
              📝 Admissions
            </h3>

            {/* Now Enrolling */}
            <h4 className='text-xl font-nunito font-semibold text-gray-700 mb-3'>
              Now Enrolling for:
            </h4>
            <div className='flex flex-wrap gap-2 mb-8'>
              {enrollingPrograms.map((program) => (
                <span
                  key={program}
                  className='bg-indigo-50 text-indigo-700 font-medium px-3 py-1 rounded-full text-sm'
                >
                  {program}
                </span>
              ))}
            </div>

            {/* Steps to Apply */}
            <h4 className='text-xl font-nunito font-semibold text-gray-700 mb-4'>
              Steps to Apply:
            </h4>
            <ol className='space-y-4'>
              {admissionSteps.map((step, i) => (
                <li key={i} className='flex items-start'>
                  <div className='bg-indigo-500 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0'>
                    {i + 1}
                  </div>
                  <span className='text-lg text-gray-700'>{step}</span>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
        {/* </AnimatedSection> */}
      </div>
    </section>
  );
};

export default AdmissionsSection;
