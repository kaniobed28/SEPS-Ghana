import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="animate-fade-in">
            Explore the <span className="glow-text">Universe</span> with Us
          </h1>
          <p className="animate-fade-in" style={{ animationDelay: '0.2s', fontSize: '1.2rem', marginBottom: '20px' }}>
            <strong>Space Research Institute Ghana (SRIG)</strong><br />
            <span style={{ color: 'var(--color-text-secondary)', fontSize: '1rem' }}>A Space Exploration Association</span><br /><br />
            Join the community of innovators, researchers, and space enthusiasts.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/membership" className="btn btn-primary">
              Become a Member
            </Link>
            <Link href="/about" className="btn">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section container">
        <div className="glass-panel" style={{ padding: '40px', textAlign: 'center' }}>
          <h2 className="section-title">Welcome to SRIG</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-text-secondary)' }}>
            We are a non-profit organization dedicated to the advancement of space science and physics in Ghana. 
            Our mission is to educate the public, support student research, and foster a community passionate about the cosmos.
          </p>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="section container">
        <div className="glass-panel hover-lift" style={{ padding: '50px', textAlign: 'center', background: 'rgba(0, 0, 0, 0.4)' }}>
          <h2 className="section-title" style={{ marginBottom: '20px' }}>Discover Our Universe</h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '40px', fontSize: '1.1rem' }}>
            Experience the breathtaking beauty of space. Watch this stunning footage from NASA to get inspired.
          </p>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', border: '1px solid var(--color-border)', boxShadow: '0 0 30px rgba(0, 229, 255, 0.2)' }}>
            <iframe 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              src="https://www.youtube.com/embed/6tmbeLTHC_0?autoplay=1&mute=1&loop=1&playlist=6tmbeLTHC_0" 
              title="NASA | Thermonuclear Art – The Sun In Ultra-HD (4K)" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Quick Links / Highlights */}
      <section className="section container">
        <h2 className="section-title">What We Do</h2>
        <div className="grid-layout">
          <div className={`glass-panel ${styles.featureCard}`}>
            <h3>Astronomy Nights</h3>
            <p>Join us for stargazing and planetary observations using state-of-the-art telescopes.</p>
            <Link href="/programs" className={styles.featureLink}>Explore Programs &rarr;</Link>
          </div>
          <div className={`glass-panel ${styles.featureCard}`}>
            <h3>Student Research</h3>
            <p>We provide resources and mentorship for students pursuing physics and astronomy.</p>
            <Link href="/research" className={styles.featureLink}>Read Research &rarr;</Link>
          </div>
          <div className={`glass-panel ${styles.featureCard}`}>
            <h3>Public Lectures</h3>
            <p>Attend our seminars and webinars featuring guest speakers from space agencies.</p>
            <Link href="/events" className={styles.featureLink}>View Events &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
