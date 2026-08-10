import type { Metadata } from 'next';

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
      desc: 'Join researchers and enthusiasts across West Africa to discuss the future of space tech.'
    },
    {
      title: 'Introduction to Radio Astronomy',
      date: 'September 5, 2026',
      location: 'Online Webinar',
      type: 'Webinar',
      desc: 'A beginner-friendly session on how radio telescopes help us map the universe.'
    },
    {
      title: 'University Stargazing Night',
      date: 'October 20, 2026',
      location: 'University of Ghana Observatory',
      type: 'Public Event',
      desc: 'Experience the night sky through high-powered optical telescopes.'
    }
  ];

  return (
    <div className="container section">
      <h1 className="section-title">Upcoming Events</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {events.map((evt, index) => (
          <div key={index} className="glass-panel" style={{ padding: '30px', display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 300px' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-secondary)', fontWeight: 'bold' }}>{evt.type}</span>
              <h2 style={{ fontSize: '1.5rem', margin: '10px 0' }}>{evt.title}</h2>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '10px' }}>{evt.desc}</p>
              <div style={{ fontSize: '0.9rem', color: '#ccc' }}>
                <span style={{ marginRight: '15px' }}>📅 {evt.date}</span>
                <span>📍 {evt.location}</span>
              </div>
            </div>
            <div>
              <button className="btn">Register</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
