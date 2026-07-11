"use client"
import React, { useState } from 'react';
import {Code2, LucideIcon, Terminal} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface ExperienceItem {
    id: string;
    name: string;
    shortName: string;
    icon: LucideIcon;
    title: string;
    desc: string;
    bullets: string[];
}

const experiences: ExperienceItem[] = [
    {
        id: "frontend-dev",
        name: "Freelance Frontend Developer",
        shortName: "Frontend",
        icon: Code2,
        title: "School Management System (SMIS)",
        desc: "Ongoing — Architecting and developing comprehensive administrative features for a School Management System. Focused on building a modular, high-performance interface utilizing modern frontend frameworks and intuitive UI libraries.",
        bullets: [
            "Engineered comprehensive administrative features and modular CRUD logic for a School Management System using Next.js.",
            "Designed and implemented complex UI modules, including schedule management, student attendance tracking, and lecturer assignments.",
            "Built responsive, accessible user interfaces utilizing Tailwind CSS and shadcn/ui, ensuring a seamless experience across all devices.",
            "Integrated frontend components with robust backend APIs, managing complex state and dynamic data flow efficiently.",
            "Implemented granular role-based access control (RBAC) for administrative staff and collaborated closely with team members during iterative feature development.",
        ]
    },
    {
        id: "sysadmin",
        name: "Desktop Administrator",
        shortName: "SysAdmin",
        icon: Terminal,
        title: "GAMMA X SOLUTION CO.,LTD",
        desc: "Nov 2024 - Nov 2025 — Managed enterprise IT operations, hardware configuration, and network infrastructure. Ensured seamless daily operations and workstation reliability for all organizational staff.",
        bullets: [
            "Maintained, configured, and installed desktop and laptop systems for end-users, ensuring optimal performance and stable network connectivity.",
            "Diagnosed and resolved complex hardware and software performance issues, proactively eliminating workstation bottlenecks.",
            "Troubleshot enterprise software applications, providing dedicated support for Microsoft Teams, Outlook, and essential office suites.",
            "Managed user accounts, access permissions, and assisted in comprehensive workstation setups for smooth employee onboarding.",
            "Collaborated directly with the broader IT and systems team to escalate complex technical issues and maintain reliable daily operations."
        ]
    }
];

const ExperienceSection = () => {
    const [activeTab, setActiveTab] = useState<string>("frontend-dev");
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
                                className={`flex items-center gap-4 px-5 py-4 rounded-xl font-sans font-bold text-sm text-left transition-all duration-300 shrink-0 lg:shrink ${
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
                <div className="lg:col-span-8 bg-[#111111] border border-zinc-800/80 rounded-[32px] overflow-hidden p-8 sm:p-10 min-h-120 flex flex-col justify-center shadow-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col h-full justify-center max-w-3xl"
                        >
                            {/* Text Info */}
                            <div className="flex flex-col text-left">
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
                                <ul className="mt-8 space-y-5">
                                    {currentExperience.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-4 text-zinc-300 text-sm font-medium">
                                            <span className="w-6 h-6 rounded-full bg-[#C4C9FF]/10 text-[#C4C9FF] flex items-center justify-center font-bold text-[11px] mt-0.5 shrink-0">
                                                ✓
                                            </span>
                                            <span className="leading-relaxed">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default ExperienceSection;