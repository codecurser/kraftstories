import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', position: 'relative' }}>
      <div className="bg-glow" style={{ top: '20%', right: '-10%', background: 'radial-gradient(circle, rgba(212, 163, 115, 0.15) 0%, rgba(5,5,5,0) 70%)' }}></div>
      
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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', marginBottom: '6rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card" style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Contact Information</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <a href="mailto:kkraftstories@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="glass" style={{ padding: '1rem', borderRadius: '50%', display: 'flex' }}>
                    <Mail color="var(--color-primary)" />
                  </div>
                  <div>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Email Us</p>
                    <p style={{ fontWeight: '500' }}>kkraftstories@gmail.com</p>
                  </div>
                </a>

                <a href="tel:9709343619" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="glass" style={{ padding: '1rem', borderRadius: '50%', display: 'flex' }}>
                    <Phone color="var(--color-primary)" />
                  </div>
                  <div>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Call Us</p>
                    <p style={{ fontWeight: '500' }}>+91 97093 43619</p>
                  </div>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="glass" style={{ padding: '1rem', borderRadius: '50%', display: 'flex' }}>
                    <MapPin color="var(--color-primary)" />
                  </div>
                  <div>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Location</p>
                    <p style={{ fontWeight: '500' }}>Remote / Global</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <a href="https://wa.me/919709343619" target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center' }}>
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
            <div className="glass-card">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Send us a Message</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>First Name</label>
                    <input type="text" placeholder="John" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', borderRadius: '8px', color: '#fff', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Last Name</label>
                    <input type="text" placeholder="Doe" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', borderRadius: '8px', color: '#fff', outline: 'none' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Email Address</label>
                  <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', borderRadius: '8px', color: '#fff', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Services Interested In</label>
                  <select style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', borderRadius: '8px', color: '#fff', outline: 'none', appearance: 'none' }}>
                    <option value="" style={{ color: '#000' }}>Select a service</option>
                    <option value="social" style={{ color: '#000' }}>Social Media Management</option>
                    <option value="photo" style={{ color: '#000' }}>Photography & Videography</option>
                    <option value="web" style={{ color: '#000' }}>Web Development</option>
                    <option value="design" style={{ color: '#000' }}>Graphic Design</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Message</label>
                  <textarea rows="4" placeholder="Tell us about your project..." style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', borderRadius: '8px', color: '#fff', outline: 'none', resize: 'vertical' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
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
