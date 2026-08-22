'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // The home hero is a dark starfield; the transparent navbar must invert over it.
  const onDarkHero = pathname === '/' && !scrolled && !isOpen;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/programs', label: 'Programs' },
    { href: '/membership', label: 'Membership' },
    { href: '/events', label: 'Events' },
    { href: '/research', label: 'Research' },
    { href: '/resources', label: 'Resources' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/75 backdrop-blur-xl border-b border-zinc-100 py-3 shadow-[0_4px_30px_rgba(109,40,217,0.06)]' : 'bg-transparent py-7 border-b border-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3.5 group" onClick={closeMenu}>
          <div className={`relative w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 overflow-hidden ${onDarkHero ? 'bg-white/10 border-white/20 backdrop-blur-sm' : 'bg-white border-zinc-100 group-hover:border-transparent'}`}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'var(--gradient-aurora-soft)' }} />
            <Image src="/image.png" alt="SRIG Logo" width={26} height={26} className="object-contain relative z-10" />
          </div>
          <span className={`font-heading font-bold text-xl tracking-tighter transition-colors duration-300 ${onDarkHero ? 'text-white' : 'text-[#09090b]'}`}>SRI-Ghana</span>
        </Link>

        <nav className={`md:flex items-center gap-1 ${isOpen ? 'absolute top-full left-0 w-full bg-white/98 backdrop-blur-xl border-b border-zinc-100 p-6 flex flex-col items-stretch gap-1 shadow-2xl' : 'hidden'}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`relative text-[14.5px] font-medium transition-colors px-3.5 py-2 rounded-lg group/link ${onDarkHero ? 'text-zinc-300 hover:text-white hover:bg-white/10' : 'text-zinc-600 hover:text-[#09090b] hover:bg-zinc-50'}`}
            >
              {link.label}
              <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity" style={{ background: 'var(--gradient-aurora)' }} />
            </Link>
          ))}
          <Link href="/contact" onClick={closeMenu} className="btn btn-primary text-[14.5px] md:ml-3 mt-3 md:mt-0 py-2.5 px-6">Contact</Link>
        </nav>

        <button className={`md:hidden p-2 rounded-full transition-colors ${onDarkHero ? 'text-white hover:bg-white/10' : 'text-[#09090b] hover:bg-zinc-100'}`} onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}
