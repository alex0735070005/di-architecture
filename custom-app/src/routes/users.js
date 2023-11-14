const express = require("express");
const router = express.Router();
const { moduleLoader } = require("../modules");

router.get("/", async (req, res) => {
  console.log("*** /users route handler ***");
  const users = moduleLoader.users;

  const data = await users.getList();

  res.send(data);
});

router.get("/cross", async (req, res) => {
  console.log("*** /users/cross route handler ***");
  const users = moduleLoader.users;

  const data = await users.getCross();

  res.send(data);
});

module.exports = router;
