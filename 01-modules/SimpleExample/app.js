const mod1 = require('./mod1');
const sayNameTest = require('./mod1').sayName;
const { sayName } = require('./mod1');

console.log(mod1.sayName());
console.log(sayNameTest())
console.log(sayName());