const chalk = require("chalk");

console.log(chalk.blue("Pronto para começar!"));

const paragrafo = "Texto executado por função";

function texto(string) {
  return string;
}

console.log(texto(paragrafo));
