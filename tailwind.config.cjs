/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* primary */
        softBlue: "hsl(231, 69%, 60%)",
        softRed: "hsl(0, 94%, 66%)",
        /* neutral */
        grayishBlue: "hsl(229, 8%, 60%)",
        veryDarkBlue: "hsl(229, 31%, 21%)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      boxShadow: {
        s: "6px 1.5px 16.5px 5.5px #dddddd",
      },
      content: {
        "icon-error": 'url("./src/assets/images/icon-error.svg")',
      },
    },
  },
  plugins: [],
};
