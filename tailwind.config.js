/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
        fly: {
          "0%, 100%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "none",
          },
        },
      },
      animation: {
        spinSlow: "spinSlow 6s linear infinite",
        fly: "fly 3s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};
