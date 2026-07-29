'use client';

import { useState } from 'react';
import { bebasNeue, dmSans } from '@/app/lib/fonts';
import { useModal } from '@/app/lib/modal-context';

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const { openModal } = useModal();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#f5f2ec]/8">
            {/* ── Main header row ── */}
            <div className="max-w-[1600px] mx-auto px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between">

                {/* Logo */}
                <a href="/" className="flex items-center">
                    <img src="/logo.png" alt="Clyoro" className="h-24 sm:h-28 w-auto -my-8 sm:-my-10" />
                </a>

                {/* Desktop nav links */}
                <div className={`${dmSans.className} hidden md:flex items-center gap-12 text-sm uppercase tracking-widest font-medium`}>
                    <a href="#work" className="text-[#f5f2ec]/60 hover:text-[#f5f2ec] transition-colors">Work</a>
                    <a href="#services" className="text-[#f5f2ec]/60 hover:text-[#f5f2ec] transition-colors">Services</a>
                    <a href="#process" className="text-[#f5f2ec]/60 hover:text-[#f5f2ec] transition-colors">Process</a>
                    <a href="#clients" className="text-[#f5f2ec]/60 hover:text-[#f5f2ec] transition-colors">Clients</a>
                </div>

                {/* Desktop CTA */}
                <button onClick={openModal} className={`${dmSans.className} hidden md:block bg-[#16A850] text-[#ffffff] px-8 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-[#149246] hover:scale-105 hover:shadow-[0_0_20px_rgba(22,168,80,0.3)] active:scale-95 transition-all duration-300`}>
                    Start a Project
                </button>

                {/* Hamburger — mobile only */}
                <button
                    onClick={() => setOpen(o => !o)}
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                >
                    <span className={`block w-6 h-[2px] bg-[#f5f2ec] rounded-full transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
                    <span className={`block w-6 h-[2px] bg-[#f5f2ec] rounded-full transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
                    <span className={`block w-6 h-[2px] bg-[#f5f2ec] rounded-full transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </button>
            </div>

            {/* ── Mobile dropdown panel ── */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="border-t border-[#f5f2ec]/8 px-5 py-6 flex flex-col gap-5">
                    {['Work', 'Services', 'Process', 'Clients'].map((item, i) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setOpen(false)}
                            className={`${dmSans.className} text-[#f5f2ec]/60 hover:text-[#f5f2ec] text-sm uppercase tracking-widest font-medium transition-all duration-300`}
                            style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
                        >
                            {item}
                        </a>
                    ))}
                    <div className="pt-2 border-t border-[#f5f2ec]/8">
                        <button
                            onClick={() => { setOpen(false); openModal(); }}
                            className={`${dmSans.className} w-full bg-[#16A850] text-[#ffffff] px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-[#149246] transition-all duration-300`}
                        >
                            Start a Project
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
