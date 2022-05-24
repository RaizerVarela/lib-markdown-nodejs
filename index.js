const fs = require('fs');
const chalk = require("chalk");

function getError(err){
  throw new Error(chalk.red(err.code, 'ARQUIVO NÃO ENCONTRADO'))
}

function getFile(path){
  const encoding = 'utf-8'
  fs.readFile(path, encoding, (err, data) => {
    if (err){
      getError(err)
    } else{
      console.log(chalk.green(data))
    }
  })
}

getFile('./arquivos/texto1.md')