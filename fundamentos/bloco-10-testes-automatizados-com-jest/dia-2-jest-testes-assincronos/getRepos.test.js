const getRepos = require('./getRepos');

const url = 'https://api.github.com/orgs/tryber/repos'; 

describe('Verifica repositórios no GitHub da Trybe', () => {
  it('Verifica se existe repositório sd-01-week4-5-project-todo-list', () => {
     return getRepos(url).then((data) => {
       expect(data).toContain('sd-01-week4-5-project-todo-list')
     });
  });
  it('Verifica se existe repositório sd-01-week4-5-project-meme-generator', () => {
    return getRepos(url).then((data) => {
      expect(data).toContain('sd-01-week4-5-project-meme-generator')
    });
 });
});