function Hero({ lang }) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-pastelBlue text-center px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {lang === "pl" ? "Hej! Jestem " : "Hi! I'm "}
          <span className="text-pastelPink">Wiktoria</span> 💻
        </h1>
        <p className="text-xl max-w-xl">
          {lang === "pl"
            ? "Developerka z duszą artystki ✨ Uwielbiam łączyć estetykę z technologią i tworzyć projekty z charakterem."
            : "A developer with a creative soul ✨ I love blending design with technology to create projects full of personality."}
        </p>
        <a
          href="#projects"
          className="mt-6 bg-pastelPink text-white py-2 px-6 rounded-full hover:scale-105 transition"
        >
          {lang === "pl" ? "Zobacz projekty 💕" : "See projects 💕"}
        </a>
      </section>
    )
  }
  
  export default Hero