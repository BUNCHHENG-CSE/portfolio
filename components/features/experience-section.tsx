"use client"
import React, { useState } from 'react';
import { BookOpen, Code2, Gamepad2, Shield, Terminal } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface ExperienceItem {
    id: string;
    name: string;
    shortName: string;
    icon: any;
    title: string;
    desc: string;
    bullets: string[];
    codeSnippet: {
        file: string;
        code: React.ReactNode;
    };
}

const experiences: ExperienceItem[] = [
    {
        id: "instructor",
        name: "Technical Instructor",
        shortName: "Instructor",
        icon: BookOpen,
        title: "Shaping the Next Generation of Developers",
        desc: "Designing and delivering comprehensive frontend and full-stack curricula, breaking down complex modern web concepts into accessible, teachable modules for students.",
        bullets: [
            "Structured deep-dives into HTML, CSS, React, and modern TypeScript.",
            "Mentored students on advanced state management utilizing Zustand.",
            "Developed localized instructional content and Khmer translations.",
            "Architected the Academic Management System (SMIS) for practical application.",
        ],
        codeSnippet: {
            file: "syllabus.ts",
            code: (
                <>
                    <p><span className="text-pink-500">const</span> <span className="text-cyan-400">curriculum</span> = {'{'}</p>
                    <p className="pl-4">focus: <span className="text-amber-300">&#39;Modern Web&#39;</span>,</p>
                    <p className="pl-4">modules: [</p>
                    <p className="pl-8 text-amber-300">&#39;React Fundamentals&#39;</p>
                    <p className="pl-8 text-amber-300">&#39;Zustand State&#39;</p>
                    <p className="pl-8 text-amber-300">&#39;Next.js App Router&#39;</p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">language: <span className="text-amber-300">&#39;Khmer / English&#39;</span></p>
                    <p>{'}'};</p>
                </>
            )
        }
    },
    {
        id: "web3",
        name: "Web & Blockchain Eng",
        shortName: "Full-Stack",
        icon: Code2,
        title: "Architecting Decentralized Platforms",
        desc: "Building high-performance user interfaces with Next.js and integrating EVM-compatible smart contracts for modern web3 applications and e-commerce systems.",
        bullets: [
            "Built secure e-commerce platforms integrating Stripe & PayPal sandboxes.",
            "Implemented localized Cambodian phone number validation logic.",
            "Deployed Solidity smart contracts via Hardhat environments.",
            "Engineered asset bridges between Layer 1 and Layer 2 solutions.",
        ],
        codeSnippet: {
            file: "contract.sol",
            code: (
                <>
                    <p><span className="text-pink-500">pragma</span> solidity ^0.8.20;</p>
                    <br/>
                    <p><span className="text-pink-500">contract</span> <span className="text-emerald-400">TCTBridge</span> {'{'}</p>
                    <p className="pl-4"><span className="text-pink-500">function</span> <span className="text-cyan-400">bridgeAsset</span>() <span className="text-pink-500">external</span> {'{'}</p>
                    <p className="pl-8 text-zinc-500">// L1 to L2 bridge logic</p>
                    <p className="pl-8">require(msg.sender != address(0));</p>
                    <p className="pl-4">{'}'}</p>
                    <p>{'}'}</p>
                </>
            )
        }
    },
    {
        id: "game-engine",
        name: "Game Engine Modding",
        shortName: "FiveM",
        icon: Gamepad2,
        title: "Engineering Custom FiveM Frameworks",
        desc: "Developing 'TCT Core', a highly modular and performant Grand Theft Auto V server framework inspired by the NoPixel architecture.",
        bullets: [
            "Built custom monolithic UIs using a Lua-to-Next.js bridge.",
            "Optimized server-side event handling for maximum client FPS.",
            "Engineered modular logic for seamless feature integrations.",
            "Developed robust backend logging and administration tools.",
        ],
        codeSnippet: {
            file: "core_bridge.lua",
            code: (
                <>
                    <p><span className="text-pink-500">RegisterNetEvent</span>(<span className="text-amber-300">&#39;TCT:Sync&#39;</span>)</p>
                    <p><span className="text-pink-500">AddEventHandler</span>(<span className="text-amber-300">&#39;TCT:Sync&#39;</span>, <span className="text-pink-500">function</span>(data)</p>
                    <p className="pl-4 text-cyan-400">SendNUIMessage<span className="text-zinc-300">({'{'})</span></p>
                    <p className="pl-8">action = <span className="text-amber-300">&#39;UPDATE_HUD&#39;</span>,</p>
                    <p className="pl-8">payload = data</p>
                    <p className="pl-4">{'}'})</p>
                    <p><span className="text-pink-500">end</span>)</p>
                </>
            )
        }
    },
    {
        id: "secops",
        name: "Network & SecOps",
        shortName: "Security",
        icon: Shield,
        title: "Routing Enterprise Infrastructure",
        desc: "Managing advanced network configurations and conducting security research to analyze payloads and optimize endpoint performance.",
        bullets: [
            "Configured Cisco Layer 3 switching and inter-VLAN routing.",
            "Implemented robust DTP, VTP, and SVI protocols.",
            "Conducted endpoint stress testing and junk payload generation.",
            "Analyzed exfiltration logic in phishing kits via Python.",
        ],
        codeSnippet: {
            file: "router_config.ios",
            code: (
                <>
                    <p className="text-zinc-500">Router# configure terminal</p>
                    <p>Router(config)# interface vlan 10</p>
                    <p>Router(config-if)# ip address <span className="text-amber-300">192.168.10.1</span> <span className="text-amber-300">255.255.255.0</span></p>
                    <p>Router(config-if)# no shutdown</p>
                    <p>Router(config-if)# exit</p>
                    <p>Router(config)# ip routing</p>
                    <p className="text-zinc-500">Router(config)# _</p>
                </>
            )
        }
    },
];

const ExperienceSection = () => {
    const [activeTab, setActiveTab] = useState<string>("instructor");
    const currentExperience = experiences.find((t) => t.id === activeTab) || experiences[0];

    return (
        <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

            {/* Title block */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#C4C9FF] uppercase mb-4 bg-[#C4C9FF]/10 border border-[#C4C9FF]/20 px-4 py-1.5 rounded-full">
                    Professional Background
                </div>
                <h2 className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight">
                    Experience & Expertise
                </h2>
                <p className="text-zinc-400 text-base sm:text-lg mt-4 font-medium leading-relaxed max-w-2xl">
                    From designing comprehensive curricula to engineering high-performance web3 and networking systems.
                </p>
            </div>

            {/* Main Interactive Tabs Frame */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

                {/* Left Side: Tabs buttons */}
                <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 lg:overflow-visible no-scrollbar w-full">
                    {experiences.map((exp) => {
                        const IconComponent = exp.icon;
                        const isSelected = exp.id === activeTab;
                        return (
                            <button
                                key={exp.id}
                                onClick={() => setActiveTab(exp.id)}
                                className={`flex items-center gap-4 px-5 py-4 rounded-xl font-sans font-bold text-sm text-left transition-all duration-300 flex-shrink-0 lg:flex-shrink ${
                                    isSelected
                                        ? "bg-[#C4C9FF] text-zinc-950 shadow-lg border border-[#C4C9FF]"
                                        : "bg-[#111111] text-zinc-400 hover:text-white hover:bg-[#161618] border border-zinc-800/60"
                                }`}
                            >
                                <IconComponent className={`w-5 h-5 ${isSelected ? "text-zinc-950" : "text-zinc-500"}`} />
                                <span className="hidden lg:inline">{exp.name}</span>
                                <span className="lg:hidden">{exp.shortName}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Right Side: Animated Preview Card */}
                <div className="lg:col-span-8 bg-[#111111] border border-zinc-800/80 rounded-[32px] overflow-hidden p-8 sm:p-10 min-h-[480px] flex flex-col justify-between shadow-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center h-full"
                        >
                            {/* Text Info */}
                            <div className="md:col-span-7 flex flex-col text-left">
                                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C4C9FF]">
                                    Role Spotlight
                                </span>
                                <h3 className="font-sans font-black text-2xl sm:text-3xl text-white mt-3 leading-tight tracking-tight">
                                    {currentExperience.title}
                                </h3>
                                <p className="text-zinc-400 text-sm mt-4 leading-relaxed font-medium">
                                    {currentExperience.desc}
                                </p>

                                {/* Bullets */}
                                <ul className="mt-8 space-y-3.5">
                                    {currentExperience.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm font-medium">
                                            <span className="w-5 h-5 rounded-full bg-[#C4C9FF]/10 text-[#C4C9FF] flex items-center justify-center font-bold text-[10px] mt-0.5 shrink-0">
                                                ✓
                                            </span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Dynamic Code Window Display */}
                            <div className="md:col-span-5 flex justify-center items-center select-none pt-8 md:pt-0 w-full">
                                <div className="w-full bg-[#0a0a0a] rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden flex flex-col">
                                    {/* Editor Header */}
                                    <div className="bg-[#161618] border-b border-zinc-800/80 px-4 py-3 flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                                        <div className="ml-2 flex items-center gap-2 text-[10px] font-mono text-zinc-500 font-medium">
                                            <Terminal className="w-3 h-3" />
                                            {currentExperience.codeSnippet.file}
                                        </div>
                                    </div>
                                    {/* Editor Body */}
                                    <div className="p-5 font-mono text-[11px] sm:text-xs leading-loose text-zinc-300 text-left overflow-x-auto whitespace-pre">
                                        {currentExperience.codeSnippet.code}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default ExperienceSection;