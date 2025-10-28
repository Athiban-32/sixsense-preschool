import React from 'react';
// Import icons
import { FiPhone, FiMail, FiAward } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaFacebook, FaGoogle } from 'react-icons/fa';

// Assuming WavyDivider is a component you have
// const WavyDivider = ({ top, color }) => { /* ... */ };

const Footer = () => {
  return (
    <footer className='bg-indigo-900 text-gray-200 relative pt-20'>
      {/* Wavy Divider */}
      {/* We'll use a standard Tailwind color for the divider */}
      {/* <WavyDivider top color="#4338CA" /> {/* This is indigo-700 */}

      <div className='container mx-auto py-12 px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          {/* --- Column 1: About & Socials --- */}
          <div className='md:col-span-2 lg:col-span-1'>
            <h3 className='font-nunito text-2xl font-bold text-white mb-3'>
              Six Senses Preschool
            </h3>
            <p className='text-gray-400 mb-4'>
              "Learning through love, laughter, and discovery."
            </p>
            {/* Social Media Links */}
            <div className='flex space-x-4'>
              <a
                href='https://www.instagram.com/sixsenses23' // Update with correct link
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-pink-400 transition-colors'
                aria-label='Instagram'
              >
                <FaInstagram size={24} />
              </a>
              <a
                href='#' // Update with your Facebook link
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-blue-400 transition-colors'
                aria-label='Facebook'
              >
                <FaFacebook size={24} />
              </a>
              <a
                href='#' // Update with your Google Business link
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-yellow-400 transition-colors'
                aria-label='Google Business'
              >
                <FaGoogle size={24} />
              </a>
            </div>
            <p className='text-sm text-gray-500 mt-2'>
              IG: sixsenses23, jksixsenses
            </p>
          </div>

          {/* --- Column 2: Contact Info --- */}
          <div>
            <h4 className='text-lg font-nunito font-semibold text-white mb-4 uppercase tracking-wider'>
              Contact Us
            </h4>
            <ul className='space-y-3'>
              <li className='flex items-start'>
                <FiPhone className='mr-3 mt-1 text-indigo-300 flex-shrink-0' />
                <div>
                  <span className='font-semibold'>For Admissions:</span>
                  <br />
                  <a href='tel:+917506030742' className='hover:text-white'>
                    +91 75060 30742
                  </a>
                  <br />
                  <a href='tel:+919820285892' className='hover:text-white'>
                    +91 98202 85892
                  </a>
                </div>
              </li>
              <li className='flex items-center'>
                <FaWhatsapp
                  className='mr-3 text-green-400 flex-shrink-0'
                  size={18}
                />
                <a
                  href='https://wa.me/917506030742'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white'
                >
                  WhatsApp Us
                </a>
              </li>
              <li className='flex items-start'>
                <FiMail className='mr-3 mt-1 text-indigo-300 flex-shrink-0' />
                <a
                  href='mailto:meeraeducationdom@gmail.com'
                  className='hover:text-white break-all'
                >
                  meeraeducationdom@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* --- Column 3: Awards --- */}
          <div>
            <h4 className='text-lg font-nunito font-semibold text-white mb-4 uppercase tracking-wider'>
              Recognition
            </h4>
            <ul className='space-y-3'>
              <li className='flex items-start'>
                <FiAward className='mr-3 mt-1 text-yellow-400 flex-shrink-0' />
                <span>Silver Zone - Best Performance (2022, 2023, 2024)</span>
              </li>
              <li className='flex items-start'>
                <FiAward className='mr-3 mt-1 text-yellow-400 flex-shrink-0' />
                <span>Best Preschool (2023, 2024)</span>
              </li>
            </ul>
          </div>

          {/* --- Column 4: Quick Links (Optional but recommended) --- */}
          <div>
            <h4 className='text-lg font-nunito font-semibold text-white mb-4 uppercase tracking-wider'>
              Quick Links
            </h4>
            <ul className='space-y-2'>
              <li>
                <a href='#about' className='hover:text-white'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#programs' className='hover:text-white'>
                  Programs
                </a>
              </li>
              <li>
                <a href='#branches' className='hover:text-white'>
                  Our Branches
                </a>
              </li>
              <li>
                <a href='#admissions' className='hover:text-white'>
                  Admissions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Copyright Bar --- */}
        <div className='border-t border-indigo-700 mt-10 pt-6 text-center'>
          <p className='text-gray-400 text-sm'>
            © {new Date().getFullYear()} Six Sense Preschool. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
