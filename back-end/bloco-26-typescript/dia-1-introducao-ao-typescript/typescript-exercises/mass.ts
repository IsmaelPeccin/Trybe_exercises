const errorMass = require('./error');

const massUnits = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function massConvert(value: number, forUnity: string, toUnity: string): number {

  if (!massUnits.includes(forUnity)) errorMass(forUnity); 
  if (!massUnits.includes(toUnity)) errorMass(toUnity); 

  const forIndex = units.indexOf(forUnity); 
  const toIndex = units.indexOf(toUnity); 
  const exponent = (toIndex - forIndex);

  return value * Math.pow(10, exponent);
}