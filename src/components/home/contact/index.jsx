import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.to(sectionRef.current, {
      ease: "power",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
        markers: true,
        onUpdate: (self) => {
          // Get the scroll progress (a value between 0 and 1)
          const progress = self.progress;

          // Map the progress to rotation degrees (e.g., from 90° to 0°)
          const rotationX = Math.min(45 - progress * 45, 90 - progress * 90); // Rotate from 90° to 0°

          const translateZ = 500 - progress * 500; // Adjust depth to prevent layout shifts
          // Apply the rotation to the text
          gsap.set(textRef.current, {
            rotationX: rotationX,
            translateZ: translateZ,
          });
        },
      },
    });
  });

  return (
    <section
      ref={sectionRef}
      className="bg-black h-screen flex items-start justify-center"
      style={{
        perspective: 1000,
      }}
    >
      <div
        className="text-white font-extrabold text-[40vh] leading-none"
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
        ref={textRef}
      >
        CONTACT
      </div>
    </section>
  );
};

export default Contact;
