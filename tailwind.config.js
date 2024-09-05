/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {  keyframes: {
      'marquee': {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
    animation: {
      'marquee': 'marquee 10s linear infinite',
    },
  },
},
  plugins: [
    require('daisyui'),
  ],

}