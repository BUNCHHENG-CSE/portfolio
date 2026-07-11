import { motion } from "framer-motion";
import React from 'react';
import { Mail } from "lucide-react";

const PortfolioCta = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
            {/* Outer Banner Card - Matches Hero Section Color */}
            <div className="bg-[#C7CEFF] rounded-[40px] border-[6px] border-[#0a0a0a] overflow-hidden p-8 sm:p-12 lg:p-16 relative shadow-[0_0_40px_rgba(199,206,255,0.1)]">

                {/* Background styling elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                    {/* Left Block: Content & Buttons */}
                    <div className="lg:col-span-7 text-left flex flex-col items-start">
                        <span className="text-[11px] font-mono font-bold tracking-widest text-[#111111] uppercase bg-[#111111]/10 px-4 py-1.5 rounded-full mb-6">
                            Open For Collaboration
                        </span>

                        <h2 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-[#111111] tracking-tight leading-[1.05]">
                            Let&#39;s engineer <br />
                            your next system.
                        </h2>

                        <p className="text-[#333333] text-base sm:text-lg font-medium mt-6 leading-relaxed max-w-md">
                            From EVM smart contracts and algorithmic trading engines to high-performance Next.js interfaces and modular FiveM cores.
                        </p>

                        {/* Buttons Group */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto">
                            <motion.a
                                href="mailto:your.email@example.com"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[#111111] hover:bg-[#222222] text-white font-sans font-black px-8 py-4 rounded-full flex items-center justify-center gap-2.5 shadow-xl transition-all text-base"
                            >
                                <span>Get in Touch</span>
                                <Mail className="w-5 h-5 text-[#C7CEFF]" />
                            </motion.a>

                            <motion.a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white hover:bg-zinc-50 text-[#111111] font-sans font-black px-8 py-4 rounded-full flex items-center justify-center gap-2.5 shadow-md transition-all text-base"
                            >
                                <span>GitHub Profile</span>
                              Github
                            </motion.a>
                        </div>

                        <span className="text-[11px] font-mono text-[#111111]/60 font-bold mt-8 tracking-widest uppercase">
                            * Based in Phnom Penh • Available Worldwide
                        </span>
                    </div>

                    {/* Right Graphic: Animated Terminal replacing the Mascot */}
                    <div className="lg:col-span-5 hidden lg:flex items-center justify-center select-none w-full relative">

                        {/* Floating Yellow Badge */}
                        <div className="absolute -top-4 right-4 z-20 bg-[#FFD23F] border-[3px] border-[#111111] rounded-[12px] px-4 py-1.5 shadow-md rotate-[6deg]">
                            <p className="font-sans font-black text-sm text-[#111111] leading-none">
                                Status: Online
                            </p>
                        </div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full max-w-[380px] bg-[#111111] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden border-[4px] border-[#1c1c21] rotate-[2deg]"
                        >
                            {/* Terminal Header */}
                            <div className="bg-[#1c1c21] border-b border-zinc-800/80 px-4 py-3 flex items-center gap-2.5">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                                <div className="ml-2 text-xs font-mono text-zinc-500 font-medium">terminal</div>
                            </div>

                            {/* Terminal Body */}
                            <div className="p-6 font-mono text-[13px] leading-loose text-zinc-300 text-left">
                                <p><span className="text-[#A5D6FF]">tct@portfolio</span><span className="text-zinc-500">:~</span>$ ./initiate_contact.sh</p>
                                <p className="text-zinc-500 mt-2">{">"} Compiling project requirements...</p>
                                <p className="text-zinc-500">{">"} Establishing secure connection...</p>
                                <p className="text-[#79C0FF] mt-2 font-bold">Ready to build. Awaiting input...</p>
                                <p className="animate-pulse text-zinc-500 mt-2">_</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PortfolioCta;