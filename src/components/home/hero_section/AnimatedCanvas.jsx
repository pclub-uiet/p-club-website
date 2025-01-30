import React, { useRef } from "react";
import { useAnimatedCanvas } from "../../../hooks/useAnimatedCanvas";

const AnimatedCanvas = () => {
  const ref = useRef(null);
  const frames = Array.from(
    { length: 50 },
    (_, index) => `/frames/frame-${index + 1}.jpg`,
  );

  const canvasRef = useAnimatedCanvas({
    frames,
    containerRef: ref,
  });

  return (
    <div className="relative overflow-auto" ref={ref}>
      <div className="w-screen h-screen relative">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default AnimatedCanvas;
