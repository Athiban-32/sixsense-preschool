import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FiMenu, FiX, FiAward, FiHeart, FiSmile, FiMapPin, FiPhone, FiBookOpen, FiUser } from 'react-icons/fi';
import { FaWhatsapp, FaChild, FaPalette, FaMusic, FaSeedling, FaPenFancy } from 'react-icons/fa';

// ==== NEW: SVG COMPONENTS FOR ANIMATED ELEMENTS ====
const Sun = () => (
    <motion.div
      className="absolute top-16 right-1/4"
      animate={{ rotate: 360, scale: [1, 1.05, 1] }}
      transition={{ rotate: { duration: 40, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
    >
        <svg width="100" height="100" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="62.5" cy="62.5" r="40" fill="url(#sun-gradient)"/>
            <defs>
                <radialGradient id="sun-gradient" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#FFD700"/>
                    <stop offset="100%" stopColor="#FFA500"/>
                </radialGradient>
            </defs>
        </svg>
    </motion.div>
);

const Cloud = ({ top, left, delay = 0, width = 120 }) => (
    <motion.div
        className="absolute"
        style={{ top, left }}
        animate={{ x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
    >
        <svg width={width} viewBox="0 0 132 81" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40.5" cy="40.5" r="40.5" fill="white" fillOpacity="0.8"/>
            <circle cx="81" cy="51" r="30" fill="white" fillOpacity="0.8"/>
            <circle cx="102" cy="40" r="30" fill="white" fillOpacity="0.8"/>
        </svg>
    </motion.div>
);

// ==== NEW: Smaller cloud for the header ====
const HeaderCloud = ({ className, delay = 0 }) => (
    <motion.div
        className={`absolute -top-8 w-24 opacity-50 ${className}`}
        animate={{ x: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
         <svg viewBox="0 0 132 81" fill="#F0F8FF" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40.5" cy="40.5" r="40.5" />
            <circle cx="81" cy="51" r="30" />
            <circle cx="102" cy="40" r="30" />
        </svg>
    </motion.div>
);

// ==== NEW: Generic floating shape component for stars, balloons etc. ====
const FloatingShape = ({ children, className, duration = 10, delay = 0 }) => (
    <motion.div
        className={`absolute ${className}`}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
        {children}
    </motion.div>
);

const Star = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
);

const Rainbow = () => (
    <motion.div
        className="absolute bottom-0 left-10 w-48 md:w-64"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
    >
        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 100 A 90 90 0 0 1 190 100" stroke="#FFB6C1" strokeWidth="15" fill="none" strokeLinecap="round"/>
            <path d="M 25 100 A 75 75 0 0 1 175 100" stroke="#FFD700" strokeWidth="15" fill="none" strokeLinecap="round"/>
            <path d="M 40 100 A 60 60 0 0 1 160 100" stroke="#90EE90" strokeWidth="15" fill="none" strokeLinecap="round"/>
            <path d="M 55 100 A 45 45 0 0 1 145 100" stroke="#87CEEB" strokeWidth="15" fill="none" strokeLinecap="round"/>
        </svg>
    </motion.div>
);


// ==== HELPER COMPONENTS ====
const WavyDivider = ({ top = false, color = "#F0F8FF" }) => (
  <div className={`absolute left-0 w-full ${top ? '-top-1' : '-bottom-1'}`} style={{ lineHeight: 0 }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className={`relative block w-full h-24 md:h-40 ${top ? 'transform rotate-180' : ''}`}>
      <path fill={color} fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,245.3C672,267,768,277,864,256C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  </div>
);

const AnimatedSection = ({ children, className }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ==== NAVIGATION BAR (WITH CLOUDS) ====
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = ['About', 'Programs', 'Gallery', 'Awards', 'Contact'];
    return (
        <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 overflow-hidden">
            {/* NEW: Animated header clouds */}
            <HeaderCloud className="left-10" />
            <HeaderCloud className="left-1/3" delay={2} />
            <HeaderCloud className="right-10 hidden md:block" delay={1} />
            
            <div className="container mx-auto px-6 py-3 flex justify-between items-center relative z-10">
                <a href="#" className="text-2xl font-nunito font-extrabold text-brand-purple">
                    Six Sense
                </a>
                <div className="hidden md:flex space-x-6 items-center">
                    {navLinks.map(link => (
                        <a key={link} href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-600 hover:text-brand-purple transition-colors duration-300 font-semibold">
                            {link}
                        </a>
                    ))}
                    <a href="#contact">
                        <motion.button
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-sunny-yellow to-orange-400 text-white font-bold py-2 px-5 rounded-full shadow-lg flex items-center gap-2"
                        >
                            <FaPenFancy size={14}/> Enroll Now
                        </motion.button>
                    </a>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <FiX size={24} /> : <FiMenu size={24} />}</button>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white/95 backdrop-blur-md">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                            {navLinks.map(link => ( <a key={link} href={`#${link.toLowerCase().replace(' ', '')}`} className="block text-gray-600 hover:text-brand-purple px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}> {link} </a> ))}
                            <a href="#contact" className="w-full text-center mt-2" onClick={() => setIsOpen(false)}>
                                <motion.button className="bg-gradient-to-r from-sunny-yellow to-orange-400 text-white font-bold py-2 px-6 rounded-full shadow-lg w-auto"> Enroll Now </motion.button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

// ==== HERO SECTION ====
const Hero = () => {
    return (
        <div className="relative bg-gradient-to-b from-sky-blue to-blue-300 overflow-hidden min-h-screen flex items-center">
            {/* Animated Elements */}
            <Sun />
            <Cloud top="20%" left="10%" />
            <Cloud top="40%" left="80%" delay={2} width={160} />
            <Rainbow />
            {/* NEW: Floating Stars */}
            <FloatingShape className="top-1/4 left-1/4" duration={8}><Star /></FloatingShape>
            <FloatingShape className="top-1/2 left-1/2" duration={12} delay={2}><Star /></FloatingShape>
            <FloatingShape className="top-3/4 right-1/4" duration={10}><Star /></FloatingShape>

            <div className="container mx-auto px-6 text-center z-10">
                <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, type: 'spring', stiffness: 100 }} className="text-white font-nunito font-black text-4xl md:text-7xl mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
                    A Wonderful Place to <span className="text-sunny-yellow">Grow</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="text-lg md:text-xl text-white mt-4 max-w-3xl mx-auto">
                    Nurturing minds, Building futures where every child is guided to reach their full potential through balanced and holistic education.
                </motion.p>
                <motion.a href="#contact" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-8 inline-block">
                    <motion.button whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }} className="bg-gradient-to-r from-soft-pink to-crayon-red text-white font-bold py-3 px-8 rounded-full shadow-xl text-lg">
                        Join Our Family
                    </motion.button>
                </motion.a>
            </div>
            <WavyDivider />
        </div>
    );
};


