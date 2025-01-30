import React, { useRef, useState } from "react";
import { useAnimatedCanvas } from "../../../hooks/useAnimatedCanvas";

const AnimatedCanvas = () => {
  const ref = useRef(null);
  const frames = Array.from(
    { length: 50 },
    (_, index) => `/frames/frame-${index + 1}.jpg`,
  );
  const [overlayText, setOverlayText] = useState("");

  const handleFrameRender = (currentFrame) => {
    const texts = [
      "Welcome!",
      "Let's go!",
      "Smooth Animation",
      "Awesome!",
      "Final Frame!",
    ];
    setOverlayText(
      texts[Math.floor((currentFrame / frames.length) * texts.length)] ||
        "Animating...",
    );
  };

  const { canvasRef, isScrolled } = useAnimatedCanvas({
    frames,
    containerRef: ref,
    onFrameRender: handleFrameRender,
  });

  return (
    <div className="relative overflow-auto" ref={ref}>
      <div className="w-screen h-screen relative">
        <canvas ref={canvasRef} />
        <div
          className={`${isScrolled ? "hidden" : "fixed"} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold`}
        >
          {overlayText}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCanvas;
