import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { CheckCircle2, Star, GraduationCap, Briefcase, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Membership | SRIG',
  description: 'Join SRIG. Discover membership categories, benefits, and how to become a part of our community.',
};

export default function Membership() {
  const categories = [
    {
      name: 'Student Member',
      icon: <GraduationCap size={40} color="#a0a5b5" />,
      price: 'GHS 50',
      period: '/ year',
      benefits: ['Access to student research grants', 'Discounted event tickets', 'Mentorship programs', 'Digital newsletter'],
      highlight: false,
      color: 'var(--color-border)'
    },
    {
      name: 'Professional Member',
      icon: <Star size={40} color="var(--color-primary)" />,
      price: 'GHS 200',
      period: '/ year',
      benefits: ['Voting rights in SRIG', 'Free entry to seminars', 'Networking with international agencies', 'Publish in our journal', 'Priority event seating'],
      highlight: true,
      color: 'var(--color-primary)'
    },
    {
      name: 'Corporate Member',
      icon: <Building size={40} color="var(--color-secondary)" />,
      price: 'GHS 1000',
      period: '/ year',
      benefits: ['Logo on our partners page', 'Sponsorship opportunities', 'Dedicated corporate events', 'Full access to all publications'],
      highlight: false,
      color: 'var(--color-secondary)'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Join Our Community" 
        subtitle="Become a part of a growing network of space science and physics enthusiasts. Whether you are a student, a working professional, or an organization, we have a place for you."
      />
      
      <div className="container section" style={{ paddingTop: 0 }}>
        <div className="grid-layout" style={{ alignItems: 'center' }}>
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className={`glass-panel ${cat.highlight ? 'hover-lift' : ''}`}
              style={{ 
                padding: '40px 30px', 
                textAlign: 'center', 
                position: 'relative',
                border: cat.highlight ? `2px solid ${cat.color}` : '1px solid var(--color-border)',
                transform: cat.highlight ? 'scale(1.05)' : 'scale(1)',
                zIndex: cat.highlight ? 10 : 1,
                boxShadow: cat.highlight ? `0 0 30px rgba(255, 255, 255, 0.15)` : 'none'
              }}
            >
              {cat.highlight && (
                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: cat.color, color: '#000', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  MOST POPULAR
                </div>
              )}
              
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                {cat.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{cat.name}</h3>
              
              <div style={{ margin: '25px 0', display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '5px' }}>
                <span style={{ color: cat.color, fontSize: '2.5rem', fontWeight: '800' }}>{cat.price}</span>
                <span style={{ color: 'var(--color-text-secondary)' }}>{cat.period}</span>
              </div>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 35px 0', textAlign: 'left' }}>
                {cat.benefits.map((benefit, i) => (
                  <li key={i} style={{ marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'flex-start', color: 'var(--color-text-secondary)' }}>
                    <CheckCircle2 size={20} color={cat.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ lineHeight: 1.4 }}>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <button className={cat.highlight ? 'btn btn-primary' : 'btn'} style={{ width: '100%' }}>
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
