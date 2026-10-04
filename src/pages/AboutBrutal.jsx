import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import keshavImg from '../assets/keshav-sarraf.jpg';
import dhruvImg from '../assets/dhruv-sharma.jpg';

const leaders = [
  {
    name: 'Keshav Sarraf',
    role: 'CEO & Co-Founder',
    image: keshavImg,
    tag: 'Leadership',
    bio: 'Leading the executive vision, creative direction, and strategic scaling at Kkraftstories. Focused on transforming brands through visual mastery and compelling storytelling.',
    quote: 'Crafting stories that captivate, convert, and leave a lasting impression.'
  },
  {
    name: 'Dhruv Sharma',
    role: 'Director & Co-Founder',
    image: dhruvImg,
    tag: 'Leadership',
    bio: 'Driving strategic execution, client partnerships, and scalable digital solutions. Dedicated to engineering high-growth media ecosystems that command digital authority.',
    quote: 'Empowering ambitious brands to stand out and scale exponentially.'
  }
];

const pillars = [
  {
    title: 'Visual Excellence',
    desc: 'Cinematic quality that commands attention and elevates brand authority across all digital platforms.',
    color: 'var(--color-yellow)'
  },
  {
    title: 'Strategic Growth',
    desc: 'Data-driven content strategies designed specifically to engage audiences and maximize conversion rates.',
    color: 'var(--color-pink)'
  },
  {
    title: 'End-to-End Production',
    desc: 'From initial concept and scriptwriting to full-scale shoot, post-production, and campaign rollout.',
    color: 'var(--color-blue)'
  }
];

