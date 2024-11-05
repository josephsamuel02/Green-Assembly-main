/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        nunito: ["Nunito", " sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        courgette: ["Courgette", "cursive"],
      },
      backgroundImage: {
        AssemblyPhoto: "url('/img/green assembly photo.jpg')",
        bg1: "url('/img/green99.jpg')",
      },
    },
  },
  plugins: [],
};
