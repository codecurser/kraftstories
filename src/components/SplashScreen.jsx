import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onFinish }) => {

  useEffect(() => {
    // Failsafe in case video doesn't fire onEnded
    const timer = setTimeout(() => {
      onFinish();
    }, 10000); // 10 seconds max intro
    return () => clearTimeout(timer);
  }, [onFinish]);

  // Hide body scroll when splash screen is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
        backgroundColor: '#050505',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      <video
        src="/intro-video.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => onFinish()}
        style={{ width: '100%', height: '100%', objectFit: 'cover', willChange: 'transform' }}
      ></video>
      
      <button 
        onClick={() => onFinish()}
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          background: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: 'white',
          padding: '0.6rem 1.5rem',
          borderRadius: '50px',
          fontFamily: 'var(--font-heading)',
          letterSpacing: '1px',
          cursor: 'none', /* For custom cursor */
          zIndex: 2,
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
        onMouseOut={(e) => e.target.style.background = 'rgba(0,0,0,0.4)'}
      >
        Skip Intro
      </button>
    </motion.div>
  );
};

export default SplashScreen;
