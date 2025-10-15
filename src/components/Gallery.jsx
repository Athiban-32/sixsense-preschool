import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.pexels.com/photos/3933230/pexels-photo-3933230.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/8613054/pexels-photo-8613054.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1741231/pexels-photo-1741231.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/8613070/pexels-photo-8613070.jpeg?auto=compress&cs=tinysrgb&w=800",
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-fredoka text-text-dark mb-12">A Peek Inside Our World</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden rounded-2xl shadow-lg group ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;