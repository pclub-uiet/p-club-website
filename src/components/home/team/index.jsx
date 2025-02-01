import React, { useRef } from "react";
import { useHorizontalScroll } from "../../../hooks/useHorizontalScroll";
import gsap from "gsap";

export default function Team() {
  const containerRef = useRef(null);
  const sections = gsap.utils.toArray(".section");

  useHorizontalScroll(containerRef, sections);

  return (
    <div
      className="h-screen overflow-y-auto w-[400%] overflow-x-hidden flex flex-nowrap"
      ref={containerRef}
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="section h-full w-screen bg-white">
          Section {i}
        </div>
      ))}
    </div>
  );
}
