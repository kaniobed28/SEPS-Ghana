import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { Telescope, Rocket, Wrench, GraduationCap, Globe, BookOpen, Layers } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Programs & Training | SRI-Ghana',
  description: 'Explore the academic, research, outreach, and training programs at the Space Research Institute, Ghana.',
};

export default function Programs() {
  return (
    <div>
      <PageHeader 
        title="Programs & Training" 
        subtitle="Building the foundation for Ghana&apos;s future in space science, research, and technology."
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
            
            <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '30px' }}>
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
                <h4 style={{ color: 'var(--color-text-primary)' }}>Education, Research Training & Innovation</h4>
              </div>
            </div>

            <p style={{ color: 'var(--color-text-primary)', fontSize: '1.2rem', textAlign: 'center', marginBottom: '10px' }}>
              Together, they provide a pathway to:
            </p>
            <h3 style={{ color: 'var(--color-primary)', textAlign: 'center', fontSize: '1.4rem', marginBottom: '30px', letterSpacing: '1px' }}>
              Inspire &rarr; Educate &rarr; Train &rarr; Research &rarr; Innovate &rarr; Lead
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
              The following sections present the undergraduate pathways, Master's specializations, and PhD research areas through which SRI-Ghana will develop Ghana&apos;s future space-science and technology workforce.
            </p>
          </div>
        </div>

        {/* Detailed Academic Pathways */}
        <div className="glass-panel" style={{ padding: '50px', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '40px', textAlign: 'center' }}>SRI-GHANA ACADEMIC & RESEARCH PROGRAMS:</h2>
          
          <div className="programs-layout">
            {/* Sticky Sidebar */}
            <div className="programs-sidebar">
              <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '5px', fontSize: '1.1rem' }}>Space Science</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '10px', marginBottom: '10px', borderLeft: '2px solid rgba(255,255,255,0.05)' }}>
                <a href="#earth-science" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Earth & Environment</a>
                <a href="#heliophysics" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Heliophysics & Space Wx</a>
                <a href="#astronomy" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Astronomy</a>
                <a href="#planetary" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Planetary Science</a>
              </div>

              <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '5px', fontSize: '1.1rem' }}>Space Engineering</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '10px', marginBottom: '10px', borderLeft: '2px solid rgba(255,255,255,0.05)' }}>
                <a href="#systems-eng" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Systems Engineering</a>
                <a href="#satellite-tech" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Satellite Technology</a>
                <a href="#robotics" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Robotics & Instruments</a>
              </div>

              <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '5px', fontSize: '1.1rem' }}>Data & AI</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '10px', marginBottom: '10px', borderLeft: '2px solid rgba(255,255,255,0.05)' }}>
                <a href="#data-science" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Data Science</a>
                <a href="#comp-science" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Computational Science</a>
                <a href="#ai" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Artificial Intelligence</a>
              </div>
              
              <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '5px', fontSize: '1.1rem' }}>Education & Training</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '10px', marginBottom: '10px', borderLeft: '2px solid rgba(255,255,255,0.05)' }}>
                <a href="#dir-education" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Outreach & Programs</a>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            
            {/* I. Space Science & Exploration */}
            <div id="dir-science">
              <h3 style={{ fontSize: '1.8rem', color: 'var(--color-text-primary)', marginBottom: '30px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
                I. DIRECTORATE OF SPACE SCIENCE & EXPLORATION
              </h3>

              {/* 1. Earth, Atmospheric & Environmental Sciences */}
              <div style={{ marginBottom: '40px' }}>
                <h4 id="earth-science" style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>1. Earth, Atmospheric & Environmental Sciences</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Undergraduate pathways</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Physics</li>
                      <li>Earth Science</li>
                      <li>Atmospheric Science</li>
                      <li>Environmental Science</li>
                      <li>Geography</li>
                      <li>Mathematics</li>
                      <li>Geology</li>
                      <li>Engineering</li>
                    </ul>
                    <h6 style={{ color: 'var(--color-text-primary)', marginTop: '15px', marginBottom: '5px' }}>Space-related undergraduate training</h6>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.85rem', lineHeight: 1.6 }}>
                      <li>Introduction to Earth Observation</li>
                      <li>Introduction to Remote Sensing</li>
                      <li>Atmospheric Science</li>
                      <li>Climate and Environmental Science</li>
                      <li>Introduction to Space Science</li>
                      <li>Satellite Applications</li>
                      <li>Geospatial Science</li>
                      <li>Introduction to GIS</li>
                      <li>Environmental Data Analysis</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Master's specializations</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Earth Observation & Remote Sensing</li>
                      <li>Atmospheric Science</li>
                      <li>Climate & Environmental Science</li>
                      <li>Geospatial Science & Applications</li>
                      <li>Upper-Atmosphere Science</li>
                    </ul>
                  </div>
                  
                </div>
              </div>

              {/* 2. Heliophysics & Space Weather */}
              <div style={{ marginBottom: '40px' }}>
                <h4 id="heliophysics" style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>2. Heliophysics & Space Weather</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Undergraduate pathways</h5>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '10px' }}>Students may come from:</p>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Physics</li>
                      <li>Applied Physics</li>
                      <li>Mathematics</li>
                      <li>Engineering</li>
                      <li>Computer Science</li>
                      <li>Earth/Atmospheric Science</li>
                    </ul>
                    <h6 style={{ color: 'var(--color-text-primary)', marginTop: '15px', marginBottom: '5px' }}>Space-science undergraduate training</h6>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.85rem', lineHeight: 1.6 }}>
                      <li>Introduction to Space Physics</li>
                      <li>Solar Physics</li>
                      <li>Introduction to Space Weather</li>
                      <li>Electromagnetism</li>
                      <li>Plasma Physics</li>
                      <li>Ionospheric Physics</li>
                      <li>Astronomy</li>
                      <li>Scientific Programming</li>
                      <li>Space Data Analysis</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Master's specializations</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>MSc Space Physics</li>
                      <li>MSc Space Weather</li>
                      <li>MSc Solar & Heliospheric Physics</li>
                      <li>MSc Ionospheric & Thermospheric Physics</li>
                      <li>MSc Magnetospheric & Geospace Physics</li>
                    </ul>
                  </div>
                  
                </div>
              </div>

              {/* 3. Astronomy & Astrophysics */}
              <div style={{ marginBottom: '40px' }}>
                <h4 id="astronomy" style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>3. Astronomy & Astrophysics</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Undergraduate pathways</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Physics</li>
                      <li>Mathematics</li>
                      <li>Computer Science</li>
                      <li>Engineering</li>
                    </ul>
                    <h6 style={{ color: 'var(--color-text-primary)', marginTop: '15px', marginBottom: '5px' }}>Space-related undergraduate training</h6>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.85rem', lineHeight: 1.6 }}>
                      <li>Introduction to Astronomy</li>
                      <li>Observational Astronomy</li>
                      <li>Astrophysics</li>
                      <li>Computational Astronomy</li>
                      <li>Astronomical Data Analysis</li>
                      <li>Celestial Mechanics</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Master's specializations</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>MSc Astronomy</li>
                      <li>MSc Astrophysics</li>
                      <li>MSc Computational Astrophysics</li>
                      <li>MSc Observational Astronomy</li>
                    </ul>
                  </div>
                  
                </div>
              </div>

              {/* 4. Planetary & Solar System Sciences */}
              <div style={{ marginBottom: '60px' }}>
                <h4 id="planetary" style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>4. Planetary & Solar System Sciences</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Undergraduate pathways</h5>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '10px' }}>Students could come from:</p>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Physics</li>
                      <li>Earth Science</li>
                      <li>Geology</li>
                      <li>Astronomy</li>
                      <li>Mathematics</li>
                      <li>Engineering</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Master's specializations</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Planetary Science</li>
                      <li>Planetary Geophysics</li>
                      <li>Planetary Atmospheres</li>
                      <li>Solar System Science</li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Link href="/research" className="btn-secondary" style={{ padding: '10px 25px', borderRadius: '8px', border: '1px solid var(--color-primary)', color: 'var(--color-primary)', textDecoration: 'none', display: 'inline-block' }}>
                  Explore Science Research
                </Link>
              </div>
            </div>

            {/* II. Space Engineering & Technology */}
            <div id="dir-engineering">
              <h3 style={{ fontSize: '1.8rem', color: 'var(--color-text-primary)', marginBottom: '30px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
                II. DIRECTORATE OF SPACE ENGINEERING & TECHNOLOGY
              </h3>

              {/* 1. Space Systems Engineering */}
              <div style={{ marginBottom: '40px' }}>
                <h4 id="systems-eng" style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>1. Space Systems Engineering</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Undergraduate pathways</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Mechanical Engineering</li>
                      <li>Electrical/Electronic Engineering</li>
                      <li>Computer Engineering</li>
                      <li>Aerospace Engineering</li>
                      <li>Mechatronics Engineering</li>
                      <li>Materials Engineering</li>
                    </ul>
                    <h6 style={{ color: 'var(--color-text-primary)', marginTop: '15px', marginBottom: '5px' }}>Undergraduate space training</h6>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.85rem', lineHeight: 1.6 }}>
                      <li>Introduction to Space Systems</li>
                      <li>Engineering Design</li>
                      <li>Spacecraft Fundamentals</li>
                      <li>Control Systems</li>
                      <li>Electronics</li>
                      <li>Programming</li>
                      <li>Systems Engineering</li>
                      <li>Engineering Materials</li>
                      <li>Introduction to Satellite Technology</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Master's specialization</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>MSc Space Systems Engineering</li>
                      <li>with specialization in:</li>
                      <li>Spacecraft Systems</li>
                      <li>Mission Design</li>
                      <li>Systems Engineering</li>
                      <li>Space Mission Operations</li>
                      <li>Spacecraft Control</li>
                      <li>Autonomous Space Systems</li>
                    </ul>
                  </div>
                  
                </div>
              </div>

              {/* 2. Satellite & Spacecraft Technology */}
              <div style={{ marginBottom: '40px' }}>
                <h4 id="satellite-tech" style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>2. Satellite & Spacecraft Technology</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Undergraduate</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Introduction to Satellite Systems</li>
                      <li>CubeSat Fundamentals</li>
                      <li>Satellite Electronics</li>
                      <li>Embedded Systems</li>
                      <li>Spacecraft Programming</li>
                      <li>Satellite Communications</li>
                      <li>CanSat Development</li>
                      <li>Satellite Data Analysis</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Master's specialization</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Satellite Systems Engineering</li>
                      <li>CubeSat Development</li>
                      <li>Satellite Subsystems</li>
                      <li>Attitude Determination & Control</li>
                      <li>Electrical Power Systems</li>
                      <li>Thermal Control</li>
                      <li>Satellite Communications</li>
                      <li>Payload Design</li>
                      <li>Mission Design</li>
                      <li>Satellite Integration & Testing</li>
                    </ul>
                  </div>
                  
                </div>
              </div>

              {/* 3. Space Instrumentation & Robotics */}
              <div>
                <h4 id="robotics" style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>3. Space Instrumentation & Robotics</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Undergraduate</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Sensors & Measurement Systems</li>
                      <li>Electronics & Instrumentation</li>
                      <li>Embedded Systems</li>
                      <li>Microcontrollers</li>
                      <li>Programming</li>
                      <li>Robotics Fundamentals</li>
                      <li>Control Systems</li>
                      <li>Data Acquisition</li>
                      <li>Signal Processing</li>
                      <li>Computer Vision</li>
                      <li>Autonomous Systems</li>
                      <li>Introduction to Space Instruments</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Master's specialization</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Space Instrumentation</li>
                      <li>Scientific Payload Development</li>
                      <li>Space Sensors & Detectors</li>
                      <li>Remote-Sensing Instruments</li>
                      <li>Robotics & Autonomous Systems</li>
                      <li>Robotic Control</li>
                      <li>Embedded Computing</li>
                      <li>Instrument Calibration</li>
                      <li>Payload Integration</li>
                      <li>Space Environmental Testing</li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Link href="/research" className="btn-secondary" style={{ padding: '10px 25px', borderRadius: '8px', border: '1px solid var(--color-secondary)', color: 'var(--color-secondary)', textDecoration: 'none', display: 'inline-block' }}>
                  Explore Engineering Research
                </Link>
              </div>
            </div>

            {/* III. Space Data, Computing & AI */}
            <div id="dir-data">
              <h3 style={{ fontSize: '1.8rem', color: 'var(--color-text-primary)', marginBottom: '30px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
                III. DIRECTORATE OF SPACE DATA, COMPUTING & ARTIFICIAL INTELLIGENCE
              </h3>

              {/* 1. Space Data Science */}
              <div style={{ marginBottom: '40px' }}>
                <h4 id="data-science" style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>1. Space Data Science</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Undergraduate pathways</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Computer Science</li>
                      <li>Data Science</li>
                      <li>Mathematics</li>
                      <li>Statistics</li>
                      <li>Physics</li>
                      <li>Engineering</li>
                    </ul>
                    <h6 style={{ color: 'var(--color-text-primary)', marginTop: '15px', marginBottom: '5px' }}>Undergraduate space training</h6>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.85rem', lineHeight: 1.6 }}>
                      <li>Programming for Space Science</li>
                      <li>Scientific Data Analysis</li>
                      <li>Satellite Data Processing</li>
                      <li>Data Visualization</li>
                      <li>Statistics for Space Science</li>
                      <li>Introduction to Machine Learning</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Master's specialization</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>MSc Space Data Science</li>
                    </ul>
                  </div>
                  
                </div>
              </div>

              {/* 2. Computational Space Science */}
              <div style={{ marginBottom: '40px' }}>
                <h4 id="comp-science" style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>2. Computational Space Science</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Undergraduate</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Scientific Computing</li>
                      <li>Numerical Methods</li>
                      <li>Programming</li>
                      <li>Computational Physics</li>
                      <li>Mathematical Modeling</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Master's specialization</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>MSc Computational Space Science</li>
                    </ul>
                  </div>
                  
                </div>
              </div>

              {/* 3. Artificial Intelligence & Machine Learning */}
              <div>
                <h4 id="ai" style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>3. Artificial Intelligence & Machine Learning for Space</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Master's specialization</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>AI & Machine Learning for Space Applications</li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Link href="/research" className="btn-secondary" style={{ padding: '10px 25px', borderRadius: '8px', border: '1px solid var(--color-primary)', color: 'var(--color-primary)', textDecoration: 'none', display: 'inline-block' }}>
                  Explore Data & AI Research
                </Link>
              </div>
            </div>

            {/* IV. Education, Research Training & Innovation */}
            <div id="dir-education">
              <h3 style={{ fontSize: '1.8rem', color: 'var(--color-text-primary)', marginBottom: '30px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
                IV. DIRECTORATE OF EDUCATION, RESEARCH TRAINING & INNOVATION
              </h3>

              {/* 1. Space Education & Outreach */}
              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>1. Space Education & Outreach</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: '1fr', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '15px', fontSize: '1.2rem' }}>SEPS National Space Education Program</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '1rem', lineHeight: 1.6 }}>
                      <li>Senior High School Outreach</li>
                      <li>Space Science Clubs</li>
                      <li>Astronomy Education</li>
                      <li>Space Science Workshops</li>
                      <li>School Space Laboratories</li>
                      <li>National Space Science Challenge</li>
                      <li>Space Science Summer School</li>
                      <li>Public Space Science Programs</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2. Young Space Scientists Program */}
              <div>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>2. Young Space Scientists Program</h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', marginBottom: '20px' }}>
                  This is the bridge from education to research.
                </p>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '15px', fontSize: '1.1rem' }}>Undergraduate</h5>
                    <h6 style={{ color: 'var(--color-text-primary)', marginBottom: '10px', fontSize: '1rem' }}>SRI-Ghana Undergraduate Research Program</h6>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Research internships</li>
                      <li>Student research projects</li>
                      <li>Laboratory training</li>
                      <li>Space-data projects</li>
                      <li>Mentorship</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '15px', fontSize: '1.1rem' }}>Master's Specialization</h5>
                    <h6 style={{ color: 'var(--color-text-primary)', marginBottom: '10px', fontSize: '1rem' }}>SRI-Ghana Graduate Research Program</h6>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Research assistantships</li>
                      <li>Graduate research projects</li>
                      <li>Laboratory research</li>
                      <li>International research placements</li>
                      <li>Scientific workshops</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '15px', fontSize: '1.1rem' }}>Postdoctoral</h5>
                    <h6 style={{ color: 'var(--color-text-primary)', marginBottom: '10px', fontSize: '1rem' }}>SRI-Ghana Postdoctoral Research Fellowship</h6>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Independent research</li>
                      <li>Research leadership</li>
                      <li>International collaboration</li>
                      <li>Supervision and mentorship</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div style={{ marginTop: '40px', textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: '30px', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '15px' }}>Ready to take the next step?</h4>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/contact" className="btn-primary" style={{ padding: '10px 25px', borderRadius: '8px', textDecoration: 'none' }}>
                    Apply for Internships
                  </Link>
                  <Link href="/contact" className="btn-secondary" style={{ padding: '10px 25px', borderRadius: '8px', border: '1px solid var(--color-secondary)', color: 'var(--color-secondary)', textDecoration: 'none' }}>
                    Register Your School
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        </div>

        {/* STEM Outreach */}
        <div className="grid-layout" style={{ marginBottom: '60px' }}>
          <div className="glass-panel hover-lift" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
            <Telescope size={48} color="var(--color-secondary)" style={{ marginBottom: '20px' }} />
            <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '20px', fontSize: '2rem' }}>STEM OUTREACH PROGRAM</h2>
            <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <p>
                <strong>Inspiring the Next Generation of Scientists, Engineers and Innovators</strong>
              </p>
              <p>
                The STEM Outreach Program of the Space Research Institute, Ghana (SRI-Ghana) is dedicated to inspiring young people to explore Science, Technology, Engineering, and Mathematics (STEM) and discover the opportunities that these fields offer.
              </p>
              
              <details style={{ marginTop: '5px' }}>
                <summary style={{ cursor: 'pointer', color: 'var(--color-secondary)', fontWeight: 'bold', display: 'inline-block', padding: '5px 0', outline: 'none', userSelect: 'none', fontSize: '1rem' }}>
                  Read Full Details &darr;
                </summary>
                <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '15px', padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', borderLeft: '3px solid var(--color-secondary)' }}>
                  <p>
                    Our outreach begins with curiosity. Through engaging school programs, hands-on activities, scientific demonstrations, mentorship, competitions, and space-science experiences, we introduce students to the science and technology that shape our understanding of Earth and the universe.
                  </p>
                  <p>
                    Particular emphasis will be placed on connecting STEM education with space science and exploration, helping students understand how physics, mathematics, engineering, computing, astronomy, Earth science, and other disciplines come together to explore and study space.
                  </p>
                  <h4 style={{ color: 'var(--color-primary)', marginTop: '10px' }}>Our Outreach Areas</h4>
                  <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                    <li>Space Science & Astronomy</li>
                    <li>Physics & Mathematics</li>
                    <li>Satellite & Space Technology</li>
                    <li>Robotics & Engineering</li>
                    <li>Coding, Computing & Artificial Intelligence</li>
                    <li>Earth Observation & Environmental Science</li>
                    <li>Atmospheric & Space Weather Science</li>
                    <li>Science, Innovation & Entrepreneurship</li>
                  </ul>
                  
                  <h4 style={{ color: 'var(--color-primary)', marginTop: '10px' }}>What We Offer</h4>
                  <p>Through partnerships with schools, universities, educators, researchers, and industry, SRI-Ghana will provide:</p>
                  <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                    <li>School STEM and space-science visits</li>
                    <li>Interactive lectures and scientific demonstrations</li>
                    <li>Space science and STEM clubs</li>
                    <li>Hands-on science and engineering activities</li>
                    <li>Astronomy observation programs</li>
                    <li>Coding and robotics workshops</li>
                    <li>Student research and innovation challenges</li>
                    <li>STEM competitions and science fairs</li>
                    <li>Mentorship and career guidance</li>
                    <li>STEM summer schools and camps</li>
                  </ul>
                  <h4 style={{ color: 'var(--color-primary)', marginTop: '10px' }}>Building the Pathway to Space</h4>
                  <p>
                    STEM Outreach represents the first stage of the SRI-Ghana talent-development pathway. Students who develop an interest in space and STEM through our outreach activities can progress into SEPS, university education, research internships, specialized postgraduate training, and ultimately careers in space science and technology.
                  </p>
                  <h4 style={{ color: 'var(--color-primary)', marginTop: '10px' }}>Inspire &rarr; Explore &rarr; Learn &rarr; Create &rarr; Research &rarr; Innovate</h4>
                  <p>
                    Our goal is to ensure that young people across Ghana have the opportunity to discover their potential, develop scientific skills, and become the scientists, engineers, researchers, and innovators who will shape Ghana&apos;s future in space.
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div className="glass-panel hover-lift" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
            <Wrench size={48} color="var(--color-primary)" style={{ marginBottom: '20px' }} />
            <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '20px', fontSize: '2rem' }}>WORKSHOPS & TRAINING</h2>
            <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <p>
                <strong>Building Skills. Advancing Knowledge. Developing Talent.</strong>
              </p>
              <p>
                The Workshops & Training Program at the Space Research Institute, Ghana (SRI-Ghana) is designed to strengthen the scientific, technical, and research capabilities of students, educators, researchers, engineers, and professionals interested in space science and technology.
              </p>
              
              <details style={{ marginTop: '5px' }}>
                <summary style={{ cursor: 'pointer', color: 'var(--color-primary)', fontWeight: 'bold', display: 'inline-block', padding: '5px 0', outline: 'none', userSelect: 'none', fontSize: '1rem' }}>
                  Read Full Details &darr;
                </summary>
                <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '15px', padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', borderLeft: '3px solid var(--color-primary)' }}>
                  <p>
                    Our programs bridge the gap between academic knowledge and practical experience, providing participants with opportunities to develop relevant skills through expert-led workshops, short courses, technical training, hands-on projects, research seminars, and intensive learning programs.
                  </p>
                  <h4 style={{ color: 'var(--color-primary)', marginTop: '10px' }}>Areas of Training</h4>
                  <p>Our training activities will cover a broad range of space-related disciplines, including:</p>
                  <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                    <li>Space Science & Space Physics</li>
                    <li>Heliophysics & Space Weather</li>
                    <li>Ionospheric & Atmospheric Science</li>
                    <li>Astronomy & Astrophysics</li>
                    <li>Earth Observation & Remote Sensing</li>
                    <li>Satellite & CubeSat Technology</li>
                    <li>Space Systems Engineering</li>
                    <li>Space Instrumentation & Robotics</li>
                    <li>Scientific Programming & Computing</li>
                    <li>Space Data Science</li>
                    <li>Artificial Intelligence & Machine Learning</li>
                    <li>Geospatial Science & GIS</li>
                    <li>Research Methods & Scientific Communication</li>
                  </ul>
    
                  <h4 style={{ color: 'var(--color-primary)', marginTop: '10px' }}>Training Opportunities</h4>
                  <p>SRI-Ghana will provide training opportunities at different levels, from introductory programs for students to advanced professional and research training.</p>
                  <ul style={{ paddingLeft: '20px' }}>
                    <li><strong>For Students</strong><br/>Hands-on workshops, technical boot camps, summer schools, research training, coding programs, robotics, satellite projects, and space-science activities.</li>
                    <li><strong>For Educators</strong><br/>Professional development and training designed to strengthen the teaching of STEM, astronomy, space science, and emerging technologies.</li>
                    <li><strong>For Researchers & Professionals</strong><br/>Advanced technical workshops, scientific seminars, research methods, computational training, data analysis, and specialized space-science training.</li>
                  </ul>
                  
                  <h4 style={{ color: 'var(--color-primary)', marginTop: '10px' }}>Learning Through Practice</h4>
                  <p>
                    Our training philosophy is centered on learning by doing. Participants will, where appropriate, work with real scientific datasets, computational tools, laboratory instruments, satellite observations, engineering systems, and research projects.
                  </p>
                  <p>Training activities may include:</p>
                  <p>
                    Short Courses | Technical Workshops | Boot Camps | Summer Schools | Research Seminars | Hands-on Laboratories | Professional Development
                  </p>
                  
                  <h4 style={{ color: 'var(--color-primary)', marginTop: '10px' }}>Developing Ghana&apos;s Space Science Workforce</h4>
                  <p>
                    SRI-Ghana&apos;s Workshops & Training Program forms an important part of our broader mission to develop the human capacity required for Ghana&apos;s future in space science and technology.
                  </p>
                  <p>
                    By connecting education, practical training, research, and innovation, we aim to equip participants with the knowledge and skills needed to pursue further education, undertake meaningful research, develop new technologies, and contribute to the national and international space community.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
