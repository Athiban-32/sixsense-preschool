import { motion } from 'framer-motion';
import Navbar from './components/Navbar/NavBar';
import HeroSection from './components/Hero/Hero';
import Hero2 from './components/Hero/HeroAlternative';
import AboutSection from './components/CTA/CTA';
import About from './components/AboutUs/About';
import AnimatedSection from './components/common/AnimatedSection';
import OurPrograms from './components/Programs/Programs';
import OurBranches from './components/Contact/Branches';
import AdmissionsSection from './components/Application/ApplicationSteps';
import Footer from './components/Footer/Footer';
import ContactForm from './components/Contact/ContactForm';

// ==== HELPER COMPONENTS ====
const WavyDivider = ({ top = false, color = "#F0F8FF" }) => (
  <div className={`absolute left-0 w-full ${top ? '-top-1' : '-bottom-1'}`} style={{ lineHeight: 0 }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className={`relative block w-full h-24 md:h-40 ${top ? 'transform rotate-180' : ''}`}>
      <path fill={color} fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,245.3C672,267,768,277,864,256C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  </div>
);

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


// ==== MAIN APP COMPONENT ====
function App() {
  return (
    <div className="App bg-white">
      <Navbar />
      <main>
        <Hero2/>
        {/* <HeroSection /> */}
        <AboutSection/>
        <About />
        <OurPrograms />
        <Gallery />
        <OurBranches/>
        <AdmissionsSection/>
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App;