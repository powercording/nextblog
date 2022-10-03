/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{tsx, js, ts, jsx}",
    "./components/**/*.{tsx, ts, js, jsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "media",
  plugins: [require("@tailwindcss/forms")],
};
