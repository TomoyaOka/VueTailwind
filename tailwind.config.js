module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
      },
      fontSize: {
        md: "1.4rem",
        mini: "1.2rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
