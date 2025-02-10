"use client";
import { motion } from "framer-motion";
import { HyperText } from "../ui/hyper-text";
import Headroom from "react-headroom";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Domains", href: "#domains" },
    { name: "Recap", href: "#recap" },
    { name: "Up Next", href: "#upnext" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <Headroom style={{ zIndex: 50 }}>
            <nav className="bg-transparent py-10 hidden sm:block">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-theme-one via-theme-four to-theme-five mx-auto rounded-full max-w-lg text-theme-two"
                >
                    <div className="flex justify-between items-center mx-auto px-4 py-4 container">
                        <ul className="flex justify-around items-center gap-2 w-full">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="hover:text-text-secondary transition-colors"
                                    >
                                        <HyperText className="font-bold font-Roboto">{item.name}</HyperText>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </nav>
        </Headroom>
    );
}
