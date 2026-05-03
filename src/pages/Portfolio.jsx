import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

const categories = ['All', 'Reels', 'Photography', 'Brand Films', 'Design'];

const portfolioItems = [
  { id: 1, title: 'Summer Collection', category: 'Photography', type: 'image' },
  { id: 2, title: 'Fitness App Promo', category: 'Reels', type: 'video' },
  { id: 3, title: 'Tech Startup Identity', category: 'Design', type: 'image' },
  { id: 4, title: 'Restaurant Launch', category: 'Brand Films', type: 'video' },
  { id: 5, title: 'Travel Vlog Edit', category: 'Reels', type: 'video' },
  { id: 6, title: 'Corporate Event', category: 'Photography', type: 'image' },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container">
        <div className="section-header">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Our <span className="text-gradient-accent">Work</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            A showcase of our finest visual storytelling, design, and marketing campaigns.
          </motion.p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              onClick={() => setActiveCategory(cat)}
              className={`btn ${activeCategory === cat ? 'btn-primary' : 'glass'}`}
              style={{ padding: '0.6rem 1.5rem', border: activeCategory === cat ? 'none' : '1px solid var(--color-border)' }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card"
                style={{ padding: 0, overflow: 'hidden', height: '350px', position: 'relative', cursor: 'pointer' }}
              >
                <div style={{ width: '100%', height: '100%', backgroundImage: 'url("/poster.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                  {item.type === 'video' && (
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                      <Play fill="#fff" size={24} style={{ marginLeft: '4px' }} />
                    </div>
                  )}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)', zIndex: 1 }}></div>
                  <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', zIndex: 3 }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>{item.category}</span>
                    <h3 style={{ fontSize: '1.4rem', marginTop: '0.5rem' }}>{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
