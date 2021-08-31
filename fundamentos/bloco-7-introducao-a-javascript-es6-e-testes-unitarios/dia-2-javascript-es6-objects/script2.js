const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  //1.Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addTurno = (obj, key, value) => {
  obj[key] = value;
}
addTurno(lesson2, 'turno', 'manhã');
console.log(lesson2);

//2.Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const objKeys = (obj) =>{
  return Object.keys(obj); 
}
console.log(objKeys(lesson2));

//3.Crie uma função para mostrar o tamanho de um objeto.
const objLength = (obj) => {
  return Object.keys(obj).length;
}
console.log(objLength(lesson1));

//4.Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const valuesList = (obj) => {
  return Object.values(obj); 
}
console.log(valuesList(lesson3)); 

//5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
//console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3}); 
console.log(allLessons); 