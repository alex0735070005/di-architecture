module.exports = {
  getList: () =>
    fetch("https://dummyjson.com/products").then((res) => res.json()),
};
