/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      head: ["Anton"],
      sub: ["Poppins"],
    },
    extend: {},
  },
  plugins: [],
});
