// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line is important!
  ],
  darkMode: 'class', // Ensure dark mode is class-based
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        accent: {
          light: '#0284c7', // sky-600
          dark: '#38bdf8',  // sky-400
        },
        secondary: {
          light: '#db2777', // pink-600
          dark: '#f472b6',  // pink-400
        },
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}