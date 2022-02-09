const readline = require('readline-sync');

const velocidadeMedia = (distancia, tempo) => ((distancia)/(tempo)).toFixed(2);

const distancia = readline.questionInt('Qual a distância percorrida (em metros)? ');
const tempo = readline.questionInt('Qual o tempo (em segundos)? ');

console.log(`Sua velocidade média é: ${velocidadeMedia(distancia, tempo)} m/s`);