const { moduleLoader } = require("./loader3");

module.exports = {
  name: "Products",
  getName() {
    console.log(this.name);
  },
  getCross() {
    moduleLoader.orders.getName();
  },
};
