export default function Contact() {
    return (
      <section className="bg-pastelPink text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">📫 Kontakt</h2>
        <p className="mb-4">Masz pytania lub chcesz współpracować?</p>
        <a
          href="mailto:kupisw7@gmail.com"
          className="bg-white text-pastelPink px-6 py-2 rounded-full shadow hover:scale-105 transition"
        >
          Napisz do mnie 💌
        </a>
  
        <div className="mt-6 flex justify-center gap-6 text-2xl">
          <a href="https://github.com/WiktoriaKupis" target="_blank">🌸 GitHub</a>
          <a href="https://linkedin.com/in/wiktoria-kupis" target="_blank">🌼 LinkedIn</a>
        </div>
      </section>
    )
  }