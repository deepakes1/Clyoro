'use client';

import { bebasNeue, dmSans, dmSerif } from '@/app/lib/fonts';
import { useInView } from '@/app/lib/hooks';
import { useModal } from '@/app/lib/modal-context';

export default function Hero() {
    const { ref, visible } = useInView(0.1);
    const { openModal } = useModal();

    const marqueeItems = [
        'Brand Films', 'Social Reels', 'Documentaries', 'Color Grading',
        'Motion Graphics', 'Advertising', 'TV Commercials',
        'Brand Films', 'Social Reels', 'Documentaries', 'Color Grading', 'Motion Graphics',
    ];

    return (
        <section
            ref={ref}
            className="relative min-h-screen bg-[#000] overflow-hidden flex flex-col"
            style={{ cursor: 'none' }}
        >
            {/* Fine dot-grid texture */}
            <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
                backgroundSize: '36px 36px',
            }} />

            {/* Top-right glow */}
            <div
                className="absolute top-0 right-0 w-[400px] lg:w-[700px] h-[300px] lg:h-[500px] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 90% 0%, rgba(200,57,26,0.08) 0%, transparent 60%)' }}
            />

            {/* Vertical divider — only visible on lg+ */}
            <div className="hidden lg:block absolute top-0 bottom-[42px] left-[58%] w-[1px] bg-gradient-to-b from-transparent via-[#f5f2ec]/12 to-transparent" />

            {/* ─── MAIN CONTENT ROW ─── */}
            <div className="relative z-10 flex flex-col lg:flex-row flex-1 pt-20 lg:pt-0 pb-[42px]">

                {/* ── LEFT PANEL ── */}
                <div className={`
          flex flex-col justify-between
          w-full lg:w-[58%]
          px-5 sm:px-8 lg:px-10
          pt-10 lg:pt-36
          pb-8 lg:pb-10
          transition-all duration-700
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}>

                    {/* Tag row */}
                    <div className={`${dmSans.className} flex items-center gap-3`}>
                        <div className="w-6 sm:w-8 h-[1.5px] bg-[#16A850]" />
                        <span className="text-[#16A850] text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium">
                            Creative Agency & Content Studio
                        </span>
                        <div className="ml-auto">
                            <span className={`${dmSans.className} text-[#f5f2ec]/25 text-[9px] sm:text-[10px] uppercase tracking-widest`}>
                                Est. 2021
                            </span>
                        </div>
                    </div>

                    {/* Giant headline */}
                    <div className={`relative py-6 lg:py-0 transition-all duration-1000 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {/* Ghost watermark — clipped to left panel, hidden on small screens */}
                        <div
                            className={`${bebasNeue.className} absolute -left-2 select-none pointer-events-none hidden sm:block`}
                            style={{
                                fontSize: 'clamp(5rem, 14vw, 16rem)',
                                color: 'rgba(245,242,236,0.025)',
                                lineHeight: 0.85,
                                top: '50%',
                                transform: 'translateY(-55%)',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            CLYORO
                        </div>

                        <h1
                            className={`${bebasNeue.className} relative leading-[1]`}
                            style={{ fontSize: 'clamp(3.2rem, 7vw, 9.5rem)' }}
                        >
                            <div className="text-[#f5f2ec]">WE MAKE</div>
                            <div className="flex items-end gap-2 sm:gap-4 flex-wrap mb-1">
                                <span className="text-[#f5f2ec]">YOUR</span>
                                <span
                                    className={`${dmSerif.className} italic text-[#d4a84b]`}
                                    style={{ fontSize: '0.82em', lineHeight: 1 }}
                                >
                                    Story
                                </span>
                            </div>
                            <div className="text-[#f5f2ec] flex items-center gap-3 sm:gap-5">
                                UNFORGETTABLE
                                <div className="h-[3px] flex-1 bg-[#16A850] mb-2 sm:mb-3 max-w-[60px] sm:max-w-[120px]" />
                            </div>
                        </h1>
                    </div>

                    {/* Bottom row: description + CTAs */}
                    <div className={`transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-8 lg:gap-12">
                            <p className={`${dmSans.className} text-[#f5f2ec]/45 text-xs sm:text-sm max-w-xs sm:max-w-[320px] leading-relaxed`}>
                                From brand films to social reels — we craft cutting-edge video narratives that captivate
                                audiences and drive results.
                            </p>
                            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                                <button className={`${dmSans.className} bg-[#16A850] text-[#f5f2ec] px-5 sm:px-8 py-3 sm:py-3.5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest hover:bg-[#d4441e] hover:shadow-[0_0_30px_rgba(200,57,26,0.3)] transition-all duration-300`}>
                                    View Work
                                </button>
                                <button onClick={openModal} className={`${dmSans.className} border border-[#f5f2ec]/20 text-[#f5f2ec]/80 px-5 sm:px-8 py-3 sm:py-3.5 text-[10px] sm:text-xs font-medium uppercase tracking-widest hover:border-[#f5f2ec]/50 hover:text-[#f5f2ec] transition-all duration-300`}>
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── RIGHT PANEL ── */}
                <div className={`
          flex flex-col justify-center items-center
          w-full lg:w-[42%]
          px-5 sm:px-8 lg:px-10
          pb-8 lg:pb-10
          transition-all duration-1000 delay-300
          ${visible ? 'opacity-100 lg:translate-x-0 translate-y-0' : 'opacity-0 lg:translate-x-10 translate-y-6'}
        `}>

                    {/* Cinematic reel preview frame */}
                    <div
                        className="relative w-full overflow-hidden border border-[#f5f2ec]/8"
                        style={{ aspectRatio: '16/10' }}
                    >
                        {/* YouTube iframe — lazy loaded, autoplays muted */}
                        <iframe
                            src="https://www.youtube-nocookie.com/embed/KGh7h_AyAK8?autoplay=1&mute=1&loop=1&playlist=KGh7h_AyAK8&controls=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&showinfo=0&iv_load_policy=3"
                            title="Clyoro Showreel"
                            loading="lazy"
                            allow="autoplay; encrypted-media"
                            allowFullScreen={false}
                            className="absolute border-0"
                            style={{ pointerEvents: 'none', top: '-3%', left: '-3%', width: '106%', height: '106%' }}
                        />

                        {/* Letterbox bars — cinematic look */}
                        <div className="absolute inset-x-0 top-0 h-[8%] bg-[#000] pointer-events-none z-10" />
                        <div className="absolute inset-x-0 bottom-0 h-[8%] bg-[#000] pointer-events-none z-10" />

                        {/* Corner accents */}
                        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 w-4 sm:w-5 h-4 sm:h-5 border-t border-l border-[#16A850]/70 z-20 pointer-events-none" />
                        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-4 sm:w-5 h-4 sm:h-5 border-t border-r border-[#16A850]/70 z-20 pointer-events-none" />
                        <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 w-4 sm:w-5 h-4 sm:h-5 border-b border-l border-[#16A850]/70 z-20 pointer-events-none" />
                        <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 w-4 sm:w-5 h-4 sm:h-5 border-b border-r border-[#16A850]/70 z-20 pointer-events-none" />

                        {/* Labels */}
                        <div className={`${dmSans.className} absolute bottom-4[1/2] sm:bottom-2 left-3 sm:left-5 text-[8px] sm:text-[9px] text-[#f5f2ec]/50 uppercase tracking-[0.15em] sm:tracking-[0.2em] z-20 pointer-events-none`}>
                            Showreel 2024 — 02:47
                        </div>
                        <div className={`${dmSans.className} absolute top-3 sm:top-5 right-3 sm:right-5 text-[8px] sm:text-[9px] text-[#f5f2ec]/30 uppercase tracking-[0.15em] sm:tracking-[0.2em] z-20 pointer-events-none`}>
                            4K · HDR
                        </div>
                    </div>


                    {/* Stats row */}
                    <div className={`w-full flex items-center mt-4 sm:mt-6 border-t border-[#f5f2ec]/8 pt-4 sm:pt-6 transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        {[['500+', 'Projects'], ['8', 'Years'], ['98%', 'Satisfaction']].map(([num, label], i) => (
                            <div key={i} className={`flex-1 text-center ${i < 2 ? 'border-r border-[#f5f2ec]/8' : ''}`}>
                                <div className={`${bebasNeue.className} text-[#f5f2ec] text-2xl sm:text-3xl`}>{num}</div>
                                <div className={`${dmSans.className} text-[#f5f2ec]/35 text-[9px] sm:text-[10px] uppercase tracking-widest mt-0.5`}>{label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Scroll indicator — only on desktop */}
                    <div className="hidden lg:flex absolute right-6 xl:right-8 bottom-14 flex-col items-center gap-2">
                        <div className="w-[1px] h-12 xl:h-14 bg-gradient-to-b from-[#f5f2ec]/30 to-transparent" />
                        <span className={`${dmSans.className} text-[#f5f2ec]/25 text-[9px] uppercase tracking-widest`} style={{ writingMode: 'vertical-rl' }}>
                            Scroll
                        </span>
                    </div>
                </div>
            </div>

            {/* ─── BOTTOM MARQUEE ─── */}
            <div
                className="relative z-10 w-full border-t border-[#f5f2ec]/8 bg-[#000]/80 backdrop-blur-sm overflow-hidden shrink-0"
                style={{ height: '38px' }}
            >
                <div
                    className="flex items-center h-full"
                    style={{ animation: 'marqueeScroll 28s linear infinite', width: 'max-content' }}
                >
                    {marqueeItems.map((item, i) => (
                        <div key={i} className={`${dmSans.className} flex items-center gap-4 sm:gap-6 px-4 sm:px-6`}>
                            <span className="text-[#f5f2ec]/30 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] whitespace-nowrap">
                                {item}
                            </span>
                            <span className="text-[#16A850] text-[7px] sm:text-[8px]">✦</span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    );
}
