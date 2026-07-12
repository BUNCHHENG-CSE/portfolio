"use client"
import {motion} from "framer-motion";
import React from 'react';
import {scrollToSection} from "@/lib/scroll-to-section";
import {Rocket} from "lucide-react";
import {FaGithub} from "react-icons/fa6";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="pt-4 pb-12 px-4 max-w-[95%] lg:max-w-[85%] mx-auto relative ">
            {/* Periwinkle Main Card Container */}
            <div
                className="relative bg-primary/10 dark:bg-card lg:h-195 md:h-150 h-130 rounded-[32px] overflow-hidden px-6 sm:px-10 lg:px-12 border border-border shadow-2xl">

                {/* Background decorative faint shapes */}
                <div
                    className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"/>
                <div
                    className="absolute bottom-0 right-0 w-80 h-80 bg-chart-2/20 rounded-full blur-2xl pointer-events-none"/>

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
                                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground font-sans font-semibold text-xs tracking-wide uppercase mb-6 shadow-sm"
                            >
                                Available for new opportunities
                            </motion.div>

                            {/* Main Headline */}
                            <motion.h1
                                initial={{opacity: 0, y: 15}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: 0.1}}
                                className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-[1.05]"
                            >
                                Engineering Modular Web Systems & Responsive Interfaces
                            </motion.h1>

                            {/* Subtext description */}
                            <motion.p
                                initial={{opacity: 0, y: 15}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: 0.2}}
                                className="text-muted-foreground text-base sm:text-lg lg:text-xl font-medium mt-6 leading-relaxed max-w-xl"
                            >
                                I am a Computer Science student and Full Stack Developer building robust APIs and
                                responsive Next.js interfaces. From
                                <strong className="text-foreground font-extrabold"> mastering backend CRUD
                                    operations</strong> to
                                engineering <strong className="text-foreground font-extrabold">modern frontends.</strong>
                            </motion.p>

                            {/* Buttons Group */}
                            <motion.div
                                initial={{opacity: 0, y: 15}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: 0.3}}
                                className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
                            >
                                <motion.a
                                    href="#projects"
                                    onClick={(e) => scrollToSection("#projects", e)}
                                    whileHover={{scale: 1.03}}
                                    whileTap={{scale: 0.98}}
                                    className="bg-background hover:bg-muted text-foreground font-display font-black px-6 py-3.5 rounded-full flex items-center justify-center gap-2.5 shadow-md border-2 border-border transition-all text-base"
                                >
                                    <span> Explore Projects</span>
                                    <Rocket className="w-5 h-5 text-foreground"/>
                                </motion.a>

                                <Link
                                    href="https://github.com/BUNCHHENG-CSE"
                                    target={`_blank`}
                                    className="bg-foreground hover:opacity-90 text-background font-display font-black px-6 py-3.5 rounded-full flex items-center justify-center gap-2.5 shadow-md transition-all text-base"
                                >
                                    <span> GitHub</span>
                                    <FaGithub className="w-5 h-5 text-background"/>
                                </Link>
                            </motion.div>

                            {/* Bottom checklist notice */}
                            <motion.p
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.6, delay: 0.4}}
                                className="text-foreground/80 font-mono text-xs font-bold mt-6 flex items-center gap-2"
                            >
                                <span>Based in Phnom Penh</span>
                                <span className="opacity-50">•</span>
                                <span>Full-Stack</span>
                                <span className="opacity-50">•</span>
                                <span>Next.js</span>
                                <span className="opacity-50">•</span>
                                <span>Spring Boot</span>
                            </motion.p>
                        </div>

                        {/* Right Column: Code Editor */}
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
                                    className="absolute -top-10 right-4 sm:right-8 z-0 bg-primary border-4 border-border rounded-[16px] px-4 pt-2 pb-8 shadow-md ">
                                    <p className="font-sans font-black text-sm sm:text-base text-primary-foreground leading-none">
                                        Ready to ship.
                                    </p>
                                </div>

                                {/* Editor Window */}
                                <div
                                    className="bg-card rounded-[24px] border-4 border-border shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden relative z-10">

                                    {/* Editor Header */}
                                    <div
                                        className="bg-card border-b border-border/80 px-5 py-3.5 flex items-center gap-2.5">
                                        <div className="w-3 h-3 rounded-full bg-destructive"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                                        <div className="ml-4 text-xs font-mono text-muted-foreground font-medium">init.ts</div>
                                    </div>

                                    {/* Editor Body */}
                                    <div
                                        className="p-6 sm:p-8 font-mono text-[13px] sm:text-[14px] leading-loose text-foreground/80 text-left">
                                        <p><span className="text-chart-1">const</span> <span
                                            className="text-chart-2">developer</span> <span
                                            className="text-chart-1">=</span> {'{'}</p>
                                        <p className="pl-4 text-foreground">name: <span
                                            className="text-primary font-bold text-[1rem]">&#39;Hang Bunchheng&#39;</span>,</p>
                                        <p className="pl-4 text-foreground">focus: <span
                                            className="text-foreground">[</span><span
                                            className="text-primary">&#39;Next.js&#39;</span>, <span
                                            className="text-primary">&#39;Spring Boot&#39;</span>, <span
                                            className="text-primary">&#39;Python&#39;</span><span
                                            className="text-foreground">]</span>,</p>
                                        <p className="pl-4 text-foreground">projects: {'{'}</p>
                                        <p className="pl-8 text-foreground">backend: <span
                                            className="text-primary">&#39;Car Management API&#39;</span>,
                                        </p>
                                        <p className="pl-8 text-foreground">frontend: <span
                                            className="text-primary">&#39;SMIS Platform&#39;</span>,
                                        </p>
                                        <p className="pl-8 text-foreground">sysadmin: <span
                                            className="text-primary">&#39;Desktop Admin&#39;</span>
                                        </p>
                                        <p className="pl-4">{'}'}</p>
                                        <p>{'}'};</p>
                                        <br/>
                                        <p><span className="text-primary">developer</span>.<span
                                            className="text-foreground">execute</span>();</p>
                                        <p className="animate-pulse text-muted-foreground mt-2">_</p>
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