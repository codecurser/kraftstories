import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Video } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { theme, toggleTheme } = useTheme();

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
            style={{
              ...(scrolled ? { transform: 'scale(3)', height: '55px' } : {})
            }}
          />
        </Link>

        <div className="nav-links">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink>
          <NavLink to="/portfolio" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Portfolio</NavLink>
          <NavLink to="/pricing" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Pricing</NavLink>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', background: '#FFF', padding: '0.2rem 0.5rem', border: '2px solid #000', boxShadow: '2px 2px 0px #000' }} onClick={toggleTheme}>
            <span style={{ fontSize: '1rem', opacity: theme === 'glass' ? 1 : 0.5, filter: theme === 'glass' ? 'none' : 'grayscale(100%)' }}>✨</span>
            <div style={{ width: '40px', height: '20px', background: '#000', position: 'relative' }}>
              <motion.div 
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                style={{ width: '16px', height: '16px', background: 'var(--color-yellow)', border: '2px solid #000', position: 'absolute', top: '0', left: theme === 'glass' ? '0' : '20px' }}
              />
            </div>
            <span style={{ fontSize: '1rem', opacity: theme === 'brutal' ? 1 : 0.5, filter: theme === 'brutal' ? 'none' : 'grayscale(100%)' }}>😈</span>
          </div>
          <Link to="/contact" className="btn btn-primary">Book a Call</Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="mobile-menu"
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
