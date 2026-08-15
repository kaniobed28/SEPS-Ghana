import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { Telescope, Rocket, Wrench, GraduationCap, Globe, BookOpen, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Programs & Training | SRI-Ghana',
  description: 'Explore the academic, research, outreach, and training programs at the Space Research Institute, Ghana.',
};

export default function Programs() {
  return (
    <div>
      <PageHeader 
        title="Programs & Training" 
        subtitle="Building the foundation for Ghana's future in space science, research, and technology."
        imageSrc="/telescope.png"
      />
      
      <div className="container section" style={{ paddingTop: 0 }}>
        
        {/* Academic, Research & Training Framework */}
        <div className="glass-panel" style={{ padding: '50px', marginBottom: '60px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', opacity: 0.05, zIndex: 0 }}>
            <Layers size={300} />
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--color-primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <GraduationCap size={36} />
              Academic, Research & Training Framework
            </h2>
            <p style={{ color: 'var(--color-text-primary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '30px' }}>
              The Space Research Institute, Ghana (SRI-Ghana) is committed to developing the next generation of Ghanaian space scientists, engineers, researchers, and innovators. Our academic and research framework provides a clear pathway from early space-science awareness through SEPS, to undergraduate education, Master's specialization, PhD research, and professional scientific careers.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '30px' }}>
              SRI-Ghana will work with universities and research partners to provide students with specialized training, mentorship, internships, research opportunities, and access to space-science and technology projects. Our programs are organized into four major areas:
            </p>
            
            <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div className="glass-panel hover-lift" style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', textAlign: 'center', borderTop: '3px solid var(--color-primary)' }}>
                <Globe size={32} color="var(--color-primary)" style={{ margin: '0 auto 15px auto' }} />
                <h4 style={{ color: 'var(--color-text-primary)' }}>Space Science & Exploration</h4>
              </div>
              <div className="glass-panel hover-lift" style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', textAlign: 'center', borderTop: '3px solid var(--color-secondary)' }}>
                <Rocket size={32} color="var(--color-secondary)" style={{ margin: '0 auto 15px auto' }} />
                <h4 style={{ color: 'var(--color-text-primary)' }}>Space Engineering & Technology</h4>
              </div>
              <div className="glass-panel hover-lift" style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', textAlign: 'center', borderTop: '3px solid var(--color-primary)' }}>
                <Layers size={32} color="var(--color-primary)" style={{ margin: '0 auto 15px auto' }} />
                <h4 style={{ color: 'var(--color-text-primary)' }}>Space Data, Computing & AI</h4>
              </div>
              <div className="glass-panel hover-lift" style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', textAlign: 'center', borderTop: '3px solid var(--color-secondary)' }}>
                <BookOpen size={32} color="var(--color-secondary)" style={{ margin: '0 auto 15px auto' }} />
                <h4 style={{ color: 'var(--color-text-primary)' }}>Education, Research & Innovation</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Academic Pathways */}
        <div className="glass-panel" style={{ padding: '50px', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '40px', textAlign: 'center' }}>Academic Pathways & Research Areas</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            
            {/* Space Science & Exploration */}
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                I. Space Science & Exploration
              </h3>
              
              <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h4 style={{ color: 'var(--color-secondary)', marginBottom: '15px', fontSize: '1.2rem' }}>Undergraduate Pathways</h4>
                  <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    <li>Physics & Applied Physics</li>
                    <li>Earth, Atmospheric & Environmental Science</li>
                    <li>Mathematics & Computer Science</li>
                    <li>Engineering & Geology</li>
                  </ul>
                  <h5 style={{ color: 'var(--color-text-primary)', marginBottom: '5px', fontSize: '1rem' }}>Space-Related Training:</h5>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    Earth Observation, Remote Sensing, Space Physics, Solar Physics, Astronomy, Astrophysics
                  </p>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h4 style={{ color: 'var(--color-secondary)', marginBottom: '15px', fontSize: '1.2rem' }}>Master's Specializations</h4>
                  <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    <li>Earth Observation & Remote Sensing</li>
                    <li>Atmospheric & Climate Science</li>
                    <li>Space Physics & Space Weather</li>
                    <li>Astronomy & Astrophysics</li>
                    <li>Planetary Science</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h4 style={{ color: 'var(--color-secondary)', marginBottom: '15px', fontSize: '1.2rem' }}>PhD Research Areas</h4>
                  <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    <li>Atmospheric Dynamics & Climate Variability</li>
                    <li>Solar, Heliospheric & Ionospheric Physics</li>
                    <li>Stellar, Galactic & Extragalactic Astrophysics</li>
                    <li>Planetary Geophysics & Atmospheres</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Space Engineering & Technology */}
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                II. Space Engineering & Technology
              </h3>
              
              <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h4 style={{ color: 'var(--color-secondary)', marginBottom: '15px', fontSize: '1.2rem' }}>Undergraduate Pathways</h4>
                  <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    <li>Mechanical & Aerospace Engineering</li>
                    <li>Electrical & Electronic Engineering</li>
                    <li>Computer & Mechatronics Engineering</li>
                    <li>Materials Engineering</li>
                  </ul>
                  <h5 style={{ color: 'var(--color-text-primary)', marginBottom: '5px', fontSize: '1rem' }}>Space-Related Training:</h5>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    Spacecraft Fundamentals, Satellite Systems, Control Systems, CubeSats, Embedded Systems
                  </p>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h4 style={{ color: 'var(--color-secondary)', marginBottom: '15px', fontSize: '1.2rem' }}>Master's Specializations</h4>
                  <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    <li>MSc Space Systems Engineering</li>
                    <li>Spacecraft Systems & Mission Design</li>
                    <li>Space Mission Operations</li>
                    <li>Autonomous Space Systems</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h4 style={{ color: 'var(--color-secondary)', marginBottom: '15px', fontSize: '1.2rem' }}>PhD Research Areas</h4>
                  <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    <li>Spacecraft Systems Architecture</li>
                    <li>Autonomous Spacecraft & Control</li>
                    <li>Space Systems Optimization</li>
                    <li>Advanced Mission Design</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Space Data, Computing & AI */}
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                III. Space Data, Computing & AI
              </h3>
              
              <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h4 style={{ color: 'var(--color-secondary)', marginBottom: '15px', fontSize: '1.2rem' }}>Undergraduate Pathways</h4>
                  <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    <li>Computer Science & Data Science</li>
                    <li>Mathematics & Statistics</li>
                    <li>Physics & Engineering</li>
                  </ul>
                  <h5 style={{ color: 'var(--color-text-primary)', marginBottom: '5px', fontSize: '1rem' }}>Space-Related Training:</h5>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    Programming for Space Science, Satellite Data Processing, Computational Physics, Numerical Methods
                  </p>
                </div>
                
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h4 style={{ color: 'var(--color-secondary)', marginBottom: '15px', fontSize: '1.2rem' }}>Undergraduate Research Program</h4>
                  <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    <li>Research internships</li>
                    <li>Student research projects</li>
                    <li>Laboratory training</li>
                    <li>Space-data projects & Mentorship</li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* STEM Outreach */}
        <div className="grid-layout" style={{ marginBottom: '60px' }}>
          <div className="glass-panel hover-lift" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
            <Telescope size={48} color="var(--color-secondary)" style={{ marginBottom: '20px' }} />
            <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '20px', fontSize: '2rem' }}>STEM Outreach</h2>
            <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <p>
                STEM Outreach represents the first stage of the SRI-Ghana talent-development pathway. Students who develop an interest in space and STEM through our outreach activities can progress into SEPS, university education, research internships, specialized postgraduate training, and ultimately careers in space science and technology.
              </p>
              <h4 style={{ color: 'var(--color-primary)', marginTop: '10px' }}>Inspire → Explore → Learn → Create → Research → Innovate</h4>
              <p>
                Our goal is to ensure that young people across Ghana have the opportunity to discover their potential, develop scientific skills, and become the scientists, engineers, researchers, and innovators who will shape Ghana's future in space.
              </p>
              <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                <li>Coding and robotics workshops</li>
                <li>Student research and innovation challenges</li>
                <li>STEM competitions and science fairs</li>
                <li>Mentorship and career guidance</li>
                <li>STEM summer schools and camps</li>
              </ul>
            </div>
          </div>

          <div className="glass-panel hover-lift" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
            <Wrench size={48} color="var(--color-primary)" style={{ marginBottom: '20px' }} />
            <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '20px', fontSize: '2rem' }}>Workshops & Training</h2>
            <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <p>
                <strong>Building Skills. Advancing Knowledge. Developing Talent.</strong>
              </p>
              <p>
                The Workshops & Training Program is designed to strengthen the scientific, technical, and research capabilities of students, educators, researchers, engineers, and professionals. Our programs bridge the gap between academic knowledge and practical experience.
              </p>
              <h4 style={{ color: 'var(--color-primary)', marginTop: '10px' }}>Training Opportunities</h4>
              <ul style={{ paddingLeft: '20px' }}>
                <li><strong>For Students:</strong> Hands-on workshops, boot camps, summer schools, coding, and satellite projects.</li>
                <li><strong>For Educators:</strong> Professional development to strengthen the teaching of STEM and astronomy.</li>
                <li><strong>For Researchers & Professionals:</strong> Advanced technical workshops, scientific seminars, and data analysis training.</li>
              </ul>
              <p style={{ marginTop: '10px' }}>
                <em>Learning Through Practice:</em> Short Courses | Technical Workshops | Boot Camps | Summer Schools | Research Seminars | Hands-on Laboratories
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
