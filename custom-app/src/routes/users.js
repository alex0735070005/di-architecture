const express = require("express");
const router = express.Router();
const moduleProvider = require("../provides/ModuleProvider");

router.get("/", async (req, res) => {
  console.log("*** /users route handler ***");
  const users = moduleProvider.get("users");

  const data = await users.getList();

  res.send(data);
});

router.get("/cross", async (req, res) => {
  console.log("*** /users/cross route handler ***");
  const users = moduleProvider.get("users");

  const data = await users.getCross();

  res.send(data);
});

module.exports = router;
