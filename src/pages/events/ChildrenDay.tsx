import React, { useState, ChangeEvent, FormEvent, Fragment } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
// import { Dialog, Transition } from '@headlessui/react'; // Not used in this version
import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUsers,
  FiUser,
  FiPhone,
  FiArrowLeft,
  FiPlus, // <-- ADDED
  FiMinus, // <-- ADDED
} from 'react-icons/fi';
import {
  FaHatWizard,
  FaBirthdayCake,
  FaChild,
  FaPuzzlePiece,
} from 'react-icons/fa';

// --- NEW: Sparkle Animation Component ---
const SparkleAnimation = () => {
  const sparkles = Array.from({ length: 20 }); // Generate 20 sparkles

  return (
    <div className='absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-20'>
      {sparkles.map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-1 h-1 bg-yellow-200 rounded-full shadow-lg'
          style={{
            top: '-5%',
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: '105vh', // Animate to just below the viewport
          }}
          transition={{
            duration: Math.random() * 3 + 2, // Duration between 2-5 seconds
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: Math.random() * 5, // Staggered start times
          }}
        />
      ))}
    </div>
  );
};

// --- Re-usable Detail Card ---
interface DetailCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}
const DetailCard: React.FC<DetailCardProps> = ({ icon, title, text }) => (
  <div className='flex items-start p-4 bg-white rounded-lg shadow-sm'>
    <div className='flex-shrink-0 mr-4 text-purple-600'>{icon}</div>
    <div>
      <h3 className='text-lg font-bold text-gray-800'>{title}</h3>
      <p className='text-gray-600'>{text}</p>
    </div>
  </div>
);

// --- UPDATED: Form Data Interface (Email removed) ---
interface Child {
  name: string;
  age: string;
}
interface MagicFormData {
  parentName: string;
  phone: string;
  ticketCount: number;
  children: Child[];
}