// ==== ABOUT SECTION ====
const About = () => {
    const stats = [{ number: 1000, label: 'Students', suffix: '+' }, { number: 20, label: 'Staff', suffix: '' }, { number: 13, label: 'Years of Excellence', suffix: '' }];
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="about" className="py-20 bg-light-bg">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
                    <motion.div whileHover={{ y: -10, scale: 1.03 }} className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-soft-pink"> <FiHeart className="text-soft-pink mx-auto" size={40} /> <h3 className="text-2xl font-nunito font-bold text-brand-purple my-2">Mission</h3> <p>To nurture confident, curious, and compassionate children in a safe, inspiring, and joyful environment.</p> </motion.div>
                    <motion.div whileHover={{ y: -10, scale: 1.03 }} className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-grass-green"> <FiSmile className="text-grass-green mx-auto" size={40} /> <h3 className="text-2xl font-nunito font-bold text-brand-purple my-2">Vision</h3> <p>To be Kilifi’s most trusted preschool, known for shaping young minds into thriving, lifelong learners.</p> </motion.div>
                    <motion.div whileHover={{ y: -10, scale: 1.03 }} className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-sunny-yellow"> <FaChild className="text-sunny-yellow mx-auto" size={40} /> <h3 className="text-2xl font-nunito font-bold text-brand-purple my-2">Motto</h3> <p>“Learning through love, laughter, and discovery.”</p> </motion.div>
                </div>
                <AnimatedSection>
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-5/12 p-4 flex justify-center">
                            <img src="/image1.jpg" alt="Children learning" className="rounded-2xl shadow-xl w-full max-w-sm" />
                        </div>
                        <div className="w-full md:w-7/12 p-4">
                            <h2 className="text-3xl font-nunito font-bold mb-4 text-brand-purple">Our Journey</h2>
                            <p className="text-lg leading-relaxed mb-4">Established in 2012, Six Senses Preschool is a beacon of excellence in early childhood education in Kilifi, growing from a small initiative into a home for generations of creative learners.</p>
                            <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-6">
                                {stats.map((stat, i) => (
                                    <div key={i} className="p-4 bg-white rounded-xl shadow-md">
                                        <h3 className="text-4xl font-nunito font-extrabold text-sunny-yellow"> {inView && <CountUp end={stat.number} duration={3} />}{stat.suffix} </h3>
                                        <p className="font-semibold text-gray-700">{stat.label}</p>
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


// ==== OUR PROGRAMS SECTION (WITH ENHANCED HOVER) ====
const OurPrograms = () => {
    const programs = [
        { icon: <FaPalette size={30} className="text-white"/>, title: 'Creative Arts', desc: 'Painting, crafting, and storytelling to unleash imagination.', color: 'from-soft-pink to-crayon-red' },
        { icon: <FaMusic size={30} className="text-white"/>, title: 'Music & Movement', desc: 'Singing, dancing, and playing instruments for joyful expression.', color: 'from-sunny-yellow to-orange-400' },
        { icon: <FaSeedling size={30} className="text-white"/>, title: 'Nature Exploration', desc: 'Gardening and outdoor play to connect with the natural world.', color: 'from-grass-green to-green-500' },
        { icon: <FiBookOpen size={30} className="text-white"/>, title: 'Early Literacy', desc: 'Fun with letters, sounds, and stories to build a love for reading.', color: 'from-sky-blue to-blue-400' },
    ];
    return (
        <section id="programs" className="py-20 bg-white relative">
            <WavyDivider top color="#F0F8FF" />
            <div className="container mx-auto px-6 text-center mt-12 z-10 relative">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-4xl font-nunito font-bold text-brand-purple mb-4">A Day Full of Wonder</h2>
                    <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">Our curriculum is a vibrant tapestry of activities designed to spark curiosity and joy in every child.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {programs.map((prog, i) => (
                            // NEW: Added bounce animation on hover
                            <motion.div key={i} className="bg-white p-6 rounded-2xl shadow-lg text-center" whileHover={{ scale: 1.05, y: -10 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center bg-gradient-to-br ${prog.color} mb-4 shadow-lg`}> {prog.icon} </div>
                                <h3 className="text-xl font-nunito font-bold mb-2 text-dark-text">{prog.title}</h3> <p className="text-gray-600">{prog.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
            <WavyDivider color="#F0F8FF" />
        </section>
    );
}

// ==== GALLERY SECTION (WITH CREATIVE HOVER) ====
const Gallery = () => {
    const images = [ 'https://www.parents.com/thmb/595334Wl0HQnRAxfMv6Fy7bf9ME=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_172261862-2--d36510500ca044e1bd9bb51f798b3141.jpg','https://www.unicef.org/montenegro/sites/unicef.org.montenegro/files/styles/hero_extended/public/his_sofija-05-19-235_0.jpg.webp?itok=O4m03gxg','https://www.ballarat.vic.gov.au/sites/default/files/styles/content_header_large_1000_x_640/public/page/field_image/2025-02/shutterstock_2420206409.jpg','https://www.care.com/c/wp-content/uploads/sites/2/2022/08/GettyImages-109374459.jpg','https://media.istockphoto.com/id/1458807880/photo/learning-through-play.jpg?s=612x612&w=0&k=20&c=W6mHfbgZXfGF4UbYn3FqP4BN_347dLD5Q9RvB6Yx1SQ=','https://img.freepik.com/premium-photo/group-children-are-laying-rug-with-word-happy-it_1045911-5336.jpg' ];
    return (
        <section id="gallery" className="py-20 bg-light-bg relative">
             <WavyDivider top />
            <div className="container mx-auto px-6 mt-12">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-4xl font-nunito font-bold text-center mb-12 text-brand-purple">Our Joyful Moments</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {images.map((src, i) => (
                            // NEW: Added a colorful border on hover for more pop
                            <motion.div key={i} className="overflow-hidden rounded-xl shadow-lg relative group" whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2, zIndex: 10 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <div className="absolute inset-0 border-4 border-transparent group-hover:border-sunny-yellow rounded-xl transition-all duration-300"></div>
                                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover aspect-square rounded-lg" />
                            </motion.div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

// ==== AWARDS SECTION ====
const Awards = () => {
    const awards = [{ title: 'Creative Learners Award', color: 'border-sunny-yellow' }, { title: 'Best Preschool Activities', color: 'border-grass-green' }, { title: "Parent's Choice 2025", color: 'border-soft-pink' }];
    return (
        <section id="awards" className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-4xl font-nunito font-bold text-brand-purple mb-4">Awards & Recognition</h2>
                    <p className="text-lg text-gray-600 mb-12">"Celebrating the small victories of our little stars!"</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {awards.map((award, i) => (
                            <motion.div whileHover={{ y: -10, scale: 1.03 }} key={i} className={`bg-light-bg p-8 rounded-xl shadow-md border-l-8 ${award.color} text-left flex items-center`}>
                                <FiAward className="text-brand-purple mr-4 flex-shrink-0" size={40} /> <h3 className="text-xl font-nunito font-bold text-dark-text">{award.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

// ==== CONTACT US SECTION (WHATSAPP BUTTON RESIZED & FORM IMPROVED) ====
const ContactUs = () => {
    return (
        <section id="contact" className="py-20 bg-light-bg relative">
            <WavyDivider top />
            <div className="container mx-auto px-6 mt-12">
                <div className="flex flex-wrap lg:flex-nowrap bg-white rounded-2xl shadow-2xl overflow-hidden">
                    {/* Form Section */}
                    <div className="w-full lg:w-1/2 p-8 md:p-12">
                        <AnimatedSection>
                            <h2 className="text-3xl font-nunito font-bold text-brand-purple mb-2">Enroll Your Little One!</h2>
                            <p className="text-gray-600 mb-6">We’d love to welcome your toddler (ages 2–4). Fill in the form or contact us directly!</p>
                            <form className="space-y-4">
                                {/* NEW: Creative form inputs with icons */}
                                <div className="relative">
                                    <FiUser className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"/>
                                    <input type="text" placeholder="Parent’s Full Name" className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue" />
                                </div>
                                <div className="relative">
                                    <FiPhone className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"/>
                                    <input type="tel" placeholder="Phone Number" className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue" />
                                </div>
                                <div>
                                    <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue"></textarea>
                                </div>
                                <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full bg-gradient-to-r from-soft-pink to-crayon-red text-white font-bold py-3 px-4 rounded-full shadow-lg transition-colors"> Submit Enquiry </motion.button>
                            </form>
                        </AnimatedSection>
                    </div>

                    {/* Map and Info Section */}
                    <div className="w-full lg:w-1/2 p-8 md:p-12 bg-gradient-to-br from-sky-blue-light to-grass-green-light flex flex-col justify-center">
                        <AnimatedSection>
                             <div className="rounded-xl overflow-hidden shadow-lg h-64 mb-6">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.411690558913!2d73.08866107499426!3d19.17721864770281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7834571f55555%3A0x117673c6b291d17!2sSix%20Sense's%20Pre-School!5e0!3m2!1sen!2sin!4v1728987313386!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="space-y-4">
                                <p className="flex items-start text-lg"> <FiMapPin className="mr-3 mt-1 text-brand-purple flex-shrink-0" /> <span>Vasudev Krupa, Marathe Office, Nandivali Rd, Dombivli East, Maharashtra 421201</span> </p>
                                <p className="flex items-center text-lg"> <FiPhone className="mr-3 text-brand-purple" /> <span>+91 75060 30742</span> </p>
                                {/* UPDATED: WhatsApp button is smaller and not full-width */}
                                <a href="https://wa.me/917506030742" target="_blank" rel="noopener noreferrer" className="inline-block">
                                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center justify-center bg-gradient-to-r from-grass-green to-green-500 text-white font-bold py-2 px-6 rounded-full shadow-lg"> <FaWhatsapp className="mr-2"/> WhatsApp Us </motion.button>
                                </a>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
};


// ==== FOOTER ====
const Footer = () => {
    return (
        <footer className="bg-brand-purple text-white relative pt-20">
            <WavyDivider top color="#9370DB" />
            <div className="container mx-auto py-8 px-6 text-center">
                <p className="font-nunito text-2xl font-bold mb-2">Six Sense Preschool</p>
                <p>© {new Date().getFullYear()} - Learning through love, laughter, and discovery.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="tel:+917506030742" className="hover:text-sunny-yellow transition-colors"><FiPhone size={24}/></a>
                    <a href="https://wa.me/917506030742" target="_blank" rel="noopener noreferrer" className="hover:text-sunny-yellow transition-colors"><FaWhatsapp size={24}/></a>
                </div>
            </div>
        </footer>
    );
}

// ==== MAIN APP COMPONENT ====
function App() {
  return (
    <div className="App bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <OurPrograms />
        <Gallery />
        <Awards />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}

export default App;