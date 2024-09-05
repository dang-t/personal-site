"use client"
import { Socials } from "@/_data/socials";
import { motion } from "framer-motion";
import Link from "@/_components/Link";

export default function Page() {
    return (
        <>
            <section id="cover" className="relative grow mt-[124px] h-[calc(100vh-124px)]">
                <div id="intro" className="max-w-sm sm:max-w-md">Hello, I'm a computer science student from Virginia learning everything and anything I can about software.</div>
                <motion.div
                    className="sm:absolute sm:bottom-0 sm:left-0 flex flex-col sm:flex-row gap-2 sm:gap-6 w-full mt-16 sm:mb-[64px]"
                    transition={{ staggerChildren: 0.15 }}
                    initial="hidden"
                    animate="visible"
                >
                    {[...Socials, {
                        name: "Resume / CV",
                        url: "https://drive.google.com/file/d/1ePo9Eg6InDJBIFh3wrRuz_1Cj0ZsI3IL/view?usp=sharing"
                    }].map((social) => (
                        <motion.span key={social.name} variants={{
                            hidden: { opacity: 0, translateX: -10, filter: "blur(3px)" },
                            visible: { opacity: 1, translateX: 0, filter: "blur(0px)" }
                        }}>
                            <Link title={social.name} href={social.url} target="_blank" />
                        </motion.span>
                    ))}
                </motion.div>
            </section>
        </>
    )
}