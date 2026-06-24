import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

const categories = ['All', 'Web Development', 'Videography', 'Photography'];

export const portfolioItems = [
  { id: 1, title: 'ataryo.com', category: 'Web Development', type: 'iframe', url: 'https://www.ataryo.com/' },
  { id: 2, title: 'drmohitmathur.com', category: 'Web Development', type: 'iframe', url: 'https://drmohitmathur.com' },
  { id: 3, title: 'Recent Client Projects', category: 'Videography', type: 'video', url: 'https://drive.google.com/drive/folders/1noXVnT65SPHMT41HUPKCclMiajbC6-2U', poster: '/videography-poster.png' },
  { id: 4, title: 'Cinematic Brand Film', category: 'Videography', type: 'video', url: 'https://drive.google.com/drive/folders/1noXVnT65SPHMT41HUPKCclMiajbC6-2U', poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=960' },
  { id: 5, title: 'Real Estate Drone Tour', category: 'Videography', type: 'video', url: 'https://drive.google.com/drive/folders/1noXVnT65SPHMT41HUPKCclMiajbC6-2U', poster: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=960' },
  { id: 6, title: 'Product Campaign', category: 'Photography', type: 'image', url: 'https://drive.google.com/drive/folders/1noXVnT65SPHMT41HUPKCclMiajbC6-2U', poster: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=960' },
];

const GalleryItem = ({ item }) => {
  return (
    <motion.figure 
      className="creaBlock creaBlockPrez"
      layout
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      onClick={() => {
        if (item.url) {
          window.open(item.url, '_blank');
        }
      }}
    >
      <div className="lineSeparator"></div>
      <div className="blocImg" style={{ position: 'relative' }}>
        {item.type === 'iframe' ? (
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
        ) : (
          <img src={item.poster || '/poster.jpg'} alt={item.title} />
        )}
        {item.type === 'video' && (
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '70px', height: '70px', border: '4px solid #000', background: 'var(--color-yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, boxShadow: '6px 6px 0px #000' }}>
            <Play fill="#000" size={30} style={{ marginLeft: '4px', color: '#000' }} />
          </div>
        )}
      </div>
      <figcaption>
        <span style={{ fontSize: '0.85rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.5rem' }}>{item.category}</span>
        {item.title}
      </figcaption>
    </motion.figure>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-bg)' }}>
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

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              onClick={() => setActiveCategory(cat)}
              className="btn"
              style={{ 
                background: activeCategory === cat ? 'var(--color-pink)' : '#FFFFFF'
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="creationsBlocUl" style={{ marginBottom: '8rem' }}>
          <AnimatePresence>
            {filteredItems.map(item => (
              <GalleryItem key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
