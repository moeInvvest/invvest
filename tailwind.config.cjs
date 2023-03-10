/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "bg-light": "#F8FAFB",
        "bg-dark": "#29263D",
        "light-gray": "#ECF1F4",
        "darker-gray": "#CCD9E1",
        "bg-dark-secondary": "#3B3854",
        "bg-dark-hover": "#332855",
        "primary-clr": "#085BFC",
        "primary-clr-hover": "#004ce0",
        "secondary-btn-hover": "#F0F5FC",
        "text-dark": "#222222",
        "text-light": "#EEECFF",
        "bg-yellow": "#FBE7A1",
        "bg-yellow-darker": "#F9DB70",
        "bg-links-hover": "#F8FAFD",
        "border-light": "rgba(51,51,51,0.2)",
        "border-lighter": "rgba(51,51,51,0.05)",
        "border-white": "rgba(238,238,238,0.1)"
      },
      fontFamily: {
        graphik: ["Graphik", "sans-serif"],
        graphikBold: ["Graphikbold", "sans-serif"],
      },
      boxShadow: {
        headerBox: '0px 0px 47.31px 9.69px rgba(0, 0, 0, 0.02)',
        darkHeaderBox: '0px 0px 47.31px 9.69px rgba(255, 255, 255, 0.05)',
        proShadow: "box-shadow: rgba(251, 231, 161, 1) 0px 4px 16px, rgba(251, 231, 161, 0.9) 0px 8px 32px",
        headerBoxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)"
      },
      flex: {
        '2': '2 2 0%',
        '1/2': '1 1 25px'
      }
    },
    screens: {
      xxsm: "400px",
      xsm: "500px",
      sm: "600px",
      xm: "650px",
      md: "768px",
      tableBrkpt: "850px",
      lg: "992px",
      xl: "1200px",
      xxl: "1280px"
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  darkMode: "class"
};