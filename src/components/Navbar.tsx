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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#020617]/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4 group" onClick={closeMenu}>
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors backdrop-blur-md">
             <Image src="/image.png" alt="SRIG Logo" width={28} height={28} className="object-contain" />
          </div>
          <span className="font-heading font-bold text-2xl tracking-widest text-white uppercase text-sm">SRI-Ghana</span>
        </Link>
        
        <nav className={`md:flex items-center gap-8 ${isOpen ? 'absolute top-full left-0 w-full bg-[#020617] border-b border-white/10 p-8 flex flex-col items-start gap-6 shadow-2xl backdrop-blur-xl' : 'hidden'}`}>
          <Link href="/" onClick={closeMenu} className="text-xs uppercase tracking-[0.15em] font-semibold text-slate-400 hover:text-white transition-colors">Home</Link>
          <Link href="/about" onClick={closeMenu} className="text-xs uppercase tracking-[0.15em] font-semibold text-slate-400 hover:text-white transition-colors">About Us</Link>
          <Link href="/programs" onClick={closeMenu} className="text-xs uppercase tracking-[0.15em] font-semibold text-slate-400 hover:text-white transition-colors">Programs</Link>
          <Link href="/membership" onClick={closeMenu} className="text-xs uppercase tracking-[0.15em] font-semibold text-slate-400 hover:text-white transition-colors">Membership</Link>
          <Link href="/events" onClick={closeMenu} className="text-xs uppercase tracking-[0.15em] font-semibold text-slate-400 hover:text-white transition-colors">Events</Link>
          <Link href="/research" onClick={closeMenu} className="text-xs uppercase tracking-[0.15em] font-semibold text-slate-400 hover:text-white transition-colors">Research</Link>
          <Link href="/contact" onClick={closeMenu} className="btn btn-outline text-xs md:ml-4 py-3 px-8">Contact</Link>
        </nav>

        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
    </header>
  );
}
