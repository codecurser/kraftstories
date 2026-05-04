import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Video } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo header-logo" onClick={closeMenu}>
          <img 
            src={scrolled ? "/logo-scrolled.png" : "/logo.png"} 
            alt="Kkraftstories Logo" 
            style={scrolled ? { transform: 'scale(3)', height: '55px' } : {}}
          />
        </Link>

        <div className="nav-links">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink>
          <NavLink to="/portfolio" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Portfolio</NavLink>
          <NavLink to="/pricing" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Pricing</NavLink>
          <Link to="/contact" className="btn btn-primary">Book a Call</Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="mobile-menu glass"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{
                position: 'absolute',
                top: '100%',
                left: '2rem',
                right: '2rem',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                alignItems: 'center',
                zIndex: 999
              }}
            >
              <NavLink to="/" onClick={closeMenu} className="nav-link">Home</NavLink>
              <NavLink to="/about" onClick={closeMenu} className="nav-link">About</NavLink>
              <NavLink to="/services" onClick={closeMenu} className="nav-link">Services</NavLink>
              <NavLink to="/portfolio" onClick={closeMenu} className="nav-link">Portfolio</NavLink>
              <NavLink to="/pricing" onClick={closeMenu} className="nav-link">Pricing</NavLink>
              <Link to="/contact" onClick={closeMenu} className="btn btn-primary" style={{width: '100%'}}>Book a Call</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
