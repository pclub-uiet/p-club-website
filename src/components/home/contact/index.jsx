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

    gsap.to(textRef.current, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
        // markers: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const scale = 3.5 * progress; // Adjust the multiplier (15) to control maximum height

          gsap.set(textRef.current, {
            scaleY: scale,
            transformOrigin: "center center",
          });
        },
      },
    });
  });

  return (
    <section
      ref={sectionRef}
      className="bg-black h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="text-white font-extrabold text-[40vh]" ref={textRef}>
        CONTACT
      </div>
    </section>
  );
};

export default Contact;
