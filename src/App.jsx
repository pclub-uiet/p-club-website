import React from "react";
import { GSAP } from "./component/GSAP";
import AnimatedCanvas from "./component/AnimatedCanvas";

const App = () => {
  return (
    <div id="main">
      <GSAP />
      <AnimatedCanvas />
    </div>
  );
};

export default App;
