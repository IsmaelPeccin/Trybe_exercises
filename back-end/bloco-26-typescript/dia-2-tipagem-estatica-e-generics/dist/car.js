"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.Doors = exports.Directions = exports.Color = void 0;
var Color;
(function (Color) {
    Color["BLACK"] = "preto";
    Color["RED"] = "vermelho";
    Color["WHITE"] = "branco";
    Color["SILVER"] = "prata";
})(Color = exports.Color || (exports.Color = {}));
var Directions;
(function (Directions) {
    Directions["LEFT"] = "Esquerda";
    Directions["RIGHT"] = "Direita";
})(Directions = exports.Directions || (exports.Directions = {}));
var Doors;
(function (Doors) {
    Doors["DRIVER"] = "porta do motorista";
    Doors["RIDE"] = "porta do carona";
    Doors["BEHIND_DRIVER"] = "porta atr\u00E1s do motorista";
    Doors["BEHIND_RIDE"] = "porta  atr\u00E1s do carona";
})(Doors = exports.Doors || (exports.Doors = {}));
class Car {
    constructor(brand, doors, color) {
        this.brand = brand;
        this.doors = doors;
        this.color = color;
    }
    honk() {
        console.log('Buzinando');
    }
    openTheDoor(door) {
        console.log(`Abrindo a  ${door}`);
    }
    closeTheDoor(door) {
        console.log(`Fechando a  ${door}`);
    }
    turnOff() {
        console.log('Desligando');
    }
    turnOn() {
        console.log('Ligando');
    }
    speedUp() {
        console.log('Acelerando o carro');
    }
    speedDown() {
        console.log('Reduzindo a velocidade do carro');
    }
    stop() {
        console.log('Estacionando o carro');
    }
    turn(directions) {
        console.log(`Virando para a ${directions}.`);
    }
}
exports.Car = Car;
