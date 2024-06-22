/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#050a15",
        },
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
