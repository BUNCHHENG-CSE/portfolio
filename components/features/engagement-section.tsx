import React from 'react';
import { ArrowRight, Star, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const consultingFeatures = [
    "Full-stack architecture & deployment",
    "Smart contract development & audits",
    "Custom FiveM core engineering",
    "Algorithmic trading bot setup",
    "Milestone-based delivery sprints",
    "Comprehensive technical documentation",
];

const dedicatedFeatures = [
    "Embedded technical leadership",
    "Long-term infrastructure maintenance",
    "Curriculum design & team mentoring",
    "Dedicated availability (Phnom Penh / Indochina Time)",
    "Ongoing smart contract & network secops",
    "SLA response guarantees for critical systems",
];

const EngagementSection = () => {
    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C4C9FF] uppercase bg-[#C4C9FF]/10 border border-[#C4C9FF]/20 px-4 py-1.5 rounded-full">
                    Collaboration Models
                </span>
                <h2 className="font-sans font-black text-4xl sm:text-5xl text-white mt-6 tracking-tight leading-[1.1]">
                    Ready to build <br className="hidden sm:block" />
                    something exceptional?
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed font-medium">
                    Whether you need a custom system built from scratch or a dedicated engineer to scale your existing infrastructure, I offer flexible engagement models.
                </p>
            </div>

            {/* Engagement Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-stretch max-w-5xl mx-auto">

                {/* Card 1: Consulting (Left/Main Highlight) */}
                <div className="lg:col-span-5 bg-[#111111] border-[3px] border-[#C4C9FF] rounded-[32px] p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between shadow-[0_0_40px_rgba(196,201,255,0.15)]">
                    {/* Highlight sticker */}
                    <div className="absolute top-5 right-5 bg-[#C4C9FF] text-zinc-950 font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                        <Star className="w-3 h-3 fill-current" />
                        <span>Available Now</span>
                    </div>

                    <div>
                        <div className="text-left mt-2">
                            <span className="font-mono font-bold text-xs uppercase tracking-widest text-[#C4C9FF]">
                                Project-Based
                            </span>

                            <div className="mt-4">
                                <span className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight">
                                    Consulting
                                </span>
                            </div>

                            <p className="text-zinc-300 text-sm mt-5 leading-relaxed max-w-md font-medium">
                                End-to-end delivery of specialized systems. Ideal for Next.js web applications, custom game cores, or decentralized protocols with clear scopes.
                            </p>
                        </div>

                        {/* Checklist */}
                        <div className="mt-10 space-y-4">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 block text-left">
                                Standard Deliverables:
                            </span>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 text-left">
                                {consultingFeatures.map((feat, index) => (
                                    <li key={index} className="flex items-start gap-3 text-zinc-300 text-xs sm:text-sm font-medium">
                                        <div className="w-5 h-5 rounded-full bg-[#C4C9FF]/10 text-[#C4C9FF] flex items-center justify-center shrink-0 font-bold mt-0.5">
                                            ✓
                                        </div>
                                        <span className="leading-tight">{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Action button */}
                    <div className="mt-12 text-left">
                        <motion.a
                            href="mailto:your.email@example.com"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-white hover:bg-zinc-200 text-zinc-950 font-sans font-black text-base py-4 rounded-full flex items-center justify-center gap-2 shadow-xl transition-all"
                        >
                            <span>Discuss a Project</span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                        <span className="text-[10px] font-mono text-zinc-500 block text-center mt-4 tracking-widest uppercase">
                            Usually responds within 24 hours
                        </span>
                    </div>
                </div>

                {/* Card 2: Dedicated / Full Time (Right Column) */}
                <div className="lg:col-span-5 bg-[#111111]/50 border border-zinc-800/80 rounded-[32px] p-8 sm:p-10 flex flex-col justify-between text-left backdrop-blur-sm">
                    <div>
                        <div className="mt-2">
                            <span className="font-mono font-bold text-xs uppercase tracking-widest text-zinc-500">
                                Long-Term Integration
                            </span>

                            <div className="mt-4">
                                <span className="font-sans font-black text-3xl sm:text-4xl text-zinc-300 tracking-tight">
                                    Dedicated Role
                                </span>
                            </div>

                            <p className="text-zinc-400 text-sm mt-5 leading-relaxed font-medium">
                                Deep integration into your engineering team. Ideal for enterprise tech leadership, ongoing smart contract security, and continuous architectural scaling.
                            </p>
                        </div>

                        {/* Checklist */}
                        <div className="mt-10 space-y-4">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-600 block">
                                Engagement Highlights:
                            </span>
                            <ul className="space-y-4">
                                {dedicatedFeatures.map((feat, index) => (
                                    <li key={index} className="flex items-start gap-3 text-zinc-400 text-xs sm:text-sm font-medium">
                                        <div className="w-5 h-5 rounded-full bg-zinc-800/80 text-zinc-500 flex items-center justify-center shrink-0 font-bold mt-0.5">
                                            ✓
                                        </div>
                                        <span className="leading-tight">{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Action button */}
                    <div className="mt-12 pt-8 border-t border-zinc-800/40">
                        <motion.a
                            href="#" // Link to your resume PDF
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 border border-zinc-700/50 font-sans font-bold text-sm py-4 rounded-full flex items-center justify-center gap-2 transition-all"
                        >
                            <Terminal className="w-4 h-4" />
                            <span>Request Resume</span>
                        </motion.a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default EngagementSection;