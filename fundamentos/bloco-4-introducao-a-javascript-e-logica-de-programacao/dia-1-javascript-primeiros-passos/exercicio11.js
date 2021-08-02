let salarioBruto = 7000.00; 

let descontoInss = undefined; 

let descontoIr = undefined; 

let inssFaixaUm = 0.08;

let inssFaixaDois = 0.09; 

let inssFaixaTres = 0.11; 

let inssFaixaQuatro = 570.88; 

let irFaixaUm = 0; 

let irFaixaDois = 0.075;

let irFaixaTres = 0.15;

let irFaixaQuatro = 0.225;

let irFaixaCinco = 0.275; 



if (salarioBruto <= 1556.94){
    descontoInss = salarioBruto * inssFaixaUm;  
}
else if (salarioBruto <= 2594.92) {
    descontoInss = salarioBruto * inssFaixaDois;
}
else if (salarioBruto <= 5189.82) {
    descontoInss = salarioBruto * inssFaixaTres; 
}
else {
    descontoInss = inssFaixaQuatro; 
}
if (salarioBruto <= 1903.98) {
    descontoIr === irFaixaUm; 
}
else if (salarioBruto <= 2826.65) {
    descontoIr = (salarioBruto * irFaixaDois) - 142.80; 
}
else if (salarioBruto <= 3751.05) {
    descontoIr = (salarioBruto * irFaixaTres) - 354.80;     
}
else if (salarioBruto <= 4664.68) {
    descontoIr = (salarioBruto * irFaixaQuatro) - 636.13 ; 
}
else{
    descontoIr = (salarioBruto * irFaixaCinco) - 869.36; 
}

let salarioLiquido = salarioBruto - (descontoInss + descontoIr); 

console.log("Desconto INSS" + " " + descontoInss)
console.log("Desconto Imposto de Renda" + " " + descontoIr)
console.log("Salário Líquido" + " " + salarioLiquido); 