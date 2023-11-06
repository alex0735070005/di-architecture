const express = require("express");
const container = require("../container");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("*** /products route handler ***");
  const productService = container.resolve("productService");

  const data = await productService.getList();

  res.send(data);
});

router.get("/cross", async (req, res) => {
  console.log("*** /products/cross route handler ***");
  const productService = container.resolve("productService");

  const data = await productService.getCross();

  res.send(data);
});

module.exports = router;
