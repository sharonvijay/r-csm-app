import Intro from '../components/Intro'
import Features from '../components/Features'
import Plans from '../components/Plans'
import Team from '../components/Team'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Intro/>
        <Features/>
        <Plans/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default Home