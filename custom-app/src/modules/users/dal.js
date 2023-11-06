module.exports = {
  getList: () => fetch("https://dummyjson.com/users").then((res) => res.json()),
};
