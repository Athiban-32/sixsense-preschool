import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section id="contact-us" className="py-24 bg-bg-light relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-brand-yellow/20 rounded-full opacity-50 blur-xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-coral/20 rounded-full opacity-50 blur-xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-fredoka text-text-dark">Ready to Join the Fun?</h2>
          <p className="text-lg text-text-light mt-4 max-w-2xl mx-auto">We are excited to welcome you and your little one. Reach out to schedule a tour or ask any questions!</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-fredoka text-2xl text-text-dark mb-6">Send Us a Message</h3>
            <form>
              <div className="mb-4"><input type="text" placeholder="Parent's Full Name" className="w-full p-4 rounded-lg bg-bg-light border-2 border-transparent focus:border-brand-blue outline-none" /></div>
              <div className="mb-4"><input type="tel" placeholder="Phone Number" className="w-full p-4 rounded-lg bg-bg-light border-2 border-transparent focus:border-brand-blue outline-none" /></div>
              <div className="mb-6"><textarea rows="4" placeholder="Your Message" className="w-full p-4 rounded-lg bg-bg-light border-2 border-transparent focus:border-brand-blue outline-none"></textarea></div>
              <motion.button type="submit" className="w-full bg-brand-coral text-white font-bold text-lg py-4 rounded-lg shadow-lg" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>Submit Enquiry</motion.button>
            </form>
          </motion.div>
          
          {/* Map and Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-80 w-full rounded-2xl overflow-hidden shadow-2xl mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.618603673752!2d73.08865731538356!3d19.168128653244244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7958b446f20e5%3A0x28695ae065f4967!2sDombivli%20East%2C%20Dombivli%2C%20Maharashtra%20421201%2C%20India!5e0!3m2!1sen!2sus!4v1665800000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-center">
              <p className="text-text-light font-bold">Vasudev Krupa, Marathe Office, Nandivali Rd, Dombivli East, Maharashtra 421201</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <motion.a href="https://wa.me/917506030742" target="_blank" className="bg-brand-green text-white font-bold py-3 px-6 rounded-full inline-flex items-center justify-center gap-2" whileHover={{ y: -3 }}><FaWhatsapp /> WhatsApp</motion.a>
                <motion.a href="tel:+917506030742" className="bg-brand-blue text-white font-bold py-3 px-6 rounded-full inline-flex items-center justify-center gap-2" whileHover={{ y: -3 }}><FaPhoneAlt /> Call Us</motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;