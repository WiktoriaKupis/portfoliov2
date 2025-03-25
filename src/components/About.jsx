import { motion } from "framer-motion"

export default function About({ lang }) {
  return (
    <section className="bg-pastelMint py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">
          {lang === "pl" ? "🌼 O mnie" : "🌼 About Me"}
        </h2>

        {lang === "pl" ? (
          <>
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
          </>
        ) : (
          <>
            <p className="text-lg">
              Hi! My name is <strong>Wiktoria</strong> and I’m a junior developer with a broad range of skills. I build web applications using technologies like <strong>React, JavaScript, and Tailwind CSS</strong>, and I also have experience with <strong>desktop applications in C# and Windows Forms with .NET</strong>.
            </p>
            <p className="mt-4 text-lg">
              I have a solid foundation in many programming languages (such as Python, Java, C, HTML/CSS), which allows me to flexibly adapt to different projects and technologies. I love creating solutions that are not only functional but also visually pleasing – pastel UIs are my signature style 🎨💖
            </p>
            <p className="mt-4 text-lg">
              I’m looking for opportunities to grow in the IT field, where I can combine creativity with practical programming – both in frontend development and broader software development.
            </p>
          </>
        )}
      </motion.div>
    </section>
  )
}