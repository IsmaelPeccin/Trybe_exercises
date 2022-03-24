enum Color {
  BLACK = 'preto',
  RED = 'vermelho',
  WHITE = 'branco',
  SILVER = 'prata',
}

enum Directions {
  LEFT = "Esquerda",
  RIGHT = "Direita",
}

enum Doors {
  DRIVER = "porta do motorista",
  RIDE = "porta do carona",
  BEHIND_DRIVER = "porta atrás do motorista",
  BEHIND_RIDE = "porta  atrás do carona",
}


class Car {
  brand: string;
  color: Color; 
  doors: number; 
  
  constructor(brand: string, doors: number, color: Color) {
      this.brand  = brand;
      this.doors  = doors;
      this.color  = color;
  }

  honk(): void {
    console.log('Buzinando');
  }

  openTheDoor(door: Doors): void {
    console.log(`Abrindo a  ${door}`);
  } 

  closeTheDoor(door: Doors): void {
    console.log(`Fechando a  ${door}`);
  }
  
  turnOff(): void {
    console.log('Desligando')
  }

  turnOn(): void {
    console.log('Ligando')
  }

  speedUp(): void {
    console.log('Acelerando o carro')
  }

  speedDown(): void {
    console.log('Reduzindo a velocidade do carro')
  }

  stop(): void {
    console.log('Estacionando o carro')
  }

  turn(directions: Directions): void {
    console.log(`Virando para a ${ directions }.`);
  }

}

export default Car;