/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        alex: ["Alexandria", "sans-serif"],
      },
      colors: {
        blue: "#4be1f4",
        pink: "#f87388",
        green: "#c8d316",
        purple: {
          300: "#e2c1f9",
          700: "#a36ffe",
        },
        yellow: {
          300: "#fffba8",
          500: "#ffc803",
        },
        orange: "#ff8135",
        grey: "#3a3a3a",
        bg: "#10151a",
      },
      gradientColorStops: {
        primary: "linear-gradient(to bottom, #2210E9 0%, #DE8686 100%)",
      },
      dropShadow: {
        "yellow-light": "0 0 60px rgba(229, 219, 64,.7)",
        "pink-light": "0 0 60px rgba(226, 193, 249,.7)",
      },
    },
  },
  plugins: [],
};
