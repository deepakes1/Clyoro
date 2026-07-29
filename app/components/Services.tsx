'use client';

import { useState } from 'react';
import { bebasNeue, dmSans } from '@/app/lib/fonts';
import { useInView } from '@/app/lib/hooks';
import { ArrowRight } from 'lucide-react';

export default function Services() {
    const { ref, visible } = useInView(0.2);
    const [activeService, setActiveService] = useState(0);

    const services = [
        { name: 'Branding & Identity', desc: 'Crafting unique logos, brand guidelines, and visual systems that give your business a strong and memorable identity.' },
        { name: 'Packaging Design', desc: 'Designing attractive and functional packaging that showcases your product and captures customer attention.' },
        { name: 'Social Media Design', desc: 'Creating eye-catching posts, ads, and creatives that boost engagement and strengthen your online presence.' },
        { name: 'Content Writing', desc: 'Writing impactful website content, social media captions, ad copies, and brand stories that communicate clearly and convert effectively.' },
        { name: 'Google & Meta Ads', desc: 'Running smart ad campaigns focused on reach, clicks, and conversions to grow your brand online.' },
        { name: 'Video Editing', desc: 'Transforming raw footage into polished, engaging videos that connect with your audience.' },
        { name: 'Video Production & Motion', desc: 'Producing cinematic videos and dynamic motion graphics — from concept to final delivery.' },
        { name: 'Web & App Development', desc: 'Building responsive, user-friendly websites and applications tailored to your business goals.' },
    ];

    const emojis = ['🎯', '📦', '🎨', '✍️', '📊', '🎬', '🎥', '💻'];

    const deliverables = [
        ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography System'],
        ['Box & Label Design', 'Dieline Layout', 'Mockup Visuals', 'Print-Ready Files'],
        ['Feed Posts', 'Story Templates', 'Ad Creatives', 'Highlight Covers'],
        ['Website Copy', 'Social Captions', 'Ad Copies', 'Brand Storytelling'],
        ['Campaign Setup', 'Audience Targeting', 'Ad Creatives', 'Performance Reports'],
        ['Raw Footage Editing', 'Color Correction', 'Sound Design', 'Final Export'],
        ['Script & Storyboard', 'Shoot Direction', 'Motion Graphics', 'Final Delivery'],
        ['UI/UX Design', 'Frontend Dev', 'Backend Integration', 'Deployment & Support'],
    ];

    const stats = [
        { value: '100%', label: 'Brand Recall' },
        { value: '3×', label: 'Shelf Impact' },
        { value: '5×', label: 'Engagement Boost' },
        { value: '2×', label: 'Conversion Rate' },
        { value: '40%', label: 'Lower CPL' },
        { value: '60%', label: 'Viewer Retention' },
        { value: '4K', label: 'Resolution Output' },
        { value: '99%', label: 'Uptime SLA' },
    ];

    return (
        <section ref={ref} id="services" className="bg-[#ede8df] py-32">
            <div className="max-w-[1600px] mx-auto px-8">
                <div className={`transition-all duration-1000 mb-16 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className={`${dmSans.className} flex items-center gap-3 mb-6`}>
                        <div className="w-10 h-[2px] bg-[#16A850]" />
                        <span className="text-[#16A850] text-xs uppercase tracking-widest font-medium">What We Do</span>
                    </div>
                    <h2 className={`${bebasNeue.className} text-[#0a0a0a]`} style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
                        Our Services
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="space-y-4">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                            >
                                <div
                                    className={`cursor-pointer border-l-[3px] pl-4 sm:pl-8 py-5 transition-all ${activeService === index ? 'border-[#16A850]' : 'border-transparent'
                                        }`}
                                    onClick={() => setActiveService(index)}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-4">
                                            <span className={`${dmSans.className} text-[#16A850] text-sm font-medium`}>
                                                0{index + 1}
                                            </span>
                                            <h3 className={`${bebasNeue.className} text-2xl sm:text-3xl transition-colors ${activeService === index ? 'text-[#16A850]' : 'text-[#0a0a0a]'
                                                }`}>
                                                {service.name}
                                            </h3>
                                        </div>
                                        <ArrowRight className={`w-5 h-5 transition-all ${activeService === index ? 'text-[#16A850] translate-x-2' : 'text-[#0a0a0a]/30'
                                            }`} />
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-500 ${activeService === index ? 'max-h-[160px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                        <p className={`${dmSans.className} text-[#0a0a0a]/70 mt-4 leading-relaxed text-md`}>
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── RIGHT: Typography panel ── */}
                    <div className="relative hidden md:block">
                        <div className={`sticky top-24 transition-all duration-1000 delay-[0.5s] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                            <div className="relative overflow-hidden bg-[#111] px-10 pt-10 pb-10 flex flex-col gap-8" style={{ minHeight: '540px' }}>

                                {/* Faint grid lines bg */}
                                <div className="absolute inset-0 pointer-events-none" style={{
                                    backgroundImage: 'linear-gradient(rgba(245,242,236,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,242,236,0.03) 1px, transparent 1px)',
                                    backgroundSize: '40px 40px',
                                }} />

                                {/* Top label */}
                                <div className={`${dmSans.className} relative z-10 flex items-center justify-between`}>
                                    <span className="text-[#f5f2ec]/50 text-[10px] uppercase tracking-[0.3em]">Selected Service</span>
                                    <span className="text-[#16A850] text-[10px] uppercase tracking-[0.2em] font-medium">
                                        {String(activeService + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Giant number */}
                                <div className={`${bebasNeue.className} relative z-10 text-[#16A850] leading-none select-none transition-all duration-500`}
                                    style={{ fontSize: 'clamp(7rem, 14vw, 13rem)', lineHeight: 0.85 }}>
                                    {String(activeService + 1).padStart(2, '0')}
                                </div>

                                {/* Service name */}
                                <div className="relative z-10">
                                    <div className={`${bebasNeue.className} text-[#f5f2ec] leading-[0.92] transition-all duration-500`}
                                        style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}>
                                        {services[activeService].name}
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="relative z-10 flex-1">
                                    <p className={`${dmSans.className} text-[#f5f2ec]/80 text-sm leading-relaxed`}>
                                        {services[activeService].desc}
                                    </p>
                                </div>

                                {/* Deliverables strip */}
                                <div className="relative z-10 border-t border-[#f5f2ec]/8 pt-6">
                                    <div className={`${dmSans.className} text-[#16A850] text-[9px] uppercase tracking-[0.25em] mb-3 font-semibold`}>
                                        What&apos;s Included
                                    </div>
                                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                                        {deliverables[activeService].map((item, i) => (
                                            <div key={item} className="flex items-center gap-2">
                                                {i > 0 && <div className="w-[3px] h-[3px] rounded-full bg-[#f5f2ec]/20" />}
                                                <span className={`${dmSans.className} text-[#f5f2ec]/70 text-[10px] uppercase tracking-[0.15em]`}>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
