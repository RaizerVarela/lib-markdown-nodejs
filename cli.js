const chalk = require('chalk')
const getFile = require('./index')

const path = process.argv

async function processData(path){
  const result = await getFile(path[2])
  console.log(chalk.yellow('lista de links'), result)
}

processData(path)