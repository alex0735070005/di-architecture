class ProductService {
  constructor({ productRepository, container }) {
    this.productRepository = productRepository;
    this.container = container;
  }

  getList() {
    return this.productRepository.getList();
  }

  async getCross() {
    const { products } = await this.productRepository.getList();
    const userService = this.container.resolve("userService");
    const { users } = await userService.getList();
    return {
      user: users[0],
      products,
    };
  }
}

module.exports = ProductService;
