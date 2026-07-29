import { bebasNeue, dmSans } from '@/app/lib/fonts';

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] border-t border-[#f5f2ec]/8 py-8">
            <div className="max-w-[1600px] mx-auto px-8">
                <div className={`${dmSans.className} flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-0 text-[#f5f2ec]/40 text-sm`}>
                    <div>
                        <a href="/">
                            <img src="/logo.png" alt="Clyoro" className="h-20 w-auto -my-6" />
                        </a>
                        <a
                            href="mailto:clyoro.creative@gmail.com"
                            className={`${dmSans.className} text-[#f5f2ec]/50 text-sm hover:text-[#16A850] transition-colors duration-200 mt-1 block`}
                        >
                            clyoro.creative@gmail.com
                        </a>
                    </div>

                    <div className="text-[#f5f2ec]/30 text-xs sm:text-sm">
                        &copy; 2025 Clyoro. All rights reserved.
                    </div>

                    <div className="flex items-center justify-center sm:justify-start gap-6">
                        <a href="https://www.instagram.com/clyoro.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-[#f5f2ec] transition-colors">Instagram</a>
                        <a href="https://x.com/Clyoroin?s=20" className="hover:text-[#f5f2ec] transition-colors">X</a>
                        <a href="#" className="hover:text-[#f5f2ec] transition-colors">YouTube</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
