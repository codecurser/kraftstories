import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, Camera, PenTool, Layout, Search, Video, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    id: 'social',
    title: 'Social Media Management',
    icon: <MonitorPlay size={40} />,
    description: 'We handle your entire social media presence from strategy to execution, ensuring consistent growth and engagement.',
    features: ['Content Strategy & Calendar', 'Community Management', 'Analytics & Reporting', 'Influencer Outreach']
  },
  {
    id: 'photo',
    title: 'Photography & Videography',
    icon: <Camera size={40} />,
    description: 'High-end visual production tailored for your brand, events, and products that capture attention instantly.',
    features: ['Product Photography', 'Corporate Event Coverage', 'Brand Films & Commercials', 'Drone & Aerial Footage']
  },
  {
    id: 'editing',
    title: 'Editing & Post-Production',
    icon: <Video size={40} />,
    description: 'Professional editing services for reels, youtube videos, and cinematic films to make your content pop.',
    features: ['Color Grading', 'Motion Graphics', 'Audio Mixing & Sound Design', 'Fast-paced Reel Editing']
  },
  {
    id: 'design',
    title: 'Graphic Designing',
    icon: <PenTool size={40} />,
    description: 'Creative and eye-catching designs that communicate your brand message effectively across all mediums.',
    features: ['Brand Identity & Logo', 'Marketing Collaterals', 'Social Media Creatives', 'Packaging Design']
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: <Layout size={40} />,
    description: 'Custom, high-performance websites that are beautifully designed and optimized for conversions.',
    features: ['Custom UI/UX Design', 'Responsive Development', 'E-commerce Solutions', 'Performance Optimization']
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    icon: <Search size={40} />,
    description: 'Data-driven SEO strategies to rank your website higher on search engines and drive organic traffic.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO Audits', 'Link Building']
  }
];

const Services = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="bg-glow" style={{ top: '10%', right: '10%' }}></div>
      <div className="bg-glow" style={{ bottom: '10%', left: '10%', background: 'radial-gradient(circle, rgba(212, 163, 115, 0.1) 0%, rgba(5,5,5,0) 70%)' }}></div>
      
      <div className="container">
        <div className="section-header">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Our <span className="text-gradient-primary">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            Comprehensive digital solutions designed to elevate your brand and drive measurable results.
          </motion.p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', marginBottom: '6rem' }}>
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card"
              style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', '@media(min-width: 768px)': { gridTemplateColumns: '1fr 2fr' } }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ background: 'linear-gradient(135deg, rgba(108,76,241,0.2), rgba(212,163,115,0.1))', padding: '1.5rem', borderRadius: '16px', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                  {service.icon}
                </div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{service.title}</h2>
                <Link to="/contact" className="btn btn-outline" style={{ marginTop: 'auto' }}>Request Quote</Link>
              </div>
              
              <div>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', lineHeight: '1.8' }}>
                  {service.description}
                </p>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>What's Included:</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {service.features.map((feature, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <CheckCircle2 size={20} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'rgba(255,255,255,0.7)' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
