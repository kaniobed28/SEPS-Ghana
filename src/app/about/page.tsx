import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | SEPS-Ghana',
  description: 'Learn about the mission, vision, and leadership of the Space Exploration and Physics Society – Ghana.',
};

export default function About() {
  return (
    <div className="container section">
      <h1 className="section-title">About SEPS-Ghana</h1>
      
      <div className="grid-layout" style={{ marginBottom: '40px' }}>
        <div className="glass-panel" style={{ padding: '30px' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: '15px' }}>Our Mission</h2>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            To promote space science and physics education in Ghana, fostering a new generation of scientists, 
            engineers, and researchers equipped to contribute to the global space ecosystem.
          </p>
        </div>
        
        <div className="glass-panel" style={{ padding: '30px' }}>
          <h2 style={{ color: 'var(--color-secondary)', marginBottom: '15px' }}>Our Vision</h2>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            A future where Ghana is a recognized contributor to space exploration, astronomy, 
            and advanced physics research on the African continent and globally.
          </p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '40px' }}>
        <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '20px' }}>Our History & Objectives</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '15px' }}>
          Founded by a group of passionate physicists and space enthusiasts, SEPS-Ghana aims to bridge the gap 
          between theoretical knowledge and practical space exploration in West Africa. 
        </p>
        <ul style={{ color: 'var(--color-text-secondary)', marginLeft: '20px', lineHeight: '1.8' }}>
          <li>Organize public outreach programs and astronomy nights.</li>
          <li>Support student research in physics and space science.</li>
          <li>Collaborate with international space agencies and universities.</li>
          <li>Provide a platform for networking among professionals and amateurs.</li>
        </ul>
      </div>
    </div>
  );
}
