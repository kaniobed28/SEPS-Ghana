import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          SEPS<span className="glow-text">-Ghana</span>
        </Link>
        <nav className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/membership">Membership</Link>
          <Link href="/events">Events</Link>
          <Link href="/research">Research</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/contact" className="btn btn-primary" style={{ marginLeft: '10px' }}>Contact</Link>
        </nav>
        {/* Mobile menu toggle button could be added here */}
      </div>
    </header>
  );
}
