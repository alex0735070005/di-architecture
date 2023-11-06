class UserService {
  constructor({
    userRepository,
    productRepository,
    productService,
    container,
  }) {
    this.userRepository = userRepository;
    this.productRepository = productRepository;
    this.productService = productService;
    this.container = container;
  }

  getList() {
    return this.userRepository.getList();
  }

  async getCross() {
    const productService = this.container.resolve("productService");
    const { users } = await this.userRepository.getList();
    const { products } = await productService.getList();

    return {
      product: products[0],
      users,
    };
  }
}

module.exports = UserService;
