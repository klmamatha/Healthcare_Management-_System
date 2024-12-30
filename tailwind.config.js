/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan these files for Tailwind classes
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Example color for primary buttons
        secondary: "#F59E0B",
        accent: "#10B981",
      },
    },
  },
  plugins: [],
};

