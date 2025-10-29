import React from 'react';
import { motion } from 'framer-motion';
// Import all necessary icons
import {
  FiUser,
  FiPhone,
  FiMapPin,
  FiHome,
  FiMessageSquare,
} from 'react-icons/fi';
import { FaWhatsapp, FaChild } from 'react-icons/fa';

// Assuming AnimatedSection and WavyDivider are components you have
// import AnimatedSection from './AnimatedSection';
// import WavyDivider from './WavyDivider';

const ContactForm = () => {
  return (
    <section id='contact' className='py-20 bg-gray-50 relative'>
      {/* <WavyDivider top color="#FFFFFF" /> */}

      {/* Set top margin to align with WavyDivider */}
      <div className='container mx-auto px-6 mt-12'>
        <div className='flex flex-wrap lg:flex-nowrap bg-white rounded-2xl shadow-2xl overflow-hidden'>
          {/* --- Form Section (Left Side) --- */}
          <div className='w-full lg:w-1/2 p-8 md:p-12'>
            {/* <AnimatedSection> */}
            <h2 className='text-3xl font-nunito font-bold text-indigo-700 mb-2'>
              Enroll Your Little One!
            </h2>
            <p className='text-gray-600 mb-6'>
              We’d love to welcome your child. Fill in the form or contact us
              directly!
            </p>

            {/* NEW: Direct Call-to-Action */}
            <div className='mb-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200'>
              <h4 className='font-nunito font-bold text-indigo-700 text-lg mb-2'>
                Prefer to call?
              </h4>
              <div className='flex items-center text-gray-800'>
                <FiPhone className='mr-3 text-indigo-600' />
                <span className='font-semibold'>
                  <a href='tel:+917506030742' className='hover:underline'>
                    75060 30742
                  </a>{' '}
                </span>
              </div>
            </div>

            <h4 className='text-xl font-nunito font-semibold text-gray-700 mb-4'>
              Or, send an enquiry:
            </h4>

            {/* UPDATED: Enriched Form */}
            <form className='space-y-4'>
              <div className='relative'>
                <FiUser className='absolute top-1/2 left-4 -translate-y-1/2 text-gray-400' />
                <input
                  type='text'
                  placeholder='Parent’s Full Name'
                  className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                />
              </div>

              <div className='relative'>
                <FiPhone className='absolute top-1/2 left-4 -translate-y-1/2 text-gray-400' />
                <input
                  type='tel'
                  placeholder='Phone Number'
                  className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                />
              </div>

              {/* NEW: Child's Age Dropdown */}
              <div className='relative'>
                <FaChild className='absolute top-1/2 left-4 -translate-y-1/2 text-gray-400' />
                <select
                  className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none text-gray-500'
                  defaultValue=''
                >
                  <option value='' disabled>
                    Select Child's Age
                  </option>
                  <option value='daycare'>Under 1.8 yrs </option>
                  <option value='playgroup'>1.8 - 2.5 yrs</option>
                  <option value='nursery'>2.5 - 3.5 yrs </option>
                  <option value='kg'>3.5 - 5.5 yrs</option>
                  <option value='primary'>Above 5.5 yrs</option>
                </select>
              </div>

              <div className='relative'>
                <FiMessageSquare className='absolute top-4 left-4 text-gray-400' />
                <textarea
                  placeholder='Your Message'
                  rows={4}
                  className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                ></textarea>
              </div>

              <motion.button
                type='submit'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // Using standard Tailwind colors
                className='w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-colors'
              >
                Submit Enquiry
              </motion.button>
            </form>
            {/* </AnimatedSection> */}
          </div>

          {/* --- Map & Info Section (Right Side) --- */}
          <div className='w-full lg:w-1/2 p-8 md:p-12 bg-gradient-to-br from-blue-100 to-green-100 flex flex-col justify-center'>
            {/* <AnimatedSection> */}
            <h3 className='text-3xl font-nunito font-bold text-indigo-700 mb-6'>
              Visit Us
            </h3>

            {/* Map */}
            <div className='rounded-xl overflow-hidden shadow-lg h-64 mb-6'>
              <iframe
                // IMPORTANT: Replace this src with your actual Google Maps embed link
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.411624422204!2d73.09265691539268!3d19.17724215354511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bde93f38f5f3%3A0xf65b279b63467611!2sSIX%20SENSES%20PRESCHOOL%20%26%20DAYCARE!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen={false}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>

            {/* Address & Contact Details */}
            <div className='space-y-4'>
              <p className='flex items-start text-lg text-gray-800'>
                <FiMapPin className='mr-3 mt-1 text-indigo-700 flex-shrink-0' />
                <span>
                  <strong>Main Branch:</strong> Vasudev Krupa, Marathe Office,
                  Nandivali Rd, Dombivli East, Maharashtra 421201
                </span>
              </p>

              {/* REINFORCED: Contact numbers */}
              <p className='flex items-center text-lg text-gray-800 font-semibold'>
                <FiPhone className='mr-3 text-indigo-700' />
                <span>
                  <a href='tel:+917506030742' className='hover:underline'>
                    75060 30742
                  </a>{' '}
                </span>
              </p>

              {/* WhatsApp Button */}
              <a
                href='https://wa.me/917506030742'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block'
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-6 rounded-full shadow-lg'
                >
                  <FaWhatsapp className='mr-2' /> WhatsApp Us
                </motion.button>
              </a>
            </div>
            {/* </AnimatedSection> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
