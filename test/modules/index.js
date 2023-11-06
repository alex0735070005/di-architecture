module.exports = new Proxy({}, {
  get(target, name) {
  	let mod = require(__dirname + '/' + name)();
  	return mod;
  }
});