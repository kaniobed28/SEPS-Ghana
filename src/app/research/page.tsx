import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { Microscope, Star, Satellite, Lightbulb, GraduationCap, Users, Globe, Rocket, Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '20px' }}>SRI-GHANA RESEARCH THEMES</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            At the Space Research Institute - Ghana (SRI-Ghana), we believe that meaningful space research begins with education, practical experience, and innovation. Our PhD and advanced research programs address fundamental and applied questions across several core themes.
          </p>
        </div>

        {/* PhD Research Themes */}
        <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '80px' }}>
          
          <div className="glass-panel hover-lift" style={{ padding: '40px', borderTop: '4px solid var(--color-primary)' }}>
            <Globe size={40} color="var(--color-primary)" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '15px' }}>Earth, Atmospheric & Environmental Sciences</h3>
            <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '1rem', lineHeight: 1.6, marginBottom: '20px' }}>
              <li>Mesoscale Atmospheric Processes</li>
              <li>Climate and Radiation</li>
              <li>Terrestrial Information Systems</li>
              <li>Atmosphere-Space Coupling</li>
              <li>Biospheric Sciences</li>
            </ul>
            <div style={{ marginTop: '20px', position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
              <iframe 
                src="https://www.youtube.com/embed/9VnccII-Kjg" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="NASA 4K Earth Views"
              ></iframe>
            </div>
          </div>

          <div className="glass-panel hover-lift" style={{ padding: '40px', borderTop: '4px solid var(--color-secondary)' }}>
            <Star size={40} color="var(--color-secondary)" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '15px' }}>Heliophysics & Space Weather</h3>
            <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '1rem', lineHeight: 1.6, marginBottom: '20px' }}>
              <li>Solar Physics & Heliospheric Modeling</li>
              <li>Geospace Physics</li>
              <li>Space Plasma Physics & Solar Wind</li>
              <li>Space Weather Laboratory</li>
              <li>Geomagnetic Storms</li>
            </ul>
            <div style={{ marginTop: '20px', position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
              <iframe 
                src="https://www.youtube.com/embed/BEkRCSUFlww" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Heliophysics Video"
              ></iframe>
            </div>
          </div>

          <div className="glass-panel hover-lift" style={{ padding: '40px', borderTop: '4px solid var(--color-primary)' }}>
            <Microscope size={40} color="var(--color-primary)" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '15px' }}>Astronomy & Planetary Science</h3>
            <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '1rem', lineHeight: 1.6, marginBottom: '20px' }}>
              <li>Exoplanets and Stellar Astrophysics</li>
              <li>Cosmology & High-Energy Astrophysics</li>
              <li>Planetary Environments Laboratory</li>
              <li>Comparative Planetology</li>
              <li>Lunar & Planetary Geology</li>
            </ul>
            <div style={{ marginTop: '20px', position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
              <iframe 
                src="https://www.youtube.com/embed/iqJjTeYv5-M" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                title="Astronomy Video"
              ></iframe>
            </div>
          </div>

          <div className="glass-panel hover-lift" style={{ padding: '40px', borderTop: '4px solid var(--color-secondary)' }}>
            <Rocket size={40} color="var(--color-secondary)" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '15px' }}>Space Engineering & Robotics</h3>
            <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '1rem', lineHeight: 1.6, marginBottom: '20px' }}>
              <li>Advanced Satellite Systems (CubeSats)</li>
              <li>Spacecraft Control & Autonomous Navigation</li>
              <li>Scientific Instrumentation & Sensors</li>
              <li>Space Robotics & Planetary Exploration</li>
              <li>Space-Qualified Electronics</li>
            </ul>
          </div>

          <div className="glass-panel hover-lift" style={{ padding: '40px', borderTop: '4px solid var(--color-primary)' }}>
            <Layers size={40} color="var(--color-primary)" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)', marginBottom: '15px' }}>Space Data & AI</h3>
            <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '1rem', lineHeight: 1.6, marginBottom: '20px' }}>
              <li>AI for Space Weather & Earth Observation</li>
              <li>Scientific Machine Learning</li>
              <li>Large-Scale Space Data Processing</li>
              <li>Automated Space-Science Data Analysis</li>
              <li>Intelligent Satellite Systems</li>
            </ul>
          </div>
          
        </div>

        {/* Current Projects Placeholder */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-secondary)', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Satellite size={36} />
            Current Flagship Projects
          </h2>
          <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="glass-panel" style={{ padding: '30px' }}>
              <h4 style={{ color: 'var(--color-text-primary)', fontSize: '1.2rem', marginBottom: '10px' }}>Ghana Space Weather Initiative</h4>
              <span style={{ display: 'inline-block', padding: '5px 10px', background: 'rgba(0, 229, 255, 0.1)', color: 'var(--color-primary)', borderRadius: '4px', fontSize: '0.8rem', marginBottom: '15px' }}>Proposed</span>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>Establishing a local network of magnetometers and GNSS receivers to monitor space weather impacts over the equatorial region.</p>
            </div>
            <div className="glass-panel" style={{ padding: '30px' }}>
              <h4 style={{ color: 'var(--color-text-primary)', fontSize: '1.2rem', marginBottom: '10px' }}>SRI-Ghana CubeSat Initiative</h4>
              <span style={{ display: 'inline-block', padding: '5px 10px', background: 'rgba(0, 229, 255, 0.1)', color: 'var(--color-primary)', borderRadius: '4px', fontSize: '0.8rem', marginBottom: '15px' }}>In Development</span>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>Training students and researchers in building 1U CubeSats for Earth observation and atmospheric data collection.</p>
            </div>
          </div>
        </div>

        {/* Recent Publications Placeholder */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
            <GraduationCap size={36} />
            Recent Publications
          </h2>
          <div className="glass-panel" style={{ padding: '40px' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', fontStyle: 'italic', textAlign: 'center' }}>
              Publications from our faculty, students, and research teams will be listed here as projects mature and results are published in peer-reviewed journals.
            </p>
          </div>
        </div>

        {/* Building the Next Generation */}
        <div style={{ textAlign: 'center', padding: '40px', borderTop: '1px solid var(--color-border)', maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--color-text-primary)', marginBottom: '20px' }}>Join Our Research Team</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '30px' }}>
            We are always looking for passionate students, researchers, and international collaborators to join our initiatives. 
          </p>
          <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '15px 30px', fontSize: '1.1rem', textDecoration: 'none' }}>
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>

      </div>
    </div>
  );
}
