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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/70 backdrop-blur-xl border-b border-white/20 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4 group" onClick={closeMenu}>
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-zinc-100 group-hover:border-sky-200 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] transition-all duration-300">
             <Image src="/image.png" alt="SRIG Logo" width={28} height={28} className="object-contain" />
          </div>
          <span className="font-heading font-bold text-2xl tracking-tighter text-[#09090b]">SRI-Ghana</span>
        </Link>
        
        <nav className={`md:flex items-center gap-8 ${isOpen ? 'absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-zinc-100 p-8 flex flex-col items-start gap-6 shadow-2xl' : 'hidden'}`}>
          <Link href="/" onClick={closeMenu} className="text-[15px] font-medium text-zinc-600 hover:text-[#09090b] transition-colors">Home</Link>
          <Link href="/about" onClick={closeMenu} className="text-[15px] font-medium text-zinc-600 hover:text-[#09090b] transition-colors">About Us</Link>
          <Link href="/programs" onClick={closeMenu} className="text-[15px] font-medium text-zinc-600 hover:text-[#09090b] transition-colors">Programs</Link>
          <Link href="/membership" onClick={closeMenu} className="text-[15px] font-medium text-zinc-600 hover:text-[#09090b] transition-colors">Membership</Link>
          <Link href="/events" onClick={closeMenu} className="text-[15px] font-medium text-zinc-600 hover:text-[#09090b] transition-colors">Events</Link>
          <Link href="/research" onClick={closeMenu} className="text-[15px] font-medium text-zinc-600 hover:text-[#09090b] transition-colors">Research</Link>
          <Link href="/resources" onClick={closeMenu} className="text-[15px] font-medium text-zinc-600 hover:text-[#09090b] transition-colors">Resources</Link>
          <Link href="/contact" onClick={closeMenu} className="btn btn-primary text-[15px] md:ml-6 py-2.5 px-7">Contact</Link>
        </nav>

        <button className="md:hidden text-[#09090b] p-2 hover:bg-zinc-100 rounded-full transition-colors" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
