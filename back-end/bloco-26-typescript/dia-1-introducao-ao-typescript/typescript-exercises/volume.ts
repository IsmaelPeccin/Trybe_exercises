import convertGlobal from "./convertGlobal";

const units = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];

function convert(value: number, forUnity: string, toUnity: string): number {

  return convertGlobal.convert(units, value, forUnity, toUnity);
}
