import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { Download, FileText, Video, LayoutList } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resources | SEPS-Ghana',
  description: 'Physics and space science learning materials.',
};

export default function Resources() {
  const materials = [
    { title: 'Introduction to Astrophysics', type: 'PDF Course', size: '2.4 MB', icon: <FileText size={24} color="#a0a5b5" /> },
    { title: 'Stellarium Guide for Beginners', type: 'Video Tutorial', size: 'Watch Online', icon: <Video size={24} color="#a0a5b5" /> },
    { title: 'Physics Formula Sheet (SHS Level)', type: 'Cheat Sheet', size: '1.1 MB', icon: <LayoutList size={24} color="#a0a5b5" /> },
    { title: 'Data Analysis in Radio Astronomy', type: 'Jupyter Notebook', size: '500 KB', icon: <FileText size={24} color="#a0a5b5" /> },
  ];

  return (
    <div>
      <PageHeader 
        title="Learning Resources" 
        subtitle="Access our curated list of study materials, software guides, and educational content to fuel your curiosity."
      />
      
      <div className="container section" style={{ paddingTop: 0 }}>
        <div className="glass-panel" style={{ padding: '0', maxWidth: '800px', margin: '0 auto', overflow: 'hidden' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {materials.map((item, idx) => (
              <li key={idx} className="hover-lift" style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '25px',
                borderBottom: idx === materials.length - 1 ? 'none' : '1px solid var(--color-border)',
                backgroundColor: 'rgba(255,255,255,0.01)',
                transition: 'background-color 0.3s ease'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--color-text-primary)', fontSize: '1.2rem', marginBottom: '4px' }}>{item.title}</h4>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-primary)' }}>{item.type} <span style={{ color: 'var(--color-text-secondary)' }}>• {item.size}</span></span>
                  </div>
                </div>
                <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', fontSize: '0.9rem' }}>
                  <Download size={18} /> Download
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
