type Slices  = 4 | 6 | 8;

type Comum = "Calabresa" | "Frango" | "Pepperoni";
type Vegetariana = "Marguerita" | "Palmito" | "Cogumelos";
type Doce = "Nutela" | "Goiabada com Queijo" | "Marshmallow";


export interface Pizza {
  flavor: string;
  slices: Slices;
}

export interface PizzaComum extends Pizza {
  flavor: Comum;
  slices: Slices;
}

export interface PizzaVegetariana extends Pizza {
  flavor: Vegetariana;
  slices: Slices;
}

export interface PizzaDoce extends Pizza {
  flavor: Doce;
  slices: 4;
}
