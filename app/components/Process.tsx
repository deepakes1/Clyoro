'use client';

import { bebasNeue, dmSans, dmSerif } from '@/app/lib/fonts';
import { useInView } from '@/app/lib/hooks';

export default function Process() {
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
                        <div className="w-10 h-[2px] bg-[#f5f2ec]/40" />
                        <span className="text-[#f5f2ec]/60 text-xs uppercase tracking-widest font-medium">How We Work</span>
                    </div>
                    <h2 className={`${bebasNeue.className} text-[#f5f2ec]`} style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
                        Our Process
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`relative pt-12 pb-8 px-6 lg:px-0
                ${index > 0 ? 'lg:pl-10' : ''}
                ${index < 3 ? 'lg:pr-10 lg:border-r border-[#f5f2ec]/8' : ''}
                ${index % 2 === 0 && index < 2 ? 'sm:border-r border-[#f5f2ec]/8 sm:pr-6' : ''}
                border-b border-[#f5f2ec]/8 lg:border-b-0
                transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                        >
                            <div className={`${bebasNeue.className} text-[#f5f2ec] opacity-[0.22] text-8xl lg:text-9xl mb-6 select-none leading-none`}>
                                0{index + 1}
                            </div>
                            <h3 className={`${dmSerif.className} text-[#f5f2ec] text-xl lg:text-2xl mb-4`}>
                                {step.title}
                            </h3>
                            <p className={`${dmSans.className} text-[#f5f2ec]/70 leading-relaxed text-sm`}>
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
