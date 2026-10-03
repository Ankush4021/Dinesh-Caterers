import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Menu from './pages/Menu.jsx';
import Contact from './pages/Contact.jsx';
import Testimonials from './components/Testimonial.jsx';

// Page change hone par screen ko top par le jaana.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    // overflow-x-clip use kiya (overflow-hidden nahi) taaki sticky navbar kaam kare.
    <div className="min-h-screen overflow-x-clip bg-cream text-ink">
      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
