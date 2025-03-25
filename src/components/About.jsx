import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="bg-pastelMint py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">🌼 O mnie</h2>
        <p className="text-lg">
          Cześć! Mam na imię <strong>Wiktoria</strong> i jestem początkującą programistką z szerokim
          zakresem umiejętności. Tworzę aplikacje webowe z wykorzystaniem technologii takich jak 
          <strong> React, JavaScript, Tailwind CSS</strong>, ale mam też doświadczenie w programowaniu
          <strong> aplikacji desktopowych w C# i Windows Forms z .NET</strong>. 
        </p>
        <p className="mt-4 text-lg">
          Posiadam solidne podstawy wielu języków programowania (m.in. Python, Java, C, HTML/CSS), co pozwala mi elastycznie dostosowywać się do różnych projektów i technologii. Uwielbiam tworzyć rozwiązania, które są nie tylko funkcjonalne, ale też przyjemne wizualnie – pastelowy UI to mój znak rozpoznawczy 🎨💖
        </p>
        <p className="mt-4 text-lg">
          Szukam możliwości rozwoju w środowisku IT, gdzie mogę łączyć kreatywność z praktycznym programowaniem – zarówno po stronie frontendu, jak i w bardziej ogólnym rozwoju oprogramowania.
        </p>
      </motion.div>
    </section>
  )
}