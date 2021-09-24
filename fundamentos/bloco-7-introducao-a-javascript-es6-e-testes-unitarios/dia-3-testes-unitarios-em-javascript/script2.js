// *A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// 1.Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// 2.Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// 3.Verifique se o array passado por parâmetro não sofreu alterações
// 4.Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
// implemente seus testes aqui
// 1.
const expected = myRemove([1,2,3,4], 3); 

assert.deepStrictEqual(expected, [1,2,4]);
// 2.
assert.notDeepStrictEqual(expected, [1,2,3,4]);
// 3.
const myArray = [6,7,8,9]; 
myRemove(myArray, 6); 
assert.deepStrictEqual(myArray, [6,7,8,9]);
// 4.
const expected2 = myRemove([1, 2, 3, 4], 5); 

assert.deepStrictEqual(expected2, [1, 2, 3, 4]);

