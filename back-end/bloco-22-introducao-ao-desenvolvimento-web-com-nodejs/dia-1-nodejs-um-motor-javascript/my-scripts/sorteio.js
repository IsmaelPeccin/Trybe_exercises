const readline = require('readline-sync');

const verificaNumero = (numero, resposta) => {
  if(numero === resposta) {
    return console.log('Parabéns, número correto!');
  }
  return console.log(`Opa, não foi dessa vez. O número era ${numero}`);
} 

const game = () => {

  const numero  =  parseInt(Math.random() * 10);

  const resposta = readline.questionInt('Digite um número entre 0 e 10: ');

  verificaNumero(numero, resposta);

  const novamente = readline.question(
    'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) '
  );

  if(novamente === 's'){
    return game()
  }
  return console.log('OK, até a próxima!');
}

game();