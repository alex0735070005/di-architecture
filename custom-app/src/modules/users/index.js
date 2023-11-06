const moduleProvider = require("../../provides/ModuleProvider");
const dal = require("./dal");

module.exports = {
  getList() {
    return dal.getList();
  },

  async getCross() {
    const productsModule = moduleProvider.get("products");

    const { users } = await dal.getList();
    const { products } = await productsModule.getList();

    return {
      users,
      products,
    };
  },
};
