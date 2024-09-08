"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function Tooltip({
    children,
    tooltip
}: {
    children: React.ReactNode,
    tooltip: React.ReactNode
}) {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div className="relative">
            <span
                id="tooltip-target"
                onMouseOver={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {children}
            </span>
            <AnimatePresence initial={false}>
                {hovered && (
                    <motion.div
                        className="absolute mt-2 bg-[--background] p-1 border-[1px] border-black/20 dark:border-white/20 rounded origin-top-left z-50"
                        initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0, filter: "blur(5px)" }}
                    >
                        {tooltip}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}