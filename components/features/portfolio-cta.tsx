"use client";

import { motion } from "framer-motion";
import React from 'react';
import { Mail, Send } from "lucide-react";

const PortfolioCta = () => {
    return (
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
            {/* Outer Banner Card */}
            <div className="bg-[#C7CEFF] rounded-[40px] border-[6px] border-[#0a0a0a] overflow-hidden p-8 sm:p-12 lg:p-16 relative shadow-[0_0_40px_rgba(199,206,255,0.1)]">

                {/* Background styling elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                    {/* Left Block: Content & Buttons */}
                    <div className="lg:col-span-7 text-left flex flex-col items-start">
                        <span className="text-[11px] font-mono font-bold tracking-widest text-[#111111] uppercase bg-[#111111]/10 px-4 py-1.5 rounded-full mb-6">
                            Open For Collaboration
                        </span>

                        <h2 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-[#111111] tracking-tight leading-[1.05]">
                            Let&#39;s engineer <br />
                            your next system.
                        </h2>

                        <p className="text-[#333333] text-base sm:text-lg font-medium mt-6 leading-relaxed max-w-md">
                            From scalable Next.js interfaces and robust Spring Boot APIs to enterprise system administration and network operations.
                        </p>

                        {/* Buttons Group */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto">
                            <motion.a
                                href="mailto:bunchhenghangcs@gmail.com"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[#111111] hover:bg-[#222222] text-white font-sans font-black px-8 py-4 rounded-full flex items-center justify-center gap-2.5 shadow-xl transition-all text-base"
                            >
                                <span>Get in Touch</span>
                                <Mail className="w-5 h-5 text-[#C7CEFF]" />
                            </motion.a>

                            <motion.a
                                href="https://github.com/bunchheng-cse"
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white hover:bg-zinc-50 text-[#111111] font-sans font-black px-8 py-4 rounded-full flex items-center justify-center gap-2.5 shadow-md transition-all text-base"
                            >
                                <span>GitHub Profile</span>
                            </motion.a>
                        </div>

                        <div className="flex flex-col space-y-1 mt-8">
                            <span className="text-[11px] font-mono text-[#111111]/80 font-bold tracking-widest uppercase">
                                * LOC: St 369 Sangkat Praek Thmei, Khan Chbar Ampov, Phnom Penh
                            </span>
                            <span className="text-[11px] font-mono text-[#111111]/80 font-bold tracking-widest uppercase">
                                * TZ: Phnom Penh / Indochina Time
                            </span>
                            <span className="text-[11px] font-mono text-[#111111]/80 font-bold tracking-widest uppercase">
                                * TEL: +855 972093276
                            </span>
                        </div>
                    </div>

                    {/* Right Graphic: Animated Form matching the reference image */}
                    <div className="lg:col-span-5 hidden lg:flex items-center justify-center w-full relative">

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full max-w-md relative"
                        >
                            {/* Floating Yellow Badge (Moved inside motion.div for synced animation) */}
                            <div className="absolute -top-5 right-2 z-20 bg-[#FFD23F] border-2 border-[#111111] rounded-[10px] px-3 py-1 shadow-md rotate-6">
                                <p className="font-sans font-black text-[13px] text-[#111111] leading-none">
                                    Status: Online
                                </p>
                            </div>

                            {/* Form Container */}
                            <div className="bg-[#1c1c21] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden border border-[#2D313A] p-6 sm:p-7">
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

                                    {/* Name Input */}
                                    <div className="space-y-1.5 text-left">
                                        <label className="text-xs font-mono font-medium text-zinc-400 ml-1">visitor.name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-[#111111] border border-[#2D313A] rounded-xl px-4 py-3.5 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-[#C7CEFF] focus:ring-1 focus:ring-[#C7CEFF] transition-all text-sm"
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div className="space-y-1.5 text-left">
                                        <label className="text-xs font-mono font-medium text-zinc-400 ml-1">visitor.email</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-[#111111] border border-[#2D313A] rounded-xl px-4 py-3.5 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-[#C7CEFF] focus:ring-1 focus:ring-[#C7CEFF] transition-all text-sm"
                                        />
                                    </div>

                                    {/* Message Input */}
                                    <div className="space-y-1.5 text-left">
                                        <label className="text-xs font-mono font-medium text-zinc-400 ml-1">message.payload</label>
                                        <textarea
                                            rows={3}
                                            placeholder="How can we collaborate?"
                                            className="w-full bg-[#111111] border border-[#2D313A] rounded-xl px-4 py-3.5 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-[#C7CEFF] focus:ring-1 focus:ring-[#C7CEFF] transition-all resize-none text-sm"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-white hover:bg-zinc-200 text-[#111111] font-sans font-black text-[15px] py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg mt-2 cursor-pointer"
                                    >
                                        <span>Transmit Data</span>
                                        <Send size={18} strokeWidth={2.5} className={"text-[#111111]"} />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PortfolioCta;