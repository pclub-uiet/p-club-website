"use client";

import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";
import { BentoGridLayout } from "../ui/bento-grid"

export const InfiniteMovingCards = ({
    items,
    speed = "fast",
    pauseOnHover = true,
    className
}) => {
    const containerRef = React.useRef(null);
    const scrollerRef = React.useRef(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            containerRef.current.style.setProperty("--animation-direction", "reverse");
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}>
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}>
                {items.map((item, idx) => (
                    <li
                        className="max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-theme-one/50 px-8 py-6 md:w-[1000px] w-52"
                        style={{
                            background: "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
                        }}
                        key={idx}>
                        <BentoGridLayout items={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
