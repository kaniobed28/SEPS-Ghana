import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programs & Projects | SEPS-Ghana',
  description: 'Explore the research, outreach, astronomy nights, and competitions organized by SEPS-Ghana.',
};

export default function Programs() {
  const programs = [
    {
      title: 'Astronomy Nights',
      desc: 'Monthly stargazing events open to the public using high-powered telescopes.',
      icon: '🔭'
    },
    {
      title: 'STEM Outreach',
      desc: 'Visiting high schools to inspire students about physics and space science.',
      icon: '🚀'
    },
    {
      title: 'Workshops & Training',
      desc: 'Hands-on workshops in telescope building, rocketry, and data analysis.',
      icon: '🛠️'
    },
    {
      title: 'National Space Competitions',
      desc: 'Annual competitions for universities to present innovative space solutions.',
      icon: '🏆'
    }
  ];

  return (
    <div className="container section">
      <h1 className="section-title">Programs & Projects</h1>
      
      <div className="grid-layout">
        {programs.map((prog, index) => (
          <div key={index} className="glass-panel hover-lift" style={{ padding: '30px', textAlign: 'center', cursor: 'pointer' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{prog.icon}</div>
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '10px' }}>{prog.title}</h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>{prog.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
