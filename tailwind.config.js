/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "clr-100": "#ffffff",
        "clr-300": "#C62424",
        "clr-400": "#4DBB3B",
        "clr-500": "#BBA114",
        "clr-800": "#5E5E6B",
        "clr-850": "#3C3C4F",
        "clr-900": "#202025",
      },
    },
  },
  plugins: [],
};
