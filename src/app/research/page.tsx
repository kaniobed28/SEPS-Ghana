import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { Microscope, Star, Satellite, Lightbulb, GraduationCap, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Research & Innovation | SRI-Ghana',
  description: 'Explore SRI-Ghana\'s academic projects, research programs, technology innovation, and flagship national initiatives.',
};

export default function Research() {
  return (
    <div>
      <PageHeader 
        title="Research & Innovation" 
        subtitle="Transforming curiosity into knowledge, knowledge into research, and research into innovation."
      />
      
      <div className="container section" style={{ paddingTop: 0 }}>
        
        {/* SRI-GHANA ACADEMIC & RESEARCH PROJECTS */}
        <div style={{ marginBottom: '60px', textAlign: 'center', maxWidth: '900px', margin: '0 auto 60px auto' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '20px' }}>Academic & Research Projects</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            At the Space Research Institute, Ghana (SRI-Ghana), we believe that meaningful space research begins with education, practical experience, and innovation. Our academic and research projects are designed to provide students, researchers, and collaborators with opportunities to address scientific and technological challenges while developing Ghana's capacity in space science and exploration.
          </p>
        </div>

        {/* Four Interconnected Areas */}
        <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '80px' }}>
          <div className="glass-panel hover-lift" style={{ padding: '40px', borderTop: '4px solid var(--color-primary)' }}>
            <GraduationCap size={40} color="var(--color-primary)" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '15px' }}>Academic Projects</h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              We provide undergraduate, Master's, and PhD students with opportunities to apply their knowledge through practical research, scientific investigations, and space-technology projects.
            </p>
          </div>

          <div className="glass-panel hover-lift" style={{ padding: '40px', borderTop: '4px solid var(--color-secondary)' }}>
            <Microscope size={40} color="var(--color-secondary)" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '15px' }}>Research Projects</h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              Our research programs address fundamental and applied questions in space science, including space weather, heliophysics, ionospheric and atmospheric science, Earth observation, astronomy, astrophysics, planetary science, and computational space science.
            </p>
          </div>

          <div className="glass-panel hover-lift" style={{ padding: '40px', borderTop: '4px solid var(--color-primary)' }}>
            <Lightbulb size={40} color="var(--color-primary)" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '15px' }}>Technology & Innovation</h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              We develop and support technologies that enable space research and applications, including satellites and CubeSats, scientific instruments, sensors, robotics, artificial intelligence, satellite communications, and space-data systems.
            </p>
          </div>

          <div className="glass-panel hover-lift" style={{ padding: '40px', borderTop: '4px solid var(--color-secondary)' }}>
            <Satellite size={40} color="var(--color-secondary)" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '15px' }}>Flagship National Projects</h3>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              SRI-Ghana will develop strategic national projects that build long-term Ghanaian capability in space science and technology.
            </p>
            <ul style={{ color: 'var(--color-text-primary)', marginTop: '15px', paddingLeft: '20px', fontSize: '0.95rem' }}>
              <li style={{ marginBottom: '5px' }}>Ghana Space Weather Initiative</li>
              <li style={{ marginBottom: '5px' }}>Ghana Ionospheric Monitoring Network</li>
              <li style={{ marginBottom: '5px' }}>SRI-Ghana CubeSat Initiative</li>
              <li style={{ marginBottom: '5px' }}>Ghana Earth Observation Initiative</li>
              <li>Ghana Space Science Data Center</li>
            </ul>
          </div>
        </div>

        {/* Young Space Scientists Program */}
        <div className="glass-panel" style={{ padding: '50px', marginBottom: '60px', background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.4) 100%)' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--color-primary)', marginBottom: '15px' }}>Young Space Scientists Program</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
              This is the bridge from education to research. Our programs are designed to create a continuous pathway from education to advanced research and innovation.
            </p>
          </div>
          
          <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            
            {/* Master's Specialization */}
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '12px' }}>
              <h3 style={{ color: 'var(--color-text-primary)', marginBottom: '10px', fontSize: '1.4rem' }}>SRI-Ghana Graduate Research</h3>
              <p style={{ color: 'var(--color-secondary)', fontSize: '0.9rem', marginBottom: '20px', fontWeight: 'bold' }}>Master's Specialization</p>
              <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: 1.8 }}>
                <li>Research assistantships</li>
                <li>Graduate research projects</li>
                <li>Laboratory research</li>
                <li>International research placements</li>
                <li>Scientific workshops</li>
              </ul>
            </div>

            {/* PhD Research */}
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '12px' }}>
              <h3 style={{ color: 'var(--color-text-primary)', marginBottom: '10px', fontSize: '1.4rem' }}>SRI-Ghana Doctoral Research</h3>
              <p style={{ color: 'var(--color-secondary)', fontSize: '0.9rem', marginBottom: '20px', fontWeight: 'bold' }}>PhD Research Areas</p>
              <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: 1.8 }}>
                <li>Doctoral research</li>
                <li>International collaboration</li>
                <li>Joint supervision</li>
                <li>Research fellowships</li>
                <li>Scientific publications</li>
                <li>Conference participation</li>
              </ul>
            </div>

            {/* Postdoctoral */}
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '12px' }}>
              <h3 style={{ color: 'var(--color-text-primary)', marginBottom: '10px', fontSize: '1.4rem' }}>SRI-Ghana Postdoctoral Fellowship</h3>
              <p style={{ color: 'var(--color-secondary)', fontSize: '0.9rem', marginBottom: '20px', fontWeight: 'bold' }}>Postdoctoral Program</p>
              <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: 1.8 }}>
                <li>Independent research</li>
                <li>Research leadership</li>
                <li>International collaboration</li>
                <li>Supervision and mentorship</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Building the Next Generation */}
        <div style={{ textAlign: 'center', padding: '40px', borderTop: '1px solid var(--color-border)', maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--color-text-primary)', marginBottom: '20px' }}>Building the Next Generation</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '30px' }}>
            Students can progress from introductory projects at the undergraduate level to advanced research at the Master's and PhD levels, while working alongside researchers and collaborating with national and international institutions.
          </p>
          <div style={{ background: 'rgba(0, 229, 255, 0.1)', padding: '20px', borderRadius: '8px', border: '1px solid var(--color-primary)', display: 'inline-block' }}>
            <p style={{ color: 'var(--color-primary)', fontWeight: 'bold', letterSpacing: '0.5px' }}>
              SEPS inspires &rarr; Education develops &rarr; Projects provide experience &rarr; Research creates knowledge &rarr; Innovation creates solutions &rarr; Collaboration creates impact
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
