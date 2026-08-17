import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { Globe, Rocket, Layers, BookOpen, ChevronRight, Microscope } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center min-h-[95vh] py-24 overflow-hidden bg-white">
        {/* Subtle dot matrix background for a modern engineering/research feel without being overwhelming */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        ></div>
        
        <div className="container relative z-10 text-center md:text-left pt-16">
          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 max-w-5xl text-zinc-950 leading-[1.05]">
              Ghana's Future in <br />
              <span className="text-sky-700">Space Science</span> & <span className="text-orange-600">Exploration</span>
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3}>
            <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl mb-12 leading-relaxed font-normal">
              The Space Research Institute, Ghana (SRI-Ghana) is dedicated to advancing space science, technology, education, and innovation, empowering the next generation to contribute to the global space research community.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <Link href="/membership" className="btn btn-primary text-base">
                Join the Community
              </Link>
              <Link href="/about" className="btn btn-outline text-base group">
                Our Mission & Vision 
                <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission Intro Section */}
      <section className="section bg-zinc-50 border-y border-zinc-200/60">
        <div className="container">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-8 tracking-tight">Inspire. Educate. Innovate.</h2>
              <p className="text-xl text-zinc-600 leading-relaxed mb-10 font-normal">
                To inspire, educate, train, and empower the next generation of Ghanaian space scientists, engineers, researchers, and innovators. We aim to build a strong foundation for space exploration and research in Ghana through world-class academic programs, cutting-edge research, and technology development.
              </p>
              <Link href="/about" className="inline-flex items-center text-sky-700 font-semibold hover:text-sky-900 transition-colors text-lg group">
                Read our full Mission & Vision <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Four Directorates Section */}
      <section className="section bg-white">
        <div className="container">
          <FadeIn direction="up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-6 tracking-tight">Academic & Research Directorates</h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto font-normal">
                Our framework provides a clear pathway from early awareness to PhD research and professional scientific careers across four major domains.
              </p>
            </div>
          </FadeIn>

          <div className="grid-auto-fit gap-8">
            <FadeIn delay={0.1}>
              <Link href="/programs" className="block h-full group">
                <div className="clean-card p-10 h-full flex flex-col items-start bg-white">
                  <div className="p-4 bg-zinc-100 rounded-xl mb-8 group-hover:bg-sky-50 transition-colors duration-300">
                    <Globe size={28} className="text-zinc-900 group-hover:text-sky-700 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-950 mb-4">Space Science & Exploration</h3>
                  <p className="text-zinc-600 flex-grow mb-8 text-lg font-normal">Earth & Atmospheric Sciences, Heliophysics, Astronomy, and Planetary Sciences.</p>
                  <div className="text-zinc-900 font-semibold flex items-center mt-auto text-sm tracking-wide uppercase group-hover:text-sky-700 transition-colors">
                    Explore Pathway <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Link href="/programs" className="block h-full group">
                <div className="clean-card p-10 h-full flex flex-col items-start bg-white">
                  <div className="p-4 bg-zinc-100 rounded-xl mb-8 group-hover:bg-orange-50 transition-colors duration-300">
                    <Rocket size={28} className="text-zinc-900 group-hover:text-orange-600 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-950 mb-4">Space Engineering & Technology</h3>
                  <p className="text-zinc-600 flex-grow mb-8 text-lg font-normal">Space Systems Engineering, Satellite & CubeSat Technology, Instrumentation & Robotics.</p>
                  <div className="text-zinc-900 font-semibold flex items-center mt-auto text-sm tracking-wide uppercase group-hover:text-orange-600 transition-colors">
                    Explore Pathway <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Link href="/programs" className="block h-full group">
                <div className="clean-card p-10 h-full flex flex-col items-start bg-white">
                  <div className="p-4 bg-zinc-100 rounded-xl mb-8 group-hover:bg-sky-50 transition-colors duration-300">
                    <Layers size={28} className="text-zinc-900 group-hover:text-sky-700 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-950 mb-4">Space Data, Computing & AI</h3>
                  <p className="text-zinc-600 flex-grow mb-8 text-lg font-normal">Space Data Science, Computational Space Science, and Artificial Intelligence for Space.</p>
                  <div className="text-zinc-900 font-semibold flex items-center mt-auto text-sm tracking-wide uppercase group-hover:text-sky-700 transition-colors">
                    Explore Pathway <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Link href="/programs" className="block h-full group">
                <div className="clean-card p-10 h-full flex flex-col items-start bg-white">
                  <div className="p-4 bg-zinc-100 rounded-xl mb-8 group-hover:bg-orange-50 transition-colors duration-300">
                    <BookOpen size={28} className="text-zinc-900 group-hover:text-orange-600 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-950 mb-4">Education & Innovation</h3>
                  <p className="text-zinc-600 flex-grow mb-8 text-lg font-normal">STEM Outreach, Workshops, and the Young Space Scientists Program.</p>
                  <div className="text-zinc-900 font-semibold flex items-center mt-auto text-sm tracking-wide uppercase group-hover:text-orange-600 transition-colors">
                    Explore Pathway <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Flagship Research Section */}
      <section className="section bg-zinc-950 text-white">
        <div className="container">
          <FadeIn direction="up">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="flex flex-col justify-center">
                <div className="p-4 bg-zinc-800 rounded-xl w-fit mb-10 inline-block border border-zinc-700">
                  <Microscope size={32} className="text-zinc-300" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Flagship National Projects</h2>
                <p className="text-xl text-zinc-400 leading-relaxed mb-12 font-normal">
                  SRI-Ghana develops strategic national projects that build long-term capability. These include the Ghana Space Weather Initiative, Ionospheric Monitoring Network, CubeSat Initiative, and the Space Science Data Center.
                </p>
                <div>
                  <Link href="/research" className="btn bg-white text-zinc-950 hover:bg-zinc-200 border-none group">
                    Explore Flagship Projects <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="min-h-[460px] relative hidden md:block bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[120%] h-[120%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/40 via-zinc-950 to-zinc-950"></div>
                  <div className="w-72 h-72 border border-zinc-700/30 rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 border border-zinc-700/20 rounded-full scale-[1.3]"></div>
                    <div className="absolute inset-0 border border-zinc-700/10 rounded-full scale-[1.6]"></div>
                    <div className="w-56 h-56 border border-zinc-600/30 rounded-full flex items-center justify-center bg-zinc-800/20 backdrop-blur-md">
                      <div className="w-36 h-36 border border-zinc-500/50 rounded-full bg-zinc-700/10 shadow-[0_0_40px_rgba(255,255,255,0.05)]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Video Section */}
      <section className="section bg-zinc-50">
        <div className="container">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-6 tracking-tight">Discover Our Universe</h2>
              <p className="text-xl text-zinc-600 mb-14 font-normal">
                Experience the breathtaking beauty of space. Watch this stunning footage from NASA.
              </p>
              <div className="relative pt-[56.25%] overflow-hidden rounded-2xl border border-zinc-200/80 shadow-2xl bg-zinc-950">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/6tmbeLTHC_0?autoplay=1&mute=1&loop=1&playlist=6tmbeLTHC_0" 
                  title="NASA | Thermonuclear Art" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
