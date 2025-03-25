export default function Navbar({ toggleLang, lang }) {
    return (
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pastelPink">🌸 Wiktoria Dev</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="bg-pastelBlue text-white px-4 py-2 rounded-full hover:scale-105 transition text-sm"
          >
            {lang === "pl" ? "EN" : "PL"}
          </button>
        </div>
      </nav>
    )
  }