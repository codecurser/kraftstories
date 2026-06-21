import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, MessageCircle, Play } from 'lucide-react';
import { portfolioItems } from './Portfolio';

const services = [
  { id: 1, title: 'Social Media Management', date: 'Growth', desc: 'Grow your brand presence with strategic content.', img: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=960' },
  { id: 2, title: 'Photography & Videography', date: 'Production', desc: 'Cinematic visuals that capture your story.', img: 'https://images.unsplash.com/photo-1518131672697-613becd4fab5?q=80&w=960' },
  { id: 3, title: 'Graphic Designing', date: 'Creative', desc: 'Eye-catching designs that convert.', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=960' },
  { id: 4, title: 'Web Development', date: 'Digital', desc: 'High-performance, modern websites.', img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=960' },
  { id: 5, title: 'SEO Optimization', date: 'Strategy', desc: 'Rank higher and get organic traffic.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=960' },
  { id: 6, title: 'Editing & Post-Production', date: 'Editing', desc: 'Professional editing for reels and films.', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=960' },
];

const testimonials = [
  { id: 1, name: 'Keshavam', role: 'Founder, Ataryo', text: 'Working with Kkraftstories was an absolute game-changer for Ataryo. They perfectly understood our vision and built a platform that truly speaks to our audience. Highly recommended!' },
  { id: 2, name: 'Dr. Mohit Mathur', role: 'Professional Doctor', text: 'As a medical professional, maintaining trust online is crucial. They delivered a clean, fast, and professional website that has significantly improved how patients interact with my practice.' }
];


const Home = () => {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);
  const { scrollY } = useScroll();
  
  const servicesParallax = useTransform(scrollY, [200, 1000], [50, -50]);
  const portfolioParallax = useTransform(scrollY, [600, 1500], [80, -80]);
  const imgParallax = useTransform(scrollY, [800, 2000], ["-15%", "15%"]);
  const testimonialParallax = useTransform(scrollY, [1200, 2200], [50, -50]);
  
  return (
    <>
      {/* Hero Section */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', paddingTop: '80px' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', '@media(max-width: 992px)': { gridTemplateColumns: '1fr' } }}>
            <div 
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', position: 'relative' }}
            >
              <div style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.8)', border: '1px solid var(--color-border)', borderRadius: '50px', marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--color-text-muted)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                ✨ Redefining Digital Aesthetics
              </div>
              <h1 style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: '800', letterSpacing: '-0.04em', color: 'var(--color-text)' }}>
                We Create <br />
                <span className="text-gradient-primary">
                  Visual Stories
                </span>
                <br /> That Convert.
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '3.5rem', maxWidth: '550px', fontWeight: '300', lineHeight: '1.6' }}>
                A premium creative agency specializing in cinematic videography, high-end photography, and digital marketing for brands that want to dominate.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>Start a Project</Link>
                <Link to="/portfolio" className="btn btn-outline" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>View Showreel</Link>
              </div>
            </div>

            <div
              style={{ position: 'relative', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              className="hide-on-mobile"
            >
              {/* Stacked Images for a creative agency feel */}
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <div className="glass-card" style={{ position: 'absolute', top: '10%', right: '0%', width: '70%', height: '70%', padding: '0.5rem', zIndex: 2, transform: 'rotate(4deg)' }}>
                  <img src="https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2070" alt="Videography" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
                </div>
                <div className="glass-card" style={{ position: 'absolute', bottom: '10%', left: '0%', width: '65%', height: '65%', padding: '0.5rem', zIndex: 1, transform: 'rotate(-4deg)' }}>
                  <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070" alt="Creative Strategy" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Typography Reveal - Our Expertise */}
      <section className="section" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '8rem 0', background: '#050505' }}>
        
        {/* Background Image Layer */}
        <AnimatePresence>
          {services.map((service) => (
            activeServiceId === service.id && (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 0
                }}
              >
                <img 
                  src={service.img} 
                  alt={service.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 100%)' }}></div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Foreground Content */}
        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '4rem' }}
          >
            <h2 style={{ color: 'var(--color-accent)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 'bold' }}>Our Expertise</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '400px', marginTop: '1rem', lineHeight: '1.6' }}>Hover over our services to see what we can build for you.</p>
          </motion.div>

          <div className="typography-list">
            {services.map((service) => (
              <Link 
                to="/services" 
                key={service.id}
                className={`typography-item ${activeServiceId === service.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveServiceId(service.id)}
              >
                <h2 className="huge-text">{service.title}</h2>
                <AnimatePresence>
                  {activeServiceId === service.id && (
                    <motion.div
                      initial={{ opacity: 0, x: -20, height: 0 }}
                      animate={{ opacity: 1, x: 0, height: 'auto' }}
                      exit={{ opacity: 0, x: -20, height: 0 }}
                      transition={{ duration: 0.4 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="service-desc">{service.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}
          >
            <div>
              <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Featured <span className="text-gradient-accent">Work</span></h2>
              <p className="section-subtitle" style={{ margin: 0, textAlign: 'left' }}>Glimpses of our creative brilliance.</p>
            </div>
            <Link to="/portfolio" className="btn btn-outline" style={{ display: 'none', '@media(min-width: 768px)': { display: 'flex' } }}>View All Projects</Link>
          </motion.div>

          <motion.div className="creationsBlocUl" style={{ gap: '2.5rem', y: portfolioParallax }}>
            {portfolioItems.slice(0, 3).map((item) => (
              <motion.figure 
                key={item.id}
                className="creaBlock creaBlockPrez"
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -10 }}
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
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                      <Play fill="var(--color-primary)" size={30} style={{ marginLeft: '4px', color: 'var(--color-primary)' }} />
                    </div>
                  )}
                </div>
                <figcaption>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.5rem' }}>{item.category}</span>
                  {item.title}
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/portfolio" className="btn btn-outline" style={{ width: '100%', maxWidth: '300px' }}>View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: 'var(--color-accent)', padding: '6rem 0' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>Client Love</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Don't just take our word for it.</p>
          </motion.div>

          <motion.div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', y: testimonialParallax }}>
            {testimonials.map((test, index) => (
              <motion.div 
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card"
                style={{ background: '#FFFFFF', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                <div style={{ display: 'flex', gap: '0.2rem', color: 'var(--color-accent)', marginBottom: '1.5rem' }}>
                  <Star fill="var(--color-accent)" size={18} />
                  <Star fill="var(--color-accent)" size={18} />
                  <Star fill="var(--color-accent)" size={18} />
                  <Star fill="var(--color-accent)" size={18} />
                  <Star fill="var(--color-accent)" size={18} />
                </div>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '2rem', flexGrow: 1, color: 'var(--color-text-muted)' }}>"{test.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#E5E7EB' }}></div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--color-text)' }}>{test.name}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-card" 
            style={{ background: '#FFFFFF', textAlign: 'center', padding: '6rem 2rem', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}
          >
            <motion.div 
              animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
              transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse' }}
              style={{ position: 'absolute', top: 0, left: 0, width: '200%', height: '200%', pointerEvents: 'none', background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', zIndex: 0 }}
            ></motion.div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '1rem', letterSpacing: '-0.03em' }}>Ready to Elevate Your Brand?</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem', fontWeight: '300' }}>
                Let's discuss how we can bring your vision to life through creative storytelling and strategic marketing.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>Book a Free Call</Link>
                <a href="https://wa.me/919709343619" target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ padding: '1.2rem 3rem' }}>
                  <MessageCircle size={20} /> WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


    </>
  );
};

export default Home;
