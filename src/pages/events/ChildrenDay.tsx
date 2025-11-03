import React, { useState, ChangeEvent, FormEvent, Fragment } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUsers,
  FiUser,
  FiPhone,
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

// --- UPDATED: Form Data Interface ---
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

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isConfirmingPayment, setIsConfirmingPayment] = useState(false);

  const totalAmount = formData.ticketCount * TICKET_PRICE;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'ticketCount') {
      const count = Math.max(1, parseInt(value) || 1);
      setFormData((prev) => {
        const newChildren = [...prev.children];
        while (newChildren.length < count) {
          newChildren.push({ name: '', age: '' });
        }
        while (newChildren.length > count) {
          newChildren.pop();
        }
        return { ...prev, ticketCount: count, children: newChildren };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
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

    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(googleFormData),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === 'success') {
          setIsSubmitting(false);
          setSubmitStatus('success');
          setIsPaymentModalOpen(true);
        } else {
          throw new Error(data.error || 'Script execution error');
        }
      })
      .catch((err) => {
        console.error('Failed to send data:', err);
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  const handlePaymentConfirmation = () => {
    setIsConfirmingPayment(true);
    const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL_MAGIC_SHOW;

    const updateData = {
      action: 'updatePayment',
      phone: formData.phone,
    };

    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(updateData),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === 'success') {
          console.log('Payment status updated!');
        } else {
          console.error('Failed to update payment status:', data.error);
        }
      })
      .catch((err) => {
        console.error('Error in payment confirmation:', err);
      })
      .finally(() => {
        setIsConfirmingPayment(false);
        setIsPaymentModalOpen(false);
        navigate('/thank-you');
      });
  };

  return (
    <div className='bg-white'>
      {/* --- 1. Hero Section (UPDATED) --- */}
      <div
        className='relative text-white overflow-hidden bg-cover bg-top min-h-[80vh] group' // Use bg-top, larger height, and 'group' for hover
        style={{ backgroundImage: "url('/events/magic.jpg')" }}
      >
        {/* Sparkle Animation */}
        <SparkleAnimation />

        {/* UPDATED: Content: Always visible on mobile, fades in on desktop hover */}
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

        {/* UPDATED: Always Visible CTA Button, moved down */}
        <div className='absolute bottom-6 left-1/2 -translate-x-1/2 z-20'>
          {' '}
          {/* Changed to bottom-6 */}
          <motion.a
            href='#register'
            className='inline-block bg-amber-300 text-purple-900 font-bold py-3 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300'
            whileHover={{ scale: 1.05 }}
          >
            Register Now for ₹150
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
              text='Open to all kids (Ages 2-10)'
            />
          </div>
        </div>
      </section>

      {/* --- 3. What to Expect Section (UPDATED) --- */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl md:text-4xl font-nunito font-bold text-center text-purple-700 mb-12'>
            A Day Packed with Fun!
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            {/* --- Card 1: Kathputli & Magic Show --- */}
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

            {/* --- Card 2: Cake Workshop --- */}
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className='rounded-lg bg-white shadow-lg overflow-hidden'
            >
              <img
                src='/events/playzone.jpg' // Using playzone.jpg for cake workshop per your mapping
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

            {/* --- Card 3: Games & Playzone --- */}
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
              className='rounded-lg bg-white shadow-lg overflow-hidden'
            >
              <img
                src='/events/magic_show.jpg' // Using magic_show.jpg for this card
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

              <div className='relative'>
                <label
                  htmlFor='ticketCount'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Number of Children Attending
                </label>
                <input
                  type='number'
                  name='ticketCount'
                  id='ticketCount'
                  min='1'
                  className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400'
                  value={formData.ticketCount}
                  onChange={handleInputChange}
                  required
                />
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
              </div>

              <motion.button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-colors
                           disabled:opacity-70 disabled:cursor-not-allowed'
                whileHover={{ scale: !isSubmitting ? 1.05 : 1 }}
                whileTap={{ scale: !isSubmitting ? 0.95 : 1 }}
              >
                {isSubmitting ? 'Registering...' : 'Register'}
              </motion.button>

              {submitStatus === 'success' && (
                <p className='text-center text-green-600 font-semibold'>
                  Registration Successful! Please proceed to payment...
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

      {/* --- Payment Modal --- */}
      <Transition appear show={isPaymentModalOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-50'
          onClose={() => {
            /* Don't close on backdrop click */
          }}
        >
          {/* Backdrop */}
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/75' />
          </Transition.Child>

          {/* Modal Content */}
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-bold leading-6 text-gray-900'
                  >
                    Complete Your Payment
                  </Dialog.Title>
                  <div className='mt-4 text-center'>
                    <p className='text-gray-600 mb-4'>
                      Your spot is reserved! Please scan the QR code to pay.
                    </p>
                    <div className='mb-4'>
                      <p className='text-xl font-semibold text-gray-800'>
                        Total Amount
                      </p>
                      <p className='text-5xl font-bold text-purple-700'>
                        ₹{totalAmount}
                      </p>
                    </div>

                    <div className='w-64 h-64 bg-gray-200 mx-auto rounded-lg flex items-center justify-center text-gray-500'>
                      <img
                        src='/images/your-upi-qr-code.png'
                        alt='UPI QR Code for Payment'
                        className='w-full h-full object-cover rounded-lg'
                        onError={(e) =>
                          (e.currentTarget.style.display = 'none')
                        }
                      />
                      <span className='p-4' style={{ display: 'none' }}>
                        Your UPI QR Code Here
                      </span>
                    </div>
                    <p className='text-xs text-gray-500 mt-2'>
                      Please show a screenshot of your payment at the gate.
                    </p>
                  </div>

                  <div className='mt-6'>
                    <motion.button
                      type='button'
                      disabled={isConfirmingPayment}
                      className='w-full inline-flex justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-purple-700
                                 disabled:opacity-50'
                      onClick={handlePaymentConfirmation}
                      whileHover={{ scale: !isConfirmingPayment ? 1.03 : 1 }}
                    >
                      {isConfirmingPayment ? 'Processing...' : 'I Have Paid'}
                    </motion.button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default MagicShowPage;
