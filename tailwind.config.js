/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        white: "hsl(0, 0%, 100%)",
        gray: "hsl(212, 45%, 89%)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      textColor: {
        Dark_Blue: "hsl(218, 44%, 22%)",
        grayishBlue: "hsl(220, 15%, 55%)",
      },
    },
  },
  plugins: [],
};
