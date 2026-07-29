'use client';

import { bebasNeue, dmSans } from '@/app/lib/fonts';
import { useInView } from '@/app/lib/hooks';

export default function WhyUs() {
    const { ref, visible } = useInView(0.2);

    const pillars = [
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="13" stroke="#16A850" strokeWidth="1.5" />
                    <path d="M10 16l4 4 8-8" stroke="#16A850" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            label: 'Our Team',
            heading: 'Professional Editors',
            body: 'Our dedicated team of skilled editors and designers lives and breathes creative work. Every frame, every pixel is handled with the kind of precision and passion that only comes from people who truly love their craft.',
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="3" y="8" width="26" height="18" stroke="#16A850" strokeWidth="1.5" />
                    <path d="M10 8V5h12v3" stroke="#16A850" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M10 18h12M10 22h7" stroke="#16A850" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
            label: 'Our Standard',
            heading: 'High-Quality Output',
            body: 'We never compromise on quality. Whether it\'s a social reel or a full-scale brand film, every deliverable is polished to a cinematic standard — colour-graded, sound-designed, and built to make an impact wherever it lands.',
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="13" stroke="#16A850" strokeWidth="1.5" />
                    <path d="M16 9v7l5 3" stroke="#16A850" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            label: 'Our Commitment',
            heading: 'On-Time Delivery',
            body: 'Deadlines are not suggestions — they are promises. We structure every project with clear milestones and realistic timelines, so your content is always ready when you need it, without last-minute scrambles.',
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M5 8h22v14a2 2 0 01-2 2H7a2 2 0 01-2-2V8z" stroke="#16A850" strokeWidth="1.5" />
                    <path d="M5 8l11 9 11-9" stroke="#16A850" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            label: 'Our Partnership',
            heading: 'Strong Support',
            body: 'From the first briefing call to final delivery, we are by your side. Clear communication, fast responses, and a genuine investment in your success — because we see every client as a long-term partner, not just a project.',
        },
    ];

    return (
        <section ref={ref} className="bg-[#ede8df] py-32">
            <div className="max-w-[1600px] mx-auto px-8">

                {/* Header */}
                <div className={`transition-all duration-1000 mb-20 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className={`${dmSans.className} flex items-center gap-3 mb-6`}>
                        <div className="w-10 h-[2px] bg-[#16A850]" />
                        <span className="text-[#16A850] text-sm uppercase tracking-widest font-medium">Why Work With Us</span>
                    </div>
                    <div className="flex items-end justify-between flex-wrap gap-6">
                        <h2 className={`${bebasNeue.className} text-[#0a0a0a]`} style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>
                            Different By Design
                        </h2>
                        <p className={`${dmSans.className} text-[#0a0a0a]/55 text-md max-w-sm leading-relaxed`}>
                            We are a new studio — and that is our edge. No legacy processes, no oversized teams. Just sharp creative minds fully committed to your brand.
                        </p>
                    </div>
                </div>

                {/* Pillars */}
                <div className="border-t border-[#0a0a0a]/10">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-1 md:grid-cols-[160px_1fr_1fr] gap-8 md:gap-16 py-12 border-b border-[#0a0a0a]/10 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
                        >
                            {/* Icon + label */}
                            <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-6">
                                {pillar.icon}
                                <span className={`${dmSans.className} text-[#16A850] text-xs uppercase tracking-[0.22em] font-semibold`}>
                                    {pillar.label}
                                </span>
                            </div>

                            {/* Heading */}
                            <div className="flex items-center">
                                <h3 className={`${bebasNeue.className} text-[#0a0a0a] leading-[0.95]`}
                                    style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
                                    {pillar.heading}
                                </h3>
                            </div>

                            {/* Body */}
                            <div className="flex items-center">
                                <p className={`${dmSans.className} text-[#0a0a0a]/65 leading-relaxed text-sm md:text-base`}>
                                    {pillar.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
