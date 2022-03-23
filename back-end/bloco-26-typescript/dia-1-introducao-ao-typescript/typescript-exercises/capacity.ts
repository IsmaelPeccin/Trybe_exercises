const errorCapacity = require('./error');

const capacityUnits = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

function capacityConvert(value: number, forUnity: string, toUnity: string): number {

  if (!capacityUnits.includes(forUnity)) errorCapacity(forUnity); 
  if (!capacityUnits.includes(toUnity)) errorCapacity(toUnity); 

  const forIndex = units.indexOf(forUnity); 
  const toIndex = units.indexOf(toUnity); 
  const exponent = (toIndex - forIndex);

  return value * Math.pow(10, exponent);
}