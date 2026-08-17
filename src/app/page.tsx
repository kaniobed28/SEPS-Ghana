import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import { Globe, Rocket, Layers, BookOpen, ChevronRight, Play } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-white">
      {/* Immersive Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-bg.jpg" 
            alt="Earth from Space" 
            fill 
            className="object-cover object-center brightness-75 scale-105 animate-[pulse_20s_ease-in-out_infinite]"
            priority
            quality={100}
          />
          {/* Gradient Overlay for text readability and smooth transition to next section */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/80 via-transparent to-transparent"></div>
        </div>

        <div className="container relative z-10 text-left pt-20">
          <FadeIn direction="up" delay={0.1}>
            <p className="text-sky-400 uppercase tracking-[0.3em] font-semibold text-sm mb-6">Space Research Institute Ghana</p>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 max-w-5xl text-white leading-[0.95]">
              To the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white">Cosmos.</span>
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.5}>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-12 leading-relaxed font-light">
              Advancing space science, technology, education, and innovation, empowering the next generation of African explorers.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.7}>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/about" className="btn btn-primary group flex items-center gap-3">
                Discover Our Mission
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/membership" className="btn btn-outline text-white hover:bg-white/10 border-white/30 flex items-center gap-3">
                Join the Initiative
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Cinematic Directorates Section */}
      <section className="section bg-[#020617] relative z-20">
        <div className="container">
          <FadeIn direction="up">
            <div className="mb-20">
              <p className="text-sky-400 uppercase tracking-[0.2em] font-semibold text-sm mb-4">Our Focus Areas</p>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Academic & Research<br/>Directorates.</h2>
            </div>
          </FadeIn>

          <div className="grid-auto-fit">
            <FadeIn delay={0.1}>
              <Link href="/programs" className="block h-full">
                <div className="glass-card p-10 h-full flex flex-col items-start group">
                  <div className="p-4 bg-white/5 rounded-2xl mb-8 group-hover:bg-white/10 transition-colors border border-white/10">
                    <Globe size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Space Science</h3>
                  <p className="text-slate-400 flex-grow mb-8 text-lg font-light leading-relaxed">Earth & Atmospheric Sciences, Heliophysics, Astronomy, and Planetary Sciences.</p>
                  <div className="text-sky-400 font-medium flex items-center mt-auto uppercase tracking-wider text-sm">
                    Explore <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Link href="/programs" className="block h-full">
                <div className="glass-card p-10 h-full flex flex-col items-start group">
                  <div className="p-4 bg-white/5 rounded-2xl mb-8 group-hover:bg-white/10 transition-colors border border-white/10">
                    <Rocket size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Space Engineering</h3>
                  <p className="text-slate-400 flex-grow mb-8 text-lg font-light leading-relaxed">Space Systems Engineering, Satellite & CubeSat Technology, Instrumentation.</p>
                  <div className="text-sky-400 font-medium flex items-center mt-auto uppercase tracking-wider text-sm">
                    Explore <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Link href="/programs" className="block h-full">
                <div className="glass-card p-10 h-full flex flex-col items-start group">
                  <div className="p-4 bg-white/5 rounded-2xl mb-8 group-hover:bg-white/10 transition-colors border border-white/10">
                    <Layers size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Data & AI</h3>
                  <p className="text-slate-400 flex-grow mb-8 text-lg font-light leading-relaxed">Computational Space Science, Data Science, and Artificial Intelligence for Space.</p>
                  <div className="text-sky-400 font-medium flex items-center mt-auto uppercase tracking-wider text-sm">
                    Explore <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Deep Space Flagship Section */}
      <section className="section bg-[#020617] border-t border-white/5">
        <div className="container">
          <FadeIn direction="up">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden group">
                <div className="absolute inset-0 bg-sky-900/20 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                <Image 
                  src="/hero-bg.jpg" 
                  alt="Flagship Projects" 
                  fill 
                  className="object-cover object-left scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent z-10"></div>
                
                <div className="absolute bottom-10 left-10 z-20">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-6 group-hover:scale-110 transition-transform">
                    <Play size={24} className="text-white ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <p className="text-sky-400 uppercase tracking-[0.2em] font-semibold text-sm mb-4">Strategic Vision</p>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white">Flagship National Projects.</h2>
                <p className="text-xl text-slate-400 leading-relaxed mb-12 font-light">
                  SRI-Ghana develops strategic national projects that build long-term capability. These include the Ghana Space Weather Initiative, Ionospheric Monitoring Network, CubeSat Initiative, and the Space Science Data Center.
                </p>
                <div>
                  <Link href="/research" className="btn btn-outline hover:bg-white hover:text-black hover:border-white group">
                    Explore Flagship Projects 
                    <ChevronRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
    </div>
  );
}
