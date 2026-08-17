'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg border-b border-zinc-200/50 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
          <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center border border-zinc-200/60 group-hover:bg-zinc-200 transition-colors">
             <Image src="/image.png" alt="SRIG Logo" width={24} height={24} className="object-contain" />
          </div>
          <span className={`font-heading font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-zinc-950' : 'text-zinc-950'}`}>SRI-Ghana</span>
        </Link>
        
        <nav className={`md:flex items-center gap-8 ${isOpen ? 'absolute top-full left-0 w-full bg-white border-b border-zinc-200 p-6 flex flex-col items-start gap-4 shadow-lg' : 'hidden'}`}>
          <Link href="/" onClick={closeMenu} className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors">Home</Link>
          <Link href="/about" onClick={closeMenu} className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors">About Us</Link>
          <Link href="/programs" onClick={closeMenu} className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors">Programs</Link>
          <Link href="/membership" onClick={closeMenu} className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors">Membership</Link>
          <Link href="/events" onClick={closeMenu} className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors">Events</Link>
          <Link href="/research" onClick={closeMenu} className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors">Research</Link>
          <Link href="/resources" onClick={closeMenu} className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors">Resources</Link>
          <Link href="/contact" onClick={closeMenu} className="btn btn-primary text-sm md:ml-2">Contact</Link>
        </nav>

        <button className="md:hidden text-zinc-950" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
