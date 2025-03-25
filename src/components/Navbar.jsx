function Navbar() {
    return (
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pastelPink">🌸 Wiktoria Dev</h1>
        <div className="space-x-4">
          <a href="#projects" className="text-pastelBlue hover:underline">Projekty</a>
          <a href="#about" className="text-pastelBlue hover:underline">O mnie</a>
          <a href="#contact" className="text-pastelBlue hover:underline">Kontakt</a>
        </div>
      </nav>
    )
  }
  
  export default Navbar