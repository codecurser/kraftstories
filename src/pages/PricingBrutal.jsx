import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="brutal-card"
          style={{ padding: '6rem 4rem', maxWidth: '800px', margin: '0 auto', background: 'var(--color-green)' }}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: '#FFF', color: '#000', border: '2px solid #000', boxShadow: '2px 2px 0px #000', fontWeight: '900', marginBottom: '2rem', letterSpacing: '1px', textTransform: 'uppercase' }}
          >
            UPDATE
          </motion.div>
          <h1 style={{ fontSize: '5rem', marginBottom: '1.5rem', letterSpacing: '-0.04em', fontFamily: 'var(--font-heading)', fontWeight: '900', color: '#000', textTransform: 'uppercase' }}>
            Pricing Coming Soon
          </h1>
          <p style={{ color: '#000', marginBottom: '3rem', fontSize: '1.25rem', lineHeight: '1.6', fontWeight: '600', maxWidth: '600px', margin: '0 auto 3rem' }}>
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
