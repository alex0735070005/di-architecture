const moduleProvider = require('../');
console.log('init 2');
const service = {
	getA: () => {
		console.log('calling 1 from 2');
		moduleProvider.mod1.getA();
	}
}

module.exports = () => service;
