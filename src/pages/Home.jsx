import Events from "../components/home/past_events/Events";
import About from "../components/home/about_us/About";
import Domains from "../components/home/domains/Domains";
import Sessions from "../components/home/upcoming_session/Session";
// import AnimatedCanvas from "../components/home/hero_section/AnimatedCanvas";
import Contact from "../components/home/contact";
import Team from "../components/home/team";

function Home() {
  return (
    <main>
      {/* <AnimatedCanvas /> */}
      <About />
      <Domains />
      <Sessions />
      <Events />
      <Team />
      <Contact />
    </main>
  );
}

export default Home;
