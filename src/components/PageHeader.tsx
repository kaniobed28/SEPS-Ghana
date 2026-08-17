import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function PageHeader({ title, subtitle, imageSrc }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden border-b border-zinc-200/60 bg-zinc-50/50">
      {imageSrc && (
        <div className="absolute inset-0 z-0 opacity-[0.05] mix-blend-multiply grayscale">
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
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in text-zinc-950">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto animate-fade-in font-normal" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
