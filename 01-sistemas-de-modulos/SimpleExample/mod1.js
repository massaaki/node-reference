const firstName = 'somename';
const lastName = 'somelastlame';

const sayName = () => {
  return `${firstName} ${lastName}`;
}

// module.exports.firstname = firstName;
// module.exports.lastName = lastName;
// module.exports.sayName = sayName;

//or 

exports.firstName = firstName;
exports.lastName = lastName;
exports.sayName = sayName;

//or

this.something = 'wherever';

// console.log(module.exports);