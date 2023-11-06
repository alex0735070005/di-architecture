const express = require("express");
const router = express.Router();
const container = require("../container");

router.get("/", async (req, res) => {
  console.log("*** /users route handler ***");
  const userService = container.resolve("userService");

  const data = await userService.getList();

  res.send(data);
});

router.get("/cross", async (req, res) => {
  console.log("*** /users/cross route handler ***");
  const userService = container.resolve("userService");

  const data = await userService.getCross();

  res.send(data);
});

module.exports = router;
