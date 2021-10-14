const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Build your palette here
        trueGray: colors.trueGray,
        warmGray: colors.warmGray,
      },
    },
  },
  variants: {
    extend: { backgroundColor: ["active"] },
  },
  plugins: [],
};
