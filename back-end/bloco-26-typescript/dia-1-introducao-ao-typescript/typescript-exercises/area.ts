const errorArea = require('./error');

const areaUnits = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

function areaConvert(value: number, forUnity: string, toUnity: string): number {

  if (!areaUnits.includes(forUnity)) errorArea(forUnity); 
  if (!areaUnits.includes(toUnity)) errorArea(toUnity); 

  const forIndex = units.indexOf(forUnity); 
  const toIndex = units.indexOf(toUnity); 
  const exponent = (toIndex - forIndex);

  return value * Math.pow(10, exponent);
}