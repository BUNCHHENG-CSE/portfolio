import { motion } from "framer-motion";
import React from 'react';
import { ArrowUpRight } from "lucide-react";

const services = [
    {
        id: "fullstack",
        badge: "Web Ecosystem",
        name: "Full-Stack Engineering",
        desc: "End-to-end development of scalable web applications, comprehensive administrative platforms, and responsive user interfaces.",
        color: "border-cyan-500/20 hover:border-cyan-500/50",
        glowColor: "group-hover:bg-cyan-500/10",
        accent: "text-cyan-400 bg-cyan-950/40 border border-cyan-500/20",
        dotColor: "bg-cyan-500/60",
        details: ["Next.js App Router", "React.js & Tailwind", "shadcn/ui Integration", "Python / Django"],
    },
    {
        id: "backend",
        badge: "Server & Logic",
        name: "Backend API Design",
        desc: "Engineering robust RESTful APIs, designing modular CRUD operations, and managing relational database architecture.",
        color: "border-[#C4C9FF]/20 hover:border-[#C4C9FF]/50",
        glowColor: "group-hover:bg-[#C4C9FF]/10",
        accent: "text-[#C4C9FF] bg-[#C4C9FF]/10 border border-[#C4C9FF]/20",
        dotColor: "bg-[#C4C9FF]/60",
        details: ["Java Spring Boot", "Express.js", "MySQL & PostgreSQL", "REST API Endpoints"],
    },
    {
        id: "systems",
        badge: "Infra & Hardware",
        name: "IT Systems Admin",
        desc: "Managing enterprise hardware configurations, ensuring stable network connectivity, and providing proactive workstation support.",
        color: "border-emerald-500/20 hover:border-emerald-500/50",
        glowColor: "group-hover:bg-emerald-500/10",
        accent: "text-emerald-400 bg-emerald-950/40 border border-emerald-500/20",
        dotColor: "bg-emerald-500/60",
        details: ["Network Troubleshooting", "Workstation Setup", "Enterprise Software", "User Management"],
    },
];

const ServicesSection = () => {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-800/40">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C4C9FF] uppercase">
                    Collaboration Domains
                </span>
                <h2 className="font-sans font-black text-3xl sm:text-4xl text-white mt-3 tracking-tight">
                    Dedicated Engineering Services
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed font-medium">
                    Whether you need a scalable Spring Boot API, a modern Next.js interface, or reliable enterprise IT infrastructure, I bring structural precision to the table.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        whileHover={{ y: -8 }}
                        className={`group relative p-8 rounded-3xl bg-[#111111] border ${service.color} transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl`}
                    >
                        {/* Soft Ambient Corner Glow */}
                        <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl transition-all duration-500 ${service.glowColor} pointer-events-none`} />

                        <div className="relative z-10">
                            {/* Header Badge */}
                            <div className="flex items-center justify-between">
                                <span className={`px-3 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase ${service.accent}`}>
                                    {service.badge}
                                </span>
                                {/* Arrow indicator */}
                                <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
                            </div>

                            {/* Title */}
                            <h3 className="font-sans font-black text-2xl text-white mt-8 tracking-tight">
                                {service.name}
                            </h3>

                            {/* Description */}
                            <p className="text-zinc-400 text-sm mt-3 leading-relaxed font-medium">
                                {service.desc}
                            </p>
                        </div>

                        {/* Service Feature bullet chips */}
                        <div className="mt-10 pt-6 border-t border-zinc-800/80 relative z-10">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 block mb-4 text-left">
                                Core Deliverables:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                                {service.details.map((detail, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className={`w-1.5 h-1.5 rounded-full ${service.dotColor}`} />
                                        <span className="text-zinc-300 font-semibold text-[11px] uppercase tracking-wider truncate">
                                            {detail}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;