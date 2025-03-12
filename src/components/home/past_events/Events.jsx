"use client";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
import { Carousel, CarouselContent, CarouselNavigation, CarouselIndicator, CarouselItem } from '../../ui/carousel';
import { SectionHeading } from "../../ui/section-heading";
import { SFD23, SFD24 } from "./eventsList";
import { motion } from "framer-motion";

export default function Events() {
    return (
        <section id="recap">
            <div
                className="relative flex flex-col justify-center items-center bg-grid-white/[0.05] bg-black rounded-md antialiased overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}>
                    <SectionHeading heading="Recap" />
                </motion.div>
                <motion.div className='relative w-full max-w-5xl'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}>
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem>
                                <InfiniteMovingCards items={SFD23} speed="fast" />
                            </CarouselItem>
                            <CarouselItem>
                                <InfiniteMovingCards items={SFD24} speed="fast" />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselNavigation alwaysShow />
                        <CarouselIndicator />
                    </Carousel>
                </motion.div>
            </div>
        </section>
    );
}