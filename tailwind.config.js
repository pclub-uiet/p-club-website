/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-one": "#2cff05",
        "theme-two": "black",
        "theme-three": "#2b332a",
        "theme-four": "#1fd655",
        "theme-five": "#0d9f3d",
      },
      fontFamily: {
        "Roboto": ["Roboto", "sans-serif"],
        "Lobster": ["Lobster Two", "sans-serif"]
      },
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        move: "move 5s linear infinite"
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        }
      },
    },
  },
  plugins: [],
}