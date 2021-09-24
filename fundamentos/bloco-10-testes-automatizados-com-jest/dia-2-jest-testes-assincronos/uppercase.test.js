const uppercase = require('./uppercase'); 
const phrase = 'helloworld';

describe('Testa a função uppercase', () => {
  it('upercase helloworld to HELLOWORLD', (done) => {
    uppercase(phrase, (callback) => {
      try{
        expect(callback).toEqual('HELLOWORLD');
        done();
      } catch(error) {
        done(error);
      }
    });
  });
});