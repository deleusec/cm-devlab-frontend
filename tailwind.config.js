/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#BAFF29",
        "secondary": "#1A1B41",
        "light-gray": "#F4F4F4",
      },
      textColor: {
        "gray": "#4F4F4F",
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
      },
      minHeight: {
        "header" : "80px",
        "body": "calc(100vh - 80px)",
        "footer": "80px",
      },
      height: {
        "body": "calc(100vh - 80px)"
      },
      boxShadow: {
        "card": "0px 4px 40px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
}

