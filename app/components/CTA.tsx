'use client';

import { bebasNeue, dmSans } from '@/app/lib/fonts';
import { useInView } from '@/app/lib/hooks';
import { useModal } from '@/app/lib/modal-context';

export default function CTA() {
    const { ref, visible } = useInView(0.3);
    const { openModal } = useModal();

    return (
        <section ref={ref} className="relative bg-[#16A850] py-40 overflow-hidden">
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

                    <button onClick={openModal} className={`${dmSans.className} bg-[#f5f2ec] text-[#16A850] px-12 py-5 text-sm font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`} style={{ transitionDelay: '0.4s' }}>
                        Get in Touch
                    </button>
                </div>
            </div>
        </section>
    );
}
