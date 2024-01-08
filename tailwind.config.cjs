/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-mid': 'pulse 3s ease-in-out infinite',
      },
      colors: {
        primary: "#111111",
        secondary: "#d0cecf]",
        tertiary: "#1e1e1e",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #1e1e1e",
        '5xl': '20px 20px 50px rgba(0, 0, 0, 0.5)',
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
