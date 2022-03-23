function error(unity: string) {
  throw new Error(`A unidade ${unity} não é uma unidade válida.`)
}

function convert(units: string[], value: number, forUnity: string, toUnity: string): number {

  if (!units.includes(forUnity)) error(forUnity); 
  if (!units.includes(toUnity)) error(toUnity); 

  const forIndex = units.indexOf(forUnity); 
  const toIndex = units.indexOf(toUnity); 
  const exponent = (toIndex - forIndex);

  return value * Math.pow(10, exponent);
}

export default {
  convert
};