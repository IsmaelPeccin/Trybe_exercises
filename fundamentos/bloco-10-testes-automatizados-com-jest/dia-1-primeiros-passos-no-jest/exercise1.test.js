const sum = require('./exercise1');

describe('Testa se o retorno de sum(4, 5) é 9', () => {
  it('4 + 5 = 9', () => {
    expect(sum(4, 5)).toBe(9); 
  });
});
describe('Testa se o retorno de sum(0,0) é 0', () => {
  it('0 + 0 = 0', () => {
    expect(sum(0, 0)).toBe(0); 
  });
});
describe('Testa se o retorno de sum(4, "5") lança o erro parameters must be numbers', () => {
  it('4 + "5" = erro', () => {
    expect(() => { sum(4, '5') })
    .toThrowError(new Error ('parameters must be numbers'));
  });
});
