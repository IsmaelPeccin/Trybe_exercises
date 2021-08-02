let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  info["Recorrente"] = "Sim"; 

  for (let key in info){
      console.log(info[key])
  }
