import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-fondo min-h-screen flex flex-col">
      {/* Hero inicial con imagen ambiental */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-crema">
        <Image
          src="/hero-naturaleza.jpg" // coloca tu imagen en la carpeta /public
          alt="Naturaleza"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="relative z-10">
          <h1 className="text-5xl font-serif mb-4">
            Francis Annet Velásquez Santos
          </h1>
          <p className="text-xl mb-6">
            Ingeniería Ambiental — Comprometida con la sostenibilidad y las
            tecnologías limpias
          </p>
          <a
            href="#courses"
            className="bg-crema text-tierra px-6 py-3 rounded-lg shadow hover:bg-arena hover:text-texto transition"
          >
            Ver mis cursos
          </a>
        </div>
      </section>

      {/* Sección de cursos */}
      <section
        id="courses"
        className="p-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <div className="bg-crema shadow-md rounded-lg p-6 hover:scale-105 transition-transform cursor-pointer">
          <h2 className="text-tierra font-serif text-lg mb-2 flex items-center gap-2">
            💧 Hidrología
          </h2>
          <p className="text-gris font-sans">
            Estudio de los recursos hídricos y su gestión sostenible.
          </p>
        </div>
        <div className="bg-crema shadow-md rounded-lg p-6 hover:scale-105 transition-transform cursor-pointer">
          <h2 className="text-tierra font-serif text-lg mb-2 flex items-center gap-2">
            🌱 Tecnologías Limpias
          </h2>
          <p className="text-gris font-sans">
            Innovaciones para reducir impactos ambientales.
          </p>
        </div>
        <div className="bg-crema shadow-md rounded-lg p-6 hover:scale-105 transition-transform cursor-pointer">
          <h2 className="text-tierra font-serif text-lg mb-2 flex items-center gap-2">
            ⚠️ Riesgos Ambientales
          </h2>
          <p className="text-gris font-sans">
            Evaluación y mitigación de riesgos ecológicos.
          </p>
        </div>
      </section>

      {/* Footer elegante */}
      <footer className="bg-tierra text-crema py-6 text-center font-sans mt-auto">
        <p>© 2026 Francis Annet Velásquez Santos — Portafolio Ambiental</p>
        <p className="text-sm text-arena">
          Diseñado con Next.js + Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
