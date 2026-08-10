import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Research & Publications | SEPS-Ghana',
  description: 'Read the latest articles, newsletters, and student research published by SEPS-Ghana.',
};

export default function Research() {
  const publications = [
    {
      title: 'Solar Flare Activity and Its Impact on West African Grids',
      author: 'Dr. Kwame Osei, et al.',
      date: 'May 2026',
      type: 'Research Article',
      link: '#'
    },
    {
      title: 'The Future of African Space Programs',
      author: 'SEPS-Ghana Editorial Team',
      date: 'April 2026',
      type: 'Newsletter',
      link: '#'
    },
    {
      title: 'Mapping the Milky Way: Student Observations',
      author: 'KNUST Astronomy Club',
      date: 'March 2026',
      type: 'Student Report',
      link: '#'
    }
  ];

  return (
    <div className="container section">
      <h1 className="section-title">Research & Publications</h1>
      
      <div className="grid-layout">
        {publications.map((pub, index) => (
          <div key={index} className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{pub.type}</span>
            <h3 style={{ margin: '15px 0', fontSize: '1.2rem' }}>{pub.title}</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '10px' }}>By {pub.author}</p>
            <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '20px', flexGrow: 1 }}>{pub.date}</p>
            <Link href={pub.link} className="btn" style={{ textAlign: 'center' }}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
