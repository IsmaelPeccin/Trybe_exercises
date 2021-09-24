const custo = 10;

const valorDeVenda = 100; 




if (custo < 0  || valorDeVenda < 0) {
    console.log('Erro');
} else {
    const impostoSobreCusto = 0.2;
    const custoTotal = (custo * impostoSobreCusto) + custo;
    const lucro = (valorDeVenda - custoTotal) * 1000; 
    console.log(lucro); 
}

