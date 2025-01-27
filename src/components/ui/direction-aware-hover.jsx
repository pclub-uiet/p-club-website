"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/utils";
import { string } from "prop-types"
export const DirectionAwareHover = ({ imageUrl, imageClassName, className }) => {
    const ref = useRef(null);

    const [direction, setDirection] = useState("left");

    const handleMouseEnter = (
        event
    ) => {
        if (!ref.current) return;

        const direction = getDirection(event, ref.current);
        console.log("direction", direction);
        switch (direction) {
            case 0:
                setDirection("top");
                break;
            case 1:
                setDirection("right");
                break;
            case 2:
                setDirection("bottom");
                break;
            case 3:
                setDirection("left");
                break;
            default:
                setDirection("left");
                break;
        }
    };

    const getDirection = (
        ev,
        obj
    ) => {
        const { width: w, height: h, left, top } = obj.getBoundingClientRect();
        const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
        const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
        const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
        return d;
    };

    return (
        (<motion.div
            onMouseEnter={handleMouseEnter}
            ref={ref}
            className={cn(
                "bg-transparent rounded-lg overflow-hidden group/card",
                className
            )}>
            <AnimatePresence mode="wait">
                <motion.div
                    className="relative"
                    initial="initial"
                    whileHover={direction}
                    exit="exit">
                    <motion.div
                        variants={variants}
                        className="relative"
                        transition={{
                            duration: 0.2,
                            ease: "easeOut",
                        }}>
                        <img
                            alt="image"
                            className={cn("h-full w-full object-cover object-center scale-[1.15]", imageClassName)}
                            src={imageUrl} />
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </motion.div>)
    );
};

const variants = {
    initial: {
        x: 0,
    },
    exit: {
        x: 0,
        y: 0,
    },
    top: {
        y: 20,
    },
    bottom: {
        y: -20,
    },
    left: {
        x: 20,
    },
    right: {
        x: -20,
    },
};

DirectionAwareHover.propTypes = {
    imageUrl: string.isRequired,
    imageClassName: string,
    className: string,
}