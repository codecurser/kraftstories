import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Starter',
    price: '₹15,000',
    period: '/month',
    description: 'Perfect for small businesses looking to establish their online presence.',
    features: [
      { name: '12 Social Media Posts', included: true },
      { name: '4 Basic Reels', included: true },
      { name: 'Basic Community Management', included: true },
      { name: 'Monthly Analytics Report', included: true },
      { name: 'Professional Photography', included: false },
      { name: 'Ad Campaign Management', included: false },
    ],
    recommended: false
  },
  {
    name: 'Growth',
    price: '₹35,000',
    period: '/month',
    description: 'Ideal for growing brands that need consistent, high-quality content.',
    features: [
      { name: '20 Social Media Posts', included: true },
      { name: '8 Premium Reels', included: true },
      { name: 'Full Community Management', included: true },
      { name: 'Bi-weekly Analytics Report', included: true },
      { name: '1 Monthly Photo/Video Shoot', included: true },
      { name: 'Basic Ad Campaign Management', included: true },
    ],
    recommended: true
  },
  {
    name: 'Premium',
    price: 'Custom',
    period: '',
    description: 'Comprehensive solution for established brands and influencers.',
    features: [
      { name: 'Unlimited Content Creation', included: true },
      { name: 'Cinematic Reels & Films', included: true },
      { name: '24/7 Priority Support', included: true },
      { name: 'Weekly Analytics & Strategy', included: true },
      { name: 'Multiple Shoots per Month', included: true },
      { name: 'Advanced Ad Campaigns', included: true },
    ],
    recommended: false
  }
];

const Pricing = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="bg-glow" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '800px' }}></div>
      
      <div className="container">
        <div className="section-header">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Simple, Transparent <span className="text-gradient-primary">Pricing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            Choose the perfect package that aligns with your brand's growth objectives. No hidden fees.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="glass-card"
              style={{ 
                position: 'relative', 
                border: plan.recommended ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                transform: plan.recommended ? 'scale(1.05)' : 'scale(1)',
                zIndex: plan.recommended ? 2 : 1,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {plan.recommended && (
                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-primary)', color: '#fff', padding: '0.3rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 'bold', letterSpacing: '1px' }}>
                  MOST POPULAR
                </div>
              )}
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', minHeight: '48px' }}>{plan.description}</p>
              
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>{plan.price}</span>
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>{plan.period}</span>
              </div>
              
              <div style={{ flexGrow: 1, marginBottom: '2rem' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {plan.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: feature.included ? '#fff' : 'rgba(255,255,255,0.3)' }}>
                      {feature.included ? (
                        <CheckCircle2 size={18} color="var(--color-primary)" />
                      ) : (
                        <XCircle size={18} color="rgba(255,255,255,0.2)" />
                      )}
                      <span style={{ fontSize: '0.95rem' }}>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link to="/contact" className={`btn ${plan.recommended ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%', justifyContent: 'center' }}>
                Choose {plan.name}
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="glass" style={{ padding: '3rem', textAlign: 'center', marginBottom: '6rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Need a custom solution?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            We understand that every brand is unique. Let's discuss your specific requirements and create a tailored package just for you.
          </p>
          <Link to="/contact" className="btn btn-primary">Book a Discovery Call</Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
