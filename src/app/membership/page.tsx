import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membership | SEPS-Ghana',
  description: 'Join SEPS-Ghana. Discover membership categories, benefits, and how to become a part of our community.',
};

export default function Membership() {
  const categories = [
    {
      name: 'Student Member',
      price: 'GHS 50 / year',
      benefits: ['Access to student research grants', 'Discounted event tickets', 'Mentorship programs', 'Digital newsletter']
    },
    {
      name: 'Professional Member',
      price: 'GHS 200 / year',
      benefits: ['Voting rights in SEPS-Ghana', 'Free entry to seminars', 'Networking with international agencies', 'Publish in our journal']
    },
    {
      name: 'Corporate Member',
      price: 'GHS 1000 / year',
      benefits: ['Logo on our partners page', 'Sponsorship opportunities', 'Dedicated corporate events', 'Full access to all publications']
    }
  ];

  return (
    <div className="container section">
      <h1 className="section-title">Membership</h1>
      
      <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px auto' }}>
        Become a part of a growing community of space science and physics enthusiasts. 
        Whether you are a student, a working professional, or an organization, we have a place for you.
      </p>

      <div className="grid-layout">
        {categories.map((cat, index) => (
          <div key={index} className="glass-panel" style={{ padding: '40px 30px', textAlign: 'center', borderTop: index === 1 ? '4px solid var(--color-primary)' : '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{cat.name}</h3>
            <div style={{ color: 'var(--color-primary)', fontSize: '1.8rem', fontWeight: 'bold', margin: '20px 0' }}>{cat.price}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', textAlign: 'left', color: 'var(--color-text-secondary)' }}>
              {cat.benefits.map((benefit, i) => (
                <li key={i} style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--color-secondary)' }}>✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
            <button className="btn btn-primary" style={{ width: '100%' }}>Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
