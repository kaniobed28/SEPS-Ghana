import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partners & Sponsors | SEPS-Ghana',
  description: 'Our partners and sponsors supporting space exploration and physics in Ghana.',
};

export default function Partners() {
  const partners = [
    { name: 'University of Ghana, Physics Dept.', type: 'Academic Partner' },
    { name: 'KNUST Astronomy Club', type: 'Academic Partner' },
    { name: 'Ghana Space Science and Technology Institute (GSSTI)', type: 'Government Agency' },
    { name: 'Global Astronomy Network', type: 'International Collaborator' },
    { name: 'TechSpace Foundation', type: 'Sponsor' },
  ];

  return (
    <div className="container section">
      <h1 className="section-title">Partners & Sponsors</h1>
      
      <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', marginBottom: '50px', maxWidth: '800px', margin: '0 auto 50px auto' }}>
        We are proud to collaborate with universities, schools, government agencies, and international organizations 
        who share our vision of advancing space science in Ghana.
      </p>

      <div className="grid-layout">
        {partners.map((partner, index) => (
          <div key={index} className="glass-panel" style={{ padding: '40px 20px', textAlign: 'center' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
              margin: '0 auto 20px auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
              fontWeight: 'bold',
              fontSize: '2rem'
            }}>
              {partner.name.charAt(0)}
            </div>
            <h3 style={{ marginBottom: '10px' }}>{partner.name}</h3>
            <span style={{ 
              display: 'inline-block', 
              padding: '4px 12px', 
              borderRadius: '20px', 
              backgroundColor: 'rgba(255,255,255,0.1)', 
              fontSize: '0.8rem',
              color: 'var(--color-text-secondary)'
            }}>
              {partner.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
