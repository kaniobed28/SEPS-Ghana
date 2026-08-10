import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact Us | SEPS-Ghana',
  description: 'Get in touch with SEPS-Ghana.',
};

export default function Contact() {
  return (
    <div className="container section">
      <h1 className="section-title">Contact Us</h1>
      
      <div className="grid-layout">
        <div className="glass-panel" style={{ padding: '40px' }}>
          <h2 style={{ marginBottom: '20px', color: 'var(--color-primary)' }}>Send a Message</h2>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
              Send Message
            </button>
          </form>
        </div>

        <div className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div>
            <h2 style={{ marginBottom: '10px', color: 'var(--color-secondary)' }}>Contact Info</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '5px' }}>📍 Accra, Ghana (HQ)</p>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '5px' }}>📧 info@seps-ghana.org</p>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '5px' }}>📞 +233 (0) 55 123 4567</p>
          </div>
          
          <div>
            <h2 style={{ marginBottom: '10px', color: 'var(--color-secondary)' }}>Follow Us</h2>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#" className={styles.socialIcon}>Twitter</a>
              <a href="#" className={styles.socialIcon}>LinkedIn</a>
              <a href="#" className={styles.socialIcon}>Facebook</a>
            </div>
          </div>

          <div style={{ flexGrow: 1, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}>
            <span style={{ color: 'var(--color-text-secondary)' }}>[Map Placeholder]</span>
          </div>
        </div>
      </div>
    </div>
  );
}
