const productsMock = require("../mocks/products");
const crossMock = require("../mocks/cross");
const ProductService = require("../service");

describe("ProductService", () => {
  let productService;
  let mockProductRepository;
  let mockUserService;
  let mockContainer;

  beforeEach(() => {
    mockProductRepository = {
      getList: jest.fn().mockResolvedValue(productsMock),
    };

    mockUserService = {
      getList: jest.fn().mockResolvedValue({ users: [crossMock.user] }),
    };

    mockContainer = {
      resolve: jest.fn().mockImplementation((key) => {
        if (key === "userService") {
          return mockUserService;
        }
        throw new Error(`Unknown key: ${key}`);
      }),
    };

    productService = new ProductService({
      productRepository: mockProductRepository,
      container: mockContainer,
    });
  });

  describe("getList", () => {
    it("should return a list of products", async () => {
      const result = await productService.getList();

      expect(mockProductRepository.getList).toHaveBeenCalled();
      expect(result).toEqual(productsMock);
    });
  });

  describe("getCross", () => {
    it("should return a user and a list of products", async () => {
      const result = await productService.getCross();

      expect(mockProductRepository.getList).toHaveBeenCalled();
      expect(mockContainer.resolve).toHaveBeenCalledWith("userService");
      expect(mockUserService.getList).toHaveBeenCalled();

      expect(result).toEqual(crossMock);
    });
  });
});
