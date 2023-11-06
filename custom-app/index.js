const express = require("express");
const routes = require("./src/routes");
const modules = require("./src/modules");
const moduleProvider = require("./src/provides/ModuleProvider");

moduleProvider.register(modules);

const app = express();
const port = 5500;

app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
