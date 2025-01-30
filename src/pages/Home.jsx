import Events from "../components/home/past_events/Events"
import { About } from "../components/home/about_us/About"
import Domains from "../components/home/domains/Domains"
function Home() {
    return (
        <main>
            {/* <section className="h-screen flex justify-center items-center text-white">Hero</section> */}
            <About />
            <Domains />
            <Events />
        </main>
    )
}

export default Home
