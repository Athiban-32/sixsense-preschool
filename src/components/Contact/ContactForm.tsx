import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
// Import icons
import {
  FiUser,
  FiPhone,
  FiMapPin,
  FiHome,
  FiMessageSquare,
} from 'react-icons/fi';
import { FaWhatsapp, FaChild } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  phone: string;
  age: string;
  message: string;
}

// --- ADDED: Type for submit status ---
type SubmitStatus = 'success' | 'error' | null;

const ContactForm: React.FC = () => {
  const navigate = useNavigate(); // <-- 2. Initialize the hook

  // --- ADDED: State for form inputs ---
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    age: '',
    message: '',
  });

  // --- ADDED: State for submission status ---
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // --- MODIFIED: HandleSubmit function for Google Sheets ---
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // --- Get the Google Script URL from .env ---
    const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    if (!scriptURL) {
      console.error('Google Script URL is not set in .env file.');
      console.error('VITE_GOOGLE_SCRIPT_URL:', scriptURL);
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    // We need to create a FormData object to send to the Apps Script
    const googleFormData = {
      name: formData.name,
      phone: formData.phone,
      age: formData.age,
      message: formData.message,
      timestamp: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
      }),
    };

    fetch(scriptURL, {
      redirect: 'follow',
      method: 'POST',
      body: JSON.stringify(googleFormData),
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        // The script will return a success JSON
        console.log('Data sent successfully to Google Sheet!');
        setSubmitStatus('success');
        setIsSubmitting(false);

        setTimeout(() => {
          navigate('/thank-you');
        }, 1000);
      })
      .catch((err) => {
        console.error('Failed to send data:', err);
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  return (
    <section id='contact' className='py-20 bg-gray-50 relative'>
      {/* <WavyDivider top color="#FFFFFF" /> */}

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

            <div className='mb-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200'>
              <h4 className='font-nunito font-bold text-indigo-700 text-lg mb-2'>
                Prefer to call?
              </h4>
              <div className='flex items-center text-gray-800'>
                <FiPhone className='mr-3 text-indigo-600' />
                <span className='font-semibold'>
                  <a href='tel:+917506030742' className='hover:underline'>
                    75060 30742
                  </a>
                </span>
              </div>
            </div>

            <h4 className='text-xl font-nunito font-semibold text-gray-700 mb-4'>
              Or, send an enquiry:
            </h4>

            {/* --- MODIFIED: Added onSubmit --- */}
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div className='relative'>
                <FiUser className='absolute top-1/2 left-4 -translate-y-1/2 text-gray-400' />
                <input
                  type='text'
                  name='name' // --- ADDED ---
                  placeholder='Parent’s Full Name'
                  className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                  value={formData.name} // --- ADDED ---
                  onChange={handleInputChange} // --- ADDED ---
                  required // --- ADDED ---
                />
              </div>

              <div className='relative'>
                <FiPhone className='absolute top-1/2 left-4 -translate-y-1/2 text-gray-400' />
                <input
                  type='tel'
                  name='phone' // --- ADDED ---
                  placeholder='Phone Number'
                  className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                  value={formData.phone} // --- ADDED ---
                  onChange={handleInputChange} // --- ADDED ---
                  required // --- ADDED ---
                />
              </div>

              <div className='relative'>
                <FaChild className='absolute top-1/2 left-4 -translate-y-1/2 text-gray-400' />
                <select
                  name='age' // --- ADDED ---
                  className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none text-gray-500'
                  value={formData.age} // --- ADDED ---
                  onChange={handleInputChange} // --- ADDED ---
                  required // --- ADDED ---
                >
                  <option value='' disabled>
                    Select Child's Age
                  </option>
                  <option value='Under 1.8 yrs'>Under 1.8 yrs</option>
                  <option value='1.8 - 2.5 yrs'>1.8 - 2.5 yrs</option>
                  <option value='2.5 - 3.5 yrs'>2.5 - 3.5 yrs</option>
                  <option value='3.5 - 5.5 yrs'>3.5 - 5.5 yrs</option>
                  <option value='Above 5.5 yrs'>Above 5.5 yrs</option>
                </select>
              </div>

              <div className='relative'>
                <FiMessageSquare className='absolute top-4 left-4 text-gray-400' />
                <textarea
                  name='message' // --- ADDED ---
                  placeholder='Your Message (Optional)'
                  rows={4}
                  className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                  value={formData.message} // --- ADDED ---
                  onChange={handleInputChange} // --- ADDED ---
                ></textarea>
              </div>

              <motion.button
                type='submit'
                whileHover={{ scale: !isSubmitting ? 1.05 : 1 }}
                whileTap={{ scale: !isSubmitting ? 0.95 : 1 }}
                disabled={isSubmitting} // --- ADDED: Disable on submit ---
                className='w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-colors
                           disabled:opacity-70 disabled:cursor-not-allowed' // --- ADDED: Disabled styles ---
              >
                {/* --- ADDED: Show sending text --- */}
                {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
              </motion.button>

              {/* --- ADDED: Submission status message --- */}
              {submitStatus === 'success' && (
                <p className='text-center text-green-600 font-semibold'>
                  Enquiry sent! Redirecting...
                </p>
              )}
              {submitStatus === 'error' && (
                <p className='text-center text-red-600 font-semibold'>
                  Something went wrong. Please try again or call us.
                </p>
              )}
            </form>
            {/* </AnimatedSection> */}
          </div>

          {/* --- Map & Info Section (Right Side) --- */}
          <div className='w-full lg:w-1/2 p-8 md:p-12 bg-gradient-to-br from-blue-100 to-green-100 flex flex-col justify-center'>
            {/* <AnimatedSection> */}
            <h3 className='text-3xl font-nunito font-bold text-indigo-700 mb-6'>
              Visit Us
            </h3>
            <div className='rounded-xl overflow-hidden shadow-lg h-64 mb-6'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120566.23196492341!2d73.00753608375689!3d19.20853039023422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79588ffffff89%3A0x63df39032e302075!2sSix%20Senses%20-%20Preschool%20%7C%20Play%20School%20%7C%20Daycare%20center%20%7C%20In%20Dombivli!5e0!3m2!1sen!2sin!4v1763557468653!5m2!1sen!2sin'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen={false}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>

            <div className='space-y-4'>
              <p className='flex items-start text-lg text-gray-800'>
                <FiMapPin className='mr-3 mt-1 text-indigo-700 flex-shrink-0' />
                <span>
                  <strong>Main Branch:</strong> Vasudev Krupa, Marathe Office,
                  Nandivali Rd, Dombivli East, Maharashtra 421201
                </span>
              </p>

              <p className='flex items-center text-lg text-gray-800 font-semibold'>
                <FiPhone className='mr-3 text-indigo-700' />
                <span>
                  <a href='tel:+917506030742' className='hover:underline'>
                    75060 30742
                  </a>
                </span>
              </p>

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
