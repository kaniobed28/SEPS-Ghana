import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { Target, Lightbulb, History, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | SEPS-Ghana',
  description: 'Learn about the mission, vision, and leadership of the Space Exploration and Physics Society – Ghana.',
};

export default function About() {
  return (
    <div>
      <PageHeader 
        title="About SEPS-Ghana" 
        subtitle="Bridging the gap between theoretical knowledge and practical space exploration in West Africa."
        imageSrc="/galaxy.png"
      />
      <div className="container section" style={{ paddingTop: 0 }}>
        
        <div className="grid-layout" style={{ marginBottom: '60px' }}>
          <div className="glass-panel hover-lift" style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <Target size={48} color="var(--color-primary)" style={{ marginBottom: '20px' }} />
            <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '15px' }}>Our Mission</h2>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              To promote space science and physics education in Ghana, fostering a new generation of scientists, 
              engineers, and researchers equipped to contribute to the global space ecosystem.
            </p>
          </div>
          
          <div className="glass-panel hover-lift" style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <Lightbulb size={48} color="var(--color-secondary)" style={{ marginBottom: '20px' }} />
            <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '15px' }}>Our Vision</h2>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              A future where Ghana is a recognized contributor to space exploration, astronomy, 
              and advanced physics research on the African continent and globally.
            </p>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '50px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', opacity: 0.1, zIndex: 0 }}>
            <History size={300} />
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Users size={32} />
              Our History & Objectives
            </h2>
            <p style={{ color: 'var(--color-text-primary)', marginBottom: '25px', fontSize: '1.1rem', maxWidth: '800px', lineHeight: 1.8 }}>
              Founded by a group of passionate physicists and space enthusiasts, SEPS-Ghana was created to build a platform that unites both professionals and amateurs. 
              Our key objectives include:
            </p>
            <ul style={{ color: 'var(--color-text-secondary)', marginLeft: '20px', lineHeight: '2', fontSize: '1.05rem', listStyleType: 'square' }}>
              <li>Organize public outreach programs and astronomy nights to educate the general public.</li>
              <li>Support student research in physics and space science through mentorship and resources.</li>
              <li>Collaborate with international space agencies and universities for knowledge transfer.</li>
              <li>Provide a networking platform for professionals and amateurs across the continent.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
