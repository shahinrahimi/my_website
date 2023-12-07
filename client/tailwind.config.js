/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

      },
      boxShadow: {
        'sharp': 'rgba(0, 0, 0, 0.40) 0px 2px 8px',
        'form': 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;'
      }
    },

    keyframes: {
      inputEffect : {
        "0%": {
          opacity:0,
          transform: "scale(120%, 200%)"
        },
        "100%" : {
          opacity:1,
          transform: "scale(100%)"
        }
      },
    },

    animation: {
      'input-active': "inputEffect 0.5s ease forwards"
    }
  },
  plugins: [],
}

