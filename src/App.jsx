import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="app-container">
      <AnimatePresence>
        {!introFinished && <SplashScreen onFinish={() => setIntroFinished(true)} />}
      </AnimatePresence>
      
      <CustomCursor />
      {introFinished && <AnimatedBackground />}
      
      <ScrollToTop />
      <Navbar />
      <main style={{ visibility: introFinished ? 'visible' : 'hidden', height: introFinished ? 'auto' : '100vh', overflow: introFinished ? 'visible' : 'hidden' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {introFinished && <Footer />}
    </div>
  );
}

export default App;
