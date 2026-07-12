import React from 'react';
import { FaPython ,FaReact,FaJava } from "react-icons/fa6";
import {RiTailwindCssFill} from "react-icons/ri";
import { BsJavascript } from "react-icons/bs";
const technologies = [
    {
        name: 'Python',
        svg: <FaPython className="w-6 h-6" />,
        fontClass: 'font-sans font-[500] tracking-tight',
    },
    {
        name: 'Next.js',
        svg: null,
        customRender: () => (
            <div className="flex items-baseline font-sans">
                <span className="font-extrabold text-[22px] tracking-tighter uppercase">
                    Next
                </span>
                <span className="font-semibold text-[16px] ml-px">
                    .js
                </span>
            </div>
        ),
    },
    {
        name: 'Tailwind',
        svg: <RiTailwindCssFill className="w-6 h-6" />,
        fontClass: 'font-sans font-[500] tracking-tight',
    },
    {
        name: 'React',
        svg: <FaReact className="w-6 h-6"/>,
        fontClass: 'font-sans font-[500] tracking-tight',
    },
    {
        name: 'GO',
        svg: null,
        customRender: () => (
            <span className="font-sans font-bold text-[22px] italic tracking-tight">
                GO
            </span>
        ),
    },
    {
        name: 'express',
        svg: null,
        customRender: () => (
            <span className="font-sans font-medium text-[22px] lowercase tracking-tight">
                express
            </span>
        ),
    },
    {
        name: 'Java',
        svg: <FaJava className="w-6 h-6"/>,
        fontClass: 'font-sans font-[500] tracking-tight',
    },
    {
        name: 'Javascript',
        svg: <BsJavascript className="w-6 h-6"/>,
        fontClass: 'font-sans font-[500] tracking-tight',
    },
];

export default function PortfolioTechStack() {
    return (
        <section className="py-10 sm:py-12 ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-muted-foreground text-[13px] sm:text-[14px] font-medium tracking-[1px] uppercase mb-8">
                    Core Technologies
                </p>

                {/* Responsive Logos Grid */}
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                    {technologies.map((tech, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-2.5 text-muted-foreground opacity-60 hover:opacity-100 hover:text-foreground transition-all duration-300 cursor-default"
                            title={tech.name}
                        >
                            {tech.customRender ? (
                                tech.customRender()
                            ) : (
                                <>
                                    {tech.svg}
                                    <span className={`text-[20px] ${tech.fontClass}`}>{tech.name}</span>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}