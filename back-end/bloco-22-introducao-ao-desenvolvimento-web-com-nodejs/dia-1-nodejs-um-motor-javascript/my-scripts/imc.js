const readline = require('readline-sync');
const classImc = require('./classImc');

const imc = (alt, peso) => ((peso)/Math.pow(alt,2)).toFixed(2);

const nome = readline.question('Qual seu nome? ');
const peso = readline.questionFloat('Qual seu peso? ');
const alt = readline.questionFloat('Qual sua altura? ');

const resultImc = imc(alt, peso);


console.log(`Seu IMC é: ${resultImc}, ${classImc(resultImc)}`);
