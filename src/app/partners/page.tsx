import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { Landmark, Globe2, Building2, ShieldCheck, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Partners & Sponsors | SEPS-Ghana',
  description: 'Our partners and sponsors supporting space exploration and physics in Ghana.',
};

export default function Partners() {
  const partners = [
    { name: 'University of Ghana, Physics Dept.', type: 'Academic Partner', icon: <Landmark size={32} color="#000" />, color: 'var(--color-primary)' },
    { name: 'KNUST Astronomy Club', type: 'Academic Partner', icon: <GraduationCap size={32} color="#000" />, color: 'var(--color-secondary)' },
    { name: 'Ghana Space Science and Technology Institute (GSSTI)', type: 'Government Agency', icon: <ShieldCheck size={32} color="#000" />, color: '#00f0ff' },
    { name: 'Global Astronomy Network', type: 'International Collaborator', icon: <Globe2 size={32} color="#000" />, color: '#b026ff' },
    { name: 'TechSpace Foundation', type: 'Sponsor', icon: <Building2 size={32} color="#000" />, color: '#ff26a0' },
  ];

  return (
    <div>
      <PageHeader 
        title="Partners & Sponsors" 
        subtitle="We are proud to collaborate with universities, government agencies, and international organizations who share our vision."
      />
      
      <div className="container section" style={{ paddingTop: 0 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <HeartHandshake size={64} color="var(--color-primary)" style={{ margin: '0 auto 20px auto' }} />
          <h2 style={{ fontSize: '2rem', color: 'var(--color-text-primary)' }}>Working Together for the Future</h2>
        </div>

        <div className="grid-layout">
          {partners.map((partner, index) => (
            <div key={index} className="glass-panel hover-lift" style={{ 
              padding: '40px 20px', 
              textAlign: 'center',
              borderBottom: `4px solid ${partner.color}`
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                background: partner.color,
                margin: '0 auto 25px auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 0 20px ${partner.color}88`
              }}>
                {partner.icon}
              </div>
              <h3 style={{ marginBottom: '15px', fontSize: '1.2rem', color: 'var(--color-text-primary)' }}>{partner.name}</h3>
              <span style={{ 
                display: 'inline-block', 
                padding: '6px 16px', 
                borderRadius: '20px', 
                backgroundColor: 'rgba(255,255,255,0.05)', 
                border: '1px solid rgba(255,255,255,0.1)',
                fontSize: '0.85rem',
                color: 'var(--color-text-secondary)',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {partner.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Inline definition for missing icon to avoid an extra import line that could cause errors if not careful
function GraduationCap(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;
}
