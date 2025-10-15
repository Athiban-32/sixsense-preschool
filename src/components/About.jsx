import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaEye } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-24 bg-bg-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.pexels.com/photos/7933256/pexels-photo-7933256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Happy children playing" 
              className="rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-fredoka text-text-dark mb-6">Welcome to Our Family</h2>
            <p className="text-lg text-text-light mb-8">
              Established in 2012, Six Senses is more than a preschool; it's a place where children are cherished. We believe in learning through love, laughter, and discovery.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaHeart className="text-brand-pink text-4xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-fredoka text-text-dark">Our Mission</h3>
                  <p className="text-text-light">To nurture confident, curious, and compassionate children in a joyful adventure of learning.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaEye className="text-brand-blue text-4xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-fredoka text-text-dark">Our Vision</h3>
                  <p className="text-text-light">To be Kilifi’s most trusted preschool, shaping young minds into happy, lifelong learners.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;