function Hero() {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-pastelBlue text-center px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hej! Jestem <span className="text-pastelPink">Ola</span> 💻
        </h1>
        <p className="text-xl max-w-xl">
          Frontend developerka z duszą artystki ✨ Uwielbiam pastelowe kolory, estetykę kawaii i czysty kod!
        </p>
        <a
          href="#projects"
          className="mt-6 bg-pastelPink text-white py-2 px-6 rounded-full hover:scale-105 transition"
        >
          Zobacz projekty 💕
        </a>
      </section>
    )
  }
  
  export default Hero