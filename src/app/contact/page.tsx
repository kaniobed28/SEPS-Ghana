import type { Metadata } from 'next';
import styles from './page.module.css';
import PageHeader from '@/components/PageHeader';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | SRIG',
  description: 'Get in touch with SRIG.',
};

export default function Contact() {
  return (
    <div>
      <PageHeader 
        title="Get in Touch" 
        subtitle="Have questions about our programs, want to collaborate, or just want to say hi? We'd love to hear from you."
      />
      
      <div className="container section" style={{ paddingTop: 0 }}>
        <div className="grid-layout">
          <div className="glass-panel" style={{ padding: '50px' }}>
            <h2 style={{ marginBottom: '30px', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Send size={28} />
              Send a Message
            </h2>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="John Doe" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="john@example.com" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required placeholder="How can we help?" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '15px', padding: '15px' }}>
                Send Message
              </button>
            </form>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div className="glass-panel" style={{ padding: '40px' }}>
              <h2 style={{ marginBottom: '20px', color: 'var(--color-secondary)' }}>Contact Info</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                  <MapPin size={24} color="var(--color-secondary)" />
                  <div>
                    <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '5px' }}>Headquarters</h4>
                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Space Science Center, Accra<br />Greater Accra Region, Ghana</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <Mail size={24} color="var(--color-secondary)" />
                  <p style={{ color: 'var(--color-text-secondary)' }}>info@seps-ghana.org</p>
                </div>
                
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <Phone size={24} color="var(--color-secondary)" />
                  <p style={{ color: 'var(--color-text-secondary)' }}>+233 (0) 55 123 4567</p>
                </div>
              </div>
            </div>
            
            <div className="glass-panel" style={{ padding: '40px' }}>
              <h2 style={{ marginBottom: '20px', color: 'var(--color-text-primary)' }}>Follow Us</h2>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a href="#" className={styles.socialIcon} aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
