import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
import SplashScreen from './components/SplashScreen';

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
  const [introFinished, setIntroFinished] = useState(false);
  const location = useLocation();

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {!introFinished && <SplashScreen onFinish={() => setIntroFinished(true)} key="splash" />}
      </AnimatePresence>
      
      <CustomCursor />
      {introFinished && <AnimatedBackground />}
      
      <ScrollToTop />
      <Navbar />
      <main style={{ visibility: introFinished ? 'visible' : 'hidden', height: introFinished ? 'auto' : '100vh', overflow: introFinished ? 'visible' : 'hidden' }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
            <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      {introFinished && <Footer />}
    </div>
  );
}

export default App;
