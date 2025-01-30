import { forwardRef } from "react"
import { CircularCarouselComp } from "../../ui/circular-carousel";
import { SectionHeading } from "../../ui/section-heading";
import "./domains.css";
import { colors } from "./domainsList";
import { motion } from "framer-motion";
const CircularCarousel = forwardRef(CircularCarouselComp);

// Main Domains Component
export default function Domains() {
    return (
        <section className="w-full h-screen overflow-hidden select-none" id="domains">
            <div className="relative flex flex-col justify-center items-center h-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}>
                    <SectionHeading heading="Domains" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}>
                    <CircularCarousel>
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div
                                key={i}
                                className={`flex select-none items-center justify-center rounded w-56 text-sm h-80 text-white font-bold ${colors[i % colors.length]}`}
                            >
                                I am Number {i + 1}
                            </div>
                        ))}
                    </CircularCarousel>
                </motion.div>
            </div>
        </section>
    );
}