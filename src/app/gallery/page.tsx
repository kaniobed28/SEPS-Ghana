import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import { Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gallery | SEPS-Ghana',
  description: 'Photos and videos of events and activities organized by SEPS-Ghana.',
};

export default function Gallery() {
  const images = [
    { id: 1, title: 'Telescope Setup at KNUST', src: '/telescope.png', colSpan: 2 },
    { id: 2, title: 'High School Outreach in Accra', bg: 'linear-gradient(135deg, #16213e, #0f3460)', colSpan: 1 },
    { id: 3, title: 'Deep Space Observation', src: '/galaxy.png', colSpan: 1 },
    { id: 4, title: 'SEPS Annual Meeting 2025', bg: 'linear-gradient(135deg, #2a1a2e, #050510)', colSpan: 2 },
    { id: 5, title: 'Eclipse Observation 2024', bg: 'linear-gradient(135deg, #0f3460, #050510)', colSpan: 1 },
    { id: 6, title: 'Radio Telescope Visit', bg: 'linear-gradient(135deg, #1a1a2e, #2a1a2e)', colSpan: 2 }
  ];

  return (
    <div>
      <PageHeader 
        title="Gallery" 
        subtitle="A visual journey through our events, workshops, and stargazing nights."
      />
      
      <div className="container section" style={{ paddingTop: 0 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '20px',
          gridAutoRows: '300px'
        }}>
          {images.map(img => (
            <div 
              key={img.id} 
              className="glass-panel hover-lift" 
              style={{ 
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                gridColumn: img.colSpan > 1 ? `span 2` : 'span 1',
                background: img.bg || 'transparent'
              }}
            >
              {img.src && (
                <Image 
                  src={img.src} 
                  alt={img.title} 
                  fill 
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  className="gallery-img"
                />
              )}
              <div style={{ 
                position: 'absolute', 
                top: 0, left: 0, right: 0, bottom: 0, 
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)', 
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '30px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-primary)', marginBottom: '8px' }}>
                  <Camera size={18} />
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>Event</span>
                </div>
                <h4 style={{ position: 'relative', zIndex: 2, margin: 0, fontSize: '1.4rem', color: 'var(--color-text-primary)' }}>
                  {img.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hover-lift:hover .gallery-img {
          transform: scale(1.1);
        }
        @media (max-width: 768px) {
          .glass-panel { grid-column: span 1 !important; }
        }
      `}} />
    </div>
  );
}
