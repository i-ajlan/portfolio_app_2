/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        "dropping-nav-anim": "dropping-nav 0.45s linear ",
        "displacement-anim": "displacement-anim 1s linear forwards",
        "displacement2-anim": "displacement2-anim 1s linear forwards",
        "displacement3-anim": "displacement3-anim 1s linear forwards"
      },
      keyframes:{
        "dropping-nav": {
          '0%' :{transform:'scaleY(0)'},
          '90%': {transform: 'scaleY(1.2)'},
          '100%': {transform:'scaleY(1)'}
        },
        "displacement-anim":{
          '0%':{opacity:'0', translate:'50px'},
          '100%':{opacity:'1', translate:'0'}
        },
        "displacement2-anim":{
          '0%':{opacity:'0', translate:'-50px'},
          '100%':{opacity:'1', translate:'0'}
        },
        "displacement3-anim":{
          '0%':{opacity:'0', transform:'translateY(-50px)'},
          '100%':{opacity:'1', transform:'translateY(0)'}
        }
      }
    },
  },
  plugins: [],
}