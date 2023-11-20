const moduleLoader = {
  get orders() {
    return require("./orders");
  },

  get products() {
    return require("./products");
  },
};

module.exports = { moduleLoader };
