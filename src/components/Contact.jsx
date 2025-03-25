export default function Contact({ lang }) {
    return (
      <section className="bg-pastelPink text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          {lang === "pl" ? "📫 Kontakt" : "📫 Contact"}
        </h2>
  
        <p className="mb-4">
          {lang === "pl"
            ? "Masz pytania lub chcesz współpracować?"
            : "Got questions or want to collaborate?"}
        </p>
  
        <a
          href="mailto:kupisw7@gmail.com"
          className="bg-white text-pastelPink px-6 py-2 rounded-full shadow hover:scale-105 transition"
        >
          {lang === "pl" ? "Napisz do mnie 💌" : "Send me a message 💌"}
        </a>
  
        <div className="mt-6 flex justify-center gap-6 text-2xl">
          <a href="https://github.com/WiktoriaKupis" target="_blank" rel="noreferrer">
            🌸 GitHub
          </a>
          <a href="https://linkedin.com/in/wiktoria-kupis" target="_blank" rel="noreferrer">
            🌼 LinkedIn
          </a>
        </div>
      </section>
    )
  }