const moduleProvider = require("../../provides/ModuleProvider");
const dal = require("./dal");

module.exports = {
  getList() {
    return dal.getList();
  },

  async getCross() {
    const usersModule = moduleProvider.users;

    const { products } = await dal.getList();

    const { users } = await usersModule.getList();

    return { users, products };
  },
};
