import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200/60 pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="font-heading font-bold text-xl tracking-tight text-zinc-950 mb-5">SRI-Ghana</h3>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs font-normal">
            Space Research Institute Ghana (SRIG). Educating, engaging, and promoting space science.
          </p>
        </div>
        
        <div>
          <h4 className="font-heading font-semibold text-zinc-950 mb-5 text-sm uppercase tracking-wide">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/about" className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors font-medium">About Us</Link></li>
            <li><Link href="/programs" className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors font-medium">Programs</Link></li>
            <li><Link href="/events" className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors font-medium">Events</Link></li>
            <li><Link href="/membership" className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors font-medium">Join Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-heading font-semibold text-zinc-950 mb-5 text-sm uppercase tracking-wide">Resources</h4>
          <ul className="space-y-3">
            <li><Link href="/research" className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors font-medium">Research</Link></li>
            <li><Link href="/resources" className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors font-medium">Learning Materials</Link></li>
            <li><Link href="/gallery" className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors font-medium">Gallery</Link></li>
            <li><Link href="/partners" className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors font-medium">Partners</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-heading font-semibold text-zinc-950 mb-5 text-sm uppercase tracking-wide">Connect</h4>
          <ul className="space-y-3">
            <li><Link href="/contact" className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors font-medium">Contact Us</Link></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors font-medium">Twitter / X</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors font-medium">LinkedIn</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors font-medium">Facebook</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 border-t border-zinc-200/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-400 text-sm font-medium">
          &copy; {new Date().getFullYear()} Space Research Institute Ghana (SRIG). All rights reserved.
        </p>
      </div>
    </footer>
  );
}
