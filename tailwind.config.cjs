/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'orange': '#FFF0C9',
        'blue': '#E2ECF3'
      },
      textColor: {
        'orange': '#FF8C3F',
      },
      margin: {
        '0.5': '2px',
        '6.5': '26px',
        '50%': '50%',
        '70%': '70%',
        '80%': '80%'
      },
      height: {
        '1r': '1rem',
        '0.5r': '0.5rem',
        '0.2r': '0.2rem'
      },
      width: {
        '1r': '1rem',
        '0.5r': '0.5rem',
        '0.2r': '0.2rem'
      },
      backgroundImage: {
        'login-background': "url('./src/assets/icons/login.svg')",
        'select': "url('./src/assets/icons/select.svg')",
        'profile': "url('./src/assets/icons/profile.svg')"
      },
      margin: {
        'mt-1.5': '6px'
      }

    },
  },
  plugins: [],
}
