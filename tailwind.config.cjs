/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      textColor: {
        "reverseit-default": "#c5cfe8",
        "reverseit-faq-title": "#c2d6fb"
      }
    }
  },
  daisyui: {
    themes: [
      {
        reverseit: {
          "primary": "#204a87",
          "secondary": "#D926A9",
          "accent": "#1FB2A6",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "base-200": "#272b35",
          "base-300": "#22262f",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272"
        }
      }
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui')
  ],
}