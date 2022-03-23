import convertGlobal from "./convertGlobal";

const units = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

function convert(value: number, forUnity: string, toUnity: string): number {

  return convertGlobal.convert(units, value, forUnity, toUnity);
}