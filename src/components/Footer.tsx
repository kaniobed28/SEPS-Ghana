import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-sky-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 relative z-10">
        <div>
          <h3 className="font-heading font-bold text-2xl tracking-[0.2em] uppercase text-white mb-6">SRI-Ghana</h3>
          <p className="text-slate-400 text-sm leading-loose max-w-xs font-light">
            Space Research Institute Ghana. Inspiring, educating, and pushing the boundaries of African space exploration.
          </p>
        </div>
        
        <div>
          <h4 className="font-heading font-semibold text-white mb-6 tracking-widest uppercase text-xs">Explore</h4>
          <ul className="space-y-4">
            <li><Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/programs" className="text-sm text-slate-400 hover:text-white transition-colors">Programs</Link></li>
            <li><Link href="/events" className="text-sm text-slate-400 hover:text-white transition-colors">Events</Link></li>
            <li><Link href="/membership" className="text-sm text-slate-400 hover:text-white transition-colors">Join Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-heading font-semibold text-white mb-6 tracking-widest uppercase text-xs">Resources</h4>
          <ul className="space-y-4">
            <li><Link href="/research" className="text-sm text-slate-400 hover:text-white transition-colors">Research</Link></li>
            <li><Link href="/resources" className="text-sm text-slate-400 hover:text-white transition-colors">Learning Materials</Link></li>
            <li><Link href="/gallery" className="text-sm text-slate-400 hover:text-white transition-colors">Gallery</Link></li>
            <li><Link href="/partners" className="text-sm text-slate-400 hover:text-white transition-colors">Partners</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-heading font-semibold text-white mb-6 tracking-widest uppercase text-xs">Connect</h4>
          <ul className="space-y-4">
            <li><Link href="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact Us</Link></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">Twitter / X</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 border-t border-white/5 pt-10 flex flex-col items-center justify-center relative z-10">
        <p className="text-slate-500 text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Space Research Institute Ghana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
