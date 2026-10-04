import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import keshavImg from '../assets/keshav-sarraf.jpg';
import dhruvImg from '../assets/dhruv-sharma.jpg';

const leaders = [
  {
    name: 'Keshav Sarraf',
    role: 'Director & Co-Founder',
    image: keshavImg,
    tag: 'Founder',
    bio: 'Leading the creative vision, strategic growth, and high-impact media production at Kkraftstories. Focused on transforming brands through visual mastery and compelling storytelling.',
    quote: 'Crafting stories that captivate, convert, and leave a lasting impression.'
  },
  {
    name: 'Dhruv Sharma',
    role: 'Director & Co-Founder',
    image: dhruvImg,
    tag: 'Founder',
    bio: 'Driving strategic execution, client partnerships, and scalable digital solutions. Dedicated to engineering high-growth media ecosystems that command digital authority.',
    quote: 'Empowering ambitious brands to stand out and scale exponentially.'
  }
];

const pillars = [
  {
    title: 'Visual Excellence',
    desc: 'Cinematic quality that commands attention and elevates brand authority across all digital platforms.'
  },
  {
    title: 'Strategic Growth',
    desc: 'Data-driven content strategies designed specifically to engage audiences and maximize conversion rates.'
  },
  {
    title: 'End-to-End Production',
    desc: 'From initial concept and scriptwriting to full-scale shoot, post-production, and campaign rollout.'
  }
];

