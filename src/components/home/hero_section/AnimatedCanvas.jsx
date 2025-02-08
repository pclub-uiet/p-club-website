import React, { useRef } from "react";
import { useAnimatedCanvas } from "../../../hooks/useAnimatedCanvas";

const AnimatedCanvas = () => {
  const containerRef = useRef(null);
  const frames = Array.from(
    { length: 50 },
    (_, index) => `/frames/frame-${index + 1}.jpg`,
  );

  const { canvasRef } = useAnimatedCanvas({
    frames,
    containerRef,
  });

  return (
    <div className="w-screen h-screen overflow-y-auto" ref={containerRef}>
      <canvas ref={canvasRef} />;
    </div>
  );
};

export default AnimatedCanvas;
