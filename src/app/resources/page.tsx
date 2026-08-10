import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources | SEPS-Ghana',
  description: 'Physics and space science learning materials.',
};

export default function Resources() {
  const materials = [
    { title: 'Introduction to Astrophysics', type: 'PDF Course', size: '2.4 MB' },
    { title: 'Stellarium Guide for Beginners', type: 'Video Tutorial', size: 'Watch Online' },
    { title: 'Physics Formula Sheet (SHS Level)', type: 'Cheat Sheet', size: '1.1 MB' },
    { title: 'Data Analysis in Radio Astronomy', type: 'Jupyter Notebook', size: '500 KB' },
  ];

  return (
    <div className="container section">
      <h1 className="section-title">Learning Resources</h1>
      
      <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', marginBottom: '40px' }}>
        Access our curated list of study materials, software guides, and educational content.
      </p>

      <div className="glass-panel" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {materials.map((item, idx) => (
            <li key={idx} style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '15px 10px',
              borderBottom: idx === materials.length - 1 ? 'none' : '1px solid var(--color-border)'
            }}>
              <div>
                <h4 style={{ color: 'var(--color-text-primary)' }}>{item.title}</h4>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{item.type} • {item.size}</span>
              </div>
              <button className="btn" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Download</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
