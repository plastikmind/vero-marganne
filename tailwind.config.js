/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        turning: "turning 2s infinite"
      },
      keyframes: {
        turning: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(2deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          }
        }
      }
    },
  },
  plugins: [],
}