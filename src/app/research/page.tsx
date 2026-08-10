import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { FileText, BookOpen, GraduationCap, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Research & Publications | SRIG',
  description: 'Read the latest articles, newsletters, and student research published by SRIG.',
};

export default function Research() {
  const publications = [
    {
      title: 'Solar Flare Activity and Its Impact on West African Grids',
      author: 'Dr. Kwame Osei, et al.',
      date: 'May 2026',
      type: 'Research Article',
      icon: <FileText size={24} color="var(--color-primary)" />,
      link: '#'
    },
    {
      title: 'The Future of African Space Programs',
      author: 'SRIG Editorial Team',
      date: 'April 2026',
      type: 'Newsletter',
      icon: <BookOpen size={24} color="var(--color-secondary)" />,
      link: '#'
    },
    {
      title: 'Mapping the Milky Way: Student Observations',
      author: 'KNUST Astronomy Club',
      date: 'March 2026',
      type: 'Student Report',
      icon: <GraduationCap size={24} color="#e5e7eb" />,
      link: '#'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Research & Publications" 
        subtitle="Explore our latest findings, academic papers, and student reports advancing the frontier of space science."
      />
      
      <div className="container section" style={{ paddingTop: 0 }}>
        <div className="grid-layout">
          {publications.map((pub, index) => (
            <div key={index} className="glass-panel hover-lift" style={{ padding: '30px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0.2 }}>
                {pub.icon}
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                {pub.icon}
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                  {pub.type}
                </span>
              </div>
              
              <h3 style={{ margin: '0 0 15px 0', fontSize: '1.3rem', color: 'var(--color-text-primary)' }}>{pub.title}</h3>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '5px' }}>By {pub.author}</p>
              <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '30px', flexGrow: 1 }}>Published: {pub.date}</p>
              
              <Link href={pub.link} className="btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                Read Article <ArrowUpRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
