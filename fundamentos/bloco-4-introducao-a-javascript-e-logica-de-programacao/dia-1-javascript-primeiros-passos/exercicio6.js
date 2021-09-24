let peçaXadrez = 'BISPO'; 



switch (peçaXadrez.toLowerCase()){
  case 'rei':
    console.log("move-se na vertical, horizontal e diagonal, uma casa por vez")
    break;

  case 'dama':
    console.log("move-se na vertical, horizontal e diagonal, quantas casas quiser")
    break;

  case 'torre':
    console.log("move-se em linha reta, na vertical e horizontal , quantas casas quiser")
    break; 
      
  case 'bispo':
    console.log("move-se na diagonal, quantas casas quiser")
    break;    
  case 'cavalo':
    console.log("move-se em 'L' ")
    break;  
  case 'Peão':
    console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas")
    break; 
      
  default:
    console.log("erro")
} 