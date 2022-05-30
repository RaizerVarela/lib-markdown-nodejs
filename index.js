const fs = require('fs');
const chalk = require("chalk");

function getLinks(data){
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
  const results = []
  let temp

  while((temp = regex.exec(data)) !== null){
    results.push({[temp[1]]: temp[2]})
  }

  return results.length === 0 ? 'não há links' : results
}

function getError(err){
  throw new Error(chalk.red(err.code, 'ARQUIVO NÃO ENCONTRADO'))
}

async function getFile(path){
  const encoding = 'utf-8'
  try{
    const data = await fs.promises.readFile(path, encoding)
     return getLinks(data)
  } catch(err){
    getError(err)
  }
}

module.exports = getFile