import {motion} from "framer-motion";
import React from 'react';
import {scrollToSection} from "@/lib/scroll-to-section";
import {FileText, Rocket} from "lucide-react";
import {FaGithub} from "react-icons/fa6";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="pt-4 pb-12 px-4 max-w-[95%] lg:max-w-[85%] mx-auto relative ">
            {/* Periwinkle Main Card Container */}
            <div
                className="relative bg-[#c9c9ff] lg:h-195 md:h-150 h-130 rounded-[32px] overflow-hidden px-6 sm:px-10 lg:px-12 border-[#1c1c21] shadow-2xl">

                {/* Background decorative faint shapes */}
                <div
                    className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"/>
                <div
                    className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-2xl pointer-events-none"/>

                {/* Hero Section Split Layout */}
                <div className="flex flex-col justify-center h-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                        {/* Left Column: CTA & Content */}
                        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">

                            {/* Pill badge */}
                            <motion.div
                                initial={{opacity: 0, y: -10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#6565fb] text-white font-sans font-semibold text-xs tracking-wide uppercase mb-6 shadow-sm"
                            >
                                Available for new opportunities
                            </motion.div>

                            {/* Main Headline */}
                            <motion.h1
                                initial={{opacity: 0, y: 15}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: 0.1}}
                                className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-zinc-950 tracking-tight leading-[1.05]"
                            >
                                Engineering Modular Web & Web3 Systems
                            </motion.h1>

                            {/* Subtext description */}
                            <motion.p
                                initial={{opacity: 0, y: 15}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: 0.2}}
                                className="text-zinc-900/90 text-base sm:text-lg lg:text-xl font-medium mt-6 leading-relaxed max-w-xl"
                            >
                                I build high-performance Next.js interfaces, EVM smart contracts, and algorithmic
                                trading
                                architecture. From
                                <strong className="text-zinc-950 font-extrabold"> teaching the basics</strong> to
                                engineering <strong className="text-zinc-950 font-extrabold">complex custom
                                cores.</strong>
                            </motion.p>

                            {/* Buttons Group */}
                            <motion.div
                                initial={{opacity: 0, y: 15}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: 0.3}}
                                className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
                            >
                                <motion.a
                                    href="#pricing"
                                    onClick={(e) => scrollToSection("#pricing", e)}
                                    whileHover={{scale: 1.03}}
                                    whileTap={{scale: 0.98}}
                                    className="bg-white hover:bg-zinc-50 text-zinc-950 font-display font-black px-6 py-3.5 rounded-full flex items-center justify-center gap-2.5 shadow-md border-2 border-transparent transition-all text-base"
                                >
                                    <span> Explore Projects</span>
                                    <Rocket className="w-5 h-5 text-indigo-600"/>
                                </motion.a>

                                <Link
                                    href="https://github.com/BUNCHHENG-CSE"
                                    target={`_blank`}
                                    className="bg-zinc-950 hover:bg-zinc-900 text-white font-display font-black px-6 py-3.5 rounded-full flex items-center justify-center gap-2.5 shadow-md transition-all text-base"
                                >
                                    <span> GitHub</span>
                                    {/*<FileText className="w-5 h-5 text-[#a4a6ff]"/>*/}
                                    <FaGithub className="w-5 h-5 text-[#a4a6ff]"/>
                                </Link>
                            </motion.div>

                            {/* Bottom checklist notice */}
                            <motion.p
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.6, delay: 0.4}}
                                className="text-zinc-950/80 font-mono text-xs font-bold mt-6 flex items-center gap-2"
                            >
                                <span>Based in Phnom Penh</span>
                                <span className="opacity-50">•</span>
                                <span>Full-Stack</span>
                                <span className="opacity-50">•</span>
                                <span>Blockchain</span>
                            </motion.p>
                        </div>

                        {/* Right Column: Code Editor */}
                        {/* CHANGED: Replaced sm:hidden lg:block with hidden lg:flex */}
                        <div
                            className="lg:col-span-5 hidden lg:flex relative items-center justify-center select-none w-full h-full ">

                            {/* Main Wrapper: Handles floating animation and overall tilt */}
                            <motion.div
                                animate={{y: [0, -10, 0]}}
                                transition={{duration: 5, repeat: Infinity, ease: "easeInOut"}}
                                className="relative w-full max-w-105 z-10"
                            >
                                {/* Floating Badge */}
                                <div
                                    className="absolute -top-10 right-4 sm:right-8 z-0 bg-[#FFD23F] border-4 border-[#1c1c21] rounded-[16px] px-4 pt-2 pb-8 shadow-md ">
                                    <p className="font-sans font-black text-sm sm:text-base text-zinc-950 leading-none">
                                        Ready to ship.
                                    </p>
                                </div>

                                {/* Editor Window */}
                                <div
                                    className="bg-[#111111] rounded-[24px] border-4 border-[#1c1c21] shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden relative z-10">

                                    {/* Editor Header */}
                                    <div
                                        className="bg-[#1c1c21] border-b border-zinc-800/80 px-5 py-3.5 flex items-center gap-2.5">
                                        <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                                        <div className="ml-4 text-xs font-mono text-zinc-500 font-medium">init.ts</div>
                                    </div>

                                    {/* Editor Body */}
                                    <div
                                        className="p-6 sm:p-8 font-mono text-[13px] sm:text-[14px] leading-loose text-zinc-300 text-left">
                                        <p><span className="text-[#FF7B72]">const</span> <span
                                            className="text-[#79C0FF]">developer</span> <span
                                            className="text-[#FF7B72]">=</span> {'{'}</p>
                                        <p className="pl-4 text-[#D2A8FF]">name: <span
                                            className="text-[#A5D6FF]">&#39;TCT&#39;</span>,</p>
                                        <p className="pl-4 text-[#D2A8FF]">focus: <span
                                            className="text-zinc-300">[</span><span
                                            className="text-[#A5D6FF]">&#39;Next.js&#39;</span>, <span
                                            className="text-[#A5D6FF]">&#39;Solidity&#39;</span><span
                                            className="text-zinc-300">]</span>,</p>
                                        <p className="pl-4 text-[#D2A8FF]">projects: {'{'}</p>
                                        <p className="pl-8 text-[#D2A8FF]">ecommerce: <span
                                            className="text-[#A5D6FF]">&#39;TCT Store&#39;</span>,
                                        </p>
                                        <p className="pl-8 text-[#D2A8FF]">fiveM: <span
                                            className="text-[#A5D6FF]">&#39;TCT Core UI&#39;</span>,
                                        </p>
                                        <p className="pl-8 text-[#D2A8FF]">network: <span
                                            className="text-[#A5D6FF]">&#39;Cisco Infra&#39;</span>
                                        </p>
                                        <p className="pl-4">{'}'}</p>
                                        <p>{'}'};</p>
                                        <br/>
                                        <p><span className="text-[#79C0FF]">developer</span>.<span
                                            className="text-[#D2A8FF]">execute</span>();</p>
                                        <p className="animate-pulse text-zinc-500 mt-2">_</p>
                                    </div>
                                </div>

                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;