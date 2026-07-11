import React from 'react';
import { scrollToSection } from "@/lib/scroll-to-section";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] border-t border-zinc-800/60 pt-20 pb-12 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-left">

                    {/* Brand Col */}
                    <div className="md:col-span-5 space-y-5">
                        <Link
                            href="#"
                            onClick={(e) => scrollToSection("#", e)}
                            className="flex items-center gap-2.5"
                        >
                            <div className="w-9 h-9 rounded-xl bg-[#111111] border border-zinc-800 flex items-center justify-center text-white shadow-lg">
                                <span className="font-bold">H</span>
                            </div>
                            <span className="font-sans font-black text-xl tracking-tight text-white">
                                Hang
                                <span className="text-[#C4C9FF]"> Bunchheng</span>
                            </span>
                        </Link>

                        <p className="text-zinc-400 font-medium text-sm leading-relaxed max-w-sm">
                            Engineering modular web ecosystems, robust Spring Boot APIs, and scalable Next.js interfaces.
                        </p>

                        <div className="flex items-center gap-1.5 text-zinc-500 font-mono text-xs uppercase tracking-widest mt-4">
                            <span>Engineered in</span>
                            <span className="text-[#C4C9FF] font-bold">Phnom Penh, Cambodia</span>
                        </div>
                    </div>

                    {/* Links Cols */}
                    <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">

                        {/* Column 1: Navigation (Hidden/Empty in original, keeping structure) */}
                        <div className="space-y-4">
                        </div>

                        {/* Column 2: Socials */}
                        <div className="space-y-4">
                            <h5 className="font-mono font-bold text-xs text-white tracking-widest uppercase">
                                Network
                            </h5>
                            <ul className="space-y-3 text-zinc-400 text-sm font-medium">
                                <li><Link href="https://github.com/bunchheng-cse" target="_blank" rel="noreferrer" className="hover:text-[#C4C9FF] transition-colors inline-block">GitHub ↗</Link></li>
                                <li><Link href="https://www.linkedin.com/in/hang-bunchheng-21b56728a/" target="_blank" rel="noreferrer" className="hover:text-[#C4C9FF] transition-colors inline-block">LinkedIn ↗</Link></li>
                                <li><Link href="https://t.me/bunchheng_hang" target="_blank" rel="noreferrer" className="hover:text-[#C4C9FF] transition-colors inline-block">Telegram ↗</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Contact */}
                        <div className="space-y-4 col-span-2 sm:col-span-1">
                            <h5 className="font-mono font-bold text-xs text-white tracking-widest uppercase">
                                Connect
                            </h5>
                            <ul className="space-y-3 text-zinc-400 text-sm font-medium">
                                <li><a href="mailto:bunchhenghangcs@gmail.com" className="hover:text-white transition-colors inline-block">Email Me</a></li>
                                <li><a href="tel:+855972093276" className="hover:text-white transition-colors inline-block">Call (+855 972093276)</a></li>
                                <li><a href="/Hang_Bunchheng_CV.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-block">Download Resume</a></li>
                            </ul>
                        </div>

                    </div>

                </div>

                {/* Bottom copyright rule */}
                <div className="mt-20 pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
                    <p className="text-zinc-500 font-medium text-xs">
                        © 2026 Hang Bunchheng. All rights reserved.
                    </p>
                    <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                        Full-Stack // Systems Architect // IT Admin
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;