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
import GallerySection from './components/Gallery/Gallery';

// ==== HELPER COMPONENTS ====
const WavyDivider = ({ top = false, color = "#F0F8FF" }) => (
  <div className={`absolute left-0 w-full ${top ? '-top-1' : '-bottom-1'}`} style={{ lineHeight: 0 }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className={`relative block w-full h-24 md:h-40 ${top ? 'transform rotate-180' : ''}`}>
      <path fill={color} fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,245.3C672,267,768,277,864,256C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  </div>
);

// ==== GALLERY SECTION (WITH CREATIVE HOVER) ====



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
        <GallerySection />
        <OurBranches/>
        <AdmissionsSection/>
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App;