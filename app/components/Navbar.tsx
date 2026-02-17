import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500 text-crema shadow-lg z-50"
      role="navigation"
      aria-label="Menú principal"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo o nombre */}
        <h1 className="font-serif text-2xl tracking-wide text-crema">
          🌿 Portafolio Francis
        </h1>

        {/* Enlaces */}
        <ul className="flex gap-8 font-sans text-base">
          <li>
            <Link
              href="/"
              className="hover:text-arena transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-crema rounded"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="#courses"
              className="hover:text-arena transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-crema rounded"
            >
              Cursos
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-arena transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-crema rounded"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
