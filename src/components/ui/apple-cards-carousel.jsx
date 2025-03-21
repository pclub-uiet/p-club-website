"use client";
import React, {
    useEffect,
    useState,
    createContext,
} from "react";
import {
    IconArrowNarrowLeft,
    IconArrowNarrowRight,
} from "@tabler/icons-react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const CarouselContext = createContext({
    onCardClose: () => { },
    currentIndex: 0,
});

export const Carousel = ({
    items,
    initialScroll = 0
}) => {
    const carouselRef = React.useRef(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const handleCardClose = (index) => {
        if (carouselRef.current) {
            const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
            const gap = isMobile() ? 4 : 8;
            const scrollPosition = (cardWidth + gap) * (index + 1);
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
    };

    const isMobile = () => {
        return window && window.innerWidth < 768;
    };

    return (
        (<CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
            <div className="relative w-full">
                <div
                    className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
                    ref={carouselRef}
                    onScroll={checkScrollability}>
                    <div
                        className={cn(
                            "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
                        )}></div>

                    <div
                        className={cn(
                            "flex flex-row justify-start gap-4 pl-4", "mx-auto max-w-7xl"
                        )}>
                        {items.map((item, index) => (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.2 * index,
                                        ease: "easeOut",
                                        once: true,
                                    },
                                }}
                                key={"card" + index}
                                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl">
                                <Card card={item} />
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end gap-2 mr-10">
                    <button
                        className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}>
                        <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
                    </button>
                    <button
                        className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                        onClick={scrollRight}
                        disabled={!canScrollRight}>
                        <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
                    </button>
                </div>
            </div>
        </CarouselContext.Provider>)
    );
};

Carousel.propTypes = {
    items: PropTypes.array,
    initialScroll: PropTypes.number
};

export const Card = ({
    card,
    layout = false
}) => {

    return (<>
        <motion.button
            className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10">
            <div
                className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
            <div className="relative z-40 p-8">
                <motion.p
                    layoutId={layout ? `category-${card.category}` : undefined}
                    className="text-white text-sm md:text-base font-medium font-sans text-left">
                    {card.category}
                </motion.p>
            </div>
            <BlurImage
                src={card.src}
                className="object-cover h-full w-full absolute z-10 inset-0" />
        </motion.button>
    </>);
};

Card.propTypes = {
    card: PropTypes.shape({
        category: PropTypes.string.isRequired,
        src: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                src: PropTypes.string.isRequired
            })
        ]).isRequired
    }).isRequired,
    layout: PropTypes.bool
};

export const BlurImage = ({
    src,
    className,
    alt,
    ...rest
}) => {
    return (
        (<img
            className={cn("transition duration-300", className)}
            src={src}
            loading="lazy"
            alt={alt ? alt : "Background of a beautiful view"}
            {...rest} />)
    );
};

BlurImage.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    src: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            src: PropTypes.string.isRequired
        })
    ]).isRequired,
    className: PropTypes.string,
    alt: PropTypes.string
};
