import { forwardRef } from "react"
import { CircularCarouselComp } from "../../ui/circular-carousel";
import { SectionHeading } from "../../ui/section-heading";
import "./domains.css";
import { domains } from "./domainsList";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
const CircularCarousel = forwardRef(CircularCarouselComp);

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
                        {domains.map(domain =>
                            < div
                                key={domain.title}
                                className={`flex select-none items-center justify-center rounded lg:w-80 w-56 text-sm lg:h-80 h-64 text-white`}
                            >
                                <div
                                    className="group w-full cursor-pointer overflow-hidden relative card h-full rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent border-zinc-500 bg-center bg-cover"
                                    style={{
                                        backgroundImage: `url(${domain.bgImage})`
                                    }}
                                >
                                    <div className="text relative z-50">
                                        <h1 className="font-bold font-Roboto  text-xl md:text-3xl text-gray-50 relative">
                                            {domain.title}
                                        </h1>
                                        <p className="font-normal text-base font-Roboto text-gray-50 relative my-4">
                                            {domain.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </CircularCarousel>
                </motion.div>
                <p className="mt-10 font-light font-Roboto text-sm text-theme-one flex gap-2 items-center justify-center">Drag <ArrowRight size={16} /></p>
            </div>
        </section >
    );
}