import { motion } from "framer-motion";
import React from 'react';
import { MessageSquareQuote } from "lucide-react";

const reviews = [
    {
        quote: "Bunchheng developed our administrative features with incredible attention to detail. The Next.js and Tailwind interfaces he built are responsive, accessible, and integrated perfectly with our backend APIs.",
        author: "Project Manager",
        title: "School Management System (SMIS)",
        avatarBg: "bg-[#C4C9FF]", // Periwinkle accent
        initials: "PM",
    },
    {
        quote: "His proactive approach to IT operations saved us countless hours. Whether it was troubleshooting software, managing user accounts, or ensuring network stability, he kept our enterprise hardware running flawlessly.",
        author: "IT Director",
        title: "GAMMA X SOLUTION CO.,LTD",
        avatarBg: "bg-cyan-400", // Tech cyan accent
        initials: "ID",
    },
    {
        quote: "An exceptional Computer Science student with a strong grasp of software architecture. His work on Spring Boot REST APIs and object-oriented projects demonstrates a maturity in building scalable systems.",
        author: "Academic Mentor",
        title: "Computer Science Faculty",
        avatarBg: "bg-emerald-400", // Success emerald accent
        initials: "AM",
    },
];

const Testimonials = () => {
    return (
        <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-800/40">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C4C9FF] uppercase bg-[#C4C9FF]/10 border border-[#C4C9FF]/20 px-4 py-1.5 rounded-full">
                    Peer Endorsements
                </span>
                <h2 className="font-sans font-black text-4xl sm:text-5xl text-white mt-6 tracking-tight">
                    Don&#39;t just take my word for it
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed font-medium">
                    Feedback from the project managers, IT directors, and academic mentors I have had the pleasure of working with.
                </p>
            </div>

            {/* Testimonials Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                {reviews.map((rev, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-8 rounded-[32px] bg-[#111111] border border-zinc-800/80 hover:border-zinc-700/80 transition-all flex flex-col justify-between text-left shadow-2xl relative group"
                    >
                        {/* Quote icon watermark decoration */}
                        <div className="absolute top-6 right-8 text-zinc-800/50 group-hover:text-zinc-700/50 transition-colors pointer-events-none select-none">
                            <MessageSquareQuote className="w-12 h-12 stroke-1" />
                        </div>

                        <div>
                            {/* Quote Content */}
                            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed italic relative z-10 font-medium">
                                &#34;{rev.quote}&#34;
                            </p>
                        </div>

                        {/* Author Profile section */}
                        <div className="flex items-center gap-4 mt-10 pt-6 border-t border-zinc-800/60">
                            {/* Circle Avatar badge */}
                            <div className={`w-12 h-12 rounded-full ${rev.avatarBg} text-zinc-950 font-sans font-black text-sm flex items-center justify-center shadow-lg`}>
                                {rev.initials}
                            </div>
                            <div>
                                <h4 className="font-sans font-bold text-base text-white tracking-tight">
                                    {rev.author}
                                </h4>
                                <p className="text-zinc-500 font-medium text-xs mt-0.5">
                                    {rev.title}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;