"use client"
import {useEffect, useState} from "react";
import Footer from "@/components/features/footer";
import {motion} from "framer-motion";
import Navbar from "@/components/features/navbar";
import HeroSection from "@/components/features/hero-section";
import PortfolioTechStack from "@/components/features/portfolio-tech-stack";
import FeaturedProjects from "@/components/features/featured-projects";
import ExperienceSection from "@/components/features/experience-section";
import PortfolioCta from "@/components/features/portfolio-cta";
import AboutSection from "@/components/features/about-section";


export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest("a");

            if (anchor) {
                const href = anchor.getAttribute("href");
                if (href) {
                    if (href === "#") {
                        e.preventDefault();
                        window.scrollTo({top: 0, behavior: "smooth"});
                    } else if (href.startsWith("#") && href.length > 1) {
                        e.preventDefault();
                        const targetId = href.substring(1);
                        const element = document.getElementById(targetId);
                        if (element) {
                            // Smooth scroll with custom offset so section header is perfectly positioned
                            const yOffset = -90;
                            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                            window.scrollTo({top: y, behavior: "smooth"});
                        }
                    }
                }
            }
        };

        document.addEventListener("click", handleAnchorClick);
        return () => document.removeEventListener("click", handleAnchorClick);
    }, []);
    return (
        <div
            className="min-h-screen bg-zinc-950 font-sans text-white overflow-hidden selection:bg-[#a4a6ff] selection:text-zinc-950 w-full">
            <Navbar isScrolled={isScrolled}/>
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-250 pointer-events-none -z-10">
                <div
                    className="absolute top-24 left-1/4 w-100 h-100 bg-indigo-600/5 rounded-full blur-[120px]"/>
                <div
                    className="absolute top-48 right-1/4 w-125 h-125 bg-purple-600/5 rounded-full blur-[140px]"/>
            </div>
            <motion.div
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, ease: "easeOut"}}
            >
                <HeroSection/>
            </motion.div>
            <PortfolioTechStack/>
            <AboutSection/>
            <FeaturedProjects/>
            <ExperienceSection/>
            <PortfolioCta/>
            <Footer/>

        </div>
    );
}
