import Hero from "./components/Hero"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="text-gray-800">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App