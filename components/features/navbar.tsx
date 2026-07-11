"use client"
import React, {useState} from 'react';
import {Menu, X} from "lucide-react";
import Link from "next/link";
import {scrollToSection} from "@/lib/scroll-to-section";

interface NavbarProps {
    isScrolled: boolean;
}

const Navbar = ({isScrolled}: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        {name: "Projects", href: "#projects"},
        {name: "Experience", href: "#experience"},
        {name: "Contact", href: "#contact"},
    ];
    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-500 ease-in-out ${
                isScrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-zinc-800/50 shadow-xl" : "bg-transparent"
            }`}>
            <div
                className={`container mx-auto px-4 lg:px-6 lg:pl-12 flex items-center justify-between transition-all duration-300 ${
                    isScrolled ? "py-4" : "py-8"
                }`}>

                {/* Logo */}
                <div className="flex items-center">
                    <Link href="#" onClick={(e) => scrollToSection("#", e)} className="flex items-center gap-3 group">
                        <div
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-mono font-extrabold text-sm sm:text-lg tracking-tight shadow-md transition-all duration-500 group-hover:scale-105 ${
                                isScrolled ? "bg-white text-zinc-950" : "bg-white text-zinc-950"
                            }`}>
                            <span>A</span>
                        </div>
                        <span
                            className={`font-sans font-black text-xl sm:text-2xl tracking-tight ${isScrolled ? "text-white" : "text-black"} transition-colors duration-700`}>
                            Arzur<span className={isScrolled ? "text-[#C4C9FF]" : "text-zinc-800"}>.TCT</span>
                        </span>
                    </Link>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(link.href, e)}
                            className={`text-[18px] font-semibold transition-colors duration-300 hover:opacity-70 ${isScrolled?"text-zinc-300 hover:text-white":"text-zinc-950 hover:text-black font-semibold"}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:block">
                    <button
                        onClick={(e) => scrollToSection("#about", e)}
                        className={`font-semibold text-[15px] px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-95 active:scale-90 ${
                            isScrolled ? "bg-[#C4C9FF] text-zinc-950" : "bg-zinc-900 text-white border border-zinc-800"
                        }`}
                    >
                        About Me
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="lg:hidden text-white transition-colors duration-300"
                >
                    <Menu className="w-7 h-7"/>
                </button>

                {/* Mobile Overlay */}
                <div
                    className={`fixed inset-0 bg-black/50 transition-opacity duration-300 lg:hidden ${
                        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                    style={{top: '0px'}}
                    onClick={() => setIsOpen(false)}
                ></div>

                {/* Mobile Drawer (Matches original HTML translate-x-full behavior) */}
                <div
                    className={`fixed top-0 right-0 h-svh w-70 bg-[#0a0a0a] border-l border-zinc-800 p-8 pt-20 flex flex-col gap-6 lg:hidden shadow-2xl transition-transform duration-300 ease-out ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-5 right-5 text-white p-2"
                    >
                        <X className="w-6 h-6"/>
                    </button>

                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(link.href, e)}
                            className="text-zinc-200 text-[18px] font-semibold hover:text-[#C4C9FF] transition-colors border-b border-zinc-800/50 pb-2"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <button
                        onClick={(e) => scrollToSection("#about", e)}
                        className="bg-[#C4C9FF] text-zinc-950 font-semibold text-[15px] px-6 py-3 rounded-full w-full mt-4 hover:opacity-90 transition-opacity"
                    >
                        About Me
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;