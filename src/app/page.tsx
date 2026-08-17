import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { Globe, Rocket, Layers, BookOpen, ChevronRight, Microscope } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center min-h-screen pt-32 pb-24 overflow-hidden bg-[#fafafa]">
        {/* Subtle abstract background graphic for premium light theme */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-sky-200/40 to-transparent blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-orange-200/30 to-transparent blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-[40%] left-[20%] w-[30%] h-[30%] rounded-full bg-gradient-to-r from-indigo-200/20 to-transparent blur-[80px] animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container relative z-10 text-center md:text-left">
          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter mb-8 max-w-5xl text-[#09090b] leading-[1.05]">
              Ghana's Future in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">Space Science</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Exploration</span>
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3}>
            <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl mb-12 leading-relaxed font-light tracking-tight">
              The Space Research Institute, Ghana (SRI-Ghana) is dedicated to advancing space science, technology, education, and innovation, empowering the next generation to contribute to the global space research community.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <Link href="/membership" className="btn btn-primary text-lg group">
                Join the Community
                <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="btn btn-outline text-lg">
                Our Mission & Vision
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission Intro Section */}
      <section className="section bg-white border-y border-zinc-100">
        <div className="container">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center glass-panel p-12 md:p-16 rounded-[2rem] shadow-sm border border-white/80">
              <h2 className="text-4xl md:text-6xl font-bold text-[#09090b] mb-8 tracking-tighter">Inspire. Educate. Innovate.</h2>
              <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed mb-10 font-light">
                To inspire, educate, train, and empower the next generation of Ghanaian space scientists, engineers, researchers, and innovators. We aim to build a strong foundation for space exploration and research in Ghana through world-class academic programs, cutting-edge research, and technology development.
              </p>
              <Link href="/about" className="inline-flex items-center text-sky-600 font-medium hover:text-sky-800 transition-colors text-lg group">
                Read our full Mission & Vision <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Four Directorates Section */}
      <section className="section bg-[#fafafa]">
        <div className="container">
          <FadeIn direction="up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-[#09090b] mb-6 tracking-tighter">Academic & Research Directorates</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto font-light leading-relaxed">
                Our framework provides a clear pathway from early awareness to PhD research and professional scientific careers across four major domains.
              </p>
            </div>
          </FadeIn>

          <div className="grid-auto-fit">
            <FadeIn delay={0.1}>
              <Link href="/programs" className="block h-full group">
                <div className="clean-card p-10 h-full flex flex-col items-start bg-white group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-sky-50/30">
                  <div className="p-5 bg-sky-50 rounded-2xl mb-8 group-hover:bg-sky-100 group-hover:scale-110 transition-all duration-300">
                    <Globe size={32} className="text-sky-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#09090b] mb-4 tracking-tight">Space Science & Exploration</h3>
                  <p className="text-zinc-600 flex-grow mb-8 text-lg font-light leading-relaxed">Earth & Atmospheric Sciences, Heliophysics, Astronomy, and Planetary Sciences.</p>
                  <div className="text-sky-600 font-medium flex items-center mt-auto">
                    Explore Pathway <ChevronRight size={18} className="ml-2 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Link href="/programs" className="block h-full group">
                <div className="clean-card p-10 h-full flex flex-col items-start bg-white group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-orange-50/30">
                  <div className="p-5 bg-orange-50 rounded-2xl mb-8 group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300">
                    <Rocket size={32} className="text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#09090b] mb-4 tracking-tight">Space Engineering & Technology</h3>
                  <p className="text-zinc-600 flex-grow mb-8 text-lg font-light leading-relaxed">Space Systems Engineering, Satellite & CubeSat Technology, Instrumentation & Robotics.</p>
                  <div className="text-orange-500 font-medium flex items-center mt-auto">
                    Explore Pathway <ChevronRight size={18} className="ml-2 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Link href="/programs" className="block h-full group">
                <div className="clean-card p-10 h-full flex flex-col items-start bg-white group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-indigo-50/30">
                  <div className="p-5 bg-indigo-50 rounded-2xl mb-8 group-hover:bg-indigo-100 group-hover:scale-110 transition-all duration-300">
                    <Layers size={32} className="text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#09090b] mb-4 tracking-tight">Space Data, Computing & AI</h3>
                  <p className="text-zinc-600 flex-grow mb-8 text-lg font-light leading-relaxed">Space Data Science, Computational Space Science, and Artificial Intelligence for Space.</p>
                  <div className="text-indigo-600 font-medium flex items-center mt-auto">
                    Explore Pathway <ChevronRight size={18} className="ml-2 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Link href="/programs" className="block h-full group">
                <div className="clean-card p-10 h-full flex flex-col items-start bg-white group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-rose-50/30">
                  <div className="p-5 bg-rose-50 rounded-2xl mb-8 group-hover:bg-rose-100 group-hover:scale-110 transition-all duration-300">
                    <BookOpen size={32} className="text-rose-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#09090b] mb-4 tracking-tight">Education & Innovation</h3>
                  <p className="text-zinc-600 flex-grow mb-8 text-lg font-light leading-relaxed">STEM Outreach, Workshops, and the Young Space Scientists Program.</p>
                  <div className="text-rose-500 font-medium flex items-center mt-auto">
                    Explore Pathway <ChevronRight size={18} className="ml-2 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Flagship Research Section */}
      <section className="section bg-[#09090b] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="container relative z-10">
          <FadeIn direction="up">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="flex flex-col justify-center">
                <div className="p-5 bg-white/5 backdrop-blur-md rounded-2xl w-fit mb-8 inline-block border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                  <Microscope size={40} className="text-sky-300" />
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tighter text-white">Flagship National Projects</h2>
                <p className="text-xl text-zinc-300 leading-relaxed mb-10 font-light">
                  SRI-Ghana develops strategic national projects that build long-term capability. These include the Ghana Space Weather Initiative, Ionospheric Monitoring Network, CubeSat Initiative, and the Space Science Data Center.
                </p>
                <div>
                  <Link href="/research" className="btn bg-white text-[#09090b] hover:bg-zinc-200 border-none inline-flex group">
                    Explore Flagship Projects <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="min-h-[500px] relative hidden md:block bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Modern abstract geometric representation for research */}
                  <div className="w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900/30 via-transparent to-transparent animate-pulse-slow"></div>
                  <div className="w-80 h-80 border border-sky-400/20 rounded-full flex items-center justify-center relative animate-[spin_60s_linear_infinite]">
                    <div className="absolute inset-0 border border-sky-300/10 rounded-full scale-[1.2]"></div>
                    <div className="absolute inset-0 border border-indigo-400/10 rounded-full scale-[1.4] animate-pulse-slow"></div>
                    <div className="w-56 h-56 border border-sky-400/30 rounded-full flex items-center justify-center bg-sky-900/10 backdrop-blur-md shadow-[inset_0_0_40px_rgba(56,189,248,0.1)]">
                      <div className="w-32 h-32 border border-white/20 rounded-full bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 shadow-[0_0_50px_rgba(56,189,248,0.3)] backdrop-blur-xl flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/80 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.8)] animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Video Section */}
      <section className="section bg-[#fafafa]">
        <div className="container">
          <FadeIn direction="up">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-[#09090b] mb-6 tracking-tighter">Discover Our Universe</h2>
              <p className="text-xl md:text-2xl text-zinc-500 mb-14 font-light">
                Experience the breathtaking beauty of space. Watch this stunning footage from NASA.
              </p>
              <div className="relative pt-[56.25%] overflow-hidden rounded-[2rem] border border-zinc-200/50 shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-zinc-900 group">
                <div className="absolute inset-0 bg-sky-500/10 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>
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
