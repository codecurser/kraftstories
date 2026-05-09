import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

const categories = ['All', 'Web Development', 'Videography'];

export const portfolioItems = [
  { id: 7, title: 'ataryo.com', category: 'Web Development', type: 'iframe', url: 'https://www.ataryo.com/' },
  { id: 8, title: 'drmohitmathur.com', category: 'Web Development', type: 'iframe', url: 'https://drmohitmathur.com' },
  { id: 9, title: 'Featured Video Project', category: 'Videography', type: 'video', url: 'https://drive.google.com/file/d/1hryu2U6NUGxmbt4w1ugCKPSneJrQRzbV/view?usp=drivesdk', poster: '/videography-poster.png' },
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
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card"
                onClick={() => {
                  if ((item.type === 'iframe' || item.type === 'video') && item.url) {
                    window.open(item.url, '_blank');
                  }
                }}
                style={{ padding: 0, overflow: 'hidden', height: '350px', position: 'relative', cursor: 'pointer' }}
              >
                <div style={{ width: '100%', height: '100%', backgroundImage: item.type === 'iframe' ? 'none' : `url("${item.poster || '/poster.jpg'}")`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                  {item.type === 'iframe' && (
                    <iframe 
                      src={item.url} 
                      title={item.title}
                      style={{ 
                        width: '400%', 
                        height: '400%', 
                        border: 'none', 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        transform: 'scale(0.25)', 
                        transformOrigin: 'top left',
                        zIndex: 0, 
                        pointerEvents: 'none',
                        background: '#fff'
                      }}
                    />
                  )}
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
