import Image from 'next/image';
import styles from './PageHeader.module.css';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function PageHeader({ title, subtitle, imageSrc }: PageHeaderProps) {
  return (
    <div className={styles.pageHeader}>
      {imageSrc && (
        <div className={styles.imageWrapper}>
          <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            style={{ objectFit: 'cover' }} 
            priority
          />
          <div className={styles.overlay}></div>
        </div>
      )}
      <div className={`container ${styles.content}`}>
        <h1 className="glow-text animate-fade-in">{title}</h1>
        {subtitle && (
          <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
