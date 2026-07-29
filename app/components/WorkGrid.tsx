'use client';

import { bebasNeue, dmSans, dmSerif } from '@/app/lib/fonts';
import { useInView } from '@/app/lib/hooks';
import { Play } from 'lucide-react';

export default function WorkGrid() {
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
                        <div className="w-10 h-[2px] bg-[#16A850]" />
                        <span className="text-[#16A850] text-xs uppercase tracking-widest font-medium">Featured Work</span>
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
