import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="font-heading font-bold text-2xl tracking-tight text-slate-900 mb-4">SRI-Ghana</h3>
          <p className="text-slate-600 text-sm leading-relaxed max-w-xs font-light">
            Space Research Institute Ghana (SRIG). Educating, engaging, and promoting space science.
          </p>
        </div>
        
        <div>
          <h4 className="font-heading font-bold text-slate-900 mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/about" className="text-sm text-slate-600 hover:text-sky-700 transition-colors font-medium">About Us</Link></li>
            <li><Link href="/programs" className="text-sm text-slate-600 hover:text-sky-700 transition-colors font-medium">Programs</Link></li>
            <li><Link href="/events" className="text-sm text-slate-600 hover:text-sky-700 transition-colors font-medium">Events</Link></li>
            <li><Link href="/membership" className="text-sm text-slate-600 hover:text-sky-700 transition-colors font-medium">Join Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-heading font-bold text-slate-900 mb-4">Resources</h4>
          <ul className="space-y-3">
            <li><Link href="/research" className="text-sm text-slate-600 hover:text-sky-700 transition-colors font-medium">Research</Link></li>
            <li><Link href="/resources" className="text-sm text-slate-600 hover:text-sky-700 transition-colors font-medium">Learning Materials</Link></li>
            <li><Link href="/gallery" className="text-sm text-slate-600 hover:text-sky-700 transition-colors font-medium">Gallery</Link></li>
            <li><Link href="/partners" className="text-sm text-slate-600 hover:text-sky-700 transition-colors font-medium">Partners</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-heading font-bold text-slate-900 mb-4">Connect</h4>
          <ul className="space-y-3">
            <li><Link href="/contact" className="text-sm text-slate-600 hover:text-sky-700 transition-colors font-medium">Contact Us</Link></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-sky-700 transition-colors font-medium">Twitter / X</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-sky-700 transition-colors font-medium">LinkedIn</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-sky-700 transition-colors font-medium">Facebook</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Space Research Institute Ghana (SRIG). All rights reserved.
        </p>
      </div>
    </footer>
  );
}
