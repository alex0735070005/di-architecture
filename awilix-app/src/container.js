const { createContainer, asClass, asValue, InjectionMode } = require("awilix");

const { UserService, UserRepository } = require("./modules/users");
const { ProductService, ProductRepository } = require("./modules/products");

const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  userService: asClass(UserService).scoped(),
  userRepository: asClass(UserRepository).scoped(),
  productService: asClass(ProductService).scoped(),
  productRepository: asClass(ProductRepository).scoped(),
  container: asValue(container),
});

module.exports = container;
