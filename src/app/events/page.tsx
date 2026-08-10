import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Events | SEPS-Ghana',
  description: 'Upcoming conferences, seminars, webinars, and public lectures by SEPS-Ghana.',
};

export default function Events() {
  const events = [
    {
      title: 'Annual Space Science Conference 2026',
      date: 'November 12-14, 2026',
      location: 'Accra International Conference Centre / Virtual',
      type: 'Conference',
      desc: 'Join researchers and enthusiasts across West Africa to discuss the future of space tech.',
      color: 'var(--color-primary)'
    },
    {
      title: 'Introduction to Radio Astronomy',
      date: 'September 5, 2026',
      location: 'Online Webinar',
      type: 'Webinar',
      desc: 'A beginner-friendly session on how radio telescopes help us map the universe.',
      color: 'var(--color-secondary)'
    },
    {
      title: 'University Stargazing Night',
      date: 'October 20, 2026',
      location: 'University of Ghana Observatory',
      type: 'Public Event',
      desc: 'Experience the night sky through high-powered optical telescopes.',
      color: '#00f0ff'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Upcoming Events" 
        subtitle="Mark your calendars! Join our conferences, stargazing nights, and webinars to stay connected with the cosmos."
        imageSrc="/galaxy.png"
      />
      
      <div className="container section" style={{ paddingTop: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', maxWidth: '900px', margin: '0 auto' }}>
          {events.map((evt, index) => (
            <div 
              key={index} 
              className="glass-panel hover-lift" 
              style={{ 
                padding: '0', 
                display: 'flex', 
                flexWrap: 'wrap',
                overflow: 'hidden',
                borderLeft: `4px solid ${evt.color}`
              }}
            >
              <div style={{ flex: '1 1 300px', padding: '30px' }}>
                <span style={{ 
                  display: 'inline-block',
                  padding: '4px 12px',
                  backgroundColor: `${evt.color}22`,
                  color: evt.color,
                  borderRadius: '20px',
                  fontSize: '0.8rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px', 
                  fontWeight: 'bold',
                  marginBottom: '15px'
                }}>
                  {evt.type}
                </span>
                
                <h2 style={{ fontSize: '1.6rem', margin: '0 0 15px 0', color: 'var(--color-text-primary)' }}>{evt.title}</h2>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '20px', lineHeight: 1.6 }}>{evt.desc}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '0.9rem', color: '#ccc' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CalendarDays size={18} color={evt.color} />
                    <span>{evt.date}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={18} color={evt.color} />
                    <span>{evt.location}</span>
                  </div>
                </div>
              </div>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                padding: '30px', 
                backgroundColor: 'rgba(255,255,255,0.02)',
                borderLeft: '1px solid var(--color-border)',
                minWidth: '200px'
              }}>
                <button className="btn" style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', justifyContent: 'center' }}>
                  Register <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
