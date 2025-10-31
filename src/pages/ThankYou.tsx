import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal navigation
import { FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ThankYouPage: React.FC = () => {
  return (
    <section className='flex items-center justify-center py-20 md:py-32 bg-gray-50 min-h-[60vh]'>
      <motion.div
        className='text-center p-10 bg-white shadow-xl rounded-2xl'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FiCheckCircle className='text-green-500 w-24 h-24 mx-auto mb-6' />
        <h1 className='text-3xl md:text-4xl font-nunito font-bold text-indigo-700 mb-4'>
          Thank You!
        </h1>
        <p className='text-lg text-gray-700 mb-8 max-w-md'>
          Your enquiry has been submitted successfully. We will get back to you
          shortly.
        </p>
        <Link
          to='/'
          className='inline-block bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105'
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
};

export default ThankYouPage;
