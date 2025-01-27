import gsap from "gsap";
import { useLayoutEffect } from "react";
import Tempus from "tempus";
import { ScrollTriggerConfig } from "./scroll-trigger";

export function GSAP({ scrollTrigger }) {
  useLayoutEffect(() => {
    gsap.defaults({ ease: "none" });

    gsap.ticker.lagSmoothing(0);
    gsap.ticker.remove(gsap.updateRoot);
    Tempus?.add((time) => {
      gsap.updateRoot(time / 1000);
    });
  }, []);

  return scrollTrigger && <ScrollTriggerConfig />;
}
