import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProductViewer from "./components/ProductViewer"
import { ScrollTrigger } from "gsap/all"
import gsap from "gsap"
import Showcase from "./components/Showcase"
import Performance from "./components/Performance"
import Highlights from "./components/Highlights"
import Features from "./components/Features"
import Footer from "./components/Footer"

gsap.registerPlugin(ScrollTrigger)

function App() { 
  return (
    <main>
      <Navbar/>
      <Hero/>
      <ProductViewer/>
      <Showcase/>
      <Performance/>
      <Features/>
      <Highlights/>
      <Footer/>
    </main>
  )
}

export default App
