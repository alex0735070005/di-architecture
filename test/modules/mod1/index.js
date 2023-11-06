const moduleProvider = require('../');
console.log('init 1');
const service = {
	getA: () => console.log('mod1 get A'),
	cross: () => {
		moduleProvider.mod2.getA();
	}
}

module.exports = () => service;

service.cross()
moduleProvider.mod1.cross();
