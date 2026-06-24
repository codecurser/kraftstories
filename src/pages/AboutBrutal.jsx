import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-bg)' }}>

      <div className="container">
        <div className="section-header">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            About <span className="text-gradient-primary">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            We are more than just an agency. We are storytellers, creators, and strategists.
          </motion.p>
        </div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="brutal-card"
            style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, background: 'var(--color-yellow)' }}
          >
            <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070" alt="Kkraftstories Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: '900', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>Our Story</h2>
            <p style={{ color: '#000', marginBottom: '1.5rem', fontSize: '1.2rem', lineHeight: '1.8', fontWeight: '600' }}>
              Founded with a passion for visual excellence, Kkraftstories began as a small collective of creatives who believed that every brand has a unique story waiting to be told.
            </p>
            <p style={{ color: '#000', marginBottom: '2.5rem', fontSize: '1.2rem', lineHeight: '1.8', fontWeight: '600' }}>
              Today, we are a full-service media agency helping influencers, startups, and personal brands build their digital presence through compelling visuals and data-driven strategies.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
