import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="bg-glow" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)' }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card"
          style={{ padding: '6rem 4rem', maxWidth: '800px', margin: '0 auto', background: '#FFFFFF', borderRadius: '24px' }}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--color-accent)', borderRadius: '50px', fontWeight: '600', marginBottom: '2rem', letterSpacing: '1px' }}
          >
            UPDATE
          </motion.div>
          <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', letterSpacing: '-0.04em', fontFamily: 'var(--font-heading)', fontWeight: '800' }}>
            Pricing <span className="text-gradient-primary">Coming Soon</span>
          </h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', fontSize: '1.25rem', lineHeight: '1.6', fontWeight: '300', maxWidth: '600px', margin: '0 auto 3rem' }}>
            We're currently restructuring our service packages to bring you even more value. In the meantime, every brand is unique—let's discuss your specific needs.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
            Contact Us for a Custom Quote
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
