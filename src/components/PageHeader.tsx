import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function PageHeader({ title, subtitle, imageSrc }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-slate-200 bg-sky-50">
      {imageSrc && (
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-multiply">
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
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in text-slate-900">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto animate-fade-in font-light" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
