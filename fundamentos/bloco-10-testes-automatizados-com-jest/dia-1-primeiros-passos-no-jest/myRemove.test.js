const myRemove = require('./myRemove');
const arr = [1, 2, 3, 4]; 

describe('Verifica se a função myRemove retorna como esperado', () => {
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array [1, 2, 4]', () => {
    expect(myRemove( arr, 3 )).toEqual([1, 2, 4]);
  });
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', ()=> {
    expect(myRemove( arr, 3 )).not.toEqual([1, 2, 3, 4]);
  });
  it('Verifica se o array passado por parâmetro não sofreu alterações', ()=> {
    expect(myRemove(arr)).toEqual(arr); 
  });
  it('.Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', ()=> {
    expect(myRemove(arr, 5)).toEqual(arr);
  });
});