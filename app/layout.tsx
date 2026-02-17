import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'Portafolio Francis',
  description: 'Portafolio de Ingeniería Ambiental',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-fondo text-texto font-sans">
        <header className="text-center py-6 bg-gradient-to-r from-tierra to-terracota text-crema shadow-md">
          <h1 className="font-serif text-4xl tracking-wide">
            Francis Annet Velásquez Santos
          </h1>
          <p className="mt-2 text-arena text-lg">
            Estudiante de Ingeniería Ambiental
          </p>
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-tierra text-crema py-4 text-center text-sm">
          © 2026 Francis Annet Velásquez Santos — Portafolio Ambiental
        </footer>
      </body>
    </html>
  )
}

