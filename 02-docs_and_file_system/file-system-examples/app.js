const path = require('path');
const filePath = path.resolve(__dirname, 'test.json');
const writeFile = require('./modules/writeFile');
const readFile = require('./modules/readFile');

// const users = [
//   {name: 'some name 01'},
//   {name: 'some name 02'},
//   {name: 'some name 03'},
//   {name: 'some name 04'},
//   {name: 'some name 05'},
//   {name: 'some name 06'},
// ];


// const json = JSON.stringify(users, '', 2);

// writeFile(filePath, json);


async function getfile(path) {
  const response = await readFile(path);
  renderData(response);
}


function renderData(data) {
  const response = JSON.parse(data);
  response.forEach(val => console.log(val));
}

getfile(filePath);

// const dataFile = getfile(filePath).then(data => console.log(data));