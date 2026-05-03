import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="bg-glow" style={{ top: '20%', left: '-10%' }}></div>
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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass"
            style={{ height: '400px', borderRadius: '20px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <img src="/poster.jpg" alt="Kkraftstories Poster" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Our Story</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1rem', fontSize: '1.1rem' }}>
              Founded with a passion for visual excellence, Kkraftstories began as a small collective of creatives who believed that every brand has a unique story waiting to be told.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Today, we are a full-service media agency helping influencers, startups, and personal brands build their digital presence through compelling visuals and data-driven strategies.
            </p>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 className="text-gradient-primary" style={{ fontSize: '2.5rem' }}>50+</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)' }}>Happy Clients</p>
              </div>
              <div>
                <h3 className="text-gradient-accent" style={{ fontSize: '2.5rem' }}>1M+</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)' }}>Views Generated</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
