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
                <h4 style={{ color: 'var(--color-text-primary)' }}>Directorate of Space Science & Exploration</h4>
              </div>
              <div className="glass-panel hover-lift" style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', textAlign: 'center', borderTop: '3px solid var(--color-secondary)' }}>
                <Rocket size={32} color="var(--color-secondary)" style={{ margin: '0 auto 15px auto' }} />
                <h4 style={{ color: 'var(--color-text-primary)' }}>Directorate of Space Engineering & Technology</h4>
              </div>
              <div className="glass-panel hover-lift" style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', textAlign: 'center', borderTop: '3px solid var(--color-primary)' }}>
                <Layers size={32} color="var(--color-primary)" style={{ margin: '0 auto 15px auto' }} />
                <h4 style={{ color: 'var(--color-text-primary)' }}>Directorate of Space Data, Computing & Artificial Intelligence</h4>
              </div>
              <div className="glass-panel hover-lift" style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', textAlign: 'center', borderTop: '3px solid var(--color-secondary)' }}>
                <BookOpen size={32} color="var(--color-secondary)" style={{ margin: '0 auto 15px auto' }} />
                <h4 style={{ color: 'var(--color-text-primary)' }}>Directorate of Education, Research Training & Innovation</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Academic Pathways */}
        <div className="glass-panel" style={{ padding: '50px', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '40px', textAlign: 'center' }}>Academic Pathways & Research Areas</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            
            {/* I. Space Science & Exploration */}
            <div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--color-text-primary)', marginBottom: '30px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
                I. Directorate of Space Science & Exploration
              </h3>

              {/* 1. Earth, Atmospheric & Environmental Sciences */}
              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>1. Earth, Atmospheric & Environmental Sciences</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Undergraduate Pathways</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Physics, Earth Science, Atmospheric Science</li>
                      <li>Environmental Science, Geography</li>
                      <li>Mathematics, Geology, Engineering</li>
                    </ul>
                    <h6 style={{ color: 'var(--color-text-primary)', marginTop: '15px', marginBottom: '5px' }}>Space-related training:</h6>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                      Introduction to Earth Observation, Remote Sensing, Atmospheric Science, Climate & Environmental Science, Space Science, Satellite Applications, Geospatial Science, GIS, Data Analysis.
                    </p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Master's Specializations</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Earth Observation & Remote Sensing</li>
                      <li>Atmospheric Science</li>
                      <li>Climate & Environmental Science</li>
                      <li>Geospatial Science & Applications</li>
                      <li>Upper-Atmosphere Science</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>PhD Research Areas</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Atmospheric Dynamics & Variability</li>
                      <li>Upper-Atmosphere Physics</li>
                      <li>Earth Observation & Remote Sensing</li>
                      <li>Climate and Environmental Change</li>
                      <li>Atmosphere-Space Coupling</li>
                      <li>Satellite-Based Environmental Monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2. Heliophysics & Space Weather */}
              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>2. Heliophysics & Space Weather</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Undergraduate Pathways</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Physics, Applied Physics, Mathematics</li>
                      <li>Engineering, Computer Science</li>
                      <li>Earth/Atmospheric Science</li>
                    </ul>
                    <h6 style={{ color: 'var(--color-text-primary)', marginTop: '15px', marginBottom: '5px' }}>Space-related training:</h6>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                      Space Physics, Solar Physics, Space Weather, Electromagnetism, Plasma Physics, Ionospheric Physics, Astronomy, Scientific Programming, Space Data Analysis.
                    </p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Master's Specializations</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>MSc Space Physics</li>
                      <li>MSc Space Weather</li>
                      <li>MSc Solar & Heliospheric Physics</li>
                      <li>MSc Ionospheric & Thermospheric Physics</li>
                      <li>MSc Magnetospheric & Geospace Physics</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>PhD Research Areas</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Solar & Heliospheric Physics</li>
                      <li>Solar Wind & Magnetospheric Physics</li>
                      <li>Ionospheric & Thermospheric Physics</li>
                      <li>Space Plasma Physics</li>
                      <li>Space Weather</li>
                      <li>Solar-Terrestrial Physics</li>
                      <li>Ionosphere-Magnetosphere Coupling</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. Astronomy & Astrophysics */}
              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>3. Astronomy & Astrophysics</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Undergraduate Pathways</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Physics, Mathematics</li>
                      <li>Computer Science, Engineering</li>
                    </ul>
                    <h6 style={{ color: 'var(--color-text-primary)', marginTop: '15px', marginBottom: '5px' }}>Space-related training:</h6>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                      Introduction to Astronomy, Observational Astronomy, Astrophysics, Computational Astronomy, Astronomical Data Analysis, Celestial Mechanics.
                    </p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Master's Specializations</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>MSc Astronomy</li>
                      <li>MSc Astrophysics</li>
                      <li>MSc Computational Astrophysics</li>
                      <li>MSc Observational Astronomy</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>PhD Research Areas</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Stellar & Galactic Astrophysics</li>
                      <li>Extragalactic Astronomy</li>
                      <li>Cosmology & High-Energy Astrophysics</li>
                      <li>Computational Astrophysics</li>
                      <li>Observational Astronomy</li>
                      <li>Astroparticle Physics</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4. Planetary & Solar System Sciences */}
              <div>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>4. Planetary & Solar System Sciences</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Undergraduate Pathways</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Physics, Earth Science, Geology</li>
                      <li>Astronomy, Mathematics, Engineering</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Master's Specializations</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Planetary Science</li>
                      <li>Planetary Geophysics</li>
                      <li>Planetary Atmospheres</li>
                      <li>Solar System Science</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>PhD Research Areas</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Planetary Geophysics & Atmospheres</li>
                      <li>Planetary Plasma Physics</li>
                      <li>Planetary Surface Processes</li>
                      <li>Solar System Science</li>
                      <li>Comparative Planetology & Lunar Science</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* II. Space Engineering & Technology */}
            <div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--color-text-primary)', marginBottom: '30px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
                II. Directorate of Space Engineering & Technology
              </h3>

              {/* 1. Space Systems Engineering */}
              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>1. Space Systems Engineering</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Undergraduate Pathways</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Mechanical & Aerospace Engineering</li>
                      <li>Electrical/Electronic Engineering</li>
                      <li>Computer & Mechatronics Engineering</li>
                      <li>Materials Engineering</li>
                    </ul>
                    <h6 style={{ color: 'var(--color-text-primary)', marginTop: '15px', marginBottom: '5px' }}>Space-related training:</h6>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                      Space Systems, Engineering Design, Spacecraft Fundamentals, Control Systems, Electronics, Programming, Satellite Technology.
                    </p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Master's Specializations</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>MSc Space Systems Engineering</li>
                      <li>Spacecraft Systems</li>
                      <li>Mission Design</li>
                      <li>Systems Engineering</li>
                      <li>Space Mission Operations</li>
                      <li>Spacecraft Control & Autonomous Systems</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>PhD Research Areas</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Spacecraft Systems</li>
                      <li>Mission Architecture & Design</li>
                      <li>Autonomous Spacecraft</li>
                      <li>Spacecraft Control</li>
                      <li>Mission Operations</li>
                      <li>Space Systems Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2. Satellite & Spacecraft Technology */}
              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>2. Satellite & Spacecraft Technology</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Undergraduate Training</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Introduction to Satellite Systems</li>
                      <li>CubeSat Fundamentals</li>
                      <li>Satellite Electronics</li>
                      <li>Embedded Systems</li>
                      <li>Spacecraft Programming</li>
                      <li>Satellite Communications & Data Analysis</li>
                      <li>CanSat Development</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Master's Specializations</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Satellite Systems Engineering</li>
                      <li>CubeSat Development</li>
                      <li>Satellite Subsystems (Power, Thermal, Control)</li>
                      <li>Satellite Communications</li>
                      <li>Payload & Mission Design</li>
                      <li>Satellite Integration & Testing</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>PhD Research Areas</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Advanced Satellite Systems</li>
                      <li>Spacecraft Structures & Power</li>
                      <li>Thermal & Attitude Control</li>
                      <li>Satellite Communications</li>
                      <li>Payload Systems</li>
                      <li>Small-Satellite & CubeSat Technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. Space Instrumentation & Robotics */}
              <div>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>3. Space Instrumentation & Robotics</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Undergraduate Training</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Sensors, Measurement & Electronics</li>
                      <li>Embedded Systems & Microcontrollers</li>
                      <li>Robotics Fundamentals & Control Systems</li>
                      <li>Data Acquisition & Signal Processing</li>
                      <li>Computer Vision & Autonomous Systems</li>
                      <li>Introduction to Space Instruments</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Master's Specializations</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Space Instrumentation</li>
                      <li>Scientific Payload Development</li>
                      <li>Space Sensors & Detectors</li>
                      <li>Robotics & Autonomous Systems</li>
                      <li>Robotic Control & Embedded Computing</li>
                      <li>Payload Integration & Environmental Testing</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>PhD Research Areas</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Space Sensors & Scientific Instrumentation</li>
                      <li>Plasma & Atmospheric Instruments</li>
                      <li>Miniaturized Space Instruments</li>
                      <li>Space Robotics & Autonomous Navigation</li>
                      <li>Planetary Exploration Robotics</li>
                      <li>AI-Enabled Robotics & Space Electronics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* III. Space Data, Computing & AI */}
            <div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--color-text-primary)', marginBottom: '30px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
                III. Directorate of Space Data, Computing & Artificial Intelligence
              </h3>

              {/* 1. Space Data Science */}
              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>1. Space Data Science</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Undergraduate Pathways</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Computer Science & Data Science</li>
                      <li>Mathematics, Statistics, Physics, Engineering</li>
                    </ul>
                    <h6 style={{ color: 'var(--color-text-primary)', marginTop: '15px', marginBottom: '5px' }}>Space-related training:</h6>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                      Programming for Space Science, Scientific Data Analysis, Satellite Data Processing, Data Visualization, Statistics, Machine Learning.
                    </p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Master's Specializations</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>MSc Space Data Science</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>PhD Research Areas</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Space Data Analytics</li>
                      <li>Satellite Data Science</li>
                      <li>Scientific Machine Learning</li>
                      <li>Space Data Systems</li>
                      <li>Large-Scale Space Data Processing</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2. Computational Space Science */}
              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>2. Computational Space Science</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Undergraduate Training</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Scientific Computing & Numerical Methods</li>
                      <li>Programming & Computational Physics</li>
                      <li>Mathematical Modeling</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Master's Specializations</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>MSc Computational Space Science</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>PhD Research Areas</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>Computational Space Physics & Astrophysics</li>
                      <li>Numerical Space Plasma Physics</li>
                      <li>Atmospheric & Space Weather Modeling</li>
                      <li>Scientific Computing & Numerical Simulation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. Artificial Intelligence & Machine Learning */}
              <div>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>3. Artificial Intelligence & Machine Learning for Space</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>Master's Specializations</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>AI & Machine Learning for Space Applications</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.1rem' }}>PhD Research Areas</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <li>AI for Space Weather & Earth Observation</li>
                      <li>Machine Learning for Satellite Data & Astronomy</li>
                      <li>Scientific Machine Learning</li>
                      <li>Autonomous Spacecraft & Intelligent Systems</li>
                      <li>Automated Space-Science Data Analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* IV. Education, Research Training & Innovation */}
            <div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--color-text-primary)', marginBottom: '30px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
                IV. Directorate of Education, Research Training & Innovation
              </h3>

              {/* 1. Space Education & Outreach */}
              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>1. Space Education & Outreach</h4>
                <div className="grid-layout" style={{ gridTemplateColumns: '1fr', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '15px', fontSize: '1.2rem' }}>SEPS National Space Education Program</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '1rem', lineHeight: 1.6 }}>
                      <li>Senior High School Outreach & Space Science Clubs</li>
                      <li>Astronomy Education & Space Science Workshops</li>
                      <li>School Space Laboratories & Public Space Science Programs</li>
                      <li>National Space Science Challenge & Space Science Summer School</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2. Young Space Scientists Program */}
              <div>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '20px' }}>2. Young Space Scientists Program</h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', marginBottom: '20px' }}>
                  This is the bridge from education to research. View our <Link href="/research" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Research & Innovation</Link> page for full details on our Graduate, Doctoral, and Postdoctoral fellowships.
                </p>
                <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h5 style={{ color: 'var(--color-primary)', marginBottom: '15px', fontSize: '1.2rem' }}>Undergraduate Research Program</h5>
                    <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '20px', fontSize: '1rem', lineHeight: 1.6 }}>
                      <li>Research internships & Student research projects</li>
                      <li>Laboratory training & Mentorship</li>
                      <li>Space-data projects</li>
                    </ul>
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
            <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '20px', fontSize: '2rem' }}>STEM Outreach Program</h2>
            <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <p>
                <strong>Inspiring the Next Generation of Scientists, Engineers and Innovators.</strong>
              </p>
              <p>
                STEM Outreach represents the first stage of the SRI-Ghana talent-development pathway. Our outreach begins with curiosity. Through engaging school programs, hands-on activities, scientific demonstrations, mentorship, competitions, and space-science experiences, we introduce students to the science and technology that shape our understanding of Earth and the universe.
              </p>
              <h4 style={{ color: 'var(--color-primary)', marginTop: '10px' }}>Inspire → Explore → Learn → Create → Research → Innovate</h4>
              <p>
                Our goal is to ensure that young people across Ghana have the opportunity to discover their potential, develop scientific skills, and become the scientists, engineers, researchers, and innovators who will shape Ghana's future in space.
              </p>
              <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
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
                <li><strong>For Students:</strong> Hands-on workshops, technical boot camps, summer schools, research training, coding programs, robotics, satellite projects, and space-science activities.</li>
                <li><strong>For Educators:</strong> Professional development and training designed to strengthen the teaching of STEM, astronomy, space science, and emerging technologies.</li>
                <li><strong>For Researchers & Professionals:</strong> Advanced technical workshops, scientific seminars, research methods, computational training, data analysis, and specialized space-science training.</li>
              </ul>
              <p style={{ marginTop: '10px' }}>
                <em>Learning Through Practice:</em> Short Courses | Technical Workshops | Boot Camps | Summer Schools | Research Seminars | Hands-on Laboratories | Professional Development
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
