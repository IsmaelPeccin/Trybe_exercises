const volError = require('./error');

const volUnits = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];

function volumeConvert(value: number, forUnity: string, toUnity: string): number {

  if (!volUnits.includes(forUnity)) volError(forUnity); 
  if (!volUnits.includes(toUnity)) volError(toUnity); 

  const forIndex = units.indexOf(forUnity); 
  const toIndex = units.indexOf(toUnity); 
  const exponent = (toIndex - forIndex);

  return value * Math.pow(10, exponent);
}
