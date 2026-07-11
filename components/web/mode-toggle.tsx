"use client"

import {Moon, Sun} from "lucide-react"
import {useTheme} from "next-themes"
import React from "react";
import {Button} from "@/components/ui/button"
import {NavbarProps} from "@/types/navbar";

export function ModeToggle({isScrolled}: NavbarProps) {
    const {setTheme, resolvedTheme} = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Avoid hydration mismatch by only rendering icons on the client
    // eslint-disable-next-line react-hooks/set-state-in-effect
    React.useEffect(() => setMounted(true), [])

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }
    const renderThemeIcon = () => {
        if (!mounted) return <div className="h-4 w-4"/>;
        if (resolvedTheme === "dark") return <Moon className="h-4 w-4"/>;
        return <Sun className="h-4 w-4"/>;
    };
    return (
        <Button
            variant="ghost"
            size="icon"
            className={`h-11 w-11 rounded-full transition-all duration-300 hover:scale-95  font-semibold text-[15px]
            ${
                isScrolled ? "dark:bg-[#C4C9FF]  dark:text-zinc-950  bg-zinc-900  text-white " : " bg-white/50  text-zinc-950 hover:bg-white dark:bg-zinc-900  dark:text-white dark:hover:bg-zinc-800"
            }
          `}
            onClick={toggleTheme}
        >
            {renderThemeIcon()}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}