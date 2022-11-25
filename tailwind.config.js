/** @type {import('tailwindcss').Config} */
module.exports = {

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff9470",
          secondary: "#800000",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
