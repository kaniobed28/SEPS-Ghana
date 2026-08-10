import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | SEPS-Ghana',
  description: 'Photos and videos of events and activities organized by SEPS-Ghana.',
};

export default function Gallery() {
  const images = [
    { id: 1, title: 'Telescope Setup at KNUST', bg: '#1a1a2e' },
    { id: 2, title: 'High School Outreach in Accra', bg: '#16213e' },
    { id: 3, title: 'SEPS Annual Meeting 2025', bg: '#0f3460' },
    { id: 4, title: 'Student Rocketry Workshop', bg: '#2a1a2e' },
    { id: 5, title: 'Eclipse Observation 2024', bg: '#1a2a2e' },
    { id: 6, title: 'Radio Telescope Visit', bg: '#2e1a1a' }
  ];

  return (
    <div className="container section">
      <h1 className="section-title">Gallery</h1>
      <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', marginBottom: '40px' }}>
        A visual journey through our events, workshops, and stargazing nights.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {images.map(img => (
          <div key={img.id} className="glass-panel" style={{ 
            height: '250px', 
            background: `linear-gradient(45deg, ${img.bg}, #050510)`,
            display: 'flex', 
            alignItems: 'flex-end',
            padding: '20px',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '12px'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: 0, left: 0, right: 0, bottom: 0, 
              background: 'rgba(0,0,0,0.3)', 
              zIndex: 1 
            }}></div>
            <h4 style={{ position: 'relative', zIndex: 2, margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
              {img.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
