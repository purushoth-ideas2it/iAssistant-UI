/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        '50%': '50%',
        '70%': '70%',
        '80%': '80%'
      },
      backgroundImage: {
        'login-background': "url('./src/assets/icons/login.svg')",
      }

    },
  },
  plugins: [],
}
