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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
          <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center border border-sky-100 group-hover:bg-sky-100 transition-colors">
             <Image src="/image.png" alt="SRIG Logo" width={24} height={24} className="object-contain" />
          </div>
          <span className={`font-heading font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>SRI-Ghana</span>
        </Link>
        
        <nav className={`md:flex items-center gap-6 ${isOpen ? 'absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col items-start gap-4 shadow-lg' : 'hidden'}`}>
          <Link href="/" onClick={closeMenu} className="text-sm font-semibold text-slate-600 hover:text-sky-700 transition-colors">Home</Link>
          <Link href="/about" onClick={closeMenu} className="text-sm font-semibold text-slate-600 hover:text-sky-700 transition-colors">About Us</Link>
          <Link href="/programs" onClick={closeMenu} className="text-sm font-semibold text-slate-600 hover:text-sky-700 transition-colors">Programs</Link>
          <Link href="/membership" onClick={closeMenu} className="text-sm font-semibold text-slate-600 hover:text-sky-700 transition-colors">Membership</Link>
          <Link href="/events" onClick={closeMenu} className="text-sm font-semibold text-slate-600 hover:text-sky-700 transition-colors">Events</Link>
          <Link href="/research" onClick={closeMenu} className="text-sm font-semibold text-slate-600 hover:text-sky-700 transition-colors">Research</Link>
          <Link href="/resources" onClick={closeMenu} className="text-sm font-semibold text-slate-600 hover:text-sky-700 transition-colors">Resources</Link>
          <Link href="/contact" onClick={closeMenu} className="btn btn-primary text-sm md:ml-4 py-2 px-6">Contact</Link>
        </nav>

        <button className="md:hidden text-slate-900" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
