const { moduleLoader } = require("./loader3");

module.exports = {
  name: "Orders",
  getName() {
    console.log(this.name);
  },
  getCross() {
    moduleLoader.products.getName();
  },
};
