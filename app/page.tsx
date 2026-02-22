'use client';

import { useState, useEffect, useRef } from 'react';
import { Bebas_Neue, DM_Sans, DM_Serif_Display } from 'next/font/google';
import { Play, ArrowRight } from 'lucide-react';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });
const dmSerif = DM_Serif_Display({ subsets: ['latin'], style: ['normal', 'italic'], weight: '400' });

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function useCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useInView(0.5);
  useEffect(() => {
    if (!visible) return;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(Math.round(current));
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target, duration]);
  return { ref, count };
}

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(false);
      }
    };

    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }

      requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    animateRing();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-3 h-3 rounded-full bg-[#c8391a] pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ left: 0, top: 0 }}
      />
      <div
        ref={ringRef}
        className={`fixed rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          isHovering ? 'w-[60px] h-[60px] border-2 border-[#c8391a]' : 'w-10 h-10 border border-[#f5f2ec]/40'
        }`}
        style={{ left: 0, top: 0 }}
      />
    </>
  );
}

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/85 backdrop-blur-md border-b border-[#f5f2ec]/8">
      <div className="max-w-[1600px] mx-auto px-8 py-5 flex items-center justify-between">
        <div className={`${bebasNeue.className} text-3xl flex items-center`}>
          <span className="text-[#f5f2ec]">CLY</span>
          <span className="text-[#c8391a]">ORO</span>
        </div>

        <div className={`${dmSans.className} flex items-center gap-12 text-xs uppercase tracking-widest`}>
          <a href="#work" className="text-[#f5f2ec]/60 hover:text-[#f5f2ec] transition-colors">Work</a>
          <a href="#services" className="text-[#f5f2ec]/60 hover:text-[#f5f2ec] transition-colors">Services</a>
          <a href="#process" className="text-[#f5f2ec]/60 hover:text-[#f5f2ec] transition-colors">Process</a>
          <a href="#clients" className="text-[#f5f2ec]/60 hover:text-[#f5f2ec] transition-colors">Clients</a>
        </div>

        <button className={`${dmSans.className} bg-[#c8391a] text-[#f5f2ec] px-8 py-3 text-sm font-medium hover:bg-[#d4441e] transition-colors`}>
          Start a Project
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  const { ref, visible } = useInView(0.2);

  return (
    <section ref={ref} className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex items-end">
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-12"
        style={{
          background: 'radial-gradient(circle at 70% 30%, #c8391a 0%, transparent 50%)',
        }}
      />
      <div
        className="absolute top-0 left-0 w-1/2 h-full opacity-6"
        style={{
          background: 'radial-gradient(circle at 30% 70%, #d4a84b 0%, transparent 50%)',
        }}
      />

      <div className="absolute right-0 top-0 w-[55%] h-full opacity-25">
        <div className="grid grid-cols-2 gap-4 h-full p-8">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="bg-[#f5f2ec]/5 rounded" />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 pb-24 w-full">
        <div className="flex justify-between items-end">
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className={`${dmSans.className} flex items-center gap-3 mb-8`} style={{ transitionDelay: '0.1s' }}>
              <div className="w-10 h-[2px] bg-[#c8391a]" />
              <span className="text-[#c8391a] text-xs uppercase tracking-widest font-medium">Award-Winning Video Editing</span>
            </div>

            <h1 className={`${bebasNeue.className} leading-[0.9] mb-8`} style={{ fontSize: 'clamp(5rem, 12vw, 11rem)', transitionDelay: '0.2s' }}>
              <div className="text-[#f5f2ec]">WE CUT</div>
              <div className={`${dmSerif.className} italic text-[#d4a84b]`}>Stories</div>
              <div className="text-[#f5f2ec]">THAT MOVE</div>
            </h1>

            <p className={`${dmSans.className} text-[#f5f2ec]/55 text-lg max-w-[480px] mb-12 leading-relaxed`} style={{ transitionDelay: '0.3s' }}>
              From brand films to social reels, we craft cutting-edge video narratives that captivate audiences and drive results.
            </p>

            <div className="flex items-center gap-4" style={{ transitionDelay: '0.4s' }}>
              <button className={`${dmSans.className} bg-[#c8391a] text-[#f5f2ec] px-10 py-4 text-sm font-medium hover:bg-[#d4441e] transition-all`}>
                View Our Work
              </button>
              <button className={`${dmSans.className} border border-[#f5f2ec]/30 text-[#f5f2ec] px-10 py-4 text-sm font-medium hover:border-[#f5f2ec] transition-all flex items-center gap-2`}>
                <div className="w-8 h-8 rounded-full border border-[#f5f2ec]/50 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-[#f5f2ec] text-[#f5f2ec]" />
                </div>
                Watch Reel
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="w-[1px] h-20 bg-[#f5f2ec]/30 animate-pulse" />
            <span className={`${dmSans.className} text-[#f5f2ec]/40 text-xs uppercase tracking-widest rotate-90 origin-center`} style={{ writingMode: 'vertical-rl' }}>
              Scroll
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const { ref, visible } = useInView(0.3);
  const stat1 = useCounter(340);
  const stat2 = useCounter(500);
  const stat3 = useCounter(48);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);

  useEffect(() => {
    if (visible) {
      setTimeout(() => setProgress1(85), 100);
      setTimeout(() => setProgress2(95), 200);
      setTimeout(() => setProgress3(75), 300);
    }
  }, [visible]);

  return (
    <section ref={ref} className="bg-[#ede8df] py-32">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className={`${dmSans.className} flex items-center gap-3 mb-6`} style={{ transitionDelay: '0.1s' }}>
            <div className="w-10 h-[2px] bg-[#c8391a]" />
            <span className="text-[#c8391a] text-xs uppercase tracking-widest font-medium">By the Numbers</span>
          </div>

          <h2 className={`${bebasNeue.className} text-7xl text-[#0a0a0a] mb-4`} style={{ transitionDelay: '0.2s' }}>
            Results That Speak
          </h2>

          <p className={`${dmSans.className} text-[#0a0a0a]/60 text-lg max-w-2xl mb-16`} style={{ transitionDelay: '0.3s' }}>
            Our commitment to excellence delivers measurable impact across every project.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-0 border-t border-[#0a0a0a]/10">
          <div ref={stat1.ref} className={`pt-12 pr-12 border-r border-[#0a0a0a]/10 transition-all duration-1000 delay-[0.4s] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className={`${bebasNeue.className} text-8xl text-[#0a0a0a] mb-4`}>
              {stat1.count}<span className="text-[#c8391a] text-5xl align-super">%</span>
            </div>
            <div className="w-full h-1 bg-[#0a0a0a]/10 mb-6 overflow-hidden">
              <div className="h-full bg-[#c8391a] transition-all duration-1000" style={{ width: `${progress1}%` }} />
            </div>
            <p className={`${dmSans.className} text-[#0a0a0a]/70 leading-relaxed`}>
              Average client satisfaction rate across all projects, reflecting our dedication to quality and collaboration.
            </p>
          </div>

          <div ref={stat2.ref} className={`pt-12 px-12 border-r border-[#0a0a0a]/10 transition-all duration-1000 delay-[0.5s] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className={`${bebasNeue.className} text-8xl text-[#0a0a0a] mb-4`}>
              {stat2.count}<span className="text-[#c8391a] text-5xl align-super">+</span>
            </div>
            <div className="w-full h-1 bg-[#0a0a0a]/10 mb-6 overflow-hidden">
              <div className="h-full bg-[#c8391a] transition-all duration-1000" style={{ width: `${progress2}%` }} />
            </div>
            <p className={`${dmSans.className} text-[#0a0a0a]/70 leading-relaxed`}>
              Projects delivered on time and on budget, from social content to full-scale brand campaigns.
            </p>
          </div>

          <div ref={stat3.ref} className={`pt-12 pl-12 transition-all duration-1000 delay-[0.6s] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className={`${bebasNeue.className} text-8xl text-[#0a0a0a] mb-4`}>
              {stat3.count}<span className="text-[#c8391a] text-5xl align-super">hr</span>
            </div>
            <div className="w-full h-1 bg-[#0a0a0a]/10 mb-6 overflow-hidden">
              <div className="h-full bg-[#c8391a] transition-all duration-1000" style={{ width: `${progress3}%` }} />
            </div>
            <p className={`${dmSans.className} text-[#0a0a0a]/70 leading-relaxed`}>
              Average turnaround time for social content, ensuring your brand stays agile and relevant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkGrid() {
  const { ref, visible } = useInView(0.2);

  const projects = [
    { title: 'The Long Game', category: 'Brand Film', span: 'row-span-2' },
    { title: 'Roots & Routes', category: 'Documentary', span: '' },
    { title: 'Pulse Social', category: 'Reel Sprint', span: '' },
  ];

  return (
    <section ref={ref} id="work" className="bg-[#0a0a0a] py-32">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className={`transition-all duration-1000 mb-16 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className={`${dmSans.className} flex items-center gap-3 mb-6`}>
            <div className="w-10 h-[2px] bg-[#c8391a]" />
            <span className="text-[#c8391a] text-xs uppercase tracking-widest font-medium">Featured Work</span>
          </div>
          <h2 className={`${bebasNeue.className} text-7xl text-[#f5f2ec]`}>
            Latest Projects
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 h-[900px]">
          <div className={`${projects[0].span} group relative overflow-hidden cursor-pointer transition-all duration-1000 delay-[0.2s] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] transition-transform duration-700 group-hover:scale-105" />
            <div className={`${bebasNeue.className} absolute inset-0 flex items-center justify-center text-[20rem] text-[#f5f2ec] opacity-[0.04] select-none`}>
              EDIT
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-20 h-20 rounded-full border-2 border-[#f5f2ec] flex items-center justify-center">
                <Play className="w-8 h-8 fill-[#f5f2ec] text-[#f5f2ec]" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              <div className={`${dmSans.className} text-[#d4a84b] text-xs uppercase tracking-widest mb-2 font-medium`}>
                {projects[0].category}
              </div>
              <h3 className={`${dmSerif.className} text-[#f5f2ec] text-4xl`}>
                {projects[0].title}
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className={`group relative overflow-hidden cursor-pointer flex-1 transition-all duration-1000 delay-[0.3s] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] transition-transform duration-700 group-hover:scale-105" />
              <div className={`${bebasNeue.className} absolute inset-0 flex items-center justify-center text-[12rem] text-[#f5f2ec] opacity-[0.04] select-none`}>
                CUT
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-20 h-20 rounded-full border-2 border-[#f5f2ec] flex items-center justify-center">
                  <Play className="w-8 h-8 fill-[#f5f2ec] text-[#f5f2ec]" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className={`${dmSans.className} text-[#d4a84b] text-xs uppercase tracking-widest mb-2 font-medium`}>
                  {projects[1].category}
                </div>
                <h3 className={`${dmSerif.className} text-[#f5f2ec] text-4xl`}>
                  {projects[1].title}
                </h3>
              </div>
            </div>

            <div className={`group relative overflow-hidden cursor-pointer flex-1 transition-all duration-1000 delay-[0.4s] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] transition-transform duration-700 group-hover:scale-105" />
              <div className={`${bebasNeue.className} absolute inset-0 flex items-center justify-center text-[12rem] text-[#f5f2ec] opacity-[0.04] select-none`}>
                REEL
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-20 h-20 rounded-full border-2 border-[#f5f2ec] flex items-center justify-center">
                  <Play className="w-8 h-8 fill-[#f5f2ec] text-[#f5f2ec]" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className={`${dmSans.className} text-[#d4a84b] text-xs uppercase tracking-widest mb-2 font-medium`}>
                  {projects[2].category}
                </div>
                <h3 className={`${dmSerif.className} text-[#f5f2ec] text-4xl`}>
                  {projects[2].title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { ref, visible } = useInView(0.2);
  const [activeService, setActiveService] = useState(0);

  const services = [
    { name: 'Narrative Editing', desc: 'Crafting compelling stories that engage viewers from start to finish with seamless cuts and emotional pacing.' },
    { name: 'Social Content', desc: 'Fast-turnaround editing optimized for Instagram, TikTok, and YouTube to maximize engagement and reach.' },
    { name: 'Advertising & TV', desc: 'Broadcast-quality editing for commercials and television campaigns that meet industry standards.' },
    { name: 'Color & Grade', desc: 'Professional color correction and grading to enhance mood, tone, and visual consistency.' },
    { name: 'Motion Graphics', desc: 'Dynamic text animations, lower thirds, and visual effects that elevate your production value.' },
  ];

  const emojis = ['🎬', '📱', '📺', '🎨', '✨'];

  return (
    <section ref={ref} id="services" className="bg-[#ede8df] py-32">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className={`transition-all duration-1000 mb-16 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className={`${dmSans.className} flex items-center gap-3 mb-6`}>
            <div className="w-10 h-[2px] bg-[#c8391a]" />
            <span className="text-[#c8391a] text-xs uppercase tracking-widest font-medium">What We Do</span>
          </div>
          <h2 className={`${bebasNeue.className} text-7xl text-[#0a0a0a]`}>
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              >
                <div
                  className={`cursor-pointer border-l-[3px] pl-8 py-6 transition-all ${
                    activeService === index ? 'border-[#c8391a]' : 'border-transparent'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                      <span className={`${dmSans.className} text-[#c8391a] text-sm font-medium`}>
                        0{index + 1}
                      </span>
                      <h3 className={`${bebasNeue.className} text-3xl transition-colors ${
                        activeService === index ? 'text-[#c8391a]' : 'text-[#0a0a0a]'
                      }`}>
                        {service.name}
                      </h3>
                    </div>
                    <ArrowRight className={`w-5 h-5 transition-all ${
                      activeService === index ? 'text-[#c8391a] translate-x-2' : 'text-[#0a0a0a]/30'
                    }`} />
                  </div>
                  <div className={`overflow-hidden transition-all duration-500 ${
                    activeService === index ? 'max-h-[120px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className={`${dmSans.className} text-[#0a0a0a]/70 mt-4 leading-relaxed`}>
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className={`sticky top-32 bg-[#0a0a0a] p-16 flex items-center justify-center transition-all duration-1000 delay-[0.7s] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ minHeight: '500px' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-[#f5f2ec]/10 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="w-64 h-64 rounded-full border border-[#f5f2ec]/10 animate-ping absolute" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                <div className="w-80 h-80 rounded-full border border-[#f5f2ec]/10 animate-ping absolute" style={{ animationDuration: '5s', animationDelay: '2s' }} />
              </div>
              <div className="relative z-10 text-center">
                <div className="text-8xl mb-4 transition-all duration-500">
                  {emojis[activeService]}
                </div>
                <div className={`${bebasNeue.className} text-[#f5f2ec]/10 text-6xl select-none`}>
                  {services[activeService].name.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const { ref, visible } = useInView(0.2);

  const steps = [
    { title: 'Brief & Discovery', desc: 'We start by understanding your vision, goals, and target audience to align on creative direction.' },
    { title: 'Assembly & Structure', desc: 'Rough cuts are assembled, establishing narrative flow and identifying key moments that drive impact.' },
    { title: 'Review & Refine', desc: 'Collaborative feedback rounds ensure every frame serves the story and meets your expectations.' },
    { title: 'Deliver & Deploy', desc: 'Final exports are optimized for your distribution channels with full technical specifications met.' },
  ];

  return (
    <section ref={ref} id="process" className="bg-[#0a0a0a] py-32 border-t border-[#f5f2ec]/8">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className={`transition-all duration-1000 mb-16 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className={`${dmSans.className} flex items-center gap-3 mb-6`}>
            <div className="w-10 h-[2px] bg-[#c8391a]" />
            <span className="text-[#c8391a] text-xs uppercase tracking-widest font-medium">How We Work</span>
          </div>
          <h2 className={`${bebasNeue.className} text-7xl text-[#f5f2ec]`}>
            Our Process
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative pt-12 ${index < 3 ? 'pr-12 border-r border-[#f5f2ec]/8' : ''} transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="absolute -top-1 left-0 w-3 h-3 rounded-full bg-[#c8391a]" />
              <div className={`${bebasNeue.className} text-[#f5f2ec] opacity-[0.05] text-8xl mb-6 select-none`}>
                0{index + 1}
              </div>
              <h3 className={`${dmSerif.className} text-[#f5f2ec] text-2xl mb-4`}>
                {step.title}
              </h3>
              <p className={`${dmSans.className} text-[#f5f2ec]/60 leading-relaxed`}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { ref, visible } = useInView(0.2);

  const testimonials = [
    { quote: 'Clyoro transformed our brand story into something truly cinematic. The attention to detail was remarkable.', author: 'Sarah Chen', role: 'Creative Director, Apex', initials: 'SC' },
    { quote: 'Their turnaround time on social content is unmatched. They understand platform nuances perfectly.', author: 'Marcus Webb', role: 'Head of Marketing, Pulse', initials: 'MW' },
    { quote: 'Working with Clyoro feels like having an in-house editor who genuinely cares about your success.', author: 'Elena Rodriguez', role: 'Founder, Vela Studios', initials: 'ER' },
  ];

  return (
    <section ref={ref} id="clients" className="bg-[#0d0d0d] py-32">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className={`transition-all duration-1000 mb-16 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className={`${dmSans.className} flex items-center gap-3 mb-6`}>
            <div className="w-10 h-[2px] bg-[#c8391a]" />
            <span className="text-[#c8391a] text-xs uppercase tracking-widest font-medium">Client Love</span>
          </div>
          <h2 className={`${bebasNeue.className} text-7xl text-[#f5f2ec]`}>
            What They Say
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative bg-[#111] p-10 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={`${bebasNeue.className} absolute top-6 left-6 text-[8rem] text-[#c8391a]/15 leading-none select-none`}>
                &ldquo;
              </div>
              <p className={`${dmSerif.className} italic text-[#f5f2ec] text-xl leading-relaxed mb-8 relative z-10`}>
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c8391a] to-[#d4a84b] flex items-center justify-center">
                  <span className={`${bebasNeue.className} text-[#f5f2ec] text-sm`}>
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <div className={`${dmSans.className} text-[#f5f2ec] font-semibold`}>
                    {testimonial.author}
                  </div>
                  <div className={`${dmSans.className} text-[#f5f2ec]/50 text-sm`}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { ref, visible } = useInView(0.3);

  return (
    <section ref={ref} className="relative bg-[#c8391a] py-40 overflow-hidden">
      <div className={`${bebasNeue.className} absolute inset-0 flex items-center justify-center text-[30vw] text-[#f5f2ec] opacity-[0.04] select-none leading-none`}>
        CUT
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-8 text-center">
        <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className={`${dmSans.className} flex items-center justify-center gap-3 mb-6`} style={{ transitionDelay: '0.1s' }}>
            <div className="w-10 h-[2px] bg-[#f5f2ec]" />
            <span className="text-[#f5f2ec] text-xs uppercase tracking-widest font-medium">Ready to Start?</span>
            <div className="w-10 h-[2px] bg-[#f5f2ec]" />
          </div>

          <h2 className={`${bebasNeue.className} text-8xl text-[#f5f2ec] mb-6 leading-tight`} style={{ transitionDelay: '0.2s' }}>
            LET&apos;S CREATE<br />SOMETHING AMAZING
          </h2>

          <p className={`${dmSans.className} text-[#f5f2ec]/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed`} style={{ transitionDelay: '0.3s' }}>
            Whether you need a single social reel or a full brand campaign, we&apos;re ready to bring your vision to life.
          </p>

          <button className={`${dmSans.className} bg-[#f5f2ec] text-[#c8391a] px-12 py-5 text-sm font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`} style={{ transitionDelay: '0.4s' }}>
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#f5f2ec]/8 py-8">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className={`${dmSans.className} flex items-center justify-between text-[#f5f2ec]/40 text-sm`}>
          <div className={`${bebasNeue.className} text-2xl`}>
            <span className="text-[#f5f2ec]">CLY</span>
            <span className="text-[#c8391a]">ORO</span>
          </div>

          <div>
            &copy; 2024 Clyoro. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#f5f2ec] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#f5f2ec] transition-colors">Vimeo</a>
            <a href="#" className="hover:text-[#f5f2ec] transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="cursor-none">
      <CustomCursor />
      <NavBar />
      <Hero />
      <Stats />
      <WorkGrid />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
