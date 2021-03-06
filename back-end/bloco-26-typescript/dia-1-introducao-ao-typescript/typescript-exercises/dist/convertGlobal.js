"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function error(unity) {
    throw new Error(`A unidade ${unity} não é uma unidade válida.`);
}
function convert(units, value, forUnity, toUnity) {
    if (!units.includes(forUnity))
        error(forUnity);
    if (!units.includes(toUnity))
        error(toUnity);
    const forIndex = units.indexOf(forUnity);
    const toIndex = units.indexOf(toUnity);
    const exponent = (toIndex - forIndex);
    return value * Math.pow(10, exponent);
}
function exec(units) {
    const value = readline_sync_1.default.questionFloat("Digite o valor a ser convertido: \n");
    const forUnityChoice = readline_sync_1.default.keyInSelect(units, "Escolha um número para a unidade base:", { cancel: "SAIR" });
    if (forUnityChoice === -1)
        return console.log("Saindo!");
    const toUnityChoice = readline_sync_1.default.keyInSelect(units, "Escolha um número para a conversão:", { cancel: "SAIR" });
    if (toUnityChoice === -1)
        return console.log("Saindo!");
    const forUnity = units[forUnityChoice];
    const toUnity = units[toUnityChoice];
    const result = convert(units, value, forUnity, toUnity);
    const message = `${value}${units[forUnityChoice]} é igual a ${result}${units[toUnityChoice]}`;
    console.log(message);
}
exports.default = {
    convert,
    exec
};
