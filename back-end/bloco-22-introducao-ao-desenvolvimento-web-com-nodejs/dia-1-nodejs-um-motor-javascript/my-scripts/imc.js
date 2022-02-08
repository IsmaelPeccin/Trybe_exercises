const imc = (alt, peso) => ((peso)/Math.pow(alt,2)).toFixed(2);

module.exports = imc;