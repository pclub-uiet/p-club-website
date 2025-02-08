import Events from "../components/home/past_events/Events"
import { About } from "../components/home/about_us/About"
import Domains from "../components/home/domains/Domains"
import { Sessions } from "../components/home/upcoming_session/Session"
function Home() {
    return (
        <main>
            <About />
            <Domains />
            <Events />
            <Sessions />
        </main>
    )
}

export default Home
