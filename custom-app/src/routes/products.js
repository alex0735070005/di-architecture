const express = require("express");
const moduleProvider = require("../provides/ModuleProvider");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("*** /products route handler ***");
  const products = moduleProvider.products;

  const data = await products.getList();
  res.send(data);
});

router.get("/cross", async (req, res) => {
  console.log("*** /products/cross route handler ***");
  const products = moduleProvider.products;

  const data = await products.getCross();
  res.send(data);
});

module.exports = router;
