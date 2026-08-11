'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image src="/image.png" alt="SRIG Logo" width={32} height={32} />
          <span className="glow-text">SRIG</span>
        </Link>
        
        <nav className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/about" onClick={closeMenu}>About Us</Link>
          <Link href="/programs" onClick={closeMenu}>Programs</Link>
          <Link href="/membership" onClick={closeMenu}>Membership</Link>
          <Link href="/events" onClick={closeMenu}>Events</Link>
          <Link href="/research" onClick={closeMenu}>Research</Link>
          <Link href="/resources" onClick={closeMenu}>Resources</Link>
          <Link href="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link href="/partners" onClick={closeMenu}>Partners</Link>
          <Link href="/contact" className="btn btn-primary" style={{ marginLeft: '10px' }} onClick={closeMenu}>Contact</Link>
        </nav>

        <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
