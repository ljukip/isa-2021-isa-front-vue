module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/scss/main.scss";`,
      },
    },
  },
};
