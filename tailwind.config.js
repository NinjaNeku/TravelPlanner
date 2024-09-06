/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: '#ff7f36',
        bgColor: '#f4f4f4',
        black: '#27283a',
        white: '#FFFFFF',
      }
    },
  },
  plugins: [],
}

