import React from 'react';
import { RefreshCw, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

const WorkflowHighlight = () => {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-800/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Column: Stylized Graphics */}
                <div className="lg:col-span-5 order-2 lg:order-1 relative flex items-center justify-center">
                    {/* Main Visual Box */}
                    <div className="w-full max-w-105 bg-[#111111] border border-zinc-800/80 rounded-[32px] p-8 relative overflow-hidden shadow-2xl">

                        {/* Ambient glows */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C4C9FF]/10 rounded-full blur-2xl pointer-events-none"/>

                        <div className="space-y-6 relative z-10">
                            {/* Concept Row 1: Traditional Developer */}
                            <div className="bg-zinc-950/50 rounded-2xl border border-zinc-800/60 p-4 opacity-60 relative">
                                <span className="absolute top-2 right-2 text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
                                    Standard Dev
                                </span>
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                                        <RefreshCw className="w-4 h-4"/>
                                    </div>
                                    <div>
                                        <h5 className="font-sans font-bold text-sm text-zinc-300">Ticket Closer</h5>
                                        <p className="text-zinc-500 text-xs mt-1 leading-relaxed pr-6">
                                            Writes isolated functions. Leaves technical debt. Requires constant manual management.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Connector line */}
                            <div className="flex justify-center py-1">
                                <div className="w-0.5 h-6 border-l-2 border-dashed border-zinc-700"/>
                            </div>

                            {/* Concept Row 2: TCT Architecture (Vibrant Highlighted) */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-[#C4C9FF]/10 rounded-2xl border-2 border-[#C4C9FF] p-5 relative shadow-[0_0_30px_rgba(196,201,255,0.15)]"
                            >
                                <span className="absolute top-3 right-3 text-[9px] font-mono font-bold text-zinc-950 uppercase tracking-widest bg-[#C4C9FF] px-2 py-0.5 rounded">
                                    The TCT Approach
                                </span>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#C4C9FF] flex items-center justify-center text-zinc-950 shadow-md shrink-0">
                                        <Zap className="w-5 h-5 fill-current"/>
                                    </div>
                                    <div>
                                        <h5 className="font-sans font-black text-base text-white">Systems Architect</h5>
                                        <p className="text-zinc-300 text-xs mt-1.5 leading-relaxed pr-2">
                                            Builds modular, scalable ecosystems. Implements automated testing and comprehensive documentation.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Floating Tech Badge */}
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="z-10 absolute bottom-2 right-1 bg-[#FFD23F] border-2 border-zinc-950 px-4 py-2 rounded-xl shadow-lg font-mono text-[11px] font-black text-zinc-950 rotate-[-5deg] flex items-center gap-1.5"
                        >
                            <Sparkles className="w-3.5 h-3.5 fill-current"/>
                            <span>Built to scale.</span>
                        </motion.div>
                    </div>
                </div>

                {/* Right Column: Copywriting */}
                <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left pl-0 lg:pl-6">
                    <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C4C9FF] uppercase bg-[#C4C9FF]/10 border border-[#C4C9FF]/20 px-3 py-1.5 rounded-full mb-5">
                        Systematic Delivery
                    </span>
                    <h2 className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight leading-[1.1]">
                        Not just a coder. <br/>
                        A Systems Architect.
                    </h2>

                    <div className="space-y-6 mt-6 text-zinc-400 text-sm sm:text-base font-medium leading-relaxed">
                        <p>
                            Most developers focus purely on writing syntax to close the next ticket. This approach often leads to fragile codebases, undocumented logic, and systems that require constant manual intervention to stay afloat.
                        </p>
                        <p className="text-zinc-300">
                            <strong className="text-[#C4C9FF] font-bold">I build self-sustaining ecosystems.</strong> Whether I am deploying an algorithmic trading bot, optimizing a FiveM server core, or constructing a Next.js web application, I engineer systems that are modular, performant, and built to scale autonomously.
                        </p>
                        <p className="border-l-[3px] border-[#C4C9FF] pl-5 py-1 font-sans font-bold text-lg text-white/90 italic">
                            &#34;Writing code is the easy part. Designing resilient architecture is what creates lasting value.&#34;
                        </p>
                    </div>

                    {/* Quick specs list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mt-10 w-full border-t border-zinc-800/80 pt-8">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"/>
                            <span className="text-zinc-300 font-mono text-[11px] uppercase tracking-wider font-bold">Modular Architecture</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"/>
                            <span className="text-zinc-300 font-mono text-[11px] uppercase tracking-wider font-bold">Obsidian Documentation</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"/>
                            <span className="text-zinc-300 font-mono text-[11px] uppercase tracking-wider font-bold">Automated Workflows</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"/>
                            <span className="text-zinc-300 font-mono text-[11px] uppercase tracking-wider font-bold">Core Web Vitals Optimized</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WorkflowHighlight;