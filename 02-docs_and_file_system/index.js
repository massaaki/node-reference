const fs = require('fs').promises;
const path = require('path');

async function readDir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);

  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);


    if(/\.git/g.test(fileFullPath)) continue; //nao lista o .git
    if (/node_modules/g.test(fileFullPath)) continue; //nao lista o node modules
    
    if (stats.isDirectory()) {
      readDir(fileFullPath);
      continue;
    }

    //if(!/.css/g.test(fileFullPath)) continue; //lista todos arquivos .css

    console.log(file, stats.isDirectory());
  }
}


readDir('/Users/mauricioyochizumi/Desktop/Projects/Desenvolvimento/Estudos/javascriptAndTypescript');