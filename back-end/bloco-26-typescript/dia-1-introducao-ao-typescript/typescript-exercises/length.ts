import convertGlobal from "./convertGlobal";


const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convert(value: number, forUnity: string, toUnity: string): number {

    return convertGlobal.convert(units, value, forUnity, toUnity);
}
