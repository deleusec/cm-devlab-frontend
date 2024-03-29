/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          "DEFAULT" : "#BAFF29",
        },
        "secondary": {
          "DEFAULT": "#1A1B41",
          "light": "#2A2B5F",
        },
        "gray": {
          "DEFAULT": "#6b7280",
          "light": "#f3f4f6",
          "dark": "#4b5563",
        },
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

