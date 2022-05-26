const chalk = require('chalk')
const getFile = require('./index')
const validateURL = require('./http-validacao')

const path = process.argv

async function processData(path){
  const result = await getFile(path[2])
  if(path[3] === 'validate'){
    console.log(chalk.yellow('links validados'), validateURL(result))
  } else {
    console.log(chalk.yellow('lista de links'), result)
  }
}

processData(path)