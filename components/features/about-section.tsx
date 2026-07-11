"use client"
import { motion } from "framer-motion";
import React from 'react';
import { BookOpen, Award } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-b border-zinc-800/40">

            {/* Ambient Background Glow matching the reference image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-zinc-800/20 via-transparent to-transparent blur-3xl pointer-events-none" />

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

                    {/* Floating Speech Bubble */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -20 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        animate={{ y: [0, -8, 0] }}
                        viewport={{ once: true }}
                        transition={{
                            default: { delay: 0.3, type: "spring", stiffness: 200 },
                            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="absolute top-12 -right-4 sm:-right-8 bg-[#FFD23F] text-zinc-950 font-sans font-black text-xl leading-tight px-5 py-3 rounded-2xl rounded-bl-none shadow-xl border-4 border-[#1c1c21] z-30 rotate-[5deg]"
                    >
                        let&#39;s <br/> build!
                    </motion.div>
                </div>

                {/* Right Column: Copywriting */}
                <div className="md:col-span-7 flex flex-col items-start text-left">

                    {/* Top Logo / Icon Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-14 h-14 bg-white rounded-[16px] flex items-center justify-center shadow-lg mb-8"
                    >
                        <span className="font-sans font-black text-2xl text-zinc-950 tracking-tighter">H</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight leading-[1.1]"
                    >
                        From studying algorithms to architecting systems.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 mt-8 text-zinc-400 text-base sm:text-lg leading-relaxed font-medium"
                    >
                        <p>
                            As a Computer Science student at the Royal University of Phnom Penh (2022 - 2025), my journey is driven by a deep passion for understanding new technologies and applying academic concepts to real-world software.
                        </p>
                        <p>
                            This academic foundation was further strengthened at the Samsung Innovation Campus, where I was awarded a scholarship for Coding and Programming by Python. This training fundamentally shapes how I write code—prioritizing clean logic, modular architecture, and scalable system design over quick fixes.
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
                            <span className="text-zinc-300 font-sans font-bold text-sm">BSc Computer Science</span>
                        </div>
                        <div className="flex items-center gap-3 bg-[#111111] border border-zinc-800/80 px-4 py-3 rounded-xl">
                            <Award className="w-5 h-5 text-cyan-400" />
                            <span className="text-zinc-300 font-sans font-bold text-sm">Samsung Scholar</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;