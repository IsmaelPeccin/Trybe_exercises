const error = require('./error');

const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function lengthConvert(value: number, forUnity: string, toUnity: string): number {

  if (!units.includes(forUnity)) error(forUnity); 
  if (!units.includes(toUnity)) error(toUnity); 

  const forIndex = units.indexOf(forUnity); 
  const toIndex = units.indexOf(toUnity); 
  const exponent = (toIndex - forIndex);

  return value * Math.pow(10, exponent);
}
