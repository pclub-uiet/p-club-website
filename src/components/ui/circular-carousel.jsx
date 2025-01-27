import { Children, useRef, useState, useImperativeHandle } from "react";
import PropTypes from "prop-types";

const lerp = (start, stop, amt) => (1 - amt) * start + amt * stop;

const ARC_SIZE = 120;

// Handles animations and movement logic for the circular carousel
const useCarouselMovement = ({ len, onSelect }) => {
    const indexRef = useRef(0);
    const prevDegRef = useRef(0);
    const nextDegRef = useRef(0);
    const rendering = useRef(false);
    const [deg, setDeg] = useState(0);


    const move = () => {
        const next = nextDegRef.current;
        const prev = prevDegRef.current;
        const interpolatedDeg = lerp(prev, next, 0.1);
        if (interpolatedDeg !== prev) {
            setDeg(interpolatedDeg);
            requestAnimationFrame(move);
        } else {
            rendering.current = false;
        }

        const index = Math.round(Math.abs(((interpolatedDeg / ARC_SIZE) * len) % len));
        if (index !== indexRef.current) {
            indexRef.current = index;
            onSelect && onSelect(index);
        }
        prevDegRef.current = interpolatedDeg;
    };

    const triggerMove = (delta) => {
        nextDegRef.current += delta;
        const maxDeg = -(ARC_SIZE - ARC_SIZE / len); // Limit rotation to bounds
        nextDegRef.current = Math.max(nextDegRef.current, maxDeg);
        nextDegRef.current = Math.min(nextDegRef.current, 0);

        if (!rendering.current) {
            rendering.current = true;
            requestAnimationFrame(move);
        }
    };

    return { deg, triggerMove, nextDegRef, indexRef };
};

// Handles pointer (mouse/touch) input for rotating the carousel
const usePointerControl = ({ len, triggerMove, nextDegRef, onSwapRight, indexRef }) => {
    const handlePointerDown = (e) => {
        const isTouch = e.type === "touchstart";
        const startX = isTouch ? e.touches[0].pageX : e.clientX;
        let prevTouchX;

        const onPointerMove = (event) => {
            const currentX = isTouch ? event.touches[0].pageX : event.clientX;
            const deltaX = currentX - (prevTouchX || startX);
            prevTouchX = currentX;
            triggerMove(deltaX / (isTouch ? 10 : 30));
        };

        const onPointerUp = () => {
            document.removeEventListener(isTouch ? "touchmove" : "mousemove", onPointerMove);
            document.removeEventListener(isTouch ? "touchend" : "mouseup", onPointerUp);

            const anglePerIndex = ARC_SIZE / len;
            const modDeg = nextDegRef.current % anglePerIndex;
            const correction =
                Math.abs(modDeg) < anglePerIndex / 2 ? -modDeg : anglePerIndex - Math.abs(modDeg);
            const correctionSign = Math.sign(nextDegRef.current);

            if (nextDegRef.current > 0 && onSwapRight && indexRef.current === 0) {
                onSwapRight();
            }

            triggerMove(correction * correctionSign);
        };

        document.addEventListener(isTouch ? "touchmove" : "mousemove", onPointerMove);
        document.addEventListener(isTouch ? "touchend" : "mouseup", onPointerUp);
    };

    return { handlePointerDown };
};

// CircularCarousel Component
export const CircularCarouselComp = ({ onSelect, onSwapRight, children }, ref) => {
    const len = Children.count(children);

    // Movement and animation logic
    const { deg, triggerMove, nextDegRef, indexRef } = useCarouselMovement({ len, onSelect });

    // Pointer input control
    const { handlePointerDown } = usePointerControl({ len, triggerMove, nextDegRef, onSwapRight, indexRef });

    // Expose `scrollTo` method for external control
    useImperativeHandle(ref, () => ({
        scrollTo: (index) => {
            const targetDeg = -(ARC_SIZE / len) * index;
            triggerMove(targetDeg - nextDegRef.current);
        },
    }));

    return (
        <div className="relative w-screen h-80 root">
            <div
                className="left-0 absolute w-full h-[300%]"
                onMouseDown={handlePointerDown}
                onTouchStart={handlePointerDown}
            >
                <div className="left-1/2 absolute h-screen transform -translate-x-1/2">
                    <div className="items"
                        style={{
                            transform: `rotate(${deg}deg)`,
                            transformOrigin: "center var(--origin)",
                        }}>
                        {Children.map(children, (child, i) => (
                            <div
                                key={i}
                                className="top-0 left-0 absolute rounded-[17px]"
                                style={{
                                    height: "var(--height)",
                                    transform: `translateX(-50%) rotate(${i * (ARC_SIZE / len)}deg)`,
                                    transformOrigin: "center var(--origin)",
                                }}
                            >
                                {child}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

CircularCarouselComp.propTypes = {
    onSelect: PropTypes.func,
    onSwapRight: PropTypes.func,
    children: PropTypes.node.isRequired,
};