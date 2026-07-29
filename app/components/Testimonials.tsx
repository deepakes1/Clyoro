'use client';

import { bebasNeue, dmSans, dmSerif } from '@/app/lib/fonts';
import { useInView } from '@/app/lib/hooks';

export default function Testimonials() {
    const { ref, visible } = useInView(0.2);

    const testimonials = [
        { quote: 'The logo design was extremely satisfying and beautifully executed, creatively bringing our brand to life with thoughtful details, clear communication, and a process that truly reflected our vision from start to finish.', author: 'Happy Client', role: 'Branding Project', initials: 'C1' },
        { quote: "I'm completely satisfied with the logo — every detail looks perfect, and the patience, cooperation, and understanding you showed throughout the process made the experience truly amazing.", author: 'vbnadz', role: 'Padheyam', initials: 'C2' },
    ];

    return (
        <section ref={ref} id="clients" className="bg-[#0d0d0d] py-32">
            <div className="max-w-[1600px] mx-auto px-8">
                <div className={`transition-all duration-1000 mb-16 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className={`${dmSans.className} flex items-center gap-3 mb-6`}>
                        <div className="w-10 h-[2px] bg-[#16A850]" />
                        <span className="text-[#16A850] text-xs uppercase tracking-widest font-medium">Client Love</span>
                    </div>
                    <h2 className={`${bebasNeue.className} text-[#f5f2ec]`} style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
                        What They Say
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`relative bg-[#111] p-6 sm:p-10 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                        >
                            <div className={`${bebasNeue.className} absolute top-4 left-4 sm:top-6 sm:left-6 text-[6rem] sm:text-[8rem] text-[#16A850]/15 leading-none select-none`}>
                                &ldquo;
                            </div>
                            <p className={`${dmSerif.className} italic text-[#f5f2ec] text-lg sm:text-xl leading-relaxed mb-8 relative z-10`}>
                                {testimonial.quote}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#16A850] to-[#d4a84b] flex items-center justify-center shrink-0">
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
