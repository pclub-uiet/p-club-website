import Events from "../components/home/past_events/Events";
import { About } from "../components/home/about_us/About";
import Domains from "../components/home/domains/Domains";
import AnimatedCanvas from "../components/home/hero_section/AnimatedCanvas";

function Home() {
  return (
    <main>
      <AnimatedCanvas />
      <About />
      <Domains />
      <Events />
    </main>
  );
}

export default Home;
