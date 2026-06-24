import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, Camera, PenTool, Layout, Search, Video, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    id: 'photo',
    title: 'Photography & Videography',
    icon: <Camera size={32} strokeWidth={1.5} />,
    description: 'High-end visual production tailored for your brand, events, and products that capture attention instantly.',
    features: ['Product Photography', 'Corporate Events', 'Brand Films', 'Aerial Footage'],
    gridClass: 'bento-large',
    gradient: 'radial-gradient(circle at top right, rgba(37,99,235,0.08) 0%, transparent 60%)'
  },
  {
    id: 'social',
    title: 'Social Media Management',
    icon: <MonitorPlay size={32} strokeWidth={1.5} />,
    description: 'We handle your entire social media presence from strategy to execution, ensuring consistent growth.',
    features: ['Content Strategy', 'Community Management', 'Analytics'],
    gridClass: 'bento-tall',
    gradient: 'radial-gradient(circle at bottom left, rgba(236,72,153,0.08) 0%, transparent 60%)'
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: <Layout size={32} strokeWidth={1.5} />,
    description: 'Custom, high-performance websites that are beautifully designed and optimized for conversions.',
    features: ['UI/UX Design', 'E-commerce', 'Performance SEO'],
    gridClass: 'bento-wide',
    gradient: 'radial-gradient(circle at center, rgba(16,185,129,0.08) 0%, transparent 70%)'
  },
  {
    id: 'design',
    title: 'Graphic Design',
    icon: <PenTool size={32} strokeWidth={1.5} />,
    description: 'Creative and eye-catching designs that communicate your brand message effectively.',
    features: ['Brand Identity', 'Marketing Collaterals'],
    gridClass: 'bento-square',
    gradient: 'radial-gradient(circle at top left, rgba(245,158,11,0.08) 0%, transparent 60%)'
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    icon: <Search size={32} strokeWidth={1.5} />,
    description: 'Data-driven SEO strategies to rank higher on search engines and drive traffic.',
    features: ['Keyword Research', 'Technical SEO'],
    gridClass: 'bento-square',
    gradient: 'radial-gradient(circle at bottom right, rgba(139,92,246,0.08) 0%, transparent 60%)'
  },
  {
    id: 'editing',
    title: 'Post-Production',
    icon: <Video size={32} strokeWidth={1.5} />,
    description: 'Professional editing services for reels, youtube videos, and cinematic films.',
    features: ['Color Grading', 'Motion Graphics', 'Sound Design'],
    gridClass: 'bento-wide',
    gradient: 'radial-gradient(circle at top center, rgba(14,165,233,0.08) 0%, transparent 70%)'
  }
];

const Services = () => {
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--color-bg)' }}>

      
      <div className="container">
        <div className="section-header">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Digital <span className="text-gradient-primary">Ecosystem</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            A holistic suite of premium digital services designed to elevate your brand from every angle.
          </motion.p>
        </div>

        <div className="bento-grid" style={{ marginBottom: '8rem' }}>
          {servicesList.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bento-item ${service.gridClass}`}
              >
                <div className="bento-bg-gradient" style={{ background: service.gradient }}></div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                  <div style={{ background: '#FFF', padding: '1rem', border: '2px solid #000', boxShadow: '2px 2px 0px #000', color: '#000' }}>
                    {service.icon}
                  </div>
                  <Link to="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', background: 'var(--color-yellow)', border: '2px solid #000', boxShadow: '2px 2px 0px #000', color: '#000', transition: 'transform 0.1s' }} className="hover-arrow">
                    <ArrowRight size={20} />
                  </Link>
                </div>

                <div style={{ flexGrow: 1 }}>
                  <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '900', letterSpacing: '-0.02em', color: '#000', textTransform: 'uppercase' }}>{service.title}</h2>
                  <p style={{ fontSize: '1.1rem', color: '#000', marginBottom: '2rem', lineHeight: '1.6', fontWeight: '600' }}>
                    {service.description}
                  </p>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  {service.features.map((feature, i) => (
                    <span key={i} className="bento-tag">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
