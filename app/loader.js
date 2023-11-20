const moduleLoader = new Proxy(
  {},
  {
    get(_, name) {
      // eslint-disable-next-line security/detect-non-literal-require
      const module = require(`${__dirname}/${name}`);

      return module;
    },
  }
);

module.exports = {
  moduleLoader,
};
