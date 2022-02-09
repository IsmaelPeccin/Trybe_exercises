classImc = (imc) => {
  if(imc < 18.5 ) {
   return 'Situação: Abaixo do Peso';
  }
  if(imc >= 18.5 && imc <= 24.9) {
    return 'Situação: Peso Normal';
  }
  if (imc > 25 && imc < 29.9) {
    return 'Situação: Acima do peso (sobrepeso)';
  }
  if (imc > 30 && imc < 34.9) {
    return 'Situação: Obesidade grau I';
  }
  if (imc > 35 && imc < 40) {
    return 'Situação: Obesidade grau II';
  } else {
    return 'Situação: Obesidade graus III e IV';
  }
};

module.exports = classImc;



