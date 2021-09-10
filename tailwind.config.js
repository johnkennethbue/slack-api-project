module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        chat: "auto 1fr",
        bar: "1fr auto",
      },
      gridTemplateRows: {
        chat: "7vh 93vh",
        messages: "1fr auto",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
