import React from 'react';
import { motion } from 'framer-motion';
import { FaChild, FaPaintBrush, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaChild />,
    title: 'Play-Based Learning',
    description: 'Our curriculum is built around curiosity, letting children learn and grow through joyful play.',
    color: 'brand-yellow'
  },
  {
    icon: <FaPaintBrush />,
    title: 'Creative Arts',
    description: 'We encourage self-expression through music, art, and dance to nurture creativity.',
    color: 'brand-pink'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Safe & Nurturing',
    description: 'A secure and caring environment where every child feels safe, valued, and loved.',
    color: 'brand-green'
  }
];

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-fredoka text-text-dark mb-12">Why Six Sense?</h2>
        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-bg-cream p-8 rounded-2xl shadow-lg transform hover:-translate-y-3 transition-transform duration-300"
              variants={itemVariants}
            >
              <div className={`text-5xl text-${feature.color} inline-block mb-4`}>{feature.icon}</div>
              <h3 className="text-2xl font-fredoka text-text-dark mb-3">{feature.title}</h3>
              <p className="text-text-light">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;