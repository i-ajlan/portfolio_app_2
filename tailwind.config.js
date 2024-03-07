/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        "dropping-nav-anim": "dropping-nav 0.45s linear "
      },
      keyframes:{
        "dropping-nav": {
          '0%' :{transform:'scaleY(0)'},
          '90%': {transform: 'scaleY(1.2)'},
          '100%': {transform:'scaleY(1)'}
        }
      }
    },
  },
  plugins: [],
}