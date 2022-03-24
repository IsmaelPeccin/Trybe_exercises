"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const readline_sync_1 = __importDefault(require("readline-sync"));
const months_1 = __importDefault(require("./months"));
const seasons_1 = __importDefault(require("./seasons"));
const monthsNames = Object.values(months_1.default).
    map(item => item);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, "Escolha um mês do ano", { cancel: "SAIR" });
if (choiceMonth === -1) {
    console.log("Saindo!");
    (0, process_1.exit)();
}
const seasonsSouth = {
    [seasons_1.default.Autumn]: [months_1.default.March, months_1.default.April, months_1.default.May, months_1.default.June],
    [seasons_1.default.Winter]: [months_1.default.July, months_1.default.July, months_1.default.August, months_1.default.September],
    [seasons_1.default.Spring]: [months_1.default.September, months_1.default.October, months_1.default.November, months_1.default.December],
    [seasons_1.default.Summer]: [months_1.default.December, months_1.default.January, months_1.default.February, months_1.default.March],
};
const seasonsNorth = {
    [seasons_1.default.Spring]: seasonsSouth[seasons_1.default.Autumn],
    [seasons_1.default.Summer]: seasonsSouth[seasons_1.default.Winter],
    [seasons_1.default.Autumn]: seasonsSouth[seasons_1.default.Spring],
    [seasons_1.default.Winter]: seasonsSouth[seasons_1.default.Summer],
};
const hemispheres = {
    "North": seasonsNorth,
    "South": seasonsSouth
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério", { cancel: "SAIR" });
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
if (choiceHemisphere === -1) {
    console.log("Saindo!");
    (0, process_1.exit)();
}
const month = Object.values(months_1.default)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Month: \n${month}`);
console.log(`Hemisphere: \n${hemisphere}`);
console.log(`Seasons:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    if (months.includes(month))
        console.log(seasons);
});
