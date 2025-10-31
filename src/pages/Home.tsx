import React, { useEffect } from 'react'; // <-- Import useEffect
import Navbar from '../components/Navbar/NavBar';
import Hero2 from '../components/Hero/HeroAlternative';
import AboutSection from '../components/CTA/CTA';
import About from '../components/AboutUs/About';
import OurPrograms from '../components/Programs/Programs';
import OurBranches from '../components/Contact/Branches';
import AdmissionsSection from '../components/Application/ApplicationSteps';
import Footer from '../components/Footer/Footer';
import ContactForm from '../components/Contact/ContactForm';
import GallerySection from '../components/Gallery/Gallery';

// ==== MAIN APP COMPONENT ====
function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);

      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          // Scroll to the element
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, []);

  return (
    <div className='App bg-white'>
      <Navbar />
      <main>
        <Hero2 />
        {/* <HeroSection /> */}
        <AboutSection />
        <About />
        <OurPrograms />
        <GallerySection />
        <OurBranches />
        <AdmissionsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
