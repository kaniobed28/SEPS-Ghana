import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function PageHeader({ title, subtitle, imageSrc }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-zinc-100 bg-[#fafafa]/50">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[50%] -right-[10%] w-[60%] h-[150%] rounded-full opacity-30 blur-[120px]" style={{ background: 'var(--gradient-aurora-soft)' }}></div>
      </div>
      {imageSrc && (
        <div className="absolute inset-0 z-0 opacity-5 mix-blend-multiply">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      <div className="container relative z-10 text-center">
        <div className="inline-flex items-center gap-2 mb-5 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--gradient-aurora)' }}></span>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase gradient-text">SRI-Ghana</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 animate-fade-in text-[#09090b]">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto animate-fade-in font-light leading-relaxed" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
