import { motion } from "framer-motion"

const projects = [
  {
    name: "ToDo App",
    desc: {
      pl: "Lista zadań z edycją i filtrowaniem",
      en: "To-do list with editing and filtering",
    },
    link: "https://todo-pro-eta.vercel.app/",
    stack: ["React", "CSS", "LocalStorage"],
  },
  {
    name: "Portfolio 1.0",
    desc: {
      pl: "Moje pierwsze portfolio",
      en: "My very first portfolio",
    },
    link: "https://portfolio-jet-psi-44.vercel.app/",
    stack: ["HTML", "CSS", "JS"],
  },
  {
    name: "Sklep Seven",
    desc: {
      pl: "Frontend sklepu internetowego",
      en: "Frontend for an online shop",
    },
    link: "https://sklep-seven.vercel.app/",
    stack: ["React", "Tailwind", "Routing"],
  },
]

export default function Projects({ lang }) {
    return (
      <section id="projects" className="bg-pastelCream py-20 px-6">
        <h2 className="text-4xl text-center font-bold mb-12">
          {lang === "pl" ? "✨ Moje Projekty ✨" : "✨ My Projects ✨"}
        </h2>
  
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-pastelPink border border-pastelPink"
            >
              <h3 className="text-xl font-bold mb-2">{proj.name}</h3>
              <p className="mb-2">{lang === "pl" ? proj.desc.pl : proj.desc.en}</p>
  
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                {proj.stack.map((tech, idx) => (
                  <span key={idx} className="bg-pastelBlue px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
  
              {proj.link ? (
                <a
                  href={proj.link}
                  target="_blank"
                  className="text-pastelPink underline hover:font-bold"
                >
                  {lang === "pl" ? "Zobacz demo 💫" : "View demo 💫"}
                </a>
              ) : (
                <span className="text-gray-500 italic text-sm">
                  {lang === "pl" ? "Projekt lokalny" : "Local project"}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    )
  }