const About = () => {
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-bg)', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ marginBottom: '1rem' }}
          >
            <span style={{ 
              background: 'var(--color-yellow)', 
              color: '#000', 
              padding: '0.4rem 1rem', 
              border: '2px solid #000', 
              boxShadow: '2px 2px 0px #000',
              fontWeight: '900', 
              textTransform: 'uppercase', 
              fontSize: '0.85rem',
              letterSpacing: '1px'
            }}>
              Who We Are
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
            className="brutal-card"
            style={{ 
              height: '460px', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              padding: 0, 
              background: 'var(--color-yellow)',
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
              bottom: '1rem',
              left: '1rem',
              background: '#FFF',
              border: '3px solid #000',
              boxShadow: '4px 4px 0px #000',
              padding: '0.5rem 1rem',
              fontWeight: '900',
              fontSize: '0.9rem',
              textTransform: 'uppercase'
            }}>
              ⚡ Creative Powerhouse
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', fontWeight: '900', letterSpacing: '-0.03em', textTransform: 'uppercase' }}>
              Crafting Stories That Leave a Mark
            </h2>
            <p style={{ color: '#000', marginBottom: '1.2rem', fontSize: '1.15rem', lineHeight: '1.8', fontWeight: '600' }}>
              Founded with a relentless drive for visual excellence, Kkraftstories began with a single core belief: every brand possesses a distinct story that deserves to be told with cinematic impact.
            </p>
            <p style={{ color: '#222', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.8', fontWeight: '500' }}>
              Today, we operate as a full-service creative and digital media agency, partnering with founders, high-growth startups, and established enterprises to engineer compelling visual identities and scalable content ecosystems.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              <div className="brutal-card" style={{ padding: '1.2rem', background: '#FFF' }}>
                <h3 style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--color-pink)', margin: 0 }}>50+</h3>
                <p style={{ fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', margin: 0 }}>Projects Delivered</p>
              </div>
              <div className="brutal-card" style={{ padding: '1.2rem', background: '#FFF' }}>
                <h3 style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--color-blue)', margin: 0 }}>10M+</h3>
                <p style={{ fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', margin: 0 }}>Organic Views</p>
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
                background: 'var(--color-pink)', 
                color: '#FFF', 
                padding: '0.4rem 1.2rem', 
                border: '3px solid #000', 
                boxShadow: '3px 3px 0px #000',
                fontWeight: '900', 
                textTransform: 'uppercase', 
                fontSize: '0.9rem',
                letterSpacing: '1px',
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                Leadership & Vision
              </span>
              <h2 className="section-title" style={{ fontSize: '2.8rem' }}>
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
                className="brutal-card"
                style={{ 
                  background: index === 0 ? 'var(--color-yellow)' : '#FFF', 
                  padding: '2.5rem 2rem',
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
                  background: '#FFF',
                  border: '4px solid #000',
                  boxShadow: '6px 6px 0px #000',
                  padding: '0.5rem',
                  marginBottom: '1.8rem',
                  transform: index === 0 ? 'rotate(-1.5deg)' : 'rotate(1.5deg)',
                  transition: 'transform 0.3s ease'
                }}>
                  <div style={{ 
                    width: '100%', 
                    height: '340px', 
                    overflow: 'hidden', 
                    border: '2px solid #000',
                    background: '#F0F0F0'
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
                    background: '#000', 
                    color: '#FFF', 
                    padding: '0.2rem 0.8rem', 
                    fontSize: '0.75rem', 
                    fontWeight: '900', 
                    textTransform: 'uppercase',
                    marginBottom: '0.8rem'
                  }}>
                    {leader.role}
                  </div>

                  <h3 style={{ 
                    fontSize: '2.2rem', 
                    fontWeight: '900', 
                    marginBottom: '0.2rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '-0.02em',
                    color: '#000'
                  }}>
                    {leader.name}
                  </h3>

                  <h4 style={{ 
                    fontSize: '1.05rem', 
                    fontWeight: '800', 
                    color: 'var(--color-accent)', 
                    marginBottom: '1.2rem', 
                    textTransform: 'uppercase'
                  }}>
                    {leader.role}
                  </h4>

                  <p style={{ 
                    fontSize: '1.05rem', 
                    lineHeight: '1.7', 
                    fontWeight: '600', 
                    color: '#111', 
                    marginBottom: '1.5rem',
                    textAlign: 'left'
                  }}>
                    {leader.bio}
                  </p>

                  <div style={{ 
                    background: index === 0 ? '#FFF' : 'var(--color-bg)', 
                    border: '3px solid #000', 
                    boxShadow: '3px 3px 0px #000', 
                    padding: '1rem 1.2rem',
                    textAlign: 'left'
                  }}>
                    <p style={{ 
                      fontSize: '0.95rem', 
                      fontWeight: '700', 
                      fontStyle: 'italic', 
                      color: '#000', 
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
            <h2 className="section-title">Our Core <span className="text-gradient-accent">Pillars</span></h2>
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
                className="brutal-card"
                style={{ background: pillar.color, display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: '#FFF', 
                  border: '3px solid #000', 
                  boxShadow: '3px 3px 0px #000', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <Sparkles size={24} color="#000" />
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '1rem', textTransform: 'uppercase' }}>
                  {pillar.title}
                </h3>
                <p style={{ fontWeight: '600', fontSize: '1.05rem', lineHeight: '1.7', color: '#000', flexGrow: 1 }}>
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
          className="brutal-card"
          style={{ 
            background: 'var(--color-pink)', 
            color: '#FFF', 
            textAlign: 'center', 
            padding: '5rem 2rem' 
          }}
        >
          <h2 style={{ fontSize: '2.8rem', color: '#FFF', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Let’s Build Something Legendary Together
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem', fontWeight: '600' }}>
            Ready to take your brand narrative to the next level? Get in touch with our team today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ background: 'var(--color-yellow)', color: '#000', padding: '1.1rem 2.5rem' }}>
              Start Your Project <ArrowRight size={18} />
            </Link>
            <Link to="/portfolio" className="btn btn-outline" style={{ background: '#FFF', color: '#000', padding: '1.1rem 2.5rem' }}>
              View Our Work
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
