import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, MonitorPlay, PenTool, Search, Layout, Video, ArrowRight, Star, MessageCircle } from 'lucide-react';

const services = [
  { id: 1, title: 'Social Media Management', icon: <MonitorPlay size={32} />, desc: 'Grow your brand presence with strategic content.' },
  { id: 2, title: 'Photography & Videography', icon: <Camera size={32} />, desc: 'Cinematic visuals that capture your story.' },
  { id: 3, title: 'Graphic Designing', icon: <PenTool size={32} />, desc: 'Eye-catching designs that convert.' },
  { id: 4, title: 'Web Development', icon: <Layout size={32} />, desc: 'High-performance, modern websites.' },
  { id: 5, title: 'SEO Optimization', icon: <Search size={32} />, desc: 'Rank higher and get organic traffic.' },
  { id: 6, title: 'Editing & Post-Production', icon: <Video size={32} />, desc: 'Professional editing for reels and films.' },
];

const testimonials = [
  { id: 1, name: 'Sarah Jenkins', role: 'Startup Founder', text: 'Kkraftstories completely transformed our online presence. The video quality is unmatched!' },
  { id: 2, name: 'David Miller', role: 'Event Organizer', text: 'Professional, creative, and highly dedicated. They delivered our promotional material way before the deadline.' },
  { id: 3, name: 'Elena Rodriguez', role: 'Influencer', text: 'My engagement doubled after they took over my social media and started producing my reels.' },
];

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}<span className="cursor" style={{ animation: 'blink 1s infinite' }}>|</span></span>;
};

const Home = () => {
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // Direct scroll for background to prevent laggy feel
  const heroBgY = useTransform(scrollY, [0, 1000], [0, 400]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  
  // Spring scroll for floating text and elements
  const heroTextY = useTransform(smoothScrollY, [0, 800], [0, 250]);
  
  const servicesParallax = useTransform(smoothScrollY, [200, 1000], [50, -50]);
  const portfolioParallax = useTransform(smoothScrollY, [600, 1500], [80, -80]);
  const imgParallax = useTransform(smoothScrollY, [800, 2000], ["-15%", "15%"]);
  const testimonialParallax = useTransform(smoothScrollY, [1200, 2200], [50, -50]);
  
  return (
    <>
      {/* Hero Section */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {/* Hero Background Image with Smooth Parallax */}
        <motion.div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '120%', y: heroBgY, zIndex: 0 }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("/poster.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.5, mixBlendMode: 'luminosity' }}></div>
          {/* Radial dark overlay to focus on center */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, rgba(5,5,5,0.8) 100%)' }}></div>
          {/* Bottom gradient to blend smoothly into the next section */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '40%', background: 'linear-gradient(to bottom, transparent 0%, rgba(5,5,5,1) 100%)' }}></div>
        </motion.div>

        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', y: heroTextY, opacity: heroOpacity }}
          >

            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: '800', textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
              We Create <br />
              <span className="text-gradient-primary" style={{ textShadow: 'none' }}>
                <TypewriterText text="Visual Stories" />
              </span>
              <br /> That Convert.
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', color: 'rgba(255,255,255,0.9)', marginBottom: '3rem', maxWidth: '600px', textShadow: '0 4px 10px rgba(0,0,0,0.8)' }}>
              A premium creative agency specializing in cinematic videography, high-end photography, and digital marketing for brands that want to dominate.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>Start a Project</Link>
              <Link to="/portfolio" className="btn glass" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>View Showreel</Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.5)' }}
        >
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)' }}></div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="section-title">Our <span className="text-gradient-primary">Expertise</span></h2>
            <p className="section-subtitle">Everything you need to build a powerful digital presence under one roof.</p>
          </motion.div>

          <motion.div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', y: servicesParallax }}>
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
              >
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{service.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem', flexGrow: 1 }}>{service.desc}</p>
                <Link to="/services" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: '600' }}>
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}
          >
            <div>
              <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Featured <span className="text-gradient-accent">Work</span></h2>
              <p className="section-subtitle" style={{ margin: 0 }}>Glimpses of our creative brilliance.</p>
            </div>
            <Link to="/portfolio" className="btn btn-outline" style={{ display: 'none', '@media(min-width: 768px)': { display: 'flex' } }}>View All Projects</Link>
          </motion.div>

          <motion.div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', y: portfolioParallax }}>
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                style={{ borderRadius: '16px', overflow: 'hidden', position: 'relative', height: '300px', background: '#111' }}
              >
                <motion.div style={{ width: '100%', height: '130%', y: imgParallax, position: 'absolute', top: '-15%', left: 0 }}>
                  <img src="/poster.jpg" alt="Project" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)' }}></div>
                <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
                  <span style={{ background: 'var(--color-primary)', color: '#fff', fontSize: '0.8rem', padding: '0.3rem 0.8rem', borderRadius: '50px', marginBottom: '1rem', display: 'inline-block' }}>Campaign</span>
                  <h3 style={{ fontSize: '1.5rem' }}>Brand Evolution Project {item}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/portfolio" className="btn btn-outline" style={{ width: '100%', maxWidth: '300px' }}>View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 className="section-title">Client <span className="text-gradient-primary">Love</span></h2>
            <p className="section-subtitle">Don't just take our word for it.</p>
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
              >
                <div style={{ display: 'flex', gap: '0.2rem', color: 'var(--color-accent)', marginBottom: '1.5rem' }}>
                  <Star fill="var(--color-accent)" size={18} />
                  <Star fill="var(--color-accent)" size={18} />
                  <Star fill="var(--color-accent)" size={18} />
                  <Star fill="var(--color-accent)" size={18} />
                  <Star fill="var(--color-accent)" size={18} />
                </div>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '2rem', flexGrow: 1 }}>"{test.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}></div>
                  <div>
                    <h4 style={{ fontSize: '1rem' }}>{test.name}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-card" 
            style={{ background: 'linear-gradient(135deg, rgba(108, 76, 241, 0.1), rgba(212, 163, 115, 0.05))', textAlign: 'center', padding: '5rem 2rem', position: 'relative', overflow: 'hidden' }}
          >
            <motion.div 
              animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
              transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
              style={{ position: 'absolute', top: 0, left: 0, width: '200%', height: '200%', background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', zIndex: 0 }}
            ></motion.div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Elevate Your Brand?</h2>
              <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                Let's discuss how we can bring your vision to life through creative storytelling and strategic marketing.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Book a Free Call</Link>
                <a href="https://wa.me/919709343619" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                  <MessageCircle size={20} /> WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse {
          0% { opacity: 0.3; transform: scale(0.9); }
          100% { opacity: 0.6; transform: scale(1.1); }
        }
      `}</style>
    </>
  );
};

export default Home;
