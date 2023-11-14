const { moduleLoader } = require("../");
const dal = require("./dal");

module.exports = {
  getList() {
    return dal.getList();
  },

  async getCross() {
    const usersModule = moduleLoader.users;

    const { products } = await dal.getList();

    const { users } = await usersModule.getList();

    return { users, products };
  },
};
