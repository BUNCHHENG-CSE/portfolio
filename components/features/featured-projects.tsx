import { motion } from "framer-motion";
import React from 'react';
import { ExternalLink,  Database, Gamepad2, LineChart, Code2 } from "lucide-react";

const projects = [
    {
        id: "tct-core",
        title: "TCT Core Framework",
        category: "Game Engineering",
        icon: <Gamepad2 className="w-5 h-5 text-amber-400" />,
        description: "A high-performance, modular framework built for FiveM. Features a seamless Lua-to-Next.js bridge, powering a monolithic, responsive user interface inspired by advanced roleplay architectures.",
        techStack: ["Next.js 15", "Lua", "Zustand", "TypeScript"],
        links: { github: "#", live: "#" },
        colSpan: "lg:col-span-8",
        bgPattern: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-[#111] to-[#111]"
    },
    {
        id: "smis",
        title: "SMIS Platform",
        category: "Enterprise Software",
        icon: <Database className="w-5 h-5 text-indigo-400" />,
        description: "A comprehensive academic management system. Engineered with modular CRUD logic, lecturer tracking, and granular role-based access control (RBAC) for administrative staff.",
        techStack: ["React", "Node.js", "Express", "MongoDB"],
        links: { github: "#" },
        colSpan: "lg:col-span-4",
        bgPattern: "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#111] to-[#111]"
    },
    {
        id: "algo-engine",
        title: "Execution & Trading Engine",
        category: "Algorithmic Automation",
        icon: <LineChart className="w-5 h-5 text-cyan-400" />,
        description: "A dual-purpose architecture featuring a Dockerized, multi-language code compiler (integrated with Monaco Editor) and automated Mean Reversion trading bots using Python Backtrader.",
        techStack: ["Python", "Docker", "Go", "Elysia.js"],
        links: { github: "#" },
        colSpan: "lg:col-span-5",
        bgPattern: "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#111] to-[#111]"
    },
    {
        id: "tct-ecommerce",
        title: "TCT E-Commerce",
        category: "Full-Stack Web",
        icon: <Code2 className="w-5 h-5 text-emerald-400" />,
        description: "A secure digital storefront integrating local phone validation logic with global payment sandboxes, including Stripe and PayPal, backed by scalable cloud database infrastructure.",
        techStack: ["Express", "MongoDB Atlas", "Stripe API"],
        links: { github: "#", live: "#" },
        colSpan: "lg:col-span-7",
        bgPattern: "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-[#111] to-[#111]"
    }
];

const FeaturedProjects = () => {
    return (
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-xs tracking-wide uppercase mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                        Selected Works
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight"
                    >
                        Proven Architecture. <br className="hidden sm:block"/>
                        <span className="text-zinc-500">Shipped Code.</span>
                    </motion.h3>
                </div>

                <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover:text-white font-mono text-sm uppercase tracking-widest transition-colors group pb-2"
                >
                    View Full Archive
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.a>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`group relative rounded-[32px] border border-zinc-800/60 hover:border-zinc-600/80 overflow-hidden ${project.bgPattern} ${project.colSpan} transition-colors duration-500 flex flex-col h-full min-h-[320px]`}
                    >
                        <div className="p-8 sm:p-10 flex flex-col h-full relative z-10">
                            {/* Card Header */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-xl backdrop-blur-sm">
                                        {project.icon}
                                    </div>
                                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Link Icons */}
                                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.links.github && (
                                        <a href={project.links.github} className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors">
                                            {/*<Github className="w-4 h-4" />*/}
                                            Github
                                        </a>
                                    )}
                                    {project.links.live && (
                                        <a href={project.links.live} className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors">
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="mt-auto">
                                <h4 className="font-sans font-black text-2xl sm:text-3xl text-white mb-4 tracking-tight">
                                    {project.title}
                                </h4>
                                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                                    {project.description}
                                </p>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800/80 text-zinc-300 font-mono text-[11px] uppercase tracking-wider font-semibold backdrop-blur-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProjects;