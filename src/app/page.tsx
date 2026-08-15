import Link from 'next/link';
import styles from './page.module.css';
import FadeIn from '@/components/FadeIn';
import { Globe, Rocket, Layers, BookOpen, ChevronRight, Microscope } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero} style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div className={`container ${styles.heroContent}`} style={{ position: 'relative', zIndex: 2 }}>
          <FadeIn direction="up" delay={0.1}>
            <h1 className={styles.heroTitle}>
              Ghana's Future in <br />
              <span className="glow-text" style={{ color: 'var(--color-primary)' }}>Space Science</span> & <span className="glow-text" style={{ color: 'var(--color-secondary)' }}>Exploration</span>
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3}>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', maxWidth: '700px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>
              The Space Research Institute, Ghana (SRI-Ghana) is dedicated to advancing space science, technology, education, and innovation, empowering the next generation to contribute to the global space research community.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.5}>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/membership" className="btn btn-primary" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>
                Join the Community
              </Link>
              <Link href="/about" className="btn" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>
                Our Mission & Vision
              </Link>
            </div>
          </FadeIn>
        </div>
        
        {/* Subtle background glow for hero */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(0,229,255,0.1) 0%, rgba(0,0,0,0) 70%)', zIndex: 1, pointerEvents: 'none' }}></div>
      </section>

      {/* Mission Intro Section */}
      <section className="section container">
        <FadeIn direction="up">
          <div className="glass-panel" style={{ padding: '60px', textAlign: 'center', borderTop: '3px solid var(--color-primary)' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--color-text-primary)' }}>Inspire. Educate. Innovate.</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-text-secondary)', fontSize: '1.2rem', lineHeight: 1.8 }}>
              To inspire, educate, train, and empower the next generation of Ghanaian space scientists, engineers, researchers, and innovators. We aim to build a strong foundation for space exploration and research in Ghana through world-class academic programs, cutting-edge research, and technology development.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Four Directorates Section */}
      <section className="section container">
        <FadeIn direction="up">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="section-title">Academic & Research Directorates</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
              Our framework provides a clear pathway from early awareness to PhD research and professional scientific careers across four major domains.
            </p>
          </div>
        </FadeIn>

        <div className="grid-layout">
          <FadeIn delay={0.1}>
            <Link href="/programs" style={{ display: 'block' }}>
              <div className="glass-panel hover-lift" style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column', borderTop: '4px solid var(--color-primary)' }}>
                <Globe size={40} color="var(--color-primary)" style={{ marginBottom: '20px' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Space Science & Exploration</h3>
                <p style={{ color: 'var(--color-text-secondary)', flexGrow: 1, marginBottom: '20px' }}>Earth & Atmospheric Sciences, Heliophysics, Astronomy, and Planetary Sciences.</p>
                <div style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                  Explore Pathway <ChevronRight size={18} style={{ marginLeft: '5px' }} />
                </div>
              </div>
            </Link>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Link href="/programs" style={{ display: 'block' }}>
              <div className="glass-panel hover-lift" style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column', borderTop: '4px solid var(--color-secondary)' }}>
                <Rocket size={40} color="var(--color-secondary)" style={{ marginBottom: '20px' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Space Engineering & Technology</h3>
                <p style={{ color: 'var(--color-text-secondary)', flexGrow: 1, marginBottom: '20px' }}>Space Systems Engineering, Satellite & CubeSat Technology, Instrumentation & Robotics.</p>
                <div style={{ color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                  Explore Pathway <ChevronRight size={18} style={{ marginLeft: '5px' }} />
                </div>
              </div>
            </Link>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Link href="/programs" style={{ display: 'block' }}>
              <div className="glass-panel hover-lift" style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column', borderTop: '4px solid var(--color-primary)' }}>
                <Layers size={40} color="var(--color-primary)" style={{ marginBottom: '20px' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Space Data, Computing & AI</h3>
                <p style={{ color: 'var(--color-text-secondary)', flexGrow: 1, marginBottom: '20px' }}>Space Data Science, Computational Space Science, and Artificial Intelligence for Space.</p>
                <div style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                  Explore Pathway <ChevronRight size={18} style={{ marginLeft: '5px' }} />
                </div>
              </div>
            </Link>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Link href="/programs" style={{ display: 'block' }}>
              <div className="glass-panel hover-lift" style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column', borderTop: '4px solid var(--color-secondary)' }}>
                <BookOpen size={40} color="var(--color-secondary)" style={{ marginBottom: '20px' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Education & Innovation</h3>
                <p style={{ color: 'var(--color-text-secondary)', flexGrow: 1, marginBottom: '20px' }}>STEM Outreach, Workshops, and the Young Space Scientists Program.</p>
                <div style={{ color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                  Explore Pathway <ChevronRight size={18} style={{ marginLeft: '5px' }} />
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Flagship Research Section */}
      <section className="section container">
        <FadeIn direction="up">
          <div className="glass-panel" style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}>
            <div style={{ flex: '1 1 100%', minWidth: '280px', padding: '40px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Microscope size={48} color="var(--color-primary)" style={{ marginBottom: '20px' }} />
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Flagship National Projects</h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '30px' }}>
                SRI-Ghana develops strategic national projects that build long-term capability. These include the Ghana Space Weather Initiative, Ionospheric Monitoring Network, CubeSat Initiative, and the Space Science Data Center.
              </p>
              <div>
                <Link href="/research" className="btn btn-primary">
                  View Research Projects
                </Link>
              </div>
            </div>
            <div style={{ flex: '1 1 100%', minWidth: '280px', background: 'rgba(0, 229, 255, 0.05)', minHeight: '300px', position: 'relative' }}>
              {/* Abstract scientific background representation */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0,229,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(179,136,255,0.2) 0%, transparent 50%)', opacity: 0.8 }}></div>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: '1px solid rgba(255,255,255,0.1)', width: '200px', height: '200px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ border: '1px solid rgba(255,255,255,0.2)', width: '150px', height: '150px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ border: '1px solid var(--color-primary)', width: '100px', height: '100px', borderRadius: '50%', boxShadow: '0 0 20px rgba(0,229,255,0.3)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
      
      {/* Video Section */}
      <section className="section container" style={{ marginBottom: '60px' }}>
        <FadeIn direction="up">
          <div className="glass-panel" style={{ padding: '50px', textAlign: 'center', background: 'rgba(0, 0, 0, 0.4)' }}>
            <h2 className="section-title" style={{ marginBottom: '20px' }}>Discover Our Universe</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '40px', fontSize: '1.1rem' }}>
              Experience the breathtaking beauty of space. Watch this stunning footage from NASA.
            </p>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', border: '1px solid var(--color-border)', boxShadow: '0 0 30px rgba(0, 229, 255, 0.1)' }}>
              <iframe 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src="https://www.youtube.com/embed/6tmbeLTHC_0?autoplay=1&mute=1&loop=1&playlist=6tmbeLTHC_0" 
                title="NASA | Thermonuclear Art" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
