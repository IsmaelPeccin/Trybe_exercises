import { Pizza, PizzaComum, PizzaDoce, PizzaVegetariana } from "./pizza";

const Calabresa: Pizza = {
    flavor: "Calabresa",
    slices: 8
}

console.log(Calabresa);

const Marguerita: Pizza = {
    flavor: "Marguerita",
    slices: 6
}

console.log(Marguerita);


const nutela: Pizza = {
    flavor: "Nutela",
    slices: 4
}

console.log(nutela);

const calabresa: PizzaComum = {
    flavor: "Calabresa",
    slices: 6
}

console.log(calabresa);

const frango: PizzaComum = {
    flavor: "Frango",
    slices: 8
}

console.log(frango);

const pepperoni: PizzaComum = {
    flavor: "Pepperoni",
    slices: 6
}

console.log(pepperoni);

const marguerita: PizzaVegetariana = {
    flavor: "Marguerita",
    slices: 8
}

console.log(marguerita);

const palmito: PizzaVegetariana = {
    flavor: "Palmito",
    slices: 8
}

console.log(palmito);

const goiabadaEQueijo: PizzaDoce = {
    flavor: "Goiabada com Queijo",
    slices: 4
}

console.log(goiabadaEQueijo);