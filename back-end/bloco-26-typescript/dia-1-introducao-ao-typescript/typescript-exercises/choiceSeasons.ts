import { exit } from "process";
import readline from "readline-sync";
import months from "./months";
import seasons from "./seasons";

const monthsNames = Object.values(months).
    map(item => item);

const choiceMonth = readline.keyInSelect(monthsNames, "Escolha um mês do ano", { cancel: "SAIR" });

if (choiceMonth === -1) {
    console.log("Saindo!");
    exit();
}

const seasonsSouth = {
    [seasons.Autumn]: [months.March, months.April, months.May, months.June],
    [seasons.Winter]: [months.July, months.July, months.August, months.September],
    [seasons.Spring]: [months.September, months.October, months.November, months.December],
    [seasons.Summer]: [months.December, months.January, months.February, months.March],
}

const seasonsNorth = {
    [seasons.Spring]: seasonsSouth[seasons.Autumn],
    [seasons.Summer]: seasonsSouth[seasons.Winter],
    [seasons.Autumn]: seasonsSouth[seasons.Spring],
    [seasons.Winter]: seasonsSouth[seasons.Summer],
}

const hemispheres = {
    "North": seasonsNorth,
    "South": seasonsSouth
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério", { cancel: "SAIR" });
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária

if (choiceHemisphere === -1) {
    console.log("Saindo!");
    exit();
}

const month = Object.values(months)[choiceMonth];

const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log(`Month: \n${month}`);
console.log(`Hemisphere: \n${hemisphere}`);
console.log(`Seasons:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere]
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
  
    if (months.includes(month)) console.log(seasons);
});