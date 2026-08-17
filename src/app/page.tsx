import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { Globe, Rocket, Layers, BookOpen, ChevronRight, Microscope } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center min-h-[90vh] py-24 overflow-hidden bg-white">
        {/* Subtle abstract background graphic for light theme */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 opacity-40 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-sky-50 blur-3xl"></div>
          <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-orange-50 blur-3xl"></div>
        </div>

        <div className="container relative z-10 text-center md:text-left">
          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 max-w-5xl text-slate-900 leading-[1.1]">
              Ghana's Future in <br />
              <span className="text-sky-700">Space Science</span> & <span className="text-orange-600">Exploration</span>
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3}>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mb-10 leading-relaxed font-light">
              The Space Research Institute, Ghana (SRI-Ghana) is dedicated to advancing space science, technology, education, and innovation, empowering the next generation to contribute to the global space research community.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/membership" className="btn btn-primary text-lg">
                Join the Community
              </Link>
              <Link href="/about" className="btn btn-outline text-lg">
                Our Mission & Vision
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission Intro Section */}
      <section className="section bg-slate-50 border-y border-slate-200">
        <div className="container">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Inspire. Educate. Innovate.</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8 font-light">
                To inspire, educate, train, and empower the next generation of Ghanaian space scientists, engineers, researchers, and innovators. We aim to build a strong foundation for space exploration and research in Ghana through world-class academic programs, cutting-edge research, and technology development.
              </p>
              <Link href="/about" className="inline-flex items-center text-sky-700 font-semibold hover:text-sky-900 transition-colors text-lg">
                Read our full Mission & Vision <ChevronRight size={20} className="ml-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Four Directorates Section */}
      <section className="section bg-white">
        <div className="container">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Academic & Research Directorates</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
                Our framework provides a clear pathway from early awareness to PhD research and professional scientific careers across four major domains.
              </p>
            </div>
          </FadeIn>

          <div className="grid-auto-fit">
            <FadeIn delay={0.1}>
              <Link href="/programs" className="block h-full">
                <div className="clean-card p-10 h-full flex flex-col items-start border-t-4 border-t-sky-600 group">
                  <div className="p-4 bg-sky-50 rounded-2xl mb-6 group-hover:bg-sky-100 transition-colors">
                    <Globe size={32} className="text-sky-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Space Science & Exploration</h3>
                  <p className="text-slate-600 flex-grow mb-8 text-lg">Earth & Atmospheric Sciences, Heliophysics, Astronomy, and Planetary Sciences.</p>
                  <div className="text-sky-700 font-semibold flex items-center mt-auto">
                    Explore Pathway <ChevronRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Link href="/programs" className="block h-full">
                <div className="clean-card p-10 h-full flex flex-col items-start border-t-4 border-t-orange-500 group">
                  <div className="p-4 bg-orange-50 rounded-2xl mb-6 group-hover:bg-orange-100 transition-colors">
                    <Rocket size={32} className="text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Space Engineering & Technology</h3>
                  <p className="text-slate-600 flex-grow mb-8 text-lg">Space Systems Engineering, Satellite & CubeSat Technology, Instrumentation & Robotics.</p>
                  <div className="text-orange-600 font-semibold flex items-center mt-auto">
                    Explore Pathway <ChevronRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Link href="/programs" className="block h-full">
                <div className="clean-card p-10 h-full flex flex-col items-start border-t-4 border-t-sky-600 group">
                  <div className="p-4 bg-sky-50 rounded-2xl mb-6 group-hover:bg-sky-100 transition-colors">
                    <Layers size={32} className="text-sky-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Space Data, Computing & AI</h3>
                  <p className="text-slate-600 flex-grow mb-8 text-lg">Space Data Science, Computational Space Science, and Artificial Intelligence for Space.</p>
                  <div className="text-sky-700 font-semibold flex items-center mt-auto">
                    Explore Pathway <ChevronRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Link href="/programs" className="block h-full">
                <div className="clean-card p-10 h-full flex flex-col items-start border-t-4 border-t-orange-500 group">
                  <div className="p-4 bg-orange-50 rounded-2xl mb-6 group-hover:bg-orange-100 transition-colors">
                    <BookOpen size={32} className="text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Education & Innovation</h3>
                  <p className="text-slate-600 flex-grow mb-8 text-lg">STEM Outreach, Workshops, and the Young Space Scientists Program.</p>
                  <div className="text-orange-600 font-semibold flex items-center mt-auto">
                    Explore Pathway <ChevronRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Flagship Research Section */}
      <section className="section bg-slate-900 text-white">
        <div className="container">
          <FadeIn direction="up">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col justify-center">
                <div className="p-4 bg-sky-500/20 rounded-2xl w-fit mb-8 inline-block">
                  <Microscope size={40} className="text-sky-400" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Flagship National Projects</h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-10 font-light">
                  SRI-Ghana develops strategic national projects that build long-term capability. These include the Ghana Space Weather Initiative, Ionospheric Monitoring Network, CubeSat Initiative, and the Space Science Data Center.
                </p>
                <div>
                  <Link href="/research" className="btn bg-white text-slate-900 hover:bg-slate-100 border-none inline-flex">
                    Explore Flagship Projects <ChevronRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
              <div className="min-h-[400px] relative hidden md:block bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Modern abstract geometric representation for research */}
                  <div className="w-[120%] h-[120%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-900/40 via-slate-900 to-slate-900"></div>
                  <div className="w-64 h-64 border border-sky-500/20 rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 border border-sky-400/10 rounded-full scale-[1.3]"></div>
                    <div className="absolute inset-0 border border-sky-300/5 rounded-full scale-[1.6]"></div>
                    <div className="w-48 h-48 border border-sky-400/30 rounded-full flex items-center justify-center bg-sky-900/20 backdrop-blur-sm">
                      <div className="w-32 h-32 border-2 border-sky-400/50 rounded-full bg-sky-400/10 shadow-[0_0_30px_rgba(56,189,248,0.2)]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Video Section */}
      <section className="section bg-slate-50">
        <div className="container">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Discover Our Universe</h2>
              <p className="text-xl text-slate-600 mb-12 font-light">
                Experience the breathtaking beauty of space. Watch this stunning footage from NASA.
              </p>
              <div className="relative pt-[56.25%] overflow-hidden rounded-3xl border border-slate-200 shadow-xl bg-slate-900">
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
