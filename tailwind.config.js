/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        center: true,
        DEFAULT: '10px',
        sm: '20px',
        lg: '20px',
        xl: '20px',
      },
    },
  },
  plugins: [],
}