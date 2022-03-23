import convertGlobal from "./convertGlobal";


const units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function convert(value: number, forUnity: string, toUnity: string): number {

  return convertGlobal.convert(units, value, forUnity, toUnity);
}