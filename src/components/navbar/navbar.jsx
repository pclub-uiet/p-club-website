"use client";
import { motion } from "framer-motion";
import { HyperText } from "../ui/hyper-text";
import Headroom from "react-headroom";

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Domains', href: '#domains' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    return (
        <Headroom style={{ zIndex: 50 }}>
            <nav className="bg-transparent py-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-theme-one text-theme-two rounded-full max-w-lg mx-auto"
                >
                    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                        <ul className="flex items-center justify-around gap-2 w-full">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="hover:text-text-secondary transition-colors"
                                    >
                                        <HyperText className="font-Roboto font-bold">{item.name}</HyperText>
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