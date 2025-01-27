import Events from "../components/home/past_events/Events"
import { About } from "../components/home/about_us/About"
import Domains from "../components/home/domains/Domains"
function Home() {
    return (
        <main>
            <About />
            <Events />
            <Domains />
        </main>
    )
}

export default Home
