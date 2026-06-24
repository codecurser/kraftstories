import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import brutalStyles from './brutal.css?inline';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

import NavbarBrutal from './components/NavbarBrutal';
// Footer hasn't changed structurally, so we can just use the same Footer, or if there's FooterBrutal we'd use it. Since I didn't copy Footer, we'll use Footer.
import HomeBrutal from './pages/HomeBrutal';
import AboutBrutal from './pages/AboutBrutal';
import ServicesBrutal from './pages/ServicesBrutal';
import PortfolioBrutal from './pages/PortfolioBrutal';
import PricingBrutal from './pages/PricingBrutal';
import ContactBrutal from './pages/ContactBrutal';

import ScrollToTop from './components/ScrollToTop';
import AnimatedBackground from './components/AnimatedBackground';
import { useTheme } from './context/ThemeContext';

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();
  const { theme } = useTheme();

  return (
    <div className="app-container">
      {theme === 'brutal' && <style>{brutalStyles}</style>}
      {theme === 'glass' && <AnimatedBackground />}
      <ScrollToTop />
      {theme === 'brutal' ? <NavbarBrutal /> : <Navbar />}
      
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition>{theme === 'brutal' ? <HomeBrutal /> : <Home />}</PageTransition>} />
            <Route path="/about" element={<PageTransition>{theme === 'brutal' ? <AboutBrutal /> : <About />}</PageTransition>} />
            <Route path="/services" element={<PageTransition>{theme === 'brutal' ? <ServicesBrutal /> : <Services />}</PageTransition>} />
            <Route path="/portfolio" element={<PageTransition>{theme === 'brutal' ? <PortfolioBrutal /> : <Portfolio />}</PageTransition>} />
            <Route path="/pricing" element={<PageTransition>{theme === 'brutal' ? <PricingBrutal /> : <Pricing />}</PageTransition>} />
            <Route path="/contact" element={<PageTransition>{theme === 'brutal' ? <ContactBrutal /> : <Contact />}</PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
