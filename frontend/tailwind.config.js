/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Scans all files for Tailwind classes
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      colors: {
        intelligence: '#2D76FF',
        innovation: '#FFA500',
        motivation: '#28B463',
        resilience: '#FF5733',
      },
    },
  },
  plugins: [],
};


