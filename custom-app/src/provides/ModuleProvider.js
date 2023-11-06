const cache = {};
const MODULES_DIR = `../modules`;

module.exports = new Proxy(
  {},
  {
    get(_, name) {
      if (!cache[name]) {
        const module = require(`${MODULES_DIR}/${name}`);
        cache[name] = module;

        return module;
      }

      console.log(cache);

      return cache[name];
    },
  }
);
