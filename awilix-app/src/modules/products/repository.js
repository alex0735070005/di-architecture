class ProductRepository {
  async getList() {
    return fetch("https://dummyjson.com/products").then((res) => res.json());
  }
}

module.exports = ProductRepository;
