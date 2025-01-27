import { forwardRef } from "react"
import { CircularCarouselComp } from "../../ui/circular-carousel";
import "./domains.css";

// Forwarding ref for external control
const CircularCarousel = forwardRef(CircularCarouselComp);

// Colors for the carousel items
const colors = [
    "bg-red-400",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-lime-400",
    "bg-green-400",
    "bg-cyan-400",
    "bg-blue-400",
    "bg-indigo-400",
    "bg-purple-400",
    "bg-pink-400",
];

// Main Domains Component
function Domains() {
    return (
        <div className="w-full h-screen overflow-hidden">
            <div className="relative flex flex-col justify-center items-center h-full">
                <CircularCarousel>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div
                            key={i}
                            className={`flex select-none items-center justify-center rounded w-56 text-sm h-80 text-white font-bold ${colors[i % colors.length]
                                }`}
                        >
                            I am Number {i + 1}
                        </div>
                    ))}
                </CircularCarousel>
            </div>
        </div>
    );
}

export default Domains;