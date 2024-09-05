"use client"
import { useEffect, useState } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { LuCloudMoon, LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import NextLink from "next/link";
import Link from "./Link";

export default function Header() {
    const [mounted, setMounted] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    const handleThemeChange = () => {
        if (theme === "system") {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme("light");
            } else {
                setTheme("dark");
            }
        } else {
            setTheme(theme === "dark" ? "light" : "dark");
        }
    }

    return (
        <header className="fixed top-0 bg-[--background] w-full h-[72px] px-8 py-6 z-10">
            <NextLink href={"/"} className="inline-flex items-center gap-2">
                <PiStarFourFill className="w-4 h-4" />
                <span className="font-display font-bold">Dang Tran</span>
            </NextLink>
            <div className="inline-flex items-center gap-6 float-right pt-0.5">
                <Link title="Projects" href="/#projects" />
                <Link title="About" href="/#about" />
                <Link title="Talks" href="/#talks" />
                {/* theme button */}
                <div className="w-6 h-6">
                    {!mounted ? null :
                        <button className="flex items-center justify-center" onClick={handleThemeChange}>
                            <motion.span
                                initial={{ opacity: 0, filter: "blur(3px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.2 }}
                            >
                                {theme === "dark"
                                    ? <LuCloudMoon className="w-5 h-5" />
                                    : <LuSun className="w-5 h-5" />
                                }
                            </motion.span>
                        </button>
                    }
                </div>
            </div>
            <div id="header-overlay" className="absolute top-full left-0 bg-gradient-to-t from-transparent to-[--background] backdrop-blur-sm w-full h-[44px] z-10" />
        </header>
    )
}