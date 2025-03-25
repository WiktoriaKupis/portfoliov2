import { motion } from "framer-motion"

export default function Loader({ lang }) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-pastelPink z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="text-6xl"
      >
        🌸
      </motion.div>
      <p className="mt-4 text-white text-xl">
        {lang === "pl" ? "Wczytywanie..." : "Loading..."}
      </p>
    </div>
  )
}