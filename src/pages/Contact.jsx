import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', position: 'relative', background: 'var(--color-bg)' }}>
      <div className="bg-glow" style={{ top: '20%', right: '-10%', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)' }}></div>
      
      <div className="container">
        <div className="section-header">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Let's <span className="text-gradient-primary">Connect</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            Ready to start your next big project? Get in touch with us today.
          </motion.p>
        </div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card" style={{ marginBottom: '2rem', background: '#FFFFFF' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2.5rem', fontWeight: '700' }}>Contact Info</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <a href="mailto:kkraftstories@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div className="glass" style={{ padding: '1.2rem', borderRadius: '50%', display: 'flex', background: '#F8F9FA' }}>
                    <Mail color="var(--color-accent)" size={24} />
                  </div>
                  <div>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>Email Us</p>
                    <p style={{ fontWeight: '600', fontSize: '1.1rem', color: 'var(--color-text)' }}>kkraftstories@gmail.com</p>
                  </div>
                </a>

                <a href="tel:9709343619" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div className="glass" style={{ padding: '1.2rem', borderRadius: '50%', display: 'flex', background: '#F8F9FA' }}>
                    <Phone color="var(--color-accent)" size={24} />
                  </div>
                  <div>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>Call Us</p>
                    <p style={{ fontWeight: '600', fontSize: '1.1rem', color: 'var(--color-text)' }}>+91 97093 43619</p>
                  </div>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div className="glass" style={{ padding: '1.2rem', borderRadius: '50%', display: 'flex', background: '#F8F9FA' }}>
                    <MapPin color="var(--color-accent)" size={24} />
                  </div>
                  <div>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>Location</p>
                    <p style={{ fontWeight: '600', fontSize: '1.1rem', color: 'var(--color-text)' }}>Remote / Global</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '3.5rem' }}>
                <a href="https://wa.me/919709343619" target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-card" style={{ background: '#FFFFFF' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2.5rem', fontWeight: '700' }}>Send us a Message</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                <div className="contact-form-grid">
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>First Name</label>
                    <input type="text" placeholder="John" style={{ width: '100%', padding: '1.2rem', background: '#F8F9FA', border: '1px solid var(--color-border)', borderRadius: '12px', color: 'var(--color-text)', outline: 'none', transition: 'all 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'} onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>Last Name</label>
                    <input type="text" placeholder="Doe" style={{ width: '100%', padding: '1.2rem', background: '#F8F9FA', border: '1px solid var(--color-border)', borderRadius: '12px', color: 'var(--color-text)', outline: 'none', transition: 'all 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'} onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>Email Address</label>
                  <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '1.2rem', background: '#F8F9FA', border: '1px solid var(--color-border)', borderRadius: '12px', color: 'var(--color-text)', outline: 'none', transition: 'all 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'} onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>Services Interested In</label>
                  <select style={{ width: '100%', padding: '1.2rem', background: '#F8F9FA', border: '1px solid var(--color-border)', borderRadius: '12px', color: 'var(--color-text)', outline: 'none', appearance: 'none', cursor: 'pointer' }}>
                    <option value="">Select a service</option>
                    <option value="social">Social Media Management</option>
                    <option value="photo">Photography & Videography</option>
                    <option value="web">Web Development</option>
                    <option value="design">Graphic Design</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>Message</label>
                  <textarea rows="5" placeholder="Tell us about your project..." style={{ width: '100%', padding: '1.2rem', background: '#F8F9FA', border: '1px solid var(--color-border)', borderRadius: '12px', color: 'var(--color-text)', outline: 'none', resize: 'vertical', transition: 'all 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'} onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1.2rem' }}>
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
