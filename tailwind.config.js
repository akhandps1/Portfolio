// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line is important!
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Ensure Inter font is available
      },
    },
  },
  plugins: [],
}