// 1.  - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (employeeGen) => {

    const employees =  {
      id1: employeeGen('Pedro Guerra'),
      id2: employeeGen('Luiza Drumond'), 
      id3: employeeGen('Carla Paiva'), 
    } 
    return employees;
  };

const employeeGen = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().split(' ').join('_');
    return {nomeCompleto, email: `${email}@betrybe.com`};
}
console.log(newEmployees(employeeGen));


