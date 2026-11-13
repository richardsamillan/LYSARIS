/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2b2410",        // texto principal
        cream: "#f4eddc",      // fondo de la página
        paper: "#fffdf8",      // superficies claras (header, tarjetas)
        honey: "#f5c542",      // acento, botones
        honeyDeep: "#c9941f",  // hover y detalles dorados
      },
    },
  },
};
