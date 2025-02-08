import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useAnimatedCanvas({ frames }) {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const imageSeqRef = useRef({ frame: 1 });

  useGSAP(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const frameCount = frames.length;

    // Preload images with Promise
    frames.forEach((src) => {
      const img = new Image();
      img.src = src;
      setImages((prev) => [...prev, img]);
    });

    // Render function
    const render = () => {
      const currentFrame = Math.round(imageSeqRef.current.frame);
      if (images[currentFrame]) {
        const img = images[currentFrame];
        const scale = Math.max(
          canvas.width / img.width,
          canvas.height / img.height,
        );
        const x = (canvas.width - img.width * scale) / 2;
        const y = (canvas.height - img.height * scale) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          x,
          y,
          img.width * scale,
          img.height * scale,
        );
      }
    };

    // Set up canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    setCanvasSize();

    gsap.to(imageSeqRef.current, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: canvas,
        start: "top top",
        end: "300% top",
        scroller: "#main",
        scrub: 0.5,
        pin: true,
        markers: true,
      },
      onUpdate: render,
    });
  });

  return canvasRef;
}
