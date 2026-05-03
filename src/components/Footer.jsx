import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="logo" style={{ marginBottom: '1.5rem' }}>
              <img src="/logo.png" alt="Kkraftstories Logo" style={{ height: '80px', width: 'auto' }} />
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem', maxWidth: '300px' }}>
              A modern creative agency dedicated to visual storytelling and marketing excellence. We bring your vision to life.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" className="glass" style={{ padding: '0.5rem 1rem', display: 'flex', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 'bold' }}>IG</a>
              <a href="#" className="glass" style={{ padding: '0.5rem 1rem', display: 'flex', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 'bold' }}>X</a>
              <a href="#" className="glass" style={{ padding: '0.5rem 1rem', display: 'flex', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 'bold' }}>FB</a>
              <a href="#" className="glass" style={{ padding: '0.5rem 1rem', display: 'flex', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 'bold' }}>IN</a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/pricing">Pricing</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <div className="footer-links">
              <Link to="/services">Social Media Management</Link>
              <Link to="/services">Photography & Videography</Link>
              <Link to="/services">Editing & Design</Link>
              <Link to="/services">Web Development</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-links">
              <a href="mailto:kkraftstories@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} color="var(--color-primary)" /> kkraftstories@gmail.com
              </a>
              <a href="tel:9709343619" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} color="var(--color-primary)" /> +91 97093 43619
              </a>
              <span style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
                <MapPin size={16} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '4px' }} /> 
                Creative Hub, Design District, 10001
              </span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kkraftstories Media Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
