const express = require("express");
const users = require("./users");
const products = require("./products");

const router = express.Router();

router.use("/users", users);
router.use("/products", products);

module.exports = router;
