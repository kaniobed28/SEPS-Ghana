import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { Target, Lightbulb, Info, Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | SRI-Ghana',
  description: 'Learn about the mission, vision, and core objectives of the Space Research Institute, Ghana (SRI-Ghana).',
};

export default function About() {
  return (
    <div>
      <PageHeader 
        title="About SRI-Ghana" 
        subtitle="Advancing space science, research, education, and innovation in Ghana and beyond."
        imageSrc="/galaxy.png"
      />
      <div className="container section" style={{ paddingTop: 0 }}>
        
        {/* About Section */}
        <div className="glass-panel" style={{ padding: '50px', marginBottom: '60px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', opacity: 0.05, zIndex: 0 }}>
            <Info size={300} />
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Info size={36} />
              About the Space Research Institute
            </h2>
            <div style={{ color: 'var(--color-text-primary)', fontSize: '1.1rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p>
                The Space Research Institute, Ghana (SRI-Ghana) is envisioned as a research, education, innovation, and capacity-building institution dedicated to advancing space science and technology in Ghana and contributing to the global space research community.
              </p>
              <p>
                The establishment of the Institute is motivated by the need to strengthen attention, investment, education, research, and human-capacity development in space science and exploration in Ghana. Although Ghana has a growing community of scientists, engineers, students, and innovators with an interest in space, there remains a need for a dedicated platform through which young people can be systematically introduced to space science, guided toward relevant academic and professional pathways, and ultimately supported to undertake meaningful research and innovation.
              </p>
              <p>
                The foundation of this vision is the establishment of the Space Exploration and Physics Society (SEPS), an outreach and awareness initiative designed to introduce space science to students, particularly at the senior high school level, across Ghana. Through SEPS, students will be exposed to astronomy, space physics, Earth and atmospheric sciences, satellite technology, space exploration, coding, data science, and other areas related to space and STEM.
              </p>
              <p>
                The Space Research Institute will build upon this foundation by creating a continuous pathway through which interested students can progress from awareness and curiosity to education, training, research, innovation, and professional development.
              </p>
              <p>
                The Institute will seek to create opportunities for Ghanaian students, scientists, engineers, educators, and innovators to participate in research and technology development while establishing collaborations with universities, research institutions, government agencies, international organizations, space agencies, and private-sector partners.
              </p>
              <p>
                Ultimately, the Institute seeks to contribute to the development of a sustainable space-science ecosystem in Ghana in which young Ghanaian scientists can develop their skills, conduct internationally relevant research, develop innovative technologies, and contribute to humanity's understanding and exploration of space.
              </p>
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid-layout" style={{ marginBottom: '60px' }}>
          <div className="glass-panel hover-lift" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
            <Target size={48} color="var(--color-primary)" style={{ marginBottom: '20px' }} />
            <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '20px', fontSize: '2rem' }}>Our Mission</h2>
            <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <p>
                To inspire, educate, train, and empower the next generation of Ghanaian space scientists, engineers, and innovators while advancing space science research, technological innovation, and international collaboration for the benefit of Ghana, Africa, and the global space community.
              </p>
              <p>
                Our mission begins with young people. We seek to introduce students to space science at an early stage, nurture their curiosity, provide access to knowledge and mentorship, develop their scientific and technical abilities, and create opportunities for them to progress into higher education, research, innovation, and professional careers.
              </p>
              <p>
                At the same time, the Institute will support researchers and professionals by providing opportunities for collaboration, capacity development, scientific research, technology development, and participation in international research programs.
              </p>
            </div>
          </div>
          
          <div className="glass-panel hover-lift" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
            <Lightbulb size={48} color="var(--color-secondary)" style={{ marginBottom: '20px' }} />
            <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '20px', fontSize: '2rem' }}>Our Vision</h2>
            <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <p>
                To establish Ghana as a leading center for space science research, education, innovation, and human-capacity development in Africa, where every young person with an interest in space has an opportunity to learn, develop, conduct research, innovate, and contribute to global space exploration and scientific discovery.
              </p>
              <p>
                SRI-Ghana envisions a future in which Ghanaian students can discover space science while still in school, receive appropriate mentorship and training, pursue relevant university education, participate in research, develop technologies, and eventually become scientists, engineers, educators, entrepreneurs, and leaders within Ghana's emerging space ecosystem.
              </p>
              <p>
                The long-term vision is to develop a generation of Ghanaian scientists and engineers who are not merely consumers of space-derived technologies but are also researchers, developers, innovators, and contributors to the global space community.
              </p>
            </div>
          </div>
        </div>

        {/* Core Objectives */}
        <div className="glass-panel" style={{ padding: '50px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', opacity: 0.05, zIndex: 0 }}>
            <Rocket size={300} />
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-secondary)', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Rocket size={36} />
              Core Objectives
            </h2>
            
            <div className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              
              <div className="glass-panel hover-lift" style={{ padding: '25px', background: 'rgba(255,255,255,0.02)' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.2rem' }}>1. Promote Space Science Awareness</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>To increase awareness and understanding of space science, astronomy, space technology, Earth observation, and related STEM disciplines among students, educators, policymakers, and the general public, beginning at the senior high school level.</p>
              </div>

              <div className="glass-panel hover-lift" style={{ padding: '25px', background: 'rgba(255,255,255,0.02)' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.2rem' }}>2. Identify and Nurture Young Talent</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>To identify young people with interest and potential in space science and provide them with mentorship, career guidance, educational opportunities, research exposure, and appropriate support to develop their talents.</p>
              </div>

              <div className="glass-panel hover-lift" style={{ padding: '25px', background: 'rgba(255,255,255,0.02)' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.2rem' }}>3. Advance Space Science Research</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>To conduct and support high-quality research in areas including space physics, space weather, atmospheric and ionospheric science, astronomy, planetary science, satellite applications, Earth observation, and other emerging fields of space science and technology.</p>
              </div>

              <div className="glass-panel hover-lift" style={{ padding: '25px', background: 'rgba(255,255,255,0.02)' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.2rem' }}>4. Develop Human Capacity</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>To provide students and researchers with practical training, workshops, internships, fellowships, research opportunities, computational skills, laboratory experience, and other forms of professional development necessary to compete and collaborate at the international level.</p>
              </div>

              <div className="glass-panel hover-lift" style={{ padding: '25px', background: 'rgba(255,255,255,0.02)' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.2rem' }}>5. Promote Innovation and Technology Development</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>To encourage the development of locally relevant technologies, scientific instruments, software, data-analysis tools, satellite applications, small satellite technologies, and other innovative solutions that address scientific, environmental, economic, and societal challenges in Ghana and Africa.</p>
              </div>

              <div className="glass-panel hover-lift" style={{ padding: '25px', background: 'rgba(255,255,255,0.02)' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.2rem' }}>6. Establish National and International Partnerships</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>To develop strategic partnerships with Ghanaian and international universities, research institutions, government agencies, schools, space organizations, private companies, international space agencies, and other relevant institutions to promote collaborative research, knowledge exchange, training, and technology development.</p>
              </div>

              <div className="glass-panel hover-lift" style={{ padding: '25px', background: 'rgba(255,255,255,0.02)' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.2rem' }}>7. Create a Sustainable Space Research Ecosystem</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>To contribute to the development of a sustainable national ecosystem that enables Ghanaian students, scientists, engineers, and innovators to pursue long-term careers in space science and technology and participate meaningfully in national, African, and global research initiatives.</p>
              </div>

              <div className="glass-panel hover-lift" style={{ padding: '25px', background: 'rgba(255,255,255,0.02)' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '10px', fontSize: '1.2rem' }}>8. Promote Space Applications for National Development</h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>To investigate and promote the use of space-derived technologies and data in addressing national and continental challenges, including environmental monitoring, climate studies, agriculture, disaster management, communications, navigation, resource management, and sustainable development.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
