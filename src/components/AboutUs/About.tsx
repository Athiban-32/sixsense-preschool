import React from 'react';
import { FiCheckCircle } from 'react-icons/fi'; // Import a new icon
import AnimatedSection from '../common/AnimatedSection.tsx'; // Assuming this component exists

// Define the "Six Senses"
const sixSenses = [
  'Curiosity',
  'Creativity',
  'Confidence',
  'Communication',
  'Compassion',
  'Care',
];

const About = () => {
  // No more stats or useInView needed

  return (
    <section id='about' className='py-20 bg-gray-50'>
      {' '}
      {/* Standard light background */}
      <div className='container mx-auto px-6'>
        <AnimatedSection>
          <div className='flex flex-wrap items-center'>
            {/* Image Column (Unchanged) */}
            <div className='w-full md:w-5/12 p-4 flex justify-center'>
              <img
                src='/image1.jpg'
                alt='Children learning at Six Senses'
                className='rounded-2xl shadow-xl w-full max-w-sm'
              />
            </div>

            {/* Text Content Column (Updated) */}
            <div className='w-full md:w-7/12 p-4'>
              {/* Main Heading */}
              <h2 className='text-3xl font-nunito font-bold mb-4 text-indigo-700'>
                Our Story
              </h2>

              {/* Our Story Paragraph */}
              <p className='text-lg leading-relaxed mb-6 text-gray-700'>
                Founded with love and passion for early education,{' '}
                <strong>Six Senses Preschool & Daycare</strong> has been guiding
                children through their first learning steps for over a decade.
                We combine the warmth of home with the creativity of a modern
                preschool — helping every child explore, imagine, and express
                freely.
              </p>

              {/* Philosophy Sub-heading */}
              <h3 className='text-2xl font-nunito font-semibold mb-3 text-indigo-600'>
                Our Philosophy
              </h3>

              {/* Philosophy Paragraph */}
              <p className='text-lg leading-relaxed mb-5 text-gray-700'>
                We believe that a child’s early years are the foundation for
                lifelong learning. Our approach focuses on developing the{' '}
                <strong>six essential senses</strong>:
              </p>

              {/* Six Senses Grid */}
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4'>
                {sixSenses.map((sense) => (
                  <div key={sense} className='flex items-center'>
                    <FiCheckCircle className='text-green-500 mr-2 h-5 w-5 flex-shrink-0' />
                    <span className='font-semibold text-gray-800 text-lg'>
                      {sense}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
