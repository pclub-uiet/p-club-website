import React, { useRef } from "react";
import { useHorizontalScroll } from "../../../hooks/useHorizontalScroll";
import gsap from "gsap";
import Card from "./Card";
import team from "./data.json";
import { SectionHeading } from "../../ui/section-heading";

export default function Team() {
  const containerRef = useRef(null);
  const sections = gsap.utils.toArray(".section");

  useHorizontalScroll(containerRef, sections);

  return (
    <div className="min-h-screen w-screen mt-[100px] space-y-10">
      <SectionHeading heading="Meet Our Team" />
      <div
        className="h-screen overflow-y-auto w-[400%] overflow-x-hidden flex flex-nowrap gap-10 px-5"
        ref={containerRef}
      >
        {team.map((member, i) => (
          <div key={i} className="w-screen section h-fit">
            <Card member={member} />
          </div>
        ))}
      </div>
    </div>
  );
}
