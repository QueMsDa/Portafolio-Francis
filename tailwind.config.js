/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fondo: "#F5F5DC",     // Beige suave, base neutra
        tierra: "#8B6B4F",    // Marrón cálido, sobrio
        terracota: "#D2691E", // Acento moderno y terroso
        oliva: "#6B705C",     // Verde apagado, natural
        arena: "#EDE6DB",     // Arena clara, amigable a la vista
        crema: "#FAF3E0",     // Detalles luminosos
        gris: "#5C5C5C",      // Neutro elegante para texto secundario
      },
    },
  },
  plugins: [],
}
