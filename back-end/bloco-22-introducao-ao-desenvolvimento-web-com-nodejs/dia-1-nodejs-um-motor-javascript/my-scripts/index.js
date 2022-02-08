const imc =  require('./imc');
const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso? ');
const alt = readline.questionFloat('Qual sua altura? ');

console.log('Seu IMC é:', imc(alt, peso));