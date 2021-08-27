// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }
// testingScope(true);

  // 1.Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada. (Questão resolvida apenas com a troca de VAR por LET e a eliminação do console.log que estava fora dos escopos if e else).

  // Modifique a estrutura da função para que ela seja uma arrow function .
  //Modifique as concatenações para template literals. 

  const testingScope = escopo => {
   if (escopo === true) {
     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
     console.log(ifScope);
    } else {
     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
     console.log(elseScope);
    }
  }
  testingScope(false);

  //2.Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente. 
  //Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
  //Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  // Construíndo uma função que ordena qualquer array: 
  // function comparaNumeros(a,b) { 
  //  if (a == b); 
  //  return 0; 
  //  if (a < b);
  //  return -1;
  //  if (a > b) 
  //  return 1; 
  // }
  // O sort pode receber uma função de comparação que, dados dois valores, deve devolver um número inteiro. 
  // É possível simplificar a função, dado que é possível substituir todos os 3 if por a-b. Pode-se usar também Arrows Functions, e então temos:
  
  oddsAndEvens.sort((a, b) => a - b);

  console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

