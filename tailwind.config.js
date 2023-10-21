/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      sans: "Roboto, sans-serif",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      tablet: "1155px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {},
  },
  plugins: [],
};
