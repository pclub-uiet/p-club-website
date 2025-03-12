"use client";;
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { node, number, bool, shape, func } from "prop-types";

export const Lens = ({ children, zoomFactor = 1.5, lensSize = 170, isStatic = false, position = { x: 200, y: 150 }, hovering, setHovering,
}) => {
    const containerRef = useRef(null);

    const [localIsHovering, setLocalIsHovering] = useState(false);

    const isHovering = hovering !== undefined ? hovering : localIsHovering;
    const setIsHovering = setHovering || setLocalIsHovering;

    const [mousePosition, setMousePosition] = useState({ x: 100, y: 100 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
    };

    return (
        (<div
            ref={containerRef}
            className="relative z-20 rounded-lg overflow-hidden"
            onMouseEnter={() => {
                setIsHovering(true);
            }}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}>
            {children}
            {isStatic ? (
                <div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.58 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute inset-0 overflow-hidden"
                        style={{
                            maskImage: `radial-gradient(circle ${lensSize / 2}px at ${position.x
                                }px ${position.y}px, black 100%, transparent 100%)`,
                            WebkitMaskImage: `radial-gradient(circle ${lensSize / 2}px at ${position.x
                                }px ${position.y}px, black 100%, transparent 100%)`,
                            transformOrigin: `${position.x}px ${position.y}px`,
                        }}>
                        <div
                            className="absolute inset-0"
                            style={{
                                transform: `scale(${zoomFactor})`,
                                transformOrigin: `${position.x}px ${position.y}px`,
                            }}>
                            {children}
                        </div>
                    </motion.div>
                </div>
            ) : (
                <AnimatePresence>
                    {isHovering && (
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.58 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="absolute inset-0 overflow-hidden"
                                style={{
                                    maskImage: `radial-gradient(circle ${lensSize / 2}px at ${mousePosition.x
                                        }px ${mousePosition.y}px, black 100%, transparent 100%)`,
                                    WebkitMaskImage: `radial-gradient(circle ${lensSize / 2
                                        }px at ${mousePosition.x}px ${mousePosition.y
                                        }px, black 100%, transparent 100%)`,
                                    transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
                                    zIndex: 50,
                                }}>
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        transform: `scale(${zoomFactor})`,
                                        transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
                                    }}>
                                    {children}
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            )}
        </div>)
    );
};
Lens.propTypes = {
    children: node.isRequired,
    zoomFactor: number,
    lensSize: number,
    isStatic: bool,
    position: shape({
        x: number,
        y: number,
    }),
    hovering: bool,
    setHovering: func,
}