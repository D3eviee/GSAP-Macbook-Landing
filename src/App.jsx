import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProductViewer from "./components/ProductViewer"
import { ScrollTrigger } from "gsap/all"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)

function App() { 
  return (
    <main>
      <Navbar/>
      <Hero/>
      <ProductViewer/>
    </main>
  )
}

export default App
