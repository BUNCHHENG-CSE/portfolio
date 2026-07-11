import { motion } from "framer-motion";
import React from 'react';
import {  BookOpen, Cpu } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-b border-zinc-800/40">

            {/* Ambient Background Glow matching the reference image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-zinc-800/20 via-transparent to-transparent blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">

                {/* Left Column: Avatar & Floating Elements */}
                <div className="md:col-span-5 relative flex items-center justify-center pt-8 md:pt-0">

                    {/* Main Avatar Frame */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-[320px] aspect-4/5 bg-[#111111] rounded-[40px] border-[6px] border-[#1c1c21] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center group"
                    >

                        <div className="absolute inset-0 bg-linear-to-tr from-zinc-900 to-zinc-800 group-hover:scale-105 transition-transform duration-700 ease-out" />
                        {/*<User className="w-24 h-24 text-zinc-700 relative z-10" />*/}
                        <Image
                            src="/img1.jpg"
                            alt="avatar"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover relative z-0"
                        />
                        {/* Decorative internal UI elements */}
                        <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center justify-between z-20">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">Online</span>
                            </div>
                            <span className="text-[10px] font-mono text-zinc-400">Phnom Penh, KH</span>
                        </div>
                    </motion.div>

                    {/* Floating Speech Bubble (Matching the Corgi "Let's build!" bubble) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -20 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        animate={{ y: [0, -8, 0] }}
                        viewport={{ once: true }}
                        // CHANGED: Separated the 'default' entrance transition from the 'y' floating transition
                        transition={{
                            default: { delay: 0.3, type: "spring", stiffness: 200 },
                            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute top-12 -right-4 sm:-right-8 bg-[#FFD23F] text-zinc-950 font-sans font-black text-xl leading-tight px-5 py-3 rounded-2xl rounded-bl-none shadow-xl border-[4px] border-[#1c1c21] z-30 rotate-[5deg]"
                    >
                        let&#39;s <br/> build!
                    </motion.div>
                </div>

                {/* Right Column: Copywriting */}
                <div className="md:col-span-7 flex flex-col items-start text-left">

                    {/* Top Logo / Icon Box (Matches the white rounded box in the reference) */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-14 h-14 bg-white rounded-[16px] flex items-center justify-center shadow-lg mb-8"
                    >
                        <span className="font-sans font-black text-2xl text-zinc-950 tracking-tighter">TCT</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight leading-[1.1]"
                    >
                        From teaching the basics to architecting systems.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 mt-8 text-zinc-400 text-base sm:text-lg leading-relaxed font-medium"
                    >
                        <p>
                            I didn&#39;t just learn to code; I learned to teach it. As a technical instructor, my journey began by breaking down complex web concepts into digestible modules for aspiring developers.
                        </p>
                        <p>
                            That foundation in teaching fundamentally changed how I write software. I don&#39;t just hack things together. I prioritize clean, self-documenting code, modular architecture, and systems that are easy for teams to understand and scale.
                        </p>
                    </motion.div>

                    {/* Micro-skills highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 w-full"
                    >
                        <div className="flex items-center gap-3 bg-[#111111] border border-zinc-800/80 px-4 py-3 rounded-xl">
                            <BookOpen className="w-5 h-5 text-[#C4C9FF]" />
                            <span className="text-zinc-300 font-sans font-bold text-sm">Curriculum Designer</span>
                        </div>
                        <div className="flex items-center gap-3 bg-[#111111] border border-zinc-800/80 px-4 py-3 rounded-xl">
                            <Cpu className="w-5 h-5 text-cyan-400" />
                            <span className="text-zinc-300 font-sans font-bold text-sm">Systems Thinker</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;