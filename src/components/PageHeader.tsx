import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function PageHeader({ title, subtitle, imageSrc }: PageHeaderProps) {
  return (
    <div className="relative pt-40 pb-24 md:pt-56 md:pb-32 overflow-hidden bg-[#020617] border-b border-white/5">
      {imageSrc ? (
        <div className="absolute inset-0 z-0">
          <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            className="object-cover object-center opacity-40 mix-blend-screen brightness-75 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] to-transparent"></div>
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-[#020617] to-[#020617]"></div>
      )}
      
      <div className="container relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 animate-fade-in text-white leading-none max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl animate-fade-in font-light leading-relaxed" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
