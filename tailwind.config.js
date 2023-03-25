/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: { base: "1rem" },
      colors: {
        black: "#191A19",
        blue: "#2832C2",
        yellow: "#FFF734",
        green: "#68F590",
        grey: "#F3F3F3",
        "grey-light": "#FAFAFA",
        "green-light": "#d2eff1",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
