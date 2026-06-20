import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const AnimatedBackground = () => {
  // Use Framer Motion's motion values to bypass React's render cycle for massive performance gains
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);

  // Smooth out the mouse movement natively
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 25, restDelta: 0.001 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 25, restDelta: 0.001 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 400);
      mouseY.set(e.clientY - 400);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="animated-bg-container" style={{ willChange: 'transform' }}>
      {/* Dynamic Grid Pattern */}
      <div className="grid-overlay"></div>

      {/* Interactive Glow following mouse (subtle) */}
      <motion.div
        className="mouse-glow"
        style={{
          x: smoothX,
          y: smoothY,
          willChange: 'transform' // Hardware acceleration
        }}
      />

      {/* Floating Orbs - Optimized with transform caching */}
      <motion.div 
        className="orb orb-1"
        style={{ willChange: 'transform' }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="orb orb-2"
        style={{ willChange: 'transform' }}
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 150, -100, 0],
          scale: [1, 1.5, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="orb orb-3"
        style={{ willChange: 'transform' }}
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -50, 150, 0],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default AnimatedBackground;
