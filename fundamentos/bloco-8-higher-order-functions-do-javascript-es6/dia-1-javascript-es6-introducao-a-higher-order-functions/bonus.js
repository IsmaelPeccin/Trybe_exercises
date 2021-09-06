const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

	// Parte I

// 1 - Crie uma função que retorna o dano do dragão.
//O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonDamage = (dragon) => Math.trunc(Math.random() * (50 -15 +1) + 15);


// 2 - Crie uma função que retorna o dano causado pelo warrior .
//O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDamage = (warrior) => {
const wStr = warrior.strength;
const weapon = warrior.weaponDmg;
const warriorDmg = Math.trunc(Math.random() * ((wStr * weapon) - wStr + 1) + wStr);
return warriorDmg; 
}

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
//O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
//A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const mageDamage = (mage) => {
	const maxDmg = mage.intelligence * 2; 
	const minDmg = mage.intelligence; 
	const mageMana = mage.mana;
	const turnResume = {
		manaSpent: 0, 
		mageDmg: 'Não possuí mana suficiente...',
	}
	if (mageMana > 15) {
		turnResume.mageDmg = Math.trunc(Math.random() * (maxDmg - minDmg +1) + minDmg);
		turnResume.manaSpent = 15;
		return turnResume;
	}
	return turnResume;
}

// Parte II

// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função.

// 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .

// 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

// 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.

// 4 -  Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.

 

const gameActions = {
  // Crie as HOFs neste objeto.
	warriorTurn: (warriorDamage) => {
		const warDamage = warriorDamage(warrior); 
		warrior.damage = warDamage;
		dragon.healthPoints -= warDamage; 
	},
	mageTurn: (mageDamage) => {
		const mageTurnStats = mageDamage(mage);
		const mageDam = mageTurnStats.mageDmg;
		mage.damage = mageDam;
		mage.mana -= mageTurnStats.manaSpent;
		dragon.healthPoints -= mageDam;
	},
	dragonTurn: (dragonDamage) => {
		const dragonAttack = dragonDamage(dragon); 
		dragon.damage = dragonAttack;
		mage.healthPoints -= dragonAttack; 
		warrior.healthPoints -= dragonAttack; 
	},
	turnResults: () => battleMembers,
};
gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage); 
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResults());
