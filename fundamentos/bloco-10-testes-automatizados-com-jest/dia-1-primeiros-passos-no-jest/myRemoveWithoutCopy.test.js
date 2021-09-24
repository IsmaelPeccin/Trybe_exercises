const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');
const arr = [1, 2, 3, 4]; 

describe('Verifica se a função myRemoveWithoutCopy retorna como esperado', () => {
  it('Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () => {
    expect(myRemoveWithoutCopy( arr, 3 )).toEqual([1, 2, 4]);
  });
  it('Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', ()=> {
    expect(myRemoveWithoutCopy( arr, 3 )).not.toEqual([1, 2, 3, 4]);
  });
  it('Verifica se o array passado por parâmetro não sofreu alterações', ()=> {
    expect(myRemoveWithoutCopy(arr)).toEqual(arr); 
  });
  it('.Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', ()=> {
    expect(myRemoveWithoutCopy(arr, 5)).toEqual(arr);
  });
});