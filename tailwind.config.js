/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        dark: "#111827",
      },
      backgroundImage: {
        'hero-bg': "url('../public/image.png')", // 🔹 Corrected Path
      },
    },
  },
  plugins: [],
};
