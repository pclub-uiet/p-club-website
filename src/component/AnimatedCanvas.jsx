import React from "react";
import { useAnimatedCanvas } from "../hooks/useAnimatedCanvas";
import { Lenis } from "./Lenis";

const AnimatedCanvas = () => {
  const frames = Array.from(
    { length: 50 },
    (_, index) => `/frames/frame-${index + 1}.jpg`,
  );

  const canvasRef = useAnimatedCanvas({
    frames,
  });

  return (
    <div id="page">
      <canvas ref={canvasRef} />
      <Lenis />
    </div>
  );
};

export default AnimatedCanvas;
