import Link from 'next/link';
import { AtSign, Users, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#09090b] pt-24 pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'var(--gradient-aurora)' }} />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60%] h-80 rounded-full blur-[120px] opacity-20 pointer-events-none" style={{ background: 'var(--gradient-aurora)' }} />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        <div>
          <h3 className="font-heading font-bold text-2xl tracking-tighter text-white mb-5">SRI-Ghana</h3>
          <p className="text-zinc-400 text-[15px] leading-relaxed max-w-xs font-light">
            Space Research Institute Ghana (SRIG). Educating, engaging, and promoting space science, engineering, and exploration.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white mb-5 text-sm tracking-wide uppercase opacity-70">Quick Links</h4>
          <ul className="space-y-3.5">
            <li><Link href="/about" className="text-[15px] text-zinc-400 hover:text-white transition-colors font-medium">About Us</Link></li>
            <li><Link href="/programs" className="text-[15px] text-zinc-400 hover:text-white transition-colors font-medium">Programs</Link></li>
            <li><Link href="/events" className="text-[15px] text-zinc-400 hover:text-white transition-colors font-medium">Events</Link></li>
            <li><Link href="/membership" className="text-[15px] text-zinc-400 hover:text-white transition-colors font-medium">Join Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white mb-5 text-sm tracking-wide uppercase opacity-70">Resources</h4>
          <ul className="space-y-3.5">
            <li><Link href="/research" className="text-[15px] text-zinc-400 hover:text-white transition-colors font-medium">Research</Link></li>
            <li><Link href="/resources" className="text-[15px] text-zinc-400 hover:text-white transition-colors font-medium">Learning Materials</Link></li>
            <li><Link href="/gallery" className="text-[15px] text-zinc-400 hover:text-white transition-colors font-medium">Gallery</Link></li>
            <li><Link href="/partners" className="text-[15px] text-zinc-400 hover:text-white transition-colors font-medium">Partners</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white mb-5 text-sm tracking-wide uppercase opacity-70">Connect</h4>
          <ul className="space-y-3.5">
            <li>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-[15px] text-zinc-400 hover:text-white transition-colors font-medium group">
                Contact Us <ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-3 mt-6">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-all">
              <AtSign size={16} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-all">
              <Users size={16} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-all">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <p className="text-zinc-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Space Research Institute Ghana (SRIG). All rights reserved.
        </p>
      </div>
    </footer>
  );
}
