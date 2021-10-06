import React from "react";
import data from './data'; 
import Pokemons from "./Pokemons ";

class Pokedex extends React.Component {
  render() {
    return(
      data.map(element => <Pokemons card={element} />)
    );
  }
}

export default Pokedex
