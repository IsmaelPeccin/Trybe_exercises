//1.Teste se o retorno de sum(4, 5) é 9
//2.Teste se o retorno de sum(0, 0) é 0
//3.Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
//4.Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
// 1.
const expected = sum(4, 5);

assert.strictEqual(expected, 9, 'Cinco mais quatro tem que ser 9');

// 2.
const expected2 = sum(0, 0);

assert.strictEqual(expected2, 0, 'Zero mais zero é igual a zero');

// 3. e 4.
const expected3 = sum(4, '5');

assert.strictEqual(expected3, 9, 'Cinco mais quatro tem que ser 9');

