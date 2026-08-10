import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerSection}>
          <h3 className={styles.logo}>SEPS-Ghana</h3>
          <p className={styles.description}>
            Space Exploration and Physics Society – Ghana. Educating, engaging, and promoting space science.
          </p>
        </div>
        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/programs">Programs</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/membership">Join Us</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Resources</h4>
          <ul className={styles.linkList}>
            <li><Link href="/research">Research</Link></li>
            <li><Link href="/resources">Learning Materials</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/partners">Partners</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Connect</h4>
          <ul className={styles.linkList}>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Space Exploration and Physics Society – Ghana. All rights reserved.</p>
      </div>
    </footer>
  );
}
