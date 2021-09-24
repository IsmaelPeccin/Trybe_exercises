let numeros = [];
let num = []; 
 
for (let index = 1; index <= 25; index += 1) {
    numeros.push(index);
}

for (let i =0; i <= numeros.length; i += 1) {
    num.push(numeros[i]/2); 
}
console.log(num);