const About = () => {
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-bg)', paddingBottom: '6rem' }}>
      <div className="bg-glow" style={{ top: '20%', left: '-10%' }}></div>
      <div className="bg-glow" style={{ bottom: '20%', right: '-10%' }}></div>
      
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ marginBottom: '1rem' }}
          >
            <span style={{ 
              background: 'rgba(37, 99, 235, 0.1)', 
              color: 'var(--color-accent)', 
              padding: '0.4rem 1.2rem', 
              borderRadius: '50px',
              border: '1px solid rgba(37, 99, 235, 0.2)',
              fontWeight: '600', 
              fontSize: '0.85rem',
              letterSpacing: '1px'
            }}>
              WHO WE ARE
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            About <span className="text-gradient-primary">Kkraftstories</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            We are more than just an agency. We are storytellers, creators, and growth strategists.
          </motion.p>
        </div>

        {/* Our Story Grid */}
        <div className="about-grid" style={{ marginBottom: '6rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass"
            style={{ 
              height: '460px', 
              borderRadius: '30px', 
              overflow: 'hidden', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
              position: 'relative'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070" 
              alt="Kkraftstories Team" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            <div style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              borderRadius: '16px',
              padding: '0.6rem 1.2rem',
              fontWeight: '700',
              fontSize: '0.9rem',
              color: '#111'
            }}>
              ✨ Creative Powerhouse
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-0.03em' }}>
              Crafting Stories That Leave a Mark
            </h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.2rem', fontSize: '1.15rem', lineHeight: '1.8', fontWeight: '300' }}>
              Founded with a relentless drive for visual excellence, Kkraftstories began with a single core belief: every brand possesses a distinct story that deserves to be told with cinematic impact.
            </p>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.8', fontWeight: '300' }}>
              Today, we operate as a full-service creative and digital media agency, partnering with founders, high-growth startups, and established enterprises to engineer compelling visual identities and scalable content ecosystems.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '20px' }}>
                <h3 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--color-accent)', margin: 0 }}>50+</h3>
                <p style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>Projects Delivered</p>
              </div>
              <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '20px' }}>
                <h3 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#10B981', margin: 0 }}>10M+</h3>
                <p style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>Organic Views</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Leadership Section - Keshav Sarraf & Dhruv Sharma */}
        <section style={{ marginBottom: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span style={{ 
                background: 'rgba(37, 99, 235, 0.1)', 
                color: 'var(--color-accent)', 
                padding: '0.4rem 1.2rem', 
                borderRadius: '50px',
                fontWeight: '600', 
                fontSize: '0.85rem',
                letterSpacing: '1px',
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                LEADERSHIP & VISION
              </span>
              <h2 className="section-title" style={{ fontSize: '2.6rem' }}>
                Meet Our <span className="text-gradient-primary">Leadership</span>
              </h2>
              <p className="section-subtitle" style={{ maxWidth: '650px', margin: '0 auto' }}>
                The strategic minds and creative directors steering Kkraftstories forward.
              </p>
            </motion.div>
          </div>

          {/* 2-Column Leadership Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
            gap: '2.5rem' 
          }}>
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="glass-card"
                style={{ 
                  padding: '2.5rem 2rem', 
                  borderRadius: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                {/* Photo container */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '300px',
                  background: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '22px',
                  padding: '0.75rem',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.9)',
                  marginBottom: '1.8rem'
                }}>
                  <div style={{ 
                    width: '100%', 
                    height: '340px', 
                    overflow: 'hidden', 
                    borderRadius: '16px',
                    background: '#F3F4F6'
                  }}>
                    <img 
                      src={leader.image} 
                      alt={`${leader.name} - ${leader.role}`} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        objectPosition: 'center top'
                      }} 
                    />
                  </div>
                </div>

                {/* Info */}
                <div style={{ width: '100%' }}>
                  <div style={{ 
                    display: 'inline-block', 
                    background: 'rgba(37, 99, 235, 0.1)', 
                    color: 'var(--color-accent)', 
                    padding: '0.3rem 0.9rem', 
                    borderRadius: '50px',
                    fontSize: '0.75rem', 
                    fontWeight: '700', 
                    marginBottom: '0.8rem' 
                  }}>
                    Director & Co-Founder
                  </div>

                  <h3 style={{ 
                    fontSize: '2rem', 
                    fontWeight: '800', 
                    marginBottom: '0.2rem', 
                    letterSpacing: '-0.02em',
                    color: 'var(--color-text)'
                  }}>
                    {leader.name}
                  </h3>

                  <h4 style={{ 
                    fontSize: '1rem', 
                    fontWeight: '600', 
                    color: 'var(--color-accent)', 
                    marginBottom: '1.2rem' 
                  }}>
                    {leader.role}
                  </h4>

                  <p style={{ 
                    fontSize: '1.05rem', 
                    lineHeight: '1.7', 
                    fontWeight: '300', 
                    color: 'var(--color-text-muted)', 
                    marginBottom: '1.5rem',
                    textAlign: 'left'
                  }}>
                    {leader.bio}
                  </p>

                  <div style={{ 
                    background: 'rgba(255, 255, 255, 0.7)', 
                    borderRadius: '14px', 
                    border: '1px solid rgba(0,0,0,0.05)', 
                    padding: '1rem 1.2rem',
                    textAlign: 'left'
                  }}>
                    <p style={{ 
                      fontSize: '0.95rem', 
                      fontWeight: '500', 
                      fontStyle: 'italic', 
                      color: 'var(--color-text)', 
                      margin: 0,
                      lineHeight: '1.5'
                    }}>
                      "{leader.quote}"
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Agency Pillars */}
        <section style={{ marginBottom: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 className="section-title">Our Core <span className="text-gradient-primary">Pillars</span></h2>
            <p className="section-subtitle">What sets Kkraftstories apart from conventional agencies.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '16px',
                  background: 'rgba(37, 99, 235, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <Sparkles size={24} color="var(--color-accent)" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontWeight: '300', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-muted)', flexGrow: 1 }}>
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{ 
            background: 'linear-gradient(135deg, #111827 0%, #1F2937 100%)', 
            color: '#FFF', 
            textAlign: 'center', 
            padding: '5rem 2rem',
            borderRadius: '32px'
          }}
        >
          <h2 style={{ fontSize: '2.8rem', color: '#FFF', marginBottom: '1rem' }}>
            Let’s Build Something Legendary Together
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem', fontWeight: '300' }}>
            Ready to take your brand narrative to the next level? Get in touch with our team today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn" style={{ background: '#FFF', color: '#000', padding: '1.1rem 2.5rem' }}>
              Start Your Project <ArrowRight size={18} />
            </Link>
            <Link to="/portfolio" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFF', padding: '1.1rem 2.5rem' }}>
              View Our Work
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
