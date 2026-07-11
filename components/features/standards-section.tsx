import React from 'react';
import {Check, Terminal, Star, X} from "lucide-react";
import { motion } from "framer-motion";

const comparisonData = [
    {
        feature: "Frontend Architecture",
        myApproach: "Next.js 15/16 App Router & Zustand",
        myOk: true,
        other: "Heavy Redux boilerplate & prop drilling",
        otherOk: false,
    },
    {
        feature: "Smart Contract Security",
        myApproach: "Gas-optimized, audited EVM logic",
        myOk: true,
        other: "Standard, unoptimized token templates",
        otherOk: false,
    },
    {
        feature: "Game Engine (FiveM)",
        myApproach: "Modular Lua-to-React UI bridges",
        myOk: true,
        other: "Heavy monolithic legacy scripts",
        otherOk: false,
    },
    {
        feature: "Algorithmic Trading",
        myApproach: "Backtrader-tested Mean Reversion",
        myOk: true,
        other: "Untested, manual execution scripts",
        otherOk: false,
    },
    {
        feature: "Infrastructure & Net",
        myApproach: "Secure Layer 3 Cisco Routing & VLANs",
        myOk: true,
        other: "Flat networks with default configs",
        otherOk: false,
    },
    {
        feature: "Mentorship & Code",
        myApproach: "Production-ready, documented syllabus",
        myOk: true,
        other: "Outdated, theoretical tutorials",
        otherOk: false,
    },
];

const StandardsSection = () => {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

            {/* Split top intro */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
                <div className="lg:col-span-6 text-left">
                    <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C4C9FF] uppercase">
                        Engineering Philosophy
                    </span>
                    <h2 className="font-sans font-black text-4xl sm:text-5xl text-white mt-3 leading-tight tracking-tight">
                        Code works. <br />
                        Architecture scales.
                    </h2>
                </div>
                <div className="lg:col-span-6 text-left">
                    <p className="text-zinc-400 text-base sm:text-lg font-medium leading-relaxed max-w-xl lg:ml-auto">
                        Writing syntax is the easy part. I focus on building resilient, modular systems—whether that means bridging Layer 2 rollups, optimizing game server ticks, or designing scalable full-stack applications.
                    </p>
                </div>
            </div>

            {/* Comparison Grid Table */}
            <div className="bg-[#111111] border border-zinc-800/80 rounded-[32px] p-6 sm:p-10 overflow-hidden shadow-2xl">
                <div className="overflow-x-auto w-full no-scrollbar">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                        <tr className="border-b border-zinc-800/80">
                            <th className="pb-6 font-sans font-bold text-zinc-400 text-sm w-1/3">Domain</th>
                            <th className="pb-6 font-sans font-bold text-white text-sm w-1/3">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-md bg-[#C4C9FF] flex items-center justify-center text-xs font-extrabold text-zinc-950">
                                        TCT
                                    </div>
                                    <span>The TCT Standard</span>
                                </div>
                            </th>
                            <th className="pb-6 font-sans font-bold text-zinc-500 text-sm w-1/3">Status Quo</th>
                        </tr>
                        </thead>

                        <tbody className="divide-y divide-zinc-800/40">
                        {comparisonData.map((row, index) => (
                            <tr key={index} className="group hover:bg-[#161618] transition-colors">
                                {/* Feature Title */}
                                <td className="py-5 pr-4 text-zinc-300 font-medium text-sm sm:text-base">
                                    {row.feature}
                                </td>

                                {/* My Approach Col */}
                                <td className="py-5 pr-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 stroke-[3]" />
                                        </div>
                                        <span className="text-white text-sm font-semibold">{row.myApproach}</span>
                                    </div>
                                </td>

                                {/* Other Approach Col */}
                                <td className="py-5">
                                    <div className="flex items-center gap-3 text-zinc-500">
                                        <div className="w-5 h-5 rounded-full bg-zinc-800/50 text-zinc-500 flex items-center justify-center shrink-0">
                                            <X className="w-3 h-3 stroke-[3]" />
                                        </div>
                                        <span className="text-zinc-500 text-sm font-medium">{row.other}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* CTA Banner below comparison */}
                <div className="mt-10 pt-10 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3 text-left">
                        <Star className="w-6 h-6 text-[#C4C9FF] animate-pulse shrink-0" />
                        <p className="text-zinc-300 text-sm font-medium">
                            Ready to upgrade your project&#39;s infrastructure or engineering curriculum?
                        </p>
                    </div>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-[#C4C9FF] hover:bg-[#b0b6ff] text-zinc-950 font-sans font-black text-sm rounded-full shadow-lg shadow-[#C4C9FF]/10 flex items-center gap-2 whitespace-nowrap"
                    >
                        <span>Let&#39;s collaborate</span>
                        <Terminal className="w-4 h-4" />
                    </motion.a>
                </div>
            </div>

        </section>
    );
};

export default StandardsSection;