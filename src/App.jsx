import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
import Loader from "./components/Loader"

function App() {
  const [lang, setLang] = useState("pl")
  const [isLoading, setIsLoading] = useState(true)

  const toggleLang = () => {
    setLang(lang === "pl" ? "en" : "pl")
  }

  useEffect(() => {
    // symulacja ładowania
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader lang={lang} />
  }

  return (
    <>
      <Navbar toggleLang={toggleLang} lang={lang} />
      <Hero lang={lang} />
      <Projects lang={lang} />
      <About lang={lang} />
      <Contact lang={lang} />
    </>
  )
}

export default App