import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { Telescope, Rocket, Wrench, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Programs & Projects | SRIG',
  description: 'Explore the research, outreach, astronomy nights, and competitions organized by SRIG.',
};

export default function Programs() {
  const programs = [
    {
      title: 'Astronomy Nights',
      desc: 'Monthly stargazing events open to the public using high-powered optical and radio telescopes to map the night sky over West Africa.',
      icon: <Telescope size={48} color="var(--color-primary)" />
    },
    {
      title: 'STEM Outreach',
      desc: 'Inspiring the next generation by visiting high schools, providing hands-on demonstrations, and discussing career paths in physics.',
      icon: <Rocket size={48} color="var(--color-secondary)" />
    },
    {
      title: 'Workshops & Training',
      desc: 'Intensive weekend workshops focusing on telescope building, rocketry, data analysis, and orbital mechanics.',
      icon: <Wrench size={48} color="#e5e7eb" />
    },
    {
      title: 'National Space Competitions',
      desc: 'Annual competitions encouraging university students to present innovative solutions to modern aerospace challenges.',
      icon: <Trophy size={48} color="#9ca3af" />
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Programs & Projects" 
        subtitle="Discover how we are bringing the universe closer to home through outreach, education, and innovation."
        imageSrc="/telescope.png"
      />
      
      <div className="container section" style={{ paddingTop: 0 }}>
        <div className="grid-layout">
          {programs.map((prog, index) => (
            <div 
              key={index} 
              className="glass-panel hover-lift" 
              style={{ padding: '40px 30px', textAlign: 'left', cursor: 'pointer', borderTop: `4px solid ${index % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)'}` }}
            >
              <div style={{ marginBottom: '25px', display: 'flex', justifyContent: 'center' }}>
                {prog.icon}
              </div>
              <h3 style={{ color: 'var(--color-text-primary)', marginBottom: '15px', fontSize: '1.4rem', textAlign: 'center' }}>
                {prog.title}
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, textAlign: 'center' }}>
                {prog.desc}
              </p>
              
              <div style={{ textAlign: 'center', marginTop: '25px' }}>
                <span className="btn" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Learn More</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
