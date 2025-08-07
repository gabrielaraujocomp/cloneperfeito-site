// tailwind.config.js

const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      // É AQUI DENTRO QUE VOCÊ ADICIONA AS FONTES
      fontFamily: {
        // Define a 'Inter' como a fonte padrão (sans-serif) do site.
        sans: ["Inter", ...fontFamily.sans],
        // Cria a classe 'font-clash' que usa a nossa fonte 'ClashDisplay'.
        // O nome 'ClashDisplay' aqui DEVE ser o mesmo do font-family no CSS.
        clash: ["ClashDisplay", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
