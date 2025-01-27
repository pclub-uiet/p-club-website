import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, forwardRef } from "react";
import PropTypes from "prop-types";

const DEFAULT_CHARACTER_SET = Object.freeze("01".split(""));

const getRandomInt = (max) => Math.floor(Math.random() * max);

export const HyperText = forwardRef(
    (
        {
            children,
            className,
            duration = 800,
            delay = 0,
            startOnView = false,
            animateOnHover = true,
            characterSet = DEFAULT_CHARACTER_SET,
            ...props
        },
        ref
    ) => {
        const [displayText, setDisplayText] = useState(() =>
            children.split("")
        );
        const [isAnimating, setIsAnimating] = useState(false);
        const iterationCount = useRef(0);
        const elementRef = useRef(null);

        const combinedRef = (node) => {
            elementRef.current = node;
            if (typeof ref === "function") {
                ref(node);
            } else if (ref) {
                ref.current = node;
            }
        };

        const handleAnimationTrigger = () => {
            if (animateOnHover && !isAnimating) {
                iterationCount.current = 0;
                setIsAnimating(true);
            }
        };

        useEffect(() => {
            if (!startOnView) {
                const startTimeout = setTimeout(() => {
                    setIsAnimating(true);
                }, delay);
                return () => clearTimeout(startTimeout);
            }

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setIsAnimating(true);
                        }, delay);
                        observer.disconnect();
                    }
                },
                { threshold: 0.1, rootMargin: "-30% 0px -30% 0px" }
            );

            if (elementRef.current) {
                observer.observe(elementRef.current);
            }

            return () => observer.disconnect();
        }, [delay, startOnView]);

        useEffect(() => {
            if (!isAnimating) return;

            const intervalDuration = duration / (children.length * 10);
            const maxIterations = children.length;

            const interval = setInterval(() => {
                if (iterationCount.current < maxIterations) {
                    setDisplayText((currentText) =>
                        currentText.map((letter, index) =>
                            letter === " "
                                ? letter
                                : index <= iterationCount.current
                                    ? children[index]
                                    : characterSet[getRandomInt(characterSet.length)]
                        )
                    );
                    iterationCount.current = iterationCount.current + 0.1;
                } else {
                    setIsAnimating(false);
                    clearInterval(interval);
                }
            }, intervalDuration);

            return () => clearInterval(interval);
        }, [children, duration, isAnimating, characterSet]);

        return (
            <motion.div
                ref={combinedRef}
                className={cn(
                    "overflow-hidden py-2",
                    className
                )}
                onMouseEnter={handleAnimationTrigger}
                {...props}
            >
                <AnimatePresence>
                    {displayText.map((letter, index) => (
                        <motion.span
                            key={index}
                            className={cn("font-sans", letter === " " ? "w-3" : "")}
                        >
                            {letter.toUpperCase()}
                        </motion.span>
                    ))}
                </AnimatePresence>
            </motion.div>
        )
    }
);

HyperText.displayName = "HyperText";
HyperText.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    duration: PropTypes.number,
    delay: PropTypes.number,
    startOnView: PropTypes.bool,
    animateOnHover: PropTypes.bool,
    characterSet: PropTypes.arrayOf(PropTypes.string)
};