//2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
//Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.

const { users, findUserById, getUserName } = require('./getUserName');

describe( 'se o id passado existe', () => {
  it('retorne o nome do usuário', () =>{
    getUserName(1).then((data) => {
      expect(data).toEqual('Mark');
    });
  });
});

describe('se o id passado não existe', () => {
  it('retorne usuário não encontrado', () => {
    expect.assertions(1);
    return getUserName(3).catch((error) => 
      expect(error.message).toMatch('User with 3 not found.'));
  });
});



