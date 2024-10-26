/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      white: '#D9D9D9',
      black: '#090A18',
      'gray-800': '#737373',
    },
    extend: {
      dropShadow: {
        'black': '0 0 5px #090A18',
        'white': '0 0 5px #ffffff'
      }
    },
  },
  plugins: [],
}

