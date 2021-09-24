//3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
//Dica: Utilize o try/catch para o caso de erro.


const { users, findUserById, getUserName } = require('./getUserName');

describe( 'se o id passado existe', () => {
  it('retorne o nome do usuário', async () =>{
    const data = await getUserName(1)
      expect(data).toEqual('Mark');
    });
  });


describe('se o id passado não existe', () => {
  it('retorne usuário não encontrado', async () => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch (error) {
      return expect(error.message).toMatch('User with 3 not found.');
    }
  });
});