// --- Main Magic Show Page Component ---
const MagicShowPage: React.FC = () => {
  const navigate = useNavigate();
  const TICKET_PRICE = 150;

  // --- UPDATED: State (Email removed) ---
  const [formData, setFormData] = useState<MagicFormData>({
    parentName: '',
    phone: '',
    ticketCount: 1,
    children: [{ name: '', age: '' }],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null
  );

  const totalAmount = formData.ticketCount * TICKET_PRICE;

  // --- UPDATED: handleInputChange (Ticket logic removed) ---
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // --- NEW: Handler for +/- buttons ---
  const handleTicketChange = (amount: number) => {
    setFormData((prev) => {
      const newCount = Math.max(1, Math.min(5, prev.ticketCount + amount)); // Clamped 1-5
      const newChildren = [...prev.children];
      while (newChildren.length < newCount) {
        newChildren.push({ name: '', age: '' });
      }
      while (newChildren.length > newCount) {
        newChildren.pop();
      }
      return { ...prev, ticketCount: newCount, children: newChildren };
    });
  };

  const handleChildInputChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const newChildren = [...formData.children];
    newChildren[index] = { ...newChildren[index], [name]: value };
    setFormData((prev) => ({ ...prev, children: newChildren }));
  };

  // --- UPDATED: handleSubmit (Fixed fetch logic) ---
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL_MAGIC_SHOW;

    if (!scriptURL) {
      console.error('Magic Show Script URL is not set in .env file.');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    const flatChildData: { [key: string]: string } = {};
    formData.children.forEach((child, index) => {
      flatChildData[`child${index + 1}_name`] = child.name;
      flatChildData[`child${index + 1}_age`] = child.age;
    });

    const googleFormData = {
      action: 'register',
      parentName: formData.parentName,
      phone: formData.phone,
      ticketCount: formData.ticketCount,
      totalAmount: totalAmount,
      timestamp: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
      }),
      ...flatChildData,
    };

    // --- FIXED: Fetch logic to match JSON script ---
    fetch(scriptURL, {
      redirect: 'follow',
      method: 'POST',
      body: JSON.stringify(googleFormData),
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.text())
      .then((data) => {
        // <-- FIXED: Check for JSON success
        setIsSubmitting(false);
        setSubmitStatus('success');
        navigate('/thank-you');
      })
      .catch((err) => {
        console.error('Failed to send data:', err);
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  return (
    <div className='bg-white'>
      {/* --- 1. Hero Section --- */}
      <header className='bg-white shadow-sm sticky top-0 z-40'>
        <div className='container mx-auto px-6 py-3 flex justify-between items-center'>
          {/* Logo */}
          <Link to='/' className='flex items-center gap-2'>
            <img
              src='/logo.png' // <-- FIXED: Path
              alt='Six Sense Logo'
              className='h-10 w-auto mr-2' // <-- FIXED: Width
            />
          </Link>
          {/* Back Link */}
          <Link
            to='/'
            className='flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800'
          >
            <FiArrowLeft className='mr-1' />
            Back to Home
          </Link>
        </div>
      </header>

      <div
        className='relative text-white overflow-hidden bg-cover bg-top min-h-[80vh] group'
        style={{ backgroundImage: "url('/events/magic.jpg')" }}
      >
        <SparkleAnimation />
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end'>
          <div className='container mx-auto px-6 py-12 text-center relative z-10'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className='text-4xl md:text-6xl font-bold font-nunito mb-4 text-white'>
                A Magical Children's Day!
              </h1>
              <p className='text-xl md:text-2xl text-gray-200 mb-8 font-serif italic'>
                Join us for an unforgettable day of wonder, magic, and sweet
                treats!
              </p>
            </motion.div>
          </div>
        </div>

        <div className='absolute bottom-6 left-1/2 -translate-x-1/2 z-20'>
          <motion.a
            href='#register'
            className='inline-block bg-amber-300 text-purple-900 font-bold py-3 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300'
            whileHover={{ scale: 1.05 }}
          >
            Register Now
          </motion.a>
        </div>
      </div>

      {/* --- 2. Event Details Section --- */}
      <section className='py-16 bg-gradient-to-br from-indigo-50 to-purple-50'>
        <div className='container mx-auto px-6 max-w-4xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <DetailCard
              icon={<FiCalendar size={30} />}
              title='Date'
              text='15th November 2025'
            />
            <DetailCard
              icon={<FiClock size={30} />}
              title='Time'
              text='4:00 PM - 6:00 PM'
            />
            <DetailCard
              icon={<FiMapPin size={30} />}
              title='Location'
              text='Six Senses Preschool, Dombivli (East)'
            />
            <DetailCard
              icon={<FiUsers size={30} />}
              title='Who can join?'
              text='Open to all kids (Ages 2-10). Parents are welcome free of charge!'
            />
          </div>
        </div>
      </section>

      {/* --- 3. What to Expect Section --- */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl md:text-4xl font-nunito font-bold text-center text-purple-700 mb-12'>
            A Day Packed with Fun!
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className='rounded-lg bg-white shadow-lg overflow-hidden'
            >
              <img
                src='/events/kathpuli_show.jpg'
                alt='Kathputli & Magic Show'
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2'>
                  Kathputli & Magic Show
                </h3>
                <p className='text-gray-700'>
                  Be amazed by traditional puppets and mind-boggling magic!
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className='rounded-lg bg-white shadow-lg overflow-hidden'
            >
              <img
                src='/events/playzone.jpg'
                alt='Cake Workshop'
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2'>Cake Workshop</h3>
                <p className='text-gray-700'>
                  Every child gets to decorate their own cupcake to take home.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className='rounded-lg bg-white shadow-lg overflow-hidden'
            >
              <img
                src='/events/magic_show.jpg'
                alt='Games & Playzone'
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2'>Games & Playzone</h3>
                <p className='text-gray-700'>
                  Fun games, activities, and access to our dedicated play area.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 4. Registration Form Section --- */}
      <section
        id='register'
        className='py-20 bg-gradient-to-br from-indigo-50 to-purple-50'
      >
        <div className='container mx-auto px-6 max-w-xl'>
          <div className='bg-white p-8 md:p-12 rounded-2xl shadow-xl'>
            <h2 className='text-3xl font-nunito font-bold text-indigo-700 mb-6 text-center'>
              Book Your Spot!
            </h2>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div className='relative'>
                <FiUser className='absolute top-1/2 left-4 -translate-y-1/2 text-gray-400' />
                <input
                  type='text'
                  name='parentName'
                  placeholder='Parent’s Full Name'
                  className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400'
                  value={formData.parentName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='relative'>
                <FiPhone className='absolute top-1/2 left-4 -translate-y-1/2 text-gray-400' />
                <input
                  type='tel'
                  name='phone'
                  placeholder='Phone Number (for updates)'
                  className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400'
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* --- NEW: +/- Ticket Counter --- */}
              <div className='relative'>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Number of Children Attending
                </label>
                <div className='flex items-center justify-between p-3 border border-gray-200 rounded-lg'>
                  <span className='text-gray-700'>Modify No. of children</span>
                  <div className='flex items-center gap-2'>
                    <motion.button
                      type='button'
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleTicketChange(-1)}
                      disabled={formData.ticketCount <= 1}
                      className='w-8 h-8 rounded-full bg-gray-200 text-gray-700 disabled:opacity-50'
                    >
                      <FiMinus className='mx-auto' />
                    </motion.button>
                    <span className='text-lg font-bold w-10 text-center'>
                      {formData.ticketCount}
                    </span>
                    <motion.button
                      type='button'
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleTicketChange(1)}
                      disabled={formData.ticketCount >= 5}
                      className='w-8 h-8 rounded-full bg-purple-500 text-white disabled:opacity-50'
                    >
                      <FiPlus className='mx-auto' />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* --- Dynamic Child Inputs --- */}
              {formData.children.map((child, index) => (
                <div
                  key={index}
                  className='grid grid-cols-1 md:grid-cols-3 gap-4 p-3 bg-purple-50 rounded-lg border border-purple-200'
                >
                  <div className='md:col-span-2 relative'>
                    <FaChild className='absolute top-1/2 left-4 -translate-y-1/2 text-gray-400' />
                    <input
                      type='text'
                      name='name'
                      placeholder={`Child ${index + 1}'s Name`}
                      className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300'
                      value={child.name}
                      onChange={(e) => handleChildInputChange(index, e)}
                      required
                    />
                  </div>
                  <div className='relative'>
                    <input
                      type='text'
                      name='age'
                      placeholder="Child's Age"
                      className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300'
                      value={child.age}
                      onChange={(e) => handleChildInputChange(index, e)}
                      required
                    />
                  </div>
                </div>
              ))}
              {/* --- End Dynamic Inputs --- */}

              <div className='text-center pt-4'>
                <p className='text-xl font-bold'>Total Amount</p>
                <p className='text-5xl font-bold text-purple-700'>
                  ₹{totalAmount}
                </p>
                <p className='text-sm text-gray-500'>(₹150 per child)</p>
                <p className='text-base text-gray-700 font-semibold mt-2'>
                  Payment can be made at the venue on the day of the event.
                </p>
              </div>

              <motion.button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-colors
                           disabled:opacity-70 disabled:cursor-not-allowed'
                whileHover={{ scale: !isSubmitting ? 1.05 : 1 }}
                whileTap={{ scale: !isSubmitting ? 0.95 : 1 }}
              >
                {isSubmitting ? 'Registering...' : 'Register Now'}
              </motion.button>

              {submitStatus === 'success' && (
                <p className='text-center text-green-600 font-semibold'>
                  Registration Successful! Redirecting...
                </p>
              )}
              {submitStatus === 'error' && (
                <p className='text-center text-red-600 font-semibold'>
                  Something went wrong. Please try again or call us.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* --- REMOVED: Payment Modal --- */}
    </div>
  );
};

export default MagicShowPage;
