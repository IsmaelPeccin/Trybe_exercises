// Parte I
// 1. Refaça os exercícios 1 a 5 do conteúdo de Testes unitários em JavaScript , dessa vez utilizando Jest .

// 1. A função sum(a, b) retorna a soma do parâmetro a com o b.

// //   1.Teste se o retorno de sum(4, 5) é 9
//      2.Teste se o retorno de sum(0, 0) é 0
//      3.Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
//      4.Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

module.exports = sum;