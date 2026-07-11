import type {Metadata} from "next";
import {Geist, Geist_Mono, Noto_Serif} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import React from "react";
import SmoothScroll from "@/components/web/smooth-scroll";
import {ThemeProvider} from "next-themes";

const notoSerif = Noto_Serif({subsets: ['latin'], variable: '--font-serif'});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Hang Bunchheng - Full Stack Developer",
    description: "Hang Bunchheng - Full Stack Developer",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            suppressHydrationWarning
            lang="en"
            className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-serif", notoSerif.variable)}
        >
        <body className="min-h-full flex flex-col">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <SmoothScroll>
                {children}
            </SmoothScroll>
        </ThemeProvider>
        </body>
        </html>
    );
}
