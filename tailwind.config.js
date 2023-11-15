/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#00A4E4",
        "text-color": "#2f2f2f",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
      logoName: ["Libre Caslon Display"],
    },
  },
  plugins: [],
};
