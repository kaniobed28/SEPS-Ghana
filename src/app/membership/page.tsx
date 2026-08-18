import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { GraduationCap, Briefcase, Building, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Membership | SRI-Ghana',
  description: 'Join the SRI-Ghana Community. Membership is free for students, professionals, and organizations.',
};

export default function Membership() {
  const categories = [
    {
      name: 'Student Membership',
      tagline: 'Discover. Learn. Explore.',
      icon: <GraduationCap size={40} color="var(--color-primary)" />,
      price: 'FREE',
      who: 'Senior High School | Undergraduate | Master\'s | PhD students',
      description: 'Open to students with an interest in space science, STEM, engineering, technology, and related fields.',
      benefits: [
        'Space science and STEM outreach activities',
        'Workshops, seminars, and training programs',
        'Student research and innovation projects',
        'Space science clubs and student activities',
        'Mentorship and career-development programs',
        'Internships and research opportunities',
        'Astronomy and space-science activities',
        'Student competitions and challenges',
        'Networking with scientists, engineers, and researchers',
        'SRI-Ghana academic and research initiatives'
      ],
      color: 'var(--color-primary)'
    },
    {
      name: 'Professional Membership',
      tagline: 'Connect. Collaborate. Contribute.',
      icon: <Briefcase size={40} color="var(--color-secondary)" />,
      price: 'FREE',
      who: 'Scientists, researchers, engineers, educators, professionals',
      description: 'Become part of a network committed to building scientific capacity and advancing space research in Ghana and Africa.',
      benefits: [
        'Scientific research and collaboration',
        'Student mentorship and supervision',
        'Workshops and professional training',
        'Research projects and publications',
        'Scientific seminars and conferences',
        'Technical working groups',
        'STEM education and outreach',
        'Technology and innovation initiatives',
        'National and international collaborations'
      ],
      color: 'var(--color-secondary)'
    },
    {
      name: 'Corporate & Institutional',
      tagline: 'Partner. Support. Innovate.',
      icon: <Building size={40} color="#a0a5b5" />,
      price: 'FREE',
      who: 'Companies, Universities, Research Institutions, NGOs',
      description: 'An opportunity for organizations to invest in talent, support research, develop technology, and contribute to the ecosystem.',
      benefits: [
        'Joint research and development',
        'Student internships and training',
        'Technology development',
        'Research sponsorship and support',
        'STEM education and outreach',
        'Innovation and entrepreneurship',
        'Industry-academia partnerships',
        'Scientific and technical training',
        'National space projects',
        'International research collaborations'
      ],
      color: '#a0a5b5'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Join Our Community" 
        subtitle="The Space Research Institute - Ghana (SRI-Ghana) welcomes everyone committed to advancing space science, technology, education, and innovation in Ghana and Africa."
      />
      
      <div className="container section" style={{ paddingTop: 0 }}>
        
        {/* Registration Form Section */}
        <div className="glass-panel" style={{ padding: '50px', marginBottom: '60px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--color-text-primary)', marginBottom: '20px' }}>Register Globally</h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '25px', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 25px auto' }}>
            Please fill out the membership registration form below to join SRI-Ghana. Your information will be securely recorded in our database.
          </p>
          <div style={{ marginBottom: '30px' }}>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSe2dSNGA2jja4w-WcgHywhzp-6_dKjM7v3x7exCml5SkW3reA/viewform" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Open Form in Full Screen &rarr;
            </a>
          </div>
          
          <div className="google-form-container" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', height: '1000px', overflow: 'hidden', borderRadius: '12px' }}>
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSe2dSNGA2jja4w-WcgHywhzp-6_dKjM7v3x7exCml5SkW3reA/viewform?embedded=true" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              style={{ border: 'none', background: 'transparent' }}
            >
              Loading Registration Form...
            </iframe>
          </div>
        </div>

        {/* Membership Categories */}
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px', color: 'var(--color-text-primary)' }}>Membership Categories</h2>
        
        <div className="grid-layout" style={{ alignItems: 'stretch', marginBottom: '60px' }}>
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="glass-panel hover-lift"
              style={{ 
                padding: '40px 30px', 
                textAlign: 'left', 
                borderTop: `4px solid ${cat.color}`,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                {cat.icon}
              </div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '5px', textAlign: 'center' }}>{cat.name}</h3>
              <p style={{ color: cat.color, textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>{cat.tagline}</p>
              
              <div style={{ margin: '10px 0 25px 0', textAlign: 'center' }}>
                <span style={{ color: 'var(--color-text-primary)', fontSize: '2rem', fontWeight: '800' }}>{cat.price}</span>
              </div>
              
              <div style={{ marginBottom: '25px', background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '8px' }}>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '10px' }}><strong>Who Can Join?</strong><br/>{cat.who}</p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{cat.description}</p>
              </div>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0' }}>
                {cat.benefits.slice(0, 3).map((benefit, i) => (
                  <li key={i} style={{ marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start', color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                    <span style={{ color: cat.color, flexShrink: 0 }}>â€¢</span>
                    <span style={{ lineHeight: 1.4 }}>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              {cat.benefits.length > 3 && (
                <details style={{ marginTop: '5px', flexGrow: 1 }}>
                  <summary style={{ cursor: 'pointer', color: cat.color, fontWeight: 'bold', display: 'inline-block', padding: '5px 0', outline: 'none', userSelect: 'none', fontSize: '0.9rem' }}>
                    View all {cat.benefits.length} benefits &darr;
                  </summary>
                  <ul style={{ listStyle: 'none', padding: '10px 0 0 0', margin: '0' }}>
                    {cat.benefits.slice(3).map((benefit, i) => (
                      <li key={i + 3} style={{ marginBottom: '12px', display: 'flex', gap: '10px', alignItems: 'flex-start', color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                        <span style={{ color: cat.color, flexShrink: 0 }}>â€¢</span>
                        <span style={{ lineHeight: 1.4 }}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          ))}
        </div>

        {/* One community with a common vision */}
        <div className="glass-panel" style={{ padding: '50px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.5) 100%)' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '25px' }}>One community with a common vision</h2>
          <div style={{ color: 'var(--color-text-primary)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p>
              Regardless of your background, experience, or career stage, there is a place for you at SRI-Ghana.
            </p>
            <p>
              Whether you are a student discovering space science for the first time, a researcher advancing knowledge, a professional sharing expertise, or an organization supporting innovation, your participation can help shape Ghana's future in space.
            </p>
            <p style={{ fontWeight: 'bold' }}>
              Join the SRI-Ghana community and be part of a growing network working to inspire young people, develop scientific talent, advance research, create innovative technologies, and contribute to the global space community.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
