const moduleLoader = new Proxy(
  {},
  {
    get(_, name) {
      const module = require(`${__dirname}/${name}`);

      if (!module.meta) {
        module.meta = {
          calls: 0,
          name,
        };
      }

      module.meta.calls++;

      console.log(module.meta);

      return module;
    },
  }
);

module.exports = { moduleLoader };
