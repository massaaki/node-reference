const fs = require('fs').promises;

module.exports = (filaPath, data) => {
  fs.writeFile(filaPath, data, { flag: 'w' });
};