"use client"
import { useEffect, useState } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { LuCloudMoon, LuCloudSun } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import Link from "./Link";

export default function Header() {
    const pageSections = ["Projects", "About", "Talks"];
    const [mounted, setMounted] = useState<boolean>(false);
    const [mobile, setMobile] = useState<boolean>(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);

        if (!mounted) {
            setMobile(window.innerWidth < 640);
        }

        // on resize listen for mobile < 640px
        window.addEventListener("resize", () => {
            setMobile(window.innerWidth < 640);
        })
    }, [mounted])

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
            <NextLink href={"/#cover"} className="inline-flex items-center gap-2">
                <PiStarFourFill className="w-4 h-4" />
                <span className="font-display font-bold text-lg">Dang Tran</span>
            </NextLink>
            <div className="inline-flex items-center gap-6 float-right pt-0.5">
                <div className="flex gap-6">
                    <AnimatePresence>
                        {!mobile && (
                            <>
                                {pageSections.map((section) => (
                                    <motion.span
                                        key={section}
                                        initial={{ opacity: 0, translateX: 15, filter: "blur(3px)" }}
                                        animate={{ opacity: 1, translateX: 0, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, translateX: 15, filter: "blur(3px)" }}
                                    >
                                        <Link title={section} href={`/#${section.toLowerCase()}`} />
                                    </motion.span>
                                ))}
                            </>
                        )}
                    </AnimatePresence>
                </div>
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
                                    : <LuCloudSun className="w-5 h-5" />
                                }
                            </motion.span>
                        </button>
                    }
                </div>
            </div>
            <div id="blur-overlay-top" className="absolute top-full left-0 bg-gradient-to-t from-transparent to-[--background] backdrop-blur-[1px] w-full h-[44px] z-10" />
            <div id="blur-overlay-bottom" className="fixed bottom-0 left-0 bg-gradient-to-t from-[--background] to-transparent backdrop-blur-[1px] w-full h-[64px] z-10" />

            {/* mobile nav */}
            <span className="fixed bottom-0 left-1/2 -translate-x-1/2 z-20">
                <AnimatePresence>
                    {mobile && (
                        <motion.nav
                            className="flex justify-center bg-[--background] mb-10 border-[1px] border-black/20 dark:border-white/20 rounded-full overflow-hidden"
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 280 }}
                            exit={{ opacity: 0, width: 0 }}
                        >
                            {pageSections.map((section) => (
                                <NextLink
                                    key={section}
                                    className="group even:border-x-[1px] border-black/20 dark:border-white/20 px-1 py-1"
                                    href={`/#${section.toLowerCase()}`}
                                >
                                    <div className="group-hover:bg-black/10 dark:group-hover:bg-white/10 duration-100 px-4 py-1 rounded-full">
                                        <span>{section}</span>
                                    </div>
                                </NextLink>
                            ))}
                        </motion.nav>
                    )}
                </AnimatePresence>
            </span>
        </header >
    )
